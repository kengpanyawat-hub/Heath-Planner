import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  products,
  getProductByIdOrSlug,
  generateParams,
} from "@/data/products";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  // คืนพารามิเตอร์ทั้ง id และ slug เพื่อ build ล่วงหน้า
  return generateParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductByIdOrSlug(params.id);
  if (!product) return { title: "ไม่พบแบบประกัน" };

  const title =
    product.seoTitle || `${product.name} | HealthPlanner ประกันชีวิต/สุขภาพ`;
  const description =
    product.seoDescription ||
    product.summary ||
    "รายละเอียดความคุ้มครอง จุดเด่น แผนค่าเบี้ยและผลประโยชน์";
  const images = product.image ? [{ url: product.image }] : undefined;

  return {
    title,
    description,
    openGraph: { title, description, images, type: "article" },
    alternates: { canonical: `/products/${product.id}` },
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h2>
      <div className="rounded-2xl bg-white ring-1 ring-gray-200/70 shadow-sm p-5 sm:p-6">
        {children}
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 text-[#325BBA] px-3 py-1 text-xs font-medium ring-1 ring-inset ring-[#325BBA]/15">
      {children}
    </span>
  );
}

export default function ProductDetailPage({ params }: Props) {
  const product = getProductByIdOrSlug(params.id);
  if (!product) return notFound();

  return (
    <main className="pb-16">
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          <div>
            {product.badge && <Badge>{product.badge}</Badge>}
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>
            {product.category && (
              <div className="mt-2 text-sm text-gray-500">{product.category}</div>
            )}
            {product.summary && (
              <p className="mt-4 text-gray-700 leading-7">{product.summary}</p>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#325BBA] px-5 py-2.5 text-white font-medium shadow-[0_10px_26px_rgba(50,91,186,.35)] hover:bg-[#274a9a]"
              >
                ขอคำปรึกษาฟรี
              </a>
              <a
                href="https://lin.ee/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-medium ring-1 ring-inset ring-gray-300 text-gray-700 hover:bg-gray-50"
              >
                แชทผ่าน LINE
              </a>
            </div>
          </div>

          <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl ring-1 ring-gray-200/70 bg-gray-100">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 grid place-items-center text-gray-400">
                ไม่มีภาพปก
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      {product.description && (
        <Section title="รายละเอียด">
          <div className="prose prose-blue max-w-none leading-7">
            {product.description.split("\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Section>
      )}

      {/* HIGHLIGHTS */}
      {product.highlights?.length ? (
        <Section title="จุดเด่นผลิตภัณฑ์">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#325BBA] text-white text-xs">
                  ✓
                </span>
                <span className="text-gray-800">{h}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* COVERAGE */}
      {product.coverage?.length ? (
        <Section title="ความคุ้มครองหลัก">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-3 pr-4">รายการคุ้มครอง</th>
                  <th className="py-3 px-4">รายละเอียด</th>
                  <th className="py-3 pl-4 text-right">วงเงิน/ผลประโยชน์</th>
                </tr>
              </thead>
              <tbody>
                {product.coverage.map((c, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-100 text-gray-800 align-top"
                  >
                    <td className="py-3 pr-4 font-medium">{c.label}</td>
                    <td className="py-3 px-4">{c.detail || "-"}</td>
                    <td className="py-3 pl-4 text-right">{c.amount || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      {/* PLANS */}
      {product.plans?.length ? (
        <Section title="แผนประกัน / เบี้ยประกัน">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="py-3 pr-4">แผน</th>
                  <th className="py-3 px-4">เบี้ย</th>
                  <th className="py-3 px-4">ทุนประกัน</th>
                  <th className="py-3 px-4">อายุรับประกัน</th>
                  <th className="py-3 pl-4">หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                {product.plans.map((p, i) => (
                  <tr key={i} className="border-t border-gray-100 text-gray-800">
                    <td className="py-3 pr-4 font-medium">{p.name}</td>
                    <td className="py-3 px-4">{p.premium || "-"}</td>
                    <td className="py-3 px-4">{p.sumInsured || "-"}</td>
                    <td className="py-3 px-4">{p.age || "-"}</td>
                    <td className="py-3 pl-4">{p.note || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      {/* DOWNLOADS */}
      {product.downloads?.length ? (
        <Section title="เอกสารที่เกี่ยวข้อง">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.downloads.map((d, i) => (
              <li key={i}>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50"
                >
                  <span className="text-gray-800">{d.label}</span>
                  <span className="text-[#325BBA] text-sm">ดาวน์โหลด</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#325BBA] to-[#274a9a] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">สนใจ {product.name}</div>
            <p className="text-white/85 text-sm">
              ฝากข้อมูลสั้น ๆ แล้วทีมงานผู้เชี่ยวชาญจะติดต่อกลับอย่างรวดเร็ว
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white text-[#325BBA] px-5 py-2.5 font-semibold shadow hover:bg-blue-50"
            >
              ติดต่อเพื่อขอใบเสนอราคา
            </a>
            <a
              href="https://m.me/Healthplanner"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg ring-1 ring-inset ring-white/60 px-5 py-2.5 font-semibold hover:bg-white/10"
            >
              Messenger
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-4">
        <p className="text-xs text-gray-500">
          อัปเดตล่าสุด: {product.updatedAt || "—"}
        </p>
      </div>
    </main>
  );
}
