// app/sitemap.ts
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.heathplanner.com"; // แก้เป็นโดเมนจริงของเก่ง

  return [
    { url: `${base}/`, changefreq: "weekly", priority: 1 },
    { url: `${base}/products/`, changefreq: "weekly", priority: 0.9 },
    { url: `${base}/blog/`, changefreq: "weekly", priority: 0.8 },
    { url: `${base}/contact/`, changefreq: "monthly", priority: 0.6 },
    // ...ถ้ามีเพจ/บทความอื่น เพิ่มได้
  ];
}
