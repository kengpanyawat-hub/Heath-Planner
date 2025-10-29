// app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import posts from "@/data/posts.json";

export const metadata = { title: "บทความ" };

export default function BlogListPage() {
  const list = (Array.isArray(posts) ? posts : []) as any[];

  return (
    <div className="section">
      <div className="container max-w-7xl">
        <h1 className="text-center ext-3xl md:text-4xl font-semibold mb-2">บทความ</h1>
        <p className="text-center text-gray-600 mb-8">ความรู้ประกันชีวิต สุขภาพ อุบัติเหตุ ภาษี ฯลฯ</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-2xl border border-gray-200/60 bg-white shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.category && (
                  <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow">
                    {p.category}
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary line-clamp-2 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3 flex-1">{p.excerpt}</p>
                <div className="mt-4 text-sm font-medium text-primary group-hover:underline">อ่านต่อ →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
