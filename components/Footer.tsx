"use client";

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faLine } from "@fortawesome/free-brands-svg-icons";
import type { Route } from "next";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200/70 bg-white">
      {/* top */}
      <div className="container max-w-7xl py-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="DragonSheild" width={28} height={28} />
              <span className="text-lg font-semibold">Heath Planner</span>
            </div>
            <p className="mt-3 max-w-md text-gray-600">
              ที่ปรึกษาประกันชีวิต/สุขภาพ เน้นแผนที่ใช่ในงบประมาณของคุณ
              พร้อมบริการหลังการขายแบบ One-Stop Service
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="tel:0815789955"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#325BBA] text-white shadow-[0_6px_18px_rgba(50,91,186,.3)]"
                aria-label="โทร"
              >
                <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
              </a>
              <a
                href="https://lin.ee/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#325BBA] text-white shadow-[0_6px_18px_rgba(50,91,186,.3)]"
                aria-label="LINE"
              >
                <FontAwesomeIcon icon={faLine} className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#325BBA] text-white shadow-[0_6px_18px_rgba(50,91,186,.3)]"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* links 1 */}
          <div>
            <div className="font-semibold text-gray-900">เมนูหลัก</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                <Link href={"/" as Route} className="hover:text-[#325BBA]">
                  หน้าแรก
                </Link>
              </li>
              <li>
                <Link href={"/products" as Route} className="hover:text-[#325BBA]">
                  แบบประกัน
                </Link>
              </li>
              <li>
                <Link href={"/blog" as Route} className="hover:text-[#325BBA]">
                  บทความ
                </Link>
              </li>
              <li>
                <Link href={"/agent" as Route} className="hover:text-[#325BBA]">
                  สมัครตัวแทน
                </Link>
              </li>
            </ul>
          </div>

          {/* links 2 */}
          <div>
            <div className="font-semibold text-gray-900">ติดต่อ</div>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>
                โทร:{" "}
                <a className="hover:text-[#325BBA]" href="tel:0815789955">
                  081-578-9955
                </a>
              </li>
              <li>
                LINE:{" "}
                <a
                  className="hover:text-[#325BBA]"
                  href="https://lin.ee/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @heathplanner
                </a>
              </li>
              <li>
                อีเมล:{" "}
                <a className="hover:text-[#325BBA]" href="mailto:contact@dragonsheild.com">
                  contact@heathplanner.com
                </a>
              </li>
              <li>
                <Link href={"/contact" as Route} className="hover:text-[#325BBA]">
                  แบบฟอร์มติดต่อ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="border-t border-gray-200/70 bg-[#F7F8FB]">
        <div className="container max-w-7xl py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
          <p className="text-gray-600">
            © {year} Heath Planner. สงวนลิขสิทธิ์
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600">
            <li>
              <Link href={"/privacy" as Route} className="hover:text-[#325BBA]">
                นโยบายความเป็นส่วนตัว
              </Link>
            </li>
            <li>
              <Link href={"/terms" as Route} className="hover:text-[#325BBA]">
                ข้อกำหนดการใช้งาน
              </Link>
            </li>
            <li>
              <Link href={"/sitemap" as Route} className="hover:text-[#325BBA]">
                แผนผังเว็บไซต์
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
