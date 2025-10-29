"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faInfinity,
  faBookOpenReader,
  faLaptopCode,
  faCoins,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

/** วงกลมพื้นหลังแบบไล่เฉด + กรอบสว่าง */
function IconPill({ icon }: { icon: any }) {
  return (
    <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-full">
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#3E6FE0_0%,#325BBA_100%)] shadow-[0_8px_24px_rgba(50,91,186,.25)]" />
      <span className="absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.18)_0%,rgba(255,255,255,.06)_100%)]" />
      <FontAwesomeIcon icon={icon} className="relative text-white h-8 w-8" />
      <span className="absolute -bottom-3 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-full bg-[#325BBA]/15 blur-[6px]" />
    </span>
  );
}

const items = [
  {
    icon: faClock,
    title: "อิสระด้านเวลา",
    desc: "บริหารเวลาได้อย่างอิสระ ทำงานที่ไหนก็ได้ ผ่านระบบออนไลน์ ส่งงานได้ทั่วประเทศ",
  },
  {
    icon: faInfinity,
    title: "รายได้ไม่มีขีดจำกัด",
    desc: "รายได้ขึ้นอยู่กับความสามารถ ยิ่งทำมากยิ่งได้มาก เป็นนายของตัวเองอย่างแท้จริง",
  },
  {
    icon: faBookOpenReader,
    title: "ได้พัฒนาตนเอง",
    desc: "มีระบบฝึกอบรม และกิจกรรมสัมมนา เพื่อพัฒนาศักยภาพอย่างต่อเนื่อง",
  },
  {
    icon: faLaptopCode,
    title: "เรียนรู้และใช้เทคโนโลยี",
    desc: "เครื่องมือ Digital ช่วยการขายและสร้างทีมในยุคใหม่",
  },
  {
    icon: faCoins,
    title: "รายได้ต่อเนื่องจากการทำงาน",
    desc: "รับค่าคอมมิชชั่น และโบนัส จากยอดขายของทีม เติบโตมั่นคงระยะยาว",
  },
  {
    icon: faUserGroup,
    title: "มีพี่เลี้ยงอยู่เคียงข้าง",
    desc: "ทีมงานให้คำแนะนำ ช่วยเหลือ และอบรมต่อเนื่อง เติบโตไปด้วยกัน",
  },
];

export default function AgentBenefits() {
  return (
    <section className="py-14 sm:py-16">
      <div className="container max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight text-[#325BBA]">
          เป็นตัวแทนกับเรา ดีอย่างไร?
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="text-center transition-transform hover:-translate-y-0.5">
              <IconPill icon={it.icon} />
              <h3 className="mt-5 text-[#325BBA] font-bold text-xl">{it.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed max-w-[36ch] mx-auto">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
