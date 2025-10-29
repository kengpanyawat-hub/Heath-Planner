// app/products/_client.tsx
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/data/products";
import { products as allProducts } from "@/data/products";


const CATEGORY_ORDER = [
  "ทั้งหมด",
  "ประกันสุขภาพเหมาจ่าย",
  "ประกันโรคร้ายแรง",
  "ประกันเงินออม",
  "ประกันบำนาญ",
  "ประกันควบการลงทุน",
  "ประกันนิติบุคคล (Keyman)",
  "ประกันกลุ่ม",
];

function Card({ p }: { p: Product }) {
  return (
    <a
      href={`/products/${p.id}`}
      className="group rounded-2xl overflow-hidden ring-1 ring-gray-200/70 bg-white hover:shadow-md transition"
    >
      <div className="relative aspect-[16/11] bg-gray-100">
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
        ) : null}
        {p.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-blue-50 text-[#325BBA] px-2.5 py-1 text-xs font-medium ring-1 ring-inset ring-[#325BBA]/15">
            {p.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500">{p.category}</div>
        <h3 className="mt-1 text-base/6 font-semibold text-gray-900 group-hover:text-[#325BBA]">
          {p.name}
        </h3>
        {p.summary ? (
          <p className="mt-2 text-sm text-gray-700 line-clamp-2">{p.summary}</p>
        ) : null}
        <div className="mt-3 text-sm font-medium text-[#325BBA]">อ่านต่อ →</div>
      </div>
    </a>
  );
}

export default function ProductsClient() {
  const search = useSearchParams();
  const [active, setActive] = useState<string>("ทั้งหมด");

  // set ค่าเริ่มต้นจาก ?cat=
  useEffect(() => {
    const cat = search.get("cat");
    if (cat) setActive(cat);
  }, [search]);

  const categories = useMemo(() => {
    const set = new Set<string>();
    allProducts.forEach((p) => set.add(p.category));
    const cats = Array.from(set);
    const ordered = CATEGORY_ORDER.filter((c) => c === "ทั้งหมด" || cats.includes(c));
    return ["ทั้งหมด", ...ordered.filter((c) => c !== "ทั้งหมด")];
  }, []);

  const items = useMemo<Product[]>(() => {
    if (active === "ทั้งหมด") return allProducts;
    return allProducts.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      {/* Filter chips */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={[
              "px-3.5 py-1.5 rounded-full text-sm ring-1 ring-inset transition",
              active === c
                ? "bg-[#325BBA] text-white ring-[#325BBA]"
                : "bg-white text-gray-700 ring-gray-200 hover:bg-gray-50",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((p) => (
          <Card key={p.id} p={p} />
        ))}
      </div>
    </>
  );
}
