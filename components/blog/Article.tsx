// components/blog/Article.tsx
// ✅ Server Component สำหรับเรนเดอร์บทความให้สวยและอ่านง่าย
import Image from "next/image";
import Link from "next/link";

export type Post = {
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  cover?: string;
  date?: string;
  author?: string;
  tags?: string[];
  content?: string;
  html?: string;
  sections?: Array<{
    heading?: string;
    body?: string | string[];
    list?: string[];
    image?: { src: string; alt?: string; caption?: string };
  }>;
};

function Paragraphs({ text }: { text: string }) {
  const blocks = text.split(/\n{1,}\s*\n{0,}/g).map((t) => t.trim()).filter(Boolean);
  return (
    <>
      {blocks.map((b, i) => (
        <p key={i} className="leading-7 text-gray-700">{b}</p>
      ))}
    </>
  );
}

function SectionBlock({
  s, idx,
}: { s: NonNullable<Post["sections"]>[number]; idx: number }) {
  return (
    <div className="space-y-3">
      {s.heading ? (
        <h3 id={`sec-${idx}`} className="text-xl font-semibold tracking-tight">
          {s.heading}
        </h3>
      ) : null}

      {typeof s.body === "string" ? (
        <Paragraphs text={s.body} />
      ) : Array.isArray(s.body) ? (
        s.body.map((p, i) => (
          <p key={i} className="leading-7 text-gray-700">{p}</p>
        ))
      ) : null}

      {Array.isArray(s.list) && s.list.length > 0 ? (
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {s.list.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      ) : null}

      {s.image?.src ? (
        <figure className="mt-2">
          <Image
            src={s.image.src}
            alt={s.image.alt ?? ""}
            width={1200}
            height={700}
            className="rounded-xl ring-1 ring-gray-200/70 w-full h-auto object-cover"
          />
          {s.image.caption ? (
            <figcaption className="mt-2 text-sm text-gray-500">{s.image.caption}</figcaption>
          ) : null}
        </figure>
      ) : null}
    </div>
  );
}

export default function Article({ post }: { post: Post }) {
  const hasSections = Array.isArray(post.sections) && post.sections.length > 0;
  const toc =
    hasSections
      ? (post.sections as NonNullable<Post["sections"]>)
          .map((s, i) => ({ i, h: s.heading }))
          .filter((x) => !!x.h)
      : [];

  return (
    <div className="section">
      <div className="container max-w-5xl">
        {/* breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">หน้าแรก</Link>
          <span className="mx-1 text-gray-400">/</span>
          <Link href="/blog" className="text-gray-500 hover:text-gray-700">บทความ</Link>
          <span className="mx-1 text-gray-400">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        <article className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Content */}
          <div className="lg:col-span-8 space-y-6">
            <header className="space-y-3">
              {post.category ? (
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {post.category}
                </div>
              ) : null}
              <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                {post.title}
              </h1>
              {post.excerpt ? <p className="text-gray-600">{post.excerpt}</p> : null}
              {(post.date || post.author) && (
                <div className="text-sm text-gray-500">
                  {post.author && <span>โดย {post.author}</span>}
                  {post.author && post.date && <span> • </span>}
                  {post.date && <span>{post.date}</span>}
                </div>
              )}
            </header>

            {/* Cover */}
            {post.cover && (
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-gray-200/70">
                <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
              </div>
            )}

            {/* Body */}
            <div className="prose max-w-none prose-h3:mt-8 prose-img:rounded-xl prose-p:text-gray-700">
              {post.content && !hasSections && <Paragraphs text={post.content} />}
              {hasSections && (post.sections as NonNullable<Post["sections"]>).map((s, idx) => (
                <SectionBlock key={idx} s={s} idx={idx} />
              ))}
              {post.html && !post.content && !hasSections && (
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              )}
            </div>

            {/* Tags */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="pt-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t, i) => (
                    <span key={i} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">#{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Side / TOC */}
          <aside className="lg:col-span-4 space-y-6">
            {toc.length > 0 && (
              <div className="rounded-2xl border border-gray-200/80 p-5 sticky top-24">
                <div className="text-sm font-semibold text-gray-800">สารบัญเนื้อหา</div>
                <ul className="mt-3 space-y-2 text-sm">
                  {toc.map((item) => (
                    <li key={item.i}>
                      <a href={`#sec-${item.i}`} className="text-gray-600 hover:text-gray-900">
                        {item.h}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-gray-200/80 p-5">
              <div className="text-sm font-semibold text-gray-800">บทความล่าสุด</div>
              <ul className="mt-3 space-y-2 text-sm">
                {/* ให้หน้า list เป็นคนจัดรายการ */}
                <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">ดูบทความทั้งหมด →</Link></li>
              </ul>
            </div>
          </aside>
        </article>
      </div>
    </div>
  );
}
