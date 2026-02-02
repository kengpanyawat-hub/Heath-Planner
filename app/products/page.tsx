// app/products/page.tsx
import nextDynamic from "next/dynamic";           // ✅ เปลี่ยนชื่อ import
import CTA from "@/components/CTA";
import { seo } from "@/lib/metadata";

// ✅ บังคับให้หน้านี้เป็น Static SSG เสมอ (ใช้กับ next export)
export const dynamic = "force-static";

// ✅ Metadata ของหน้า
export const metadata = seo.products;

// ✅ โหลดส่วน client-only แบบปิด SSR เพื่อกัน error ตอน prerender
const ProductsClient = nextDynamic(() => import("./_client"), {
  ssr: false,
  loading: () => (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-48 rounded-xl bg-gray-100 animate-pulse border border-gray-200"
        />
      ))}
    </div>
  ),
});

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
        แบบประกันทั้งหมด
      </h1>
      <p className="mt-2 text-center text-gray-600">
        กรองตามหมวดหมู่เพื่อค้นหาแผนที่ใช่ — ดูรายละเอียดและขอคำปรึกษากับทีม Health Planner
      </p>

      {/* ส่วนกรอง/กริด — ทำงานเฉพาะฝั่ง client */}
      <ProductsClient />

      <CTA />
    </main>
  );
}
