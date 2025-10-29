"use client";

import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLine } from "@fortawesome/free-brands-svg-icons";

/** จุดไอคอนเล็กให้เนียนสวยบนบรรทัดข้อความ */
function MiniIcon({ icon, className = "" }: { icon: any; className?: string }) {
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#325BBA] text-white mr-2 align-text-top shadow-[0_4px_12px_rgba(50,91,186,0.25)]">
      <FontAwesomeIcon icon={icon} className={`h-3.5 w-3.5 ${className}`} />
    </span>
  );
}

type Member = {
  name: string;
  role: string;
  phone?: string;
  line?: string;
  fb?: string;
  email?: string;
  image?: string;
};

const TEAM: Member[] = [
  {
    name: "Orjira Kiyaphat",
    role: "ผู้จัดการภาคอาวุโส",
    phone: "093-575-9953",
    line: "@Jaja.Allianz",
    fb: "ประกันเข้าใจง่าย by Orji",
    email: "onjira.ki@dragonsheild.com",
    image: "/team/1.jpg",
  },
  {
    name: "Thapnarit Fakanong",
    role: "ผู้ช่วยผู้อำนวยการฝ่ายขาย",
    phone: "098-251-3536",
    line: "Tongtang2222",
    fb: "ทัพพันธิ์รติ์ Allianz Ayudhya",
    email: "thapnarit@dragonsheild.com",
    image: "/team/2.jpg",
  },
  {
    name: "Kanthmanee P.",
    role: "ผู้จัดการภาคอาวุโส",
    phone: "098-569-2291",
    line: "@Jaja.Allianz",
    fb: "จาจา Allianz",
    email: "kanthmanee.p@dragonsheild.com",
    image: "/team/3.jpg",
  },
  {
    name: "Nitinand Satimanont",
    role: "ผู้จัดการหน่วย",
    phone: "090-536-9955",
    line: "@Jaja.Allianz",
    fb: "จาจา Allianz",
    email: "nitinand@dragonsheild.com",
    image: "/team/4.jpg",
  },
];

export default function TeamGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {TEAM.map((m) => (
        <article
          key={m.name}
          className="rounded-2xl border border-gray-200/70 bg-white shadow-sm overflow-hidden"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={m.image ?? "/team/placeholder.jpg"}
              alt={m.name}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold tracking-tight">{m.name}</h3>
            <p className="text-primary text-sm mt-0.5">{m.role}</p>

            <ul className="text-sm text-gray-700 mt-3 space-y-1.5">
              {m.phone && (
                <li className="flex items-start">
                  <MiniIcon icon={faPhone} />
                  <a href={`tel:${m.phone}`} className="hover:text-primary">
                    {m.phone}
                  </a>
                </li>
              )}
              {m.line && (
                <li className="flex items-start">
                  <MiniIcon icon={faLine} />
                  <span>{m.line}</span>
                </li>
              )}
              {m.fb && (
                <li className="flex items-start">
                  <MiniIcon icon={faFacebookF} />
                  <span>{m.fb}</span>
                </li>
              )}
              {m.email && (
                <li className="flex items-start">
                  <MiniIcon icon={faEnvelope} />
                  <a href={`mailto:${m.email}`} className="break-all hover:text-primary">
                    {m.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
