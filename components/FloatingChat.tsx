"use client";

import { useEffect, useState } from "react";

/**
 * FloatingChat — ปุ่มแชทลอย (toggle เปิด/ปิด)
 * ตรึงมุมขวาล่าง + รองรับ safe-area
 * ช่องทาง: Facebook, LINE, โทรศัพท์
 * สีธีม: #325BBA
 */
export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem("ds_chat_open");
    if (v === "1") setOpen(true);
  }, []);
  useEffect(() => {
    localStorage.setItem("ds_chat_open", open ? "1" : "0");
  }, [open]);

  const fbLink = "https://m.me/HealthPlanner";
  const lineLink = "https://lin.ee/";
  const telLink = "tel:0966956945";

  return (
    <div
      className="
        fixed z-[60]
        right-[max(12px,env(safe-area-inset-right))]
        bottom-[max(12px,env(safe-area-inset-bottom))]
        flex flex-col items-end gap-2
        pointer-events-none
      "
    >
      {/* แผงช่องทาง */}
      <div
        className={`origin-bottom-right transition-all duration-250
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
          ${open ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        <div className="w-[300px] max-w-[92vw] rounded-2xl bg-white ring-1 ring-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,.12)] overflow-hidden">
          <div className="px-4 pt-4 pb-2 border-b border-gray-100">
            <div className="text-sm font-semibold text-gray-900">คุยกับเรา</div>
            <p className="text-xs text-gray-500">ทีมงานตอบกลับไวในเวลาทำการ</p>
          </div>
          <div className="p-2">
            <ChannelButton href={fbLink} label="Facebook Messenger" icon={<MessengerIcon />} />
            <ChannelButton href={lineLink} label="LINE" icon={<LineIcon />} />
            <ChannelButton href={telLink} label="โทร 096-695-6945" icon={<PhoneIcon />} />
          </div>
        </div>
      </div>

      {/* ปุ่ม toggle (เพิ่ม relative ให้ badge จับขอบปุ่มได้ถูกต้อง) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "ปิดแชทลอย" : "เปิดแชทลอย"}
        className="
          relative              /* <— สำคัญ */
          pointer-events-auto
          inline-flex h-14 w-14 items-center justify-center rounded-full
          bg-[#325BBA] text-white
          shadow-[0_10px_26px_rgba(50,91,186,.45)]
          hover:bg-[#274a9a] focus:outline-none focus:ring-4 focus:ring-[#325BBA]/30
        "
      >
        {open ? <CloseIcon /> : <ChatIcon />}

        {/* badge pulse — จับขอบมุมขวาบนของปุ่มอย่างแม่นยำ */}
        {!open && (
          <span className="pointer-events-none absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 inline-flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-rose-500" />
          </span>
        )}
      </button>
    </div>
  );
}

/* ----------------- ปุ่มช่องทาง ----------------- */
function ChannelButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-gray-50 transition"
    >
      <span
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                   bg-[linear-gradient(180deg,#3E6FE0_0%,#325BBA_100%)]
                   text-white shadow-[0_6px_18px_rgba(50,91,186,.3)]"
      >
        {icon}
      </span>
      <span className="text-sm font-medium text-gray-800 group-hover:text-[#325BBA]">
        {label}
      </span>
    </a>
  );
}

/* ----------------- ไอคอน (SVG) ----------------- */
function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path
        d="M7 9h10M7 13h6M12 21l-3.5-2H7a6 6 0 0 1-6-6V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6h-1.5L12 21Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" {...props}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}
function MessengerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.04 2 10.99c0 2.73 1.292 5.18 3.377 6.855.14.112.224.28.219.46l-.06 1.7a.6.6 0 0 0 .84.58l1.9-.83a.67.67 0 0 1 .48-.03A10.9 10.9 0 0 0 12 20c5.523 0 10-4.04 10-8.99S17.523 2 12 2Zm5.02 8.87-2.6 2.76a1 1 0 0 1-1.36.07l-1.45-1.2a.5.5 0 0 0-.64 0l-2.85 2.33c-.39.32-.95-.18-.65-.6l2.6-3.75a1 1 0 0 1 1.37-.26l1.4.93a.5.5 0 0 0 .61-.06l2.84-2.64c.4-.37 1.02.17.73.52Z" />
    </svg>
  );
}
function LineIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" {...props}>
      <path d="M12 3C6.477 3 2 6.86 2 11.6c0 3.77 3.23 6.99 7.7 7.77.3.05.52.27.54.54l.06 1.43a.6.6 0 0 0 .94.46l2.4-1.69c.1-.07.22-.11.35-.11 3.95-.25 7.07-3.31 7.07-7.4C21.06 6.86 17.52 3 12 3Zm-3.72 9.95H6.64V8.9h1.64v4.05Zm3.02 0H9.66V8.9h1.64v4.05Zm3.02 0h-1.64V8.9h1.64v4.05Zm3.04 0h-1.64V8.9h1.64v4.05Z" />
    </svg>
  );
}
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1C11.85 22.1 1.9 12.15 1.9 0.99A1 1 0 0 1 2.9 0h3.6a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}
