import Link from "next/link";
import Image from "next/image";

export default function RelatedProducts({ items }:{ items:any[] }){
  if(!items?.length) return null;
  return (
    <section className="container max-w-7xl mt-10">
      <h3 className="text-lg md:text-xl font-semibold">แบบประกันที่เกี่ยวข้อง</h3>
      <div className="grid gap-6 mt-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p:any)=>(
          <Link key={p.id} href={`/product/${p.id}`} className="group rounded-2xl border border-gray-200/70 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
            <div className="relative aspect-[4/3] bg-gray-100">
              <Image src={p.image ?? "/placeholder-hero.jpg"} alt={p.title} fill className="object-cover"/>
            </div>
            <div className="p-4">
              <div className="text-xs text-gray-500">{p.category}</div>
              <div className="mt-1 font-semibold">{p.title}</div>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">{p.highlights?.[0]}</p>
              <div className="mt-3 text-sm font-medium text-primary">อ่านต่อ →</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
