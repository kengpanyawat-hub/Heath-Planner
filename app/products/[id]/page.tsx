// app/products/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductByIdOrSlug, generateParams } from "@/data/products";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  // ให้ Next สร้างเส้นทางล่วงหน้าทุกชิ้น (รองรับ output: 'export')
  return generateParams();
}

export async function generateMetadata({ params }: Props) {
  const p = getProductByIdOrSlug(params.id);
  if (!p) return {};
  return {
    title: p.seoTitle ?? `${p.name} | Heath Planner`,
    description:
      p.seoDescription ??
      p.summary ??
      `รายละเอียดแผน ${p.name} โดย Heath Planner ตัวแทนประกัน`,
  };
}

export default function ProductDetailPage({ params }: Props) {
  const p = getProductByIdOrSlug(params.id);
  if (!p) return notFound();

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      {/* breadcrumb แบบง่าย */}
      <nav className="text-sm text-gray-500">
        <a href="/products" className="hover:text-[#325BBA]">แบบประกัน</a>
        <span className="mx-2">/</span>
        <a href={`/products?cat=${encodeURIComponent(p.category)}`} className="hover:text-[#325BBA]">
          {p.category}
        </a>
      </nav>

      {/* ชื่อ + หมวด */}
      <div className="mt-3 flex items-center gap-3">
        <span className="inline-flex items-center rounded-full bg-blue-50 text-[#325BBA] px-3 py-1 text-xs font-medium ring-1 ring-inset ring-[#325BBA]/15">
          {p.category}
        </span>
        {p.badge && (
          <span className="inline-flex items-center rounded-full bg-rose-500/90 text-white px-2.5 py-0.5 text-[11px]">
            {p.badge}
          </span>
        )}
      </div>
      <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
        {p.name}
      </h1>
      {p.summary && <p className="mt-2 text-gray-700">{p.summary}</p>}

      {/* hero */}
      <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden rounded-2xl ring-1 ring-gray-200/70 bg-gray-100">
        {p.image && (
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Highlights */}
      {p.highlights?.length ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">จุดเด่นแผน</h2>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
            {p.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#325BBA] text-white text-xs">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Coverage table */}
      {p.coverage?.length ? (
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">ความคุ้มครองหลัก</h2>
          <div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-gray-200">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">รายการ</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-700">รายละเอียด</th>
                  <th className="px-4 py-2 text-right font-medium text-gray-700">วงเงิน</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {p.coverage.map((c, i) => (
                  <tr key={i}>
                    <td className="px-4 py-2 font-medium text-gray-900">{c.label}</td>
                    <td className="px-4 py-2 text-gray-700">{c.detail ?? "-"}</td>
                    <td className="px-4 py-2 text-right text-gray-900">{c.amount ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="mt-10">
        <div className="rounded-2xl bg-gradient-to-r from-[#325BBA] to-[#274a9a] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">สนใจ {p.name}</div>
            <p className="text-white/85 text-sm">
              ฝากข้อมูลให้ทีม Heath Planner แนะนำความคุ้มครองและประมาณเบี้ยตามงบของคุณ
            </p>
          </div>
          <div className="flex gap-3">
            <a href={`/contact?topic=${encodeURIComponent(p.name)}`} className="inline-flex items-center rounded-lg bg-white text-[#325BBA] px-5 py-2.5 font-semibold shadow hover:bg-blue-50">
              ขอคำปรึกษา/ใบเสนอราคา
            </a>
            <a href="/products" className="inline-flex items-center rounded-lg ring-1 ring-inset ring-white/60 px-5 py-2.5 font-semibold hover:bg-white/10">
              ดูแบบประกันอื่น ๆ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
