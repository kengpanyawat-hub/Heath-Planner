"use client";

import Link from "next/link";
import type { Route } from "next";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      {/* พื้นหลัง gradient เบา ๆ */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E9EEF9] via-[#F4F6FB] to-transparent pointer-events-none" />
      <div className="relative container max-w-6xl py-14 md:py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          เริ่มต้นได้ใน <span className="text-[#325BBA]">1 นาที</span>
        </h2>
        <p className="mt-3 text-gray-600">
          กรอกข้อมูลสั้น ๆ แล้วทีมงานจะติดต่อกลับอย่างรวดเร็ว พร้อมให้คำปรึกษาตามงบประมาณของคุณ
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href={"/contact" as Route}
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#325BBA] px-6 text-white font-semibold shadow-[0_8px_24px_rgba(50,91,186,.35)] hover:bg-[#274a9a] transition"
          >
            ส่งคำขอปรึกษาฟรี
          </Link>

          <Link
            href={"/products" as Route}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-[#325BBA] px-6 text-[#325BBA] font-semibold hover:bg-[#325BBA]/5 transition"
          >
            ดูแบบประกันทั้งหมด
          </Link>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          * ไม่มีค่าใช้จ่ายในการให้คำปรึกษา และข้อมูลของคุณจะถูกเก็บเป็นความลับ
        </p>
      </div>
    </section>
  );
}
