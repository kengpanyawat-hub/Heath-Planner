// app/contact/page.tsx
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLine, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { seo } from "@/lib/metadata";

export const metadata = seo.products;

// หมายเหตุ: เพื่อลดปัญหา build แบบ static
// ไฟล์นี้จะไม่อ่าน searchParams ฝั่งเซิร์ฟเวอร์
// หากต้องการพรีฟิลด์หัวข้อจาก query (?topic=) ให้เติมบน client ภายหลังได้

const DEFAULT_TOPIC = "สนใจแบบประกัน";

export default function ContactPage() {
  return (
    <main className="bg-[#F7F8FB] text-gray-800">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E9EEF9] via-[#EFF2FA] to-transparent" />
        <div className="relative container max-w-6xl py-10 md:py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#325BBA]">
            ติดต่อ Health Planner
          </h1>
          <p className="mt-3 text-gray-600">ส่งข้อมูล แล้วทีมจะติดต่อกลับโดยเร็ว</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-16">
        <div className="container max-w-6xl grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* ช่องทางติดต่อ */}
          <aside className="order-2 md:order-1">
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-gray-200/70 shadow-md p-6 md:p-7">
              <h2 className="text-xl font-bold text-[#325BBA]">ช่องทางด่วน</h2>
              <p className="text-gray-600 mt-1">
                เลือกช่องทางที่สะดวก ทีมงานตอบกลับไวในเวลาทำการ
              </p>

              <ul className="mt-5 space-y-4">
                <li className="flex items-center gap-4">
                  <IconPill>
                    <FontAwesomeIcon icon={faPhone} className="h-5 w-5 text-white" />
                  </IconPill>
                  <div>
                    <div className="text-xs text-gray-500">โทร</div>
                    <a href="tel:0815789955" className="font-semibold hover:underline">
                      081-578-9955
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <IconPill>
                    <FontAwesomeIcon icon={faLine} className="h-5 w-5 text-white" />
                  </IconPill>
                  <div>
                    <div className="text-xs text-gray-500">LINE</div>
                    <a
                      href="https://lin.ee/"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold hover:underline"
                    >
                      @Healthplanner
                    </a>
                  </div>
                </li>

                <li className="flex items-center gap-4">
                  <IconPill>
                    <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-white" />
                  </IconPill>
                  <div>
                    <div className="text-xs text-gray-500">Facebook</div>
                    <a
                      href="#"
                      className="font-semibold hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Health Planner - ที่ปรึกษาประกันชีวิต
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-medium text-gray-800">เวลาทำการ</div>
                  จันทร์–ศุกร์ 09:00–18:00 <br />
                  เสาร์ 10:00–16:00
                </div>
                <div>
                  <div className="font-medium text-gray-800">อีเมล</div>
                  <a className="hover:underline" href="mailto:contact@Healthplanner.com">
                    contact@Healthplanner.com
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* ฟอร์มติดต่อ */}
          <section className="order-1 md:order-2">
            <div className="rounded-2xl bg-white/90 backdrop-blur border border-gray-200/70 shadow-md">
              <div className="p-6 md:p-7">
                <form action="/api/contact" method="post" className="grid gap-4">
                  <label className="grid gap-2">
                    <span className="text-sm text-gray-700">ชื่อ-นามสกุล</span>
                    <input
                      required
                      name="name"
                      placeholder="เช่น กิตติชัย ใจดี"
                      className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA] bg-white"
                    />
                  </label>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="grid gap-2">
                      <span className="text-sm text-gray-700">อีเมล</span>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA] bg-white"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm text-gray-700">เบอร์โทรศัพท์</span>
                      <input
                        name="phone"
                        inputMode="tel"
                        placeholder="08x-xxx-xxxx"
                        className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA] bg-white"
                      />
                    </label>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="grid gap-2">
                      <span className="text-sm text-gray-700">สนใจแบบประกัน</span>
                      <input
                        name="topic"
                        defaultValue={DEFAULT_TOPIC}
                        className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA] bg-white"
                      />
                    </label>
                    <label className="grid gap-2">
                      <span className="text-sm text-gray-700">เวลาที่สะดวก</span>
                      <select
                        name="preferredTime"
                        className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA] bg-white"
                      >
                        <option value="">โปรดเลือกช่วงเวลา</option>
                        <option>เช้า (09:00–12:00)</option>
                        <option>บ่าย (12:00–16:00)</option>
                        <option>เย็น (16:00–19:00)</option>
                      </select>
                    </label>
                  </div>

                  <label className="grid gap-2">
                    <span className="text-sm text-gray-700">รายละเอียด</span>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="เล่าเบื้องต้นว่าต้องการคุ้มครองอะไร งบประมาณประมาณเท่าไร หรือความคาดหวังที่อยากได้"
                      className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#325BBA] focus:border-[#325BBA] bg-white"
                    />
                  </label>

                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#325BBA] focus:ring-[#325BBA]"
                    />
                    <p>
                      ยินยอมให้ Health Planner จัดเก็บและใช้ข้อมูลเพื่อการติดต่อกลับ
                      ตามนโยบายความเป็นส่วนตัว
                    </p>
                  </div>

                  <button
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-[#325BBA] px-5 font-semibold text-white hover:bg-[#274a9a] transition"
                    type="submit"
                  >
                    ส่งคำขอ
                  </button>
                </form>
              </div>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              * เมื่อกดส่ง คุณยอมรับว่าข้อมูลนี้เป็นความจริง
              และยินยอมให้ทีมงานติดต่อกลับผ่านช่องทางที่ระบุไว้
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

/* --- UI helper: วงกลมไอคอนไล่เฉดตามธีม --- */
function IconPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#3E6FE0_0%,#325BBA_100%)] shadow-[0_6px_18px_rgba(50,91,186,.25)]" />
      <span className="absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.18)_0%,rgba(255,255,255,.06)_100%)]" />
      <span className="relative">{children}</span>
    </span>
  );
}
