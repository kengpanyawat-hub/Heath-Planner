import Image from "next/image";
import Link from "next/link";

export default function BlogGrid({ items }: { items: any[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <Link
          key={p.slug}
          href={`/blog/${p.slug}`}
          className="group rounded-2xl border border-gray-200/60 bg-white shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
        >
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            <Image
              src={p.cover}
              alt={p.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow">
              {p.category}
            </div>
          </div>
          <div className="flex flex-col flex-1 p-5">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary line-clamp-2 mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3 flex-1">{p.excerpt}</p>
            <div className="mt-4 text-sm font-medium text-primary group-hover:underline">
              อ่านต่อ →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
