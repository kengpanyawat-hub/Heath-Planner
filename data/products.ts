// src/data/products.ts
export type CoverageRow = { label: string; detail?: string; amount?: string };
export type PlanRow = { name: string; premium?: string; sumInsured?: string; age?: string; note?: string };
export type DownloadItem = { label: string; url: string };

export type Product = {
  id: string;                 // ใช้เป็นทั้ง id หรือ slug ก็ได้
  slug?: string;
  name: string;
  category: string;
  image?: string;
  badge?: string;
  summary?: string;
  description?: string;
  highlights?: string[];
  coverage?: CoverageRow[];
  plans?: PlanRow[];
  downloads?: DownloadItem[];
  seoTitle?: string;
  seoDescription?: string;
  updatedAt?: string;
};

// ---------------------------
// ข้อมูลสินค้า/แบบประกัน (18 รายการ)
// ---------------------------
export const products: Product[] = [
  // หมวด ประกันสุขภาพเหมาจ่าย
  {
    id: "sabaikrapao",
    name: "ปลดล็อก สบายกระเป๋า",
    category: "ประกันสุขภาพเหมาจ่าย",
    image: "/products/health-sabaikrapao.jpg",
    badge: "ประกันสุขภาพ",
    summary:
      "คุ้มครองค่ารักษาพยาบาลแบบเหมาจ่ายตามจริง วงเงินสูง เลือกวงเงินและโรงพยาบาลคู่สัญญาได้ยืดหยุ่น",
    highlights: [
      "IPD/OPD ครอบคลุม ผ่าตัด/ICU/อุบัติเหตุฉุกเฉิน",
      "วงเงินรวมต่อปีสูง เลือกแผนได้หลายระดับ",
      "เบี้ยนำไปลดหย่อนภาษีได้ตามเกณฑ์",
    ],
    coverage: [
      { label: "ผู้ป่วยใน (IPD)", detail: "ค่าห้องแพทย์ผ่าตัด ยา-เวชภัณฑ์", amount: "ตามจริง/วงเงินแผน" },
      { label: "ผู้ป่วยนอก (OPD)", detail: "ค่าตรวจ ค่ายา", amount: "ตามแผน" },
      { label: "ฉุกเฉินอุบัติเหตุ", detail: "ค่ารักษา-ห้อง ICU", amount: "ตามแผน" },
    ],
    updatedAt: "2025-10-29",
  },
  {
    id: "doublecare",
    name: "DoubleCare",
    category: "ประกันสุขภาพเหมาจ่าย",
    image: "/products/health-doublecare.jpg",
	badge: "ประกันสุขภาพ",
    summary:
      "เหมาจ่ายค่ารักษาตามจริง พร้อมคุ้มครองโรคร้ายแรงและค่ารักษาเฉพาะทาง เหมาะกับคนทำงานเมือง",
    highlights: [
      "วงเงินเหมาจ่ายก้อนใหญ่ ครอบคลุมกว้าง",
      "คุ้มครองโรคร้ายแรง/เคมีบำบัด/รังสีรักษา",
      "ปรับแผนง่าย เมื่อฐานรายได้เติบโต",
    ],
    updatedAt: "2025-10-29",
  },
  {
    id: "firstclass",
    name: "Firstclass",
    category: "ประกันสุขภาพเหมาจ่าย",
    image: "/products/health-firstclass.jpg",
	badge: "ประกันสุขภาพ",
    summary: "แผนสุขภาพพรีเมียม วงเงินสูง เลือกโรงพยาบาลเอกชนชั้นนำได้อย่างมั่นใจ",
    highlights: ["ค่าห้องระดับพรีเมียม", "ค่ารักษาตามจริงสูง", "บริการช่วยเหลือฉุกเฉิน 24 ชม."],
  },
  {
    id: "platinum",
    name: "Platinum",
    category: "ประกันสุขภาพเหมาจ่าย",
    image: "/products/health-platinum.jpg",
	badge: "ประกันสุขภาพ",
    summary: "เหมาะผู้บริหาร/เจ้าของกิจการ วงเงินสูงสุด ครอบคลุมการรักษาหลากหลาย",
    highlights: ["เหมาจ่ายสูงมาก", "โรคร้ายแรง/ผ่าตัดใหญ่", "บริการเคลมแบบ Cashless"],
  },

  // หมวด ประกันโรคร้ายแรง
  {
    id: "ci-48-beyond",
    name: "ประกันโรคร้าย 48 Beyond",
    category: "ประกันโรคร้ายแรง",
    image: "/products/ci-48-beyond.jpg",
	badge: "ประกันโรคร้ายแรง",
    summary: "คุ้มครองโรคร้ายแรงครอบคลุม 48 กลุ่มโรค จ่ายเงินก้อนเมื่อวินิจฉัย",
    highlights: ["เงินก้อนทันทีเมื่อเข้าข่าย", "ทำคู่ประกันสุขภาพได้", "เลือกระดับทุนได้หลายช่วง"],
  },
  {
    id: "ci-cancer-easy",
    name: "มะเร็งหายห่วง",
    category: "ประกันโรคร้ายแรง",
    image: "/products/ci-cancer.jpg",
	badge: "ประกันโรคร้ายแรง",
    summary: "โฟกัสมะเร็งโดยเฉพาะ เบี้ยคุ้ม จ่ายเงินก้อน พร้อมค่ารักษาต่อเนื่อง",
    highlights: ["ตรวจพบระยะไหนก็รับเงินก้อน", "เบี้ยเป็นมิตร", "ทำควบกับสุขภาพเพื่อลดช่องว่างความคุ้มครอง"],
  },
  {
    id: "ci-multi-care",
    name: "ประกันโรคร้าย มัลติ แคร์",
    category: "ประกันโรคร้ายแรง",
    image: "/products/ci-multi-care.jpg",
	badge: "ประกันโรคร้ายแรง",
    summary: "คุ้มครองโรคร้ายแรงแบบเคลมได้หลายครั้งตามเงื่อนไข เหมาะกับความเสี่ยงระยะยาว",
    highlights: ["เคลมได้หลายเหตุการณ์", "เงินก้อน/เงินชดเชย", "กำหนดทุนตามรายได้"],
  },

  // หมวด ประกันเงินออม
  {
    id: "my-double-plus",
    name: "My Double Plus",
    category: "ประกันเงินออม",
    image: "/products/saving-doubleplus.jpg",
	badge: "ประกันเงินออม",
    summary: "แผนออมระยะกลาง-ยาว ได้เงินคืนระหว่างทาง พร้อมความคุ้มครองชีวิต",
    highlights: ["เงินคืน + ครบสัญญารับเงินก้อน", "มีโอกาสปันผลตามเงื่อนไข", "เบี้ยลดหย่อนได้"],
  },
  {
    id: "mq-12-6",
    name: "MQ 12/6",
    category: "ประกันเงินออม",
    image: "/products/saving-mq126.jpg",
	badge: "ประกันเงินออม",
    summary: "ชำระเบี้ย 6 ปี คุ้มครอง/ออม 12 ปี เหมาะออมเป็นวินัย",
    highlights: ["ชำระสั้น", "เงินคืนตามงวด", "เหมาะวางแผนเงินก้อนกลางทาง"],
  },

  // หมวด ประกันบำนาญ
  {
    id: "my-pension-plus",
    name: "มาย บำนาญ พลัส",
    category: "ประกันบำนาญ",
    image: "/products/pension-plus.jpg",
	badge: "ประกันบำนาญ",
    summary: "สร้างรายได้ประจำหลังเกษียณ รับเงินเป็นรายปีแน่นอน พร้อมลดหย่อนภาษีบำนาญ",
    highlights: ["รับรายปี 55–90 ปี (ตามแผน)", "คุมกระแสเงินสดได้", "ลดหย่อนภาษีบำนาญได้"],
  },
  {
    id: "my-pension-five-a90-5",
    name: "มาย บำนาญ ไฟว์ A90/5",
    category: "ประกันบำนาญ",
    image: "/products/pension-five-a905.jpg",
	badge: "ประกันบำนาญ",
    summary: "ชำระสั้น 5 ปี วางแผนรับบำนาญยาวถึงอายุ 90 ตามเงื่อนไขแผน",
    highlights: ["จ่ายสั้น-รับยาว", "ออกแบบกระแสเงินสดได้", "สิทธิ์ภาษีบำนาญ"],
  },

  // หมวด ประกันควบการลงทุน
  {
    id: "mystyle-protect",
    name: "มายสไตล์ โพรเทค",
    category: "ประกันควบการลงทุน",
    image: "/products/ilp-protect.jpg",
	badge: "ประกันควบการลงทุน",
    summary: "คุ้มครองชีวิต + ลงทุนในกองทุนรวม เลือกสัดส่วนความเสี่ยงเองได้",
    highlights: ["สลับกองทุนได้", "เพิ่ม/ลดทุนยืดหยุ่น", "โปร่งใสค่าธรรมเนียม"],
  },
  {
    id: "mystyle-smartpay-15",
    name: "มายสไตล์ สมาร์ตเพย์ 15",
    category: "ประกันควบการลงทุน",
    image: "/products/ilp-smartpay15.jpg",
	badge: "ประกันควบการลงทุน",
    summary: "แผนลงทุนผสมคุ้มครอง ชำระเป็นงวด 15 ปี เหมาะสร้างทรัพย์สินระยะยาว",
    highlights: ["ดีไซน์เงินเข้าออกได้", "ตั้งเป้าหมายกองทุน", "รายงานมูลค่าโปร่งใส"],
  },
  {
    id: "mystyle-wealth-ultra-retire",
    name: "มายสไตล์ เวลท์ อัลตร้า (วางแผนเกษียณ)",
    category: "ประกันควบการลงทุน",
    image: "/products/ilp-wealth-ultra-retire.jpg",
	badge: "ประกันควบการลงทุน",
    summary: "โฟกัสเติบโตระยะยาวเพื่อวัยเกษียณ ปรับความเสี่ยงตามอายุ",
    highlights: ["DCA/ปรับพอร์ตอัตโนมัติ", "ค่าใช้จ่ายชัดเจน", "เลือกถอนเป็นรายปีได้"],
  },
  {
    id: "mystyle-wealth-ultra-kid",
    name: "มายสไตล์ เวลท์ อัลตร้า (วางแผนลูกรัก)",
    category: "ประกันควบการลงทุน",
    image: "/products/ilp-wealth-ultra-kid.jpg",
	badge: "ประกันควบการลงทุน",
    summary: "ลงทุน+คุ้มครองเพื่อเป้าหมายการศึกษา/กองทุนลูก",
    highlights: ["ตั้งเป้าออมการศึกษา", "โอนสิทธิ์/ผู้รับผลประโยชน์ยืดหยุ่น", "วินัยการออมชัด"],
  },

  // หมวด ประกันนิติบุคคล (Keyman)
  {
    id: "my-wealth-legacy",
    name: "My Wealth Legacy",
    category: "ประกันนิติบุคคล (Keyman)",
    image: "/products/keyman-legacy.jpg",
	badge: "ประกันนิติบุคคล",
    summary: "วางแผนคุ้มครองผู้บริหาร/หุ้นส่วนหลัก (Keyman) และการส่งต่อธุรกิจ",
    highlights: ["คุ้มครองความเสี่ยงธุรกิจ", "ใช้เป็นหลักทรัพย์/กู้ยืมได้ (ตามเงื่อนไข)", "ภาษี/บัญชีควรปรึกษาผู้เชี่ยวชาญ"],
  },

  // หมวด ประกันกลุ่ม
  {
    id: "group-employee-11up",
    name: "ประกันภัยกลุ่มสวัสดิการพนักงาน (11 คน ขึ้นไป)",
    category: "ประกันกลุ่ม",
    image: "/products/group-employee.jpg",
    badge: "ประกันกลุ่ม",
    summary: "คุ้มครองชีวิต อุบัติเหตุ และสุขภาพ สำหรับองค์กรที่ต้องการสวัสดิการพนักงาน",
    highlights: ["กำหนดสิทธิ์ตามตำแหน่ง/ระดับ", "คุมงบได้", "บริหารเคลมอย่างเป็นระบบ"],
  },
  {
    id: "group-pa2",
    name: "ประกันอุบัติเหตุ อยุธยาคุ้มครองอุบัติเหตุกลุ่ม (PA2)",
    category: "ประกันกลุ่ม",
    image: "/products/group-pa2.jpg",
	badge: "ประกันกลุ่ม",
    summary: "PA แบบกลุ่ม ครอบคลุมเสียชีวิต/สูญเสียอวัยวะ/ทุพพลภาพ พร้อมค่ารักษาอุบัติเหตุ",
    highlights: ["คุ้มครอง 24 ชั่วโมง", "เพิ่มวงเงินตามอาชีพเสี่ยงได้", "สมัครรวดเร็ว"],
  },
];

// ---------------------------
// Utilities
// ---------------------------
export function getProductByIdOrSlug(idOrSlug: string): Product | undefined {
  return products.find(
    (p) => p.id === idOrSlug || p.slug === idOrSlug
  );
}

export function generateParams() {
  return products.map((p) => ({ id: p.id }));
}
