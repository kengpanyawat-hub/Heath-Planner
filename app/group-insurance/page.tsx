// app/group-insurance/page.tsx
import Image from "next/image";
import { products } from "@/data/products";
import { seo } from "@/lib/metadata";

export const metadata = seo.products;

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

export default function GroupInsurancePage() {
  const groupItems = products.filter((p) => p.category === "ประกันกลุ่ม");

  return (
    <main className="pb-16">
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 text-[#325BBA] px-3 py-1 text-xs font-medium ring-1 ring-inset ring-[#325BBA]/15">
              ประกันกลุ่ม
            </span>
            <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              ประกันกลุ่มสวัสดิการพนักงาน — ดูแลทีมงาน เสริมภาพลักษณ์มืออาชีพ
            </h1>
            <p className="mt-3 text-gray-700 leading-7">
              วางสวัสดิการที่ “คุ้มครองจริง ใช้งบคุ้มค่า” ครอบคลุมชีวิต อุบัติเหตุ
              ผู้ป่วยใน/ผู้ป่วยนอก และโรคร้ายแรง ปรับระดับสิทธิ์ตามตำแหน่ง-แผนกได้
              Heath Planner ช่วยออกแบบแผนที่เหมาะกับงบขององค์กรคุณ
            </p>
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
            <Image
              src="/products/group-employee.jpg"
              alt="ประกันกลุ่มสวัสดิการพนักงาน"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* จุดเด่น */}
      <Section title="ทำไมองค์กรควรทำประกันกลุ่ม">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
          {[
            "ช่วยดึงดูดและรักษาบุคลากรคุณภาพ เพิ่มความผูกพันกับองค์กร",
            "ปรับระดับสิทธิ์ตามตำแหน่ง/อายุงานได้ภายในกรมธรรม์เดียว",
            "คุมงบประมาณรวมต่อปีได้ ชัดเจน บริหารเคลมอย่างเป็นระบบ",
            "ครอบคลุมชีวิต อุบัติเหตุ ผู้ป่วยใน/นอก และโรคร้ายแรง (ตามแผน)",
          ].map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#325BBA] text-white text-xs">
                ✓
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* ขั้นตอนเริ่มต้น */}
      <Section title="เริ่มต้นอย่างไร">
        <ol className="list-decimal pl-5 space-y-2 text-gray-800">
          <li>กำหนดจำนวนพนักงานและงบประมาณรวมต่อปี/ต่อคน</li>
          <li>กำหนดโครงสร้างสิทธิ์ตามตำแหน่ง/ระดับ (Base + Special)</li>
          <li>เลือกความคุ้มครอง: ชีวิต/อุบัติเหตุ/IPD/OPD/โรคร้ายแรง ตามความจำเป็น</li>
          <li>ส่งข้อมูลให้ Heath Planner เปรียบเทียบหลายบริษัทและเสนอแพ็กเกจ</li>
        </ol>
      </Section>

      {/* การ์ดแบบแผนที่เกี่ยวข้อง */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
          แผนยอดนิยมสำหรับองค์กร
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {groupItems.map((p) => (
            <a
              key={p.id}
              href={`/products/${p.id}`}
              className="group rounded-2xl overflow-hidden ring-1 ring-gray-200/70 bg-white hover:shadow-md transition"
            >
              <div className="relative aspect-[16/11] bg-gray-100">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500">{p.category}</div>
                <h3 className="mt-1 text-base/6 font-semibold text-gray-900 group-hover:text-[#325BBA]">
                  {p.name}
                </h3>
                {p.summary ? (
                  <p className="mt-2 text-sm text-gray-700 line-clamp-2">{p.summary}</p>
                ) : null}
                <div className="mt-3 text-sm font-medium text-[#325BBA]">
                  ดูรายละเอียด →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#325BBA] to-[#274a9a] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="text-lg font-semibold">เริ่มออกแบบสวัสดิการองค์กรของคุณ</div>
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
              href="https://m.me/heathplanner"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg ring-1 ring-inset ring-white/60 px-5 py-2.5 font-semibold hover:bg-white/10"
            >
              Messenger
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
