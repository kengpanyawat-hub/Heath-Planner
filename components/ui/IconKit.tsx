"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

/** วงกลมธีม DragonSheild ไล่เฉด + gloss + hover glow */
export function IconCircle({
  icon,
  size = "lg",
  className = "",
  label,
}: {
  icon: IconProp;
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}) {
  const map = { sm: "h-10 w-10", md: "h-14 w-14", lg: "h-28 w-28" };
  const inner = { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-9 w-9" };

  return (
    <div
      aria-label={label}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out group hover:-translate-y-0.5 ${map[size]} ${className}`}
    >
      <div className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#3E6FE0_0%,#325BBA_100%)]" />
      <div className="absolute inset-[3px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.20)_0%,rgba(255,255,255,.06)_100%)]" />
      <div className="absolute inset-[3px] rounded-full shadow-[inset_0_16px_28px_rgba(0,0,0,.10)]" />
      <div className="absolute top-[10%] left-[14%] right-[14%] h-[22%] rounded-full bg-white/22 blur-[6px]" />
      <div className="absolute -z-10 h-[118%] w-[118%] rounded-full bg-[#325BBA]/22 blur-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <FontAwesomeIcon icon={icon} className={`relative text-white ${inner[size]}`} />
    </div>
  );
}

/** ไอคอนเรียบ ๆ (ไม่มีวงกลม) */
export function FA({
  icon,
  className = "text-[#325BBA]",
}: {
  icon: IconProp;
  className?: string;
}) {
  return <FontAwesomeIcon icon={icon} className={className} />;
}
