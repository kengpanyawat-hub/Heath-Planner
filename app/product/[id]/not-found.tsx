// /app/products/[id]/not-found.tsx
export default function NotFound() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">ไม่พบแบบประกัน</h1>
      <p className="mt-2 text-gray-600">
        ลองกลับไปหน้า “แบบประกันทั้งหมด” เพื่อเลือกดูใหม่อีกครั้ง
      </p>
      <a
        href="/products"
        className="mt-6 inline-flex items-center rounded-lg bg-[#325BBA] px-5 py-2.5 text-white shadow hover:bg-[#274a9a]"
      >
        กลับไปหน้าแบบประกันทั้งหมด
      </a>
    </main>
  );
}
