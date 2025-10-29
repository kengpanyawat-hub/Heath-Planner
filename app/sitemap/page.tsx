// /app/sitemap/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "แผนผังเว็บไซต์ | Heath Planner",
  description:
    "แผนผังเว็บไซต์ Heath Planner เพื่อให้ง่ายต่อการค้นหาหน้าและเนื้อหาทั้งหมดในเว็บไซต์ของเรา",
};

export default function SitemapPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        แผนผังเว็บไซต์ (Sitemap)
      </h1>

      <p className="mb-6">
        สำรวจทุกหน้าบนเว็บไซต์ Heath Planner ได้จากแผนผังด้านล่างนี้
        เพื่อให้คุณเข้าถึงข้อมูลได้สะดวกและรวดเร็ว
      </p>

      <ul className="space-y-3">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            หน้าแรก
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-blue-600 hover:underline">
            เกี่ยวกับเรา
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-blue-600 hover:underline">
            แบบประกันทั้งหมด
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-blue-600 hover:underline">
            บทความ
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-blue-600 hover:underline">
            ติดต่อเรา
          </Link>
        </li>
        <li>
          <Link href="/agent" className="text-blue-600 hover:underline">
            สมัครตัวแทน
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-blue-600 hover:underline">
            นโยบายความเป็นส่วนตัว
          </Link>
        </li>
        <li>
          <Link href="/terms" className="text-blue-600 hover:underline">
            ข้อกำหนดการใช้งาน
          </Link>
        </li>
      </ul>

      <p className="mt-8 text-gray-500 text-sm">
        อัปเดตล่าสุด: {new Date().toLocaleDateString("th-TH")}
      </p>
    </main>
  );
}
