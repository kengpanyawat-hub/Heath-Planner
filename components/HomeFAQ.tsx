"use client";

import React from "react";

/** เปลี่ยนชุดคำถาม/คำตอบได้ที่ตัวแปร faqs ด้านล่าง */
const faqs = [
  {
    q: "ประกันชีวิตกับประกันสุขภาพต่างกันอย่างไร?",
    a: "ประกันชีวิตคุ้มครองกรณีเสียชีวิต/ทุพพลภาพตามทุนประกัน ขณะที่ประกันสุขภาพคุ้มครองค่ารักษาพยาบาลผู้ป่วยใน/ผู้ป่วยนอก/อุบัติเหตุ รวมถึงสัญญาเพิ่มเติมเฉพาะโรค (ขึ้นกับแผนที่เลือก)"
  },
  {
    q: "เบี้ยประกันชีวิตและสุขภาพลดหย่อนภาษีได้ไหม?",
    a: "โดยทั่วไปเบี้ยประกันชีวิตลดหย่อนได้สูงสุด 100,000 บาท และเบี้ยสุขภาพลดหย่อนได้สูงสุด 25,000 บาท (รวมกันไม่เกิน 100,000 บาท) ทั้งนี้ให้ยึดเกณฑ์กรมสรรพากรปีภาษีนั้น ๆ"
  },
  {
    q: "ซื้อประกันต้องตรวจสุขภาพไหม?",
    a: "บางแผนไม่ต้องตรวจ/ไม่ต้องตอบคำถามสุขภาพ แต่บางแผนจำเป็นต้องตอบแบบประเมินหรือส่งตรวจตามวงเงิน/อายุ ทั้งนี้บริษัทจะพิจารณาตามเกณฑ์รับประกัน"
  },
  {
    q: "เคลมยังไง ใช้บัตร/เอกสารอะไร?",
    a: "แผนสุขภาพส่วนใหญ่สามารถรูดบัตรที่โรงพยาบาลเครือข่ายได้ทันที หากเป็นเคลมสด/ต่างเครือข่ายใช้ใบเสร็จ/เวชระเบียน/แบบฟอร์มเรียกร้องค่าสินไหมตามที่บริษัทกำหนด"
  },
  {
    q: "เลือกทุนประกันเท่าไรดี?",
    a: "พิจารณาจากรายได้ ภาระหนี้ และเป้าหมายทางการเงิน (เช่น ดูแลครอบครัว X ปี) โดยมักแนะนำทุนชีวิตประมาณ 10–20 เท่าของรายได้ต่อปี และปรับตามความจำเป็นจริง"
  },
  {
    q: "ออม/สะสมทรัพย์ต่างจากลงทุนอย่างไร?",
    a: "ประกันสะสมทรัพย์เน้นความแน่นอน รับเงินตามตารางและคุ้มครองชีวิต ส่วนลงทุนเน้นผลตอบแทนที่ผันผวนกว่า ควรกระจายความเสี่ยงให้เหมาะกับเป้าหมายและระยะเวลา"
  },
  {
    q: "เปลี่ยนแผน/เพิ่มสัญญาเพิ่มเติมภายหลังได้ไหม?",
    a: "ส่วนใหญ่ทำได้ โดยบริษัทจะพิจารณาตามเงื่อนไข อายุ สุขภาพ และตารางผลประโยชน์ของแผนนั้น ๆ"
  },
  {
    q: "จ่ายเบี้ยไม่ตรงเวลา/ขาดชำระจะเป็นอย่างไร?",
    a: "ภายในระยะผ่อนผันกรมธรรม์ยังคุ้มครอง เมื่อพ้นระยะผ่อนผันแล้วความคุ้มครองอาจสิ้นผลหรือเปลี่ยนสถานะตามมูลค่าเวนคืน แนะนำตั้งตัดบัญชี/บัตรเครดิตอัตโนมัติ"
  }
];

export default function HomeFAQ() {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="container max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#325BBA]">
            คำถามที่พบบ่อย (FAQ)
          </h2>
          <p className="text-gray-600 mt-1">
            รวมคำตอบที่ลูกค้าถามบ่อยเกี่ยวกับการประกันและการใช้สิทธิ์
          </p>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200/70 bg-white shadow-sm">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group open:bg-[#F7F8FB] transition"
            >
              <summary
                className="list-none cursor-pointer px-5 md:px-7 py-4 md:py-5 flex items-start gap-3 md:gap-4 select-none"
                aria-expanded="false"
              >
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#325BBA] text-white text-xs font-semibold">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-gray-900 group-open:text-[#325BBA]">
                  {item.q}
                </h3>
                <span className="ml-auto text-gray-400 transition group-open:rotate-45">
                  {/* ไอคอน + */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 md:px-7 pb-5 -mt-2 text-gray-700 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* JSON-LD สำหรับ SEO: FAQPage */}
      <script
        type="application/ld+json"
        // สร้างโครง FAQPage จากชุดคำถามด้านบน
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a }
            }))
          })
        }}
      />
    </section>
  );
}
