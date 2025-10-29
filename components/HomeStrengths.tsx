"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser, // อบรม/เทรนนิ่ง
  faHeart,          // ใส่ใจ/ตอบสนอง
  faThumbsUp,       // บริการเป็นเลิศ
  faTrophy          // รางวัลเกียรติยศ
} from "@fortawesome/free-solid-svg-icons";

/** วงกลมน้ำเงินไล่เฉด + ring + gloss + shadow + hover glow */
function Badge({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      aria-label={label}
      className="relative inline-flex h-28 w-28 items-center justify-center rounded-full transition-all duration-300 ease-out group hover:-translate-y-0.5"
    >
      {/* พื้นไล่เฉด */}
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#3E6FE0_0%,#325BBA_100%)]" />
      {/* inner ring + gloss */}
      <div className="absolute inset-[3px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.20)_0%,rgba(255,255,255,.06)_100%)]" />
      {/* inner shadow */}
      <div className="absolute inset-[3px] rounded-full shadow-[inset_0_16px_28px_rgba(0,0,0,.10)]" />
      {/* top gloss */}
      <div className="absolute top-[10%] left-[14%] right-[14%] h-[22%] rounded-full bg-white/22 blur-[6px]" />
      {/* hover halo */}
      <div className="absolute -z-10 h-[118%] w-[118%] rounded-full bg-[#325BBA]/22 blur-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative text-white">{children}</div>
    </div>
  );
}

const FEATURES = [
  {
    title: "ตัวแทนได้รับการฝึกอบรม",
    desc: "จาก อลิอันซ์ อยุธยา",
    icon: faChalkboardUser,
  },
  {
    title: "ตอบสนองความต้องการ",
    desc: "ของลูกค้า ได้ตรงจุด",
    icon: faHeart,
  },
  {
    title: "การบริการที่เป็นเลิศ",
    desc: "ให้กับลูกค้า",
    icon: faThumbsUp,
  },
  {
    title: "ได้รับรางวัลอันทรงเกียรติ",
    desc: "จากสถาบันชั้นนำระดับประเทศ",
    icon: faTrophy,
  },
];

export default function HomeStrengths() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-white via-[#F7F8FB] to-white">
      <div className="container max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#325BBA]">จุดเด่นของเรา</h2>
        <p className="text-gray-600 mt-2 mb-10">
          สิ่งที่ทำให้ DragonSheild แตกต่าง และเป็นที่ไว้วางใจจากลูกค้าทั่วประเทศ
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <Badge label={f.title}>
                {/* ขนาดไอคอน 36px / ปรับได้ตามต้องการ */}
                <FontAwesomeIcon icon={f.icon} className="h-9 w-9" />
              </Badge>
              <h3 className="mt-4 text-base font-semibold text-gray-900 leading-tight">
                {f.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
