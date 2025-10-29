// app/not-found.tsx
import Link from "next/link";

// ✅ ย้าย themeColor มาอยู่ใน viewport (หรือไม่ใส่ก็ได้เพราะ app/viewport.ts คุมทั้งไซต์อยู่แล้ว)
export const viewport = {
  themeColor: "#325BBA",
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900">ไม่พบหน้าที่คุณต้องการ</h1>
        <p className="mt-2 text-gray-600">
          ลิงก์นี้อาจถูกย้ายหรือลบออกไปแล้ว ลองกลับไปยังหน้าแรก
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-[#325BBA] px-4 py-2 text-white hover:bg-[#274a9a]"
          >
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    </main>
  );
}
