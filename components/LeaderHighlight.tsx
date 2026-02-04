// components/LeaderHighlight.tsx
"use client";

import Image from "next/image";

export default function LeaderHighlight() {
  return (
    <section id="leader" className="bg-white py-14 md:py-16">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ชื่อ + ตำแหน่ง */}
        <header className="mb-6">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            คุณปาณฉัตร ลิ้มประสิทธิศักดิ์
          </h2>
          <p className="text-center mt-1 text-sm md:text-base text-gray-600">
            ระดับ APFinSA Award
          </p>
        </header>

        {/* แถวรูป 3 ใบ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <Figure src="/images/leader/1.jpg" alt="รับรางวัล" />
          <Figure src="/images/leader/2.jpg" alt="รับรางวัล" />
          <Figure src="/images/leader/3.jpg" alt="รับรางวัล" />
        </div>

        {/* เนื้อหา 1 */}
		<div className="text-center">
        <Paragraph>
          เริ่มต้นจากสายงานที่ปรึกษาการเงินด้วยความมุ่งมั่น สะสมผลงานต่อเนื่องจนก้าวสู่ตำแหน่งบริหาร
          มุ่งทำงานด้วยความซื่อสัตย์ และใส่ใจผลลัพธ์ของลูกค้าเป็นสำคัญ
          พร้อมพัฒนาทีมให้เติบโตอย่างยั่งยืน
        </Paragraph>
		</div>

        {/* แถวรูป 3 ใบ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <Figure src="/images/leader/4.jpg" alt="เวทีกิจกรรมใหญ่" />
          <Figure src="/images/leader/5.jpg" alt="เวทีกิจกรรมใหญ่" />
		      <Figure src="/images/leader/6.jpg" alt="เวทีกิจกรรมใหญ่" />
        </div>

        {/* เนื้อหา 3 */}
		<div className="text-center">
        <Paragraph>
          พาทีมงานผ่านเกณฑ์มาตรฐานระดับนานาชาติ MDRT หลายสมัย
          พร้อมพัฒนาความรู้วิชาชีพอย่างต่อเนื่อง ดูแลลูกค้ากว่า 1,000 ครอบครัว พร้อมแผนคุ้มครองและการวางแผนภาษีครบวงจร
        </Paragraph>
		</div>

        {/* แถวรูป 3 ใบ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <Figure src="/images/leader/7.jpg" alt="รับเกียรติบัตร" />
          <Figure src="/images/leader/8.jpg" alt="รับเกียรติบัตร" />
		      <Figure src="/images/leader/9.jpg" alt="รับเกียรติบัตร" />
        </div>

        {/* เนื้อหา 3 */}
		<div className="text-center">
        <Paragraph>
          เราเชื่อในพลังของทีมเวิร์คและการให้คำปรึกษาที่จริงใจ
          ทุกแผนการเงินต้องใช้งานได้จริงในชีวิตลูกค้า เกิดผลลัพธ์และความอุ่นใจในระยะยาว
          พร้อมยกระดับมาตรฐานบริการให้เป็นมืออาชีพในทุกขั้นตอน
        </Paragraph>
		</div>
        {/* แถวรูป 3 ใบ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <Figure src="/images/leader/10.jpg" alt="รับเกียรติบัตร" />
          <Figure src="/images/leader/11.jpg" alt="รับเกียรติบัตร" />
		      <Figure src="/images/leader/12.jpg" alt="รับเกียรติบัตร" />
        </div>

        {/* เนื้อหา 3 */}
		<div className="text-center">
        <Paragraph>
        ความสำเร็จในระดับ Professional Producer มาจากความใส่ใจในทุกเคส 
        พร้อมผลลัพธ์การทำงานที่ชัดเจน ทั้งคุณภาพงาน บริการ และผลประโยชน์ที่ลูกค้าได้รับ
        คือแรงผลักดันสำคัญของเรา
        </Paragraph>
		</div>

        {/* รางวัล/คุณวุฒิ */}
        <div className="mt-8">
          <h3 className="text-lg md:text-xl font-bold text-gray-900">
            คุณวุฒิและรางวัลที่ได้รับ
          </h3>
          <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
            <li>คุณวุฒิ MDRT (Million Dollar Round Table)</li>
            <li>รางวัลยอดขายและการบริหารทีมระดับองค์กรหลายสมัย</li>
            <li>ตัวแทนระดับ Diamond</li>
            <li>คุณวุฒิ APFinSa Awards</li>
            <li>ผู้บริหาร SUPER ELITE</li>
          </ul>

          <div className="center mt-5 flex flex-wrap items-center gap-6">
            <Logo src="/images/logos/mdrt.avif" alt="MDRT" w={84} h={60} />
            <Logo src="/images/logos/tnqa.avif" alt="TNOA" w={110} h={50} />
            <Logo src="/images/logos/apfinsa.png" alt="apfinsa" w={120} h={100} />
            <Logo src="/images/logos/allianz-elite.png" alt="allianz-elite" w={120} h={100} />
          </div>
        </div>

        {/* JSON-LD เพื่อ SEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ปาณฉัตร ลิ้มประสิทธิศักดิ์",
              jobTitle: "ระดับ APFinSA Award",
              worksFor: { "@type": "Organization", name: "Health Planner" },
              award: ["MDRT", "FChFP"],
              url: "https://www.heathplanner.com/",
              image: "/images/leader/portrait.jpg",
            }),
          }}
        />
      </div>
    </section>
  );
}

/* ---------- Small Pieces ---------- */
function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-700 leading-relaxed mb-3">{children}</p>;
}

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-[240px] md:h-[260px] rounded-xl overflow-hidden ring-1 ring-gray-200/70 bg-gray-100">
      <Image src={src} alt={alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
    </div>
  );
}

function Logo({ src, alt, w, h }: { src: string; alt: string; w: number; h: number }) {
  return (
    <div className="relative" style={{ width: w, height: h }}>
      <Image src={src} alt={alt} fill sizes={`${w}px`} className="object-contain" />
    </div>
  );
}
