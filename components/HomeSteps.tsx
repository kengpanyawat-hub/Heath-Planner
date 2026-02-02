"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faUsers,
  faDraftingCompass,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

function StepIcon({ children, step }: { children: React.ReactNode; step: number }) {
  return (
    <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 ring-1 ring-gray-200">
      <div className="relative text-primary">{children}</div>
      <div className="absolute -bottom-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold ring-4 ring-white">
        {step}
      </div>
    </div>
  );
}

const STEPS = [
  {
    title: "กรอกข้อมูลติดต่อ",
    desc: "เริ่มต้นง่ายๆ เพียงกรอกข้อมูลเพื่อให้เราติดต่อกลับ พร้อมให้คำปรึกษาเบื้องต้น",
    icon: faFileLines,
  },
  {
    title: "นัดพูดคุยและวิเคราะห์",
    desc: "เราจะนัดหมายเพื่อพูดคุยถึงเป้าหมายและความต้องการของคุณอย่างละเอียด",
    icon: faUsers,
  },
  {
    title: "เลือกและออกแบบแผน",
    desc: "คุณจิณห์จะออกแบบแผนประกันที่เหมาะสมและคุ้มค่าที่สุดสำหรับคุณโดยเฉพาะ",
    icon: faDraftingCompass,
  },
  {
    title: "ดูแลหลังการขาย",
    desc: "เราพร้อมดูแลและให้บริการคุณตลอดอายุสัญญา ทั้งการเคลมและให้คำปรึกษา",
    icon: faHandshake,
  },
];

export default function HomeSteps() {
  return (
    <section className="py-14 md:py-20">
      <div className="container max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          4 ขั้นตอนง่ายๆ ในการวางแผนประกันกับเรา
        </h2>
        <p className="text-gray-600 mt-2 mb-12">
          เริ่มต้นสร้างความมั่นคงทางการเงินของคุณด้วยขั้นตอนที่โปร่งใสและเข้าใจง่าย
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center text-center">
              <StepIcon step={index + 1}>
                <FontAwesomeIcon icon={step.icon} className="h-10 w-10" />
              </StepIcon>
              <h3 className="mt-8 text-base font-semibold text-gray-900 leading-tight">
                {step.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}