// ✅ หน้า list แบบสั้น ๆ พอให้คลิกทดสอบได้
import Link from "next/link";

export const metadata = { title: "บทความ" };

export default function BlogListPage() {
  const posts = [
    { slug: "life-insurance-basics", title: "พื้นฐานประกันชีวิต (ตัวอย่าง)" },
    // เพิ่มโพสต์อื่นภายหลังได้
  ];

  return (
    <div className="section">
      <div className="container max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">บทความ</h1>
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="text-primary hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
