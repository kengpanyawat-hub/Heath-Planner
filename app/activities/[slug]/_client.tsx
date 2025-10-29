"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

export default function ActivitiesClient({ slug }: { slug: string }) {
  // ใช้รูป group1.jpg → group48.jpg (วางใน /public/images/)
  const images = useMemo(
    () => Array.from({ length: 24 }).map((_, i) => `/images/group${i + 1}.jpg`),
    []
  );

  const [active, setActive] = useState<string | null>(null);
  const dlg = useRef<HTMLDialogElement>(null);

  const open = (src: string) => {
    setActive(src);
    dlg.current?.showModal();
  };
  const close = () => dlg.current?.close();

  return (
    <main className="bg-white">
      <section className="container max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-[#325BBA]">
          รูปกิจกรรมทั้งหมด
        </h1>
        <p className="mt-1 text-gray-600">
          ภาพบรรยากาศการทำงาน การเรียนรู้ และความสำเร็จร่วมกัน (ทั้งหมด {images.length} รูป)
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => open(src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-gray-200/70 bg-gray-100 hover:ring-[#325BBA]/40"
            >
              <Image
                src={src}
                alt={`Activity ${i + 1}`}
                fill
                sizes="(max-width:1024px) 50vw, 200px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <dialog
        ref={dlg}
        className="w-[min(1000px,92vw)] rounded-2xl backdrop:bg-black/50 p-0 overflow-hidden"
        onClose={() => setActive(null)}
      >
        <div className="relative w-full h-[min(80vh,760px)] bg-black">
          {active && (
            <Image
              src={active}
              alt="ชมภาพกิจกรรม"
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          )}
          <button
            onClick={close}
            className="absolute right-3 top-3 inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white h-9 w-9 text-gray-800 shadow"
            aria-label="ปิด"
          >
            ✕
          </button>
        </div>
      </dialog>
    </main>
  );
}
