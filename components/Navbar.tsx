// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Route } from "next";
import { MenuGlyph, CloseGlyph, ChevronDownGlyph } from "@/components/icons";

type Item = { label: string; href: Route };
type MenuGroup = { label: string; href?: Route; children?: Item[]; badge?: string };

// ใช้ลิงก์ /products?cat=... ให้ตัวกรองทำงานทันที
const NAV: MenuGroup[] = [
  { label: "เกี่ยวกับเรา", href: "/" as Route },
  { label: "สมัครตัวแทน", href: "/agent" as Route },
  {
    label: "แบบประกัน",
    href: "/products" as Route,
    children: [
      { label: "ประกันสุขภาพเหมาจ่าย", href: ("/products?cat=" + encodeURIComponent("ประกันสุขภาพเหมาจ่าย")) as Route },
      { label: "ประกันโรคร้ายแรง", href: ("/products?cat=" + encodeURIComponent("ประกันโรคร้ายแรง")) as Route },
      { label: "ประกันเงินออม", href: ("/products?cat=" + encodeURIComponent("ประกันเงินออม")) as Route },
      { label: "ประกันบำนาญ", href: ("/products?cat=" + encodeURIComponent("ประกันบำนาญ")) as Route },
      { label: "ประกันควบการลงทุน", href: ("/products?cat=" + encodeURIComponent("ประกันควบการลงทุน")) as Route },
      { label: "ประกันนิติบุคคล (Keyman)", href: ("/products?cat=" + encodeURIComponent("ประกันนิติบุคคล (Keyman)")) as Route },
    ],
    badge: "พิเศษ",
  },
  {
    label: "ประกันกลุ่ม",
    href: "/group-insurance" as Route,
    children: [
      { label: "ประกันภัยกลุ่มสวัสดิการพนักงาน", href: "/group-insurance" as Route },
      { label: "คุ้มครองอุบัติเหตุกลุ่ม (PA2)", href: "/products/group-pa2/" as Route },
    ],
  },
  { label: "บทความ", href: "/blog" as Route },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container max-w-7xl">
        <div className="flex items-center h-16">
          {/* โลโก้ซ้าย */}
          <div className="flex min-w-[160px] items-center">
            <Link href={"/" as Route} className="flex items-center gap-2 whitespace-nowrap">
              <Image src="/logo.svg" alt="HeathPlanner" width={26} height={26} />
              <span className="font-semibold tracking-tight">Heath Planner</span>
            </Link>
          </div>

          {/* เมนูกลาง */}
          <nav className="mx-auto hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV.map((m) => (
                <li
                  key={m.label}
                  className='relative group before:absolute before:content-[""] before:top-full before:left-0 before:right-0 before:h-3'
                >
                  <Link
                    href={(m.href ?? ("/" as Route)) as Route}
                    className="nav-link inline-flex items-center gap-1 text-gray-800 hover:text-primary whitespace-nowrap"
                  >
                    <span className="font-medium">{m.label}</span>
                    {m.children ? <ChevronDownGlyph className="h-4 w-4" /> : null}
                    {m.badge ? (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-red-500 text-white">
                        {m.badge}
                      </span>
                    ) : null}
                  </Link>

                  {m.children ? (
                    <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-56 rounded-xl border border-gray-200 bg-white shadow-lg z-50">
                      <ul className="py-2">
                        {m.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap"
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA ขวา + ปุ่มมือถือ */}
          <div className="ml-auto flex items-center gap-2">
            <Link href={"/contact" as Route} className="btn-outline hidden md:inline-flex whitespace-nowrap">
              ติดต่อเรา
            </Link>
            <button
              aria-label="Toggle menu"
              className="p-2 md:hidden"
              onClick={() => setOpen((s) => !s)}
            >
              {open ? <CloseGlyph className="h-6 w-6" /> : <MenuGlyph className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* เมนูมือถือ */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container max-w-7xl py-3">
            <ul className="space-y-1">
              {NAV.map((m) => (
                <li key={m.label}>
                  <Link
                    href={(m.href ?? ("/" as Route)) as Route}
                    className="block py-2 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {m.label}
                    {m.badge ? (
                      <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded-full bg-red-500 text-white align-middle">
                        {m.badge}
                      </span>
                    ) : null}
                  </Link>
                  {m.children ? (
                    <ul className="pl-4 pb-2 space-y-1">
                      {m.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block py-1.5 text-sm text-gray-600"
                            onClick={() => setOpen(false)}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
              <li>
                <Link href={"/contact" as Route} className="block py-2" onClick={() => setOpen(false)}>
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
