"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CTA from "@/components/CTA";
import AgentBenefits from "@/components/AgentBenefits";

export default function AgentClient() {
  return (
    <main className="bg-[#F7F8FB] text-gray-800">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9EEF9] via-[#EFF2FA] to-transparent" />
        <div className="container relative max-w-7xl py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            {/* ภาพ */}
            <div className="relative order-2 md:order-1">
              <div className="relative h-[420px] md:h-[520px]">
                <Image
                  src="/images/agent-hero.png"
                  alt="สมัครตัวแทน Heath Planner"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* ฟอร์ม */}
            <div className="order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#325BBA]">
                สมัครเป็นตัวแทน Heath Planner
              </h1>
              <p className="mt-3 text-gray-600 leading-relaxed">
                เข้าร่วมทีมที่ปรึกษาทางการเงินมืออาชีพ พร้อมโอกาสเติบโตในสายงานที่มั่นคง
                ระบบฝึกอบรมครบ เครื่องมือดิจิทัลพร้อม ทีมพี่เลี้ยงดูแลใกล้ชิด
              </p>

              <Card className="mt-6 backdrop-blur bg-white/90 border-gray-200/70 shadow-md">
                <form className="p-5 md:p-6 grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="grid gap-2">
                      <span className="text-sm text-gray-700">ชื่อ - นามสกุล</span>
                      <Input placeholder="เช่น กิตติชัย ใจดี" required />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm text-gray-700">เบอร์ติดต่อ</span>
                      <Input placeholder="08x-xxx-xxxx" inputMode="tel" required />
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm text-gray-700">LINE ID</span>
                    <Input placeholder="เช่น @heathplanner" />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-gray-700">พื้นที่ที่อยู่ปัจจุบัน</span>
                    <Input placeholder="เขต/อำเภอ จังหวัด" />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm text-gray-700">เวลาที่สะดวกให้ติดต่อ</span>
                    <select className="h-10 rounded-md border border-gray-300 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA]">
                      <option value="">โปรดเลือกช่วงเวลา</option>
                      <option>เช้า (09:00–12:00)</option>
                      <option>บ่าย (12:00–16:00)</option>
                      <option>เย็น (16:00–19:00)</option>
                    </select>
                  </label>

                  <Button className="mt-2 bg-[#325BBA] hover:bg-[#274a9a] text-white font-semibold h-11">
                    ส่งข้อมูล สมัครตัวแทน
                  </Button>

                  <p className="text-xs text-gray-500">
                    * ทีมงานจะติดต่อกลับหลังได้รับข้อมูลแล้ว โดยข้อมูลจะถูกเก็บรักษาตามมาตรฐานความปลอดภัย
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY (2 แถว, auto marquee) ===== */}
	  <AgentBenefits />
      <ActivitiesGallery />

      {/* ===== VIDEO & CTA ===== */}
      <section className="py-14 md:py-16">
        <div className="container max-w-7xl grid md:grid-cols-2 items-center gap-8">
          <div className="aspect-video rounded-xl overflow-hidden shadow-md border border-gray-200/70 bg-white">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/rdNMF1bbkdc"
              title="DragonSheild Overview"
              allowFullScreen
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#325BBA]">DragonSheild TEAM</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              เราคือทีมที่ปรึกษาทางการเงินและตัวแทนคุณภาพ ผสานความเชี่ยวชาญด้านการวางแผน
              ความเข้าใจลูกค้า และเครื่องมือดิจิทัล เพื่อบริการที่ครบถ้วน รวดเร็ว และจริงใจ
            </p>
          </div>
        </div>
      </section>
	  {/* ============ STRUCTURE ============ */}
      <section className="py-14 md:py-16">
        <div className="container max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#325BBA]">โครงสร้างและผลตอบแทนตัวแทน</h2>
            <p className="text-gray-600 mt-1">
              เส้นทางการเติบโต ผลตอบแทน และสิทธิประโยชน์ที่ชัดเจน โปร่งใส
            </p>
          </div>

          <div className="grid gap-8 md:gap-10">
            <Figure src="/images/structure1.png" alt="โครงสร้างทีมงาน" />
            <Figure src="/images/structure2.png" alt="โครงสร้างผลประโยชน์ผู้บริหารตัวแทน" />
            <Figure src="/images/structure3.png" alt="โครงสร้างผลประโยชน์ตัวแทน" />
          </div>
        </div>
      </section>

      <CTA />

      {/* ==== CSS ฝังให้แน่ใจว่าทำงานทุกสภาพแวดล้อม ==== */}
      <style jsx global>{`
        .hp-marquee {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
        }
        .hp-track {
          display: inline-flex;
          gap: 20px;
          /* ทำสองชุดต่อกัน → ความกว้าง content 200% */
          width: max-content;
          animation: hp-scroll 28s linear infinite;
        }
        .hp-track.hp-reverse {
          animation-direction: reverse;
        }
        .hp-card {
          flex: none; /* คงความกว้างไว้ ไม่หด/ขยาย */
        }
        @keyframes hp-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </main>
  );
}

/* ---------- Subcomponents ---------- */

function ActivitiesGallery() {
  // ใช้รูป 8 ใบแรกในหน้า Agent
  const imgs = Array.from({ length: 8 }).map((_, i) => `/images/group${i + 1}.jpg`);
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#325BBA]">กิจกรรมทีมงาน</h2>
          <p className="text-gray-600 mt-1">
            บรรยากาศการทำงาน การเรียนรู้ และความสำเร็จร่วมกัน
          </p>
        </div>

        {/* แถวบน → วิ่งซ้าย */}
        <MarqueeRow images={imgs} reverse={false} />
        <div className="h-6" />
        {/* แถวล่าง → วิ่งขวา */}
        <MarqueeRow images={imgs} reverse />

        <div className="mt-8 text-center">
          <Link
            href="/activities/team"
            className="inline-flex items-center rounded-lg bg-[#325BBA] text-white px-5 py-2.5 font-semibold shadow hover:bg-[#274a9a]"
          >
            ดูรูปกิจกรรมทั้งหมด
          </Link>
        </div>
      </div>
    </section>
  );
}
/** รูปพร้อมกรอบและแคปชันรองรับ screen reader */
function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="rounded-xl overflow-hidden border border-gray-200/70 bg-white shadow-md">
      <div className="relative w-full h-[360px] md:h-[460px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-contain p-3 md:p-4"
        />
      </div>
      <figcaption className="sr-only">{alt}</figcaption>
    </figure>
  );
  }
function MarqueeRow({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  // ทำ 2 ชุดต่อกันเพื่อเลื่อนลื่น ๆ
  const list = [...images, ...images];
  return (
    <div className="hp-marquee w-full">
      <div className={`hp-track ${reverse ? "hp-reverse" : ""}`}>
        {list.map((src, i) => (
          <div key={i} className="hp-card">
            <div className="relative h-44 md:h-56 w-[340px] md:w-[380px] rounded-2xl overflow-hidden ring-1 ring-gray-200/70 shadow-sm bg-gray-100">
              <Image
                src={src}
                alt="กิจกรรมทีมงาน"
                fill
                sizes="380px"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
