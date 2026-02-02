// /lib/metadata.ts
import type { Metadata } from "next";

/* ------------------------ Site-wide config ------------------------ */
export const siteConfig = {
  siteName: "Health Planner",
  brand: "อลิอันซ์ อยุธยา",
  domain: "https://www.healthplanner.com",
  locale: "th_TH",
  twitter: "@healthplanner",
  logo: "/logo.png",
  defaultOg: "/og/default.jpg", // 1200x630
  contact: {
    phone: "+66-81-578-9955",
    lineId: "panachat.limp",
    email: "support@healthplanner.com",
  },
  person: {
    name: "ปาณฉัตร ลิ้มประสิทธิ์กุลี",
    jobTitle: "ตัวแทนประกันชีวิต อลิอันซ์ อยุธยา",
    phone: "+66-81-578-9955",
    line: "panachat.limp",
    page: "/agent",
  },
  social: {
    facebook: "https://www.facebook.com/healthplanner",
    line: "https://line.me/ti/p/~panachat.limp",
  },
};

const abs = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.domain}${path}`;

/* ------------------------ Builder ------------------------ */
export type BuildMetaInput = {
  title: string;
  description: string;
  path: string; // e.g. "/products"
  image?: string; // e.g. "/og/products.jpg"
  keywords?: string[];
};

export function buildMeta({
  title,
  description,
  path,
  image,
  keywords = [],
}: BuildMetaInput): Metadata {
  const url = abs(path);
  const og = image ? abs(image) : abs(siteConfig.defaultOg);
  const fullTitle = `${title} | ${siteConfig.siteName}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    keywords,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: og, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      title: fullTitle,
      description,
      images: [og],
    },
    icons: { icon: abs(siteConfig.logo) },
    metadataBase: new URL(siteConfig.domain),
  };
}

/* ------------------------ Page metadata (ready to use) ------------------------ */
export const seo = {
  home: buildMeta({
    title: "วางแผนประกันชีวิต สุขภาพ ออม บำนาญ และภาษี",
    description:
      "Health Planner ที่ปรึกษาประกันชีวิตและการเงิน ช่วยออกแบบความคุ้มครองสุขภาพ ออมระยะยาว บำนาญ และวางแผนลดหย่อนภาษีสำหรับบุคคล/นิติบุคคล โดยทีมมืออาชีพจากอลิอันซ์ อยุธยา",
    path: "/",
    image: "/og/og.jpg",
    keywords: [
      "ประกันชีวิต",
      "ประกันสุขภาพ",
      "ประกันบำนาญ",
      "ประกันออม",
      "ลดหย่อนภาษี",
      "ที่ปรึกษาประกัน",
      "อลิอันซ์ อยุธยา",
      "Health Planner",
    ],
  }),

  products: buildMeta({
    title: "สมัครเป็นตัวแทนประกันชีวิต (อลิอันซ์ อยุธยา)",
    description:
      "Health Planner ที่ปรึกษาประกันชีวิตและการเงิน ช่วยออกแบบความคุ้มครองสุขภาพ ออมระยะยาว บำนาญ และวางแผนลดหย่อนภาษีสำหรับบุคคล/นิติบุคคล โดยทีมมืออาชีพจากอลิอันซ์ อยุธยา",
    path: "/products",
    image: "/og/og.jpg",
    keywords: [
	  "สมัครตัวแทนประกันชีวิต",
      "Health Planner",
      "อลิอันซ์ อยุธยา",
      "รายได้ตัวแทน",
      "แบบประกัน",
      "ประกันสุขภาพเหมาจ่าย",
      "ประกันโรคร้ายแรง",
      "ประกันออม",
      "ประกันบำนาญ",
      "อลิอันซ์ อยุธยา",
    ],
  }),

  groupInsurance: buildMeta({
    title: "ประกันกลุ่มสวัสดิการพนักงาน",
    description:
      "ออกแบบประกันกลุ่มสวัสดิการพนักงาน ครอบคลุมสุขภาพและอุบัติเหตุ ปรับแผนตามงบประมาณและจำนวนพนักงาน พร้อมบริการเคลมและดูแลหลังขาย",
    path: "/group-insurance",
    image: "/og/og.jpg",
    keywords: ["ประกันกลุ่ม", "สวัสดิการพนักงาน", "ประกันพนักงาน", "อลิอันซ์ อยุธยา"],
  }),

  blog: buildMeta({
    title: "บทความความรู้การเงินและประกัน",
    description:
      "อัปเดตความรู้เรื่องประกัน การวางแผนภาษี การออม และบำนาญ อ่านง่าย ใช้ได้จริง ช่วยวางแผนชีวิตอย่างมีเป้าหมาย",
    path: "/blog",
    image: "/og/og.jpg",
    keywords: ["บทความประกัน", "วางแผนภาษี", "วางแผนการเงิน", "ความรู้ประกัน"],
  }),

  contact: buildMeta({
    title: "ติดต่อเรา",
    description:
      "ติดต่อ Health Planner เพื่อปรึกษาแผนประกันชีวิต สุขภาพ ออม บำนาญ และประกันกลุ่ม โทร 081-578-9955 หรือ Line: panachat.limp",
    path: "/contact",
    image: "/og/og.jpg",
    keywords: ["ติดต่อประกัน", "ที่ปรึกษาประกัน", "Health Planner", "อลิอันซ์ อยุธยา"],
  }),

  agent: buildMeta({
    title: "สมัครเป็นตัวแทนประกันชีวิต (อลิอันซ์ อยุธยา)",
    description:
      "สมัครเป็นตัวแทนประกันชีวิตกับ Health Planner สร้างรายได้มั่นคง พร้อมทีมพี่เลี้ยงคุณปาณฉัตร สอนครบเรื่องประกันชีวิต สุขภาพ ออม บำนาญ และภาษี Line: panachat.limp โทร 081-578-9955",
    path: "/agent",
    image: "/og/og.jpg",
    keywords: [
      "สมัครตัวแทนประกันชีวิต",
      "Health Planner",
      "อลิอันซ์ อยุธยา",
      "รายได้ตัวแทน",
      "ทีมพี่เอ๊ะ ปาณฉัตร",
    ],
  }),

  privacy: buildMeta({
    title: "นโยบายความเป็นส่วนตัว (Privacy Policy)",
    description:
      "นโยบายความเป็นส่วนตัวของ Health Planner อธิบายการเก็บ ใช้ เปิดเผย และปกป้องข้อมูลส่วนบุคคล ตามกฎหมาย PDPA",
    path: "/privacy",
    image: "/og/og.jpg",
    keywords: ["นโยบายความเป็นส่วนตัว", "PDPA", "Privacy Policy"],
  }),

  terms: buildMeta({
    title: "ข้อกำหนดการใช้งาน (Terms of Service)",
    description:
      "ข้อกำหนดและเงื่อนไขการใช้งานเว็บไซต์ Health Planner เพื่อความปลอดภัยและประสบการณ์ที่ดีของผู้ใช้",
    path: "/terms",
    image: "/og/og.jpg",
    keywords: ["ข้อกำหนดการใช้งาน", "Terms of Service"],
  }),

  sitemap: buildMeta({
    title: "แผนผังเว็บไซต์ (Sitemap)",
    description:
      "แผนผังเว็บไซต์ Health Planner รวมลิงก์สำคัญทุกหน้าเพื่อให้ค้นหาข้อมูลได้ง่ายและรวดเร็ว",
    path: "/sitemap",
    image: "/og/og.jpg",
    keywords: ["Sitemap", "แผนผังเว็บไซต์"],
  }),

  about: buildMeta({
    title: "เกี่ยวกับเรา",
    description:
      "รู้จัก Health Planner ทีมที่ปรึกษาทางการเงินและประกันจาก อลิอันซ์ อยุธยา มุ่งมั่นให้คำปรึกษาที่ซื่อสัตย์ โปร่งใส และได้ผลลัพธ์จริง",
    path: "/about",
    image: "/og/og.jpg",
    keywords: ["เกี่ยวกับ Health Planner", "ทีมตัวแทนประกัน", "อลิอันซ์ อยุธยา"],
  }),
};

/* ------------------------ JSON-LD helpers ------------------------ */

// องค์กร
export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.siteName,
  url: siteConfig.domain,
  logo: abs(siteConfig.logo),
  sameAs: [siteConfig.social.facebook, siteConfig.social.line],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: ["Thai"],
    },
  ],
});

// บุคคล (ที่หน้า /agent)
export const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.person.name,
  jobTitle: siteConfig.person.jobTitle,
  telephone: siteConfig.person.phone,
  url: abs(siteConfig.person.page),
  sameAs: [siteConfig.social.line],
});

// Breadcrumb – ใช้ในทุกหน้าที่มีลำดับ
export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
