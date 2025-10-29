'use client';

import productsData from '@/data/products.json';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';

type Product = {
  id: number | string;
  title: string;
  category: string;
  excerpt?: string;
  highlights?: string[];
  cover?: string;     // แนะนำใช้คีย์นี้
  image?: string;     // เผื่อโค้ดเก่าเคยใช้ image
};

export default function ProductGrid({
  items,
  filterable = false,
}: {
  items?: Product[];
  filterable?: boolean;
}) {
  // ใช้รายการที่ส่งเข้ามา ถ้าไม่มีก็ใช้จากไฟล์
  const data = items ?? (productsData as Product[]);

  // สร้างชุดหมวดหมู่จาก "ข้อมูลที่ใช้งานจริง"
  const categories = useMemo(
    () => ['ทั้งหมด', ...Array.from(new Set(data.map((p) => p.category)))],
    [data],
  );

  const [active, setActive] = useState<string>('ทั้งหมด');

  const list = useMemo(() => {
    const base = data;
    return active === 'ทั้งหมด'
      ? base
      : base.filter((p) => p.category === active);
  }, [active, data]);

  return (
    <div className="max-w-7xl mx-auto">
      {filterable && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={[
                'px-3 py-1.5 rounded-full border text-sm transition',
                active === c
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'border-gray-300 hover:border-primary hover:text-primary',
              ].join(' ')}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => {
          // เลือกพาธรูป: cover > image > /products/{id}.jpg > placeholder
          const fallbackFromId =
            typeof p.id !== 'undefined' ? `/product/${p.id}.jpg` : undefined;
          const src =
            p.cover ||
            p.image ||
            fallbackFromId ||
            '/images/placeholder-product.jpg';

          return (
            <Link key={p.id} href={`/product/${p.id}`} className="group">
              <article className="overflow-hidden rounded-2xl border border-gray-200/70 bg-white shadow-sm hover:shadow-md transition flex flex-col">
                {/* รูปด้านบน */}
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={src}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute top-3 left-3 text-xs bg-primary/90 text-white px-3 py-1.5 rounded-full shadow">
                    {p.category}
                  </div>
                </div>

                {/* เนื้อหา */}
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition line-clamp-2">
                    {p.title}
                  </h3>
                  {p.excerpt ? (
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {p.excerpt}
                    </p>
                  ) : p.highlights?.length ? (
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                      {p.highlights[0]}
                    </p>
                  ) : null}
                  <span className="mt-3 text-sm font-medium text-primary group-hover:underline">
                    อ่านต่อ →
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
