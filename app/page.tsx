import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import ProductGrid from "@/components/ProductGrid";
import BlogGrid from "@/components/BlogGrid";
import ContactStrip from "@/components/ContactStrip";
import VideoStrip from "@/components/VideoStrip";
import products from "@/data/products.json";
import posts from "@/data/posts.json";
import HomePopular from "@/components/HomePopular";
import AgentBenefits from "@/components/AgentBenefits";
import HomeFAQ from "@/components/HomeFAQ";
import HomeStrengths from "@/components/HomeStrengths";
import HomeSteps from "@/components/HomeSteps";
import CTA from "@/components/CTA";
import LeaderHighlight from "@/components/LeaderHighlight";
import { seo } from "@/lib/metadata";

export const metadata = seo.products;

export default function Page() {
  const featured = products.slice(0, 4); // แสดง 4 การ์ดเหมือนเรฟ
  const featuredPosts = posts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="pt-14 md:pt-24 pb-10 md:pb-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 to-transparent">
        <div className="container max-w-7xl grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              คุ้มครองรอบด้าน <span className="text-primary">เข้าใจง่าย</span> โปร่งใส
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              ชีวิต สุขภาพ อุบัติเหตุ ออม/บำนาญ และประกันกลุ่ม
              เลือกแผนที่ใช่กับผู้เชี่ยวชาญ Heath Planner
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/products" className="btn-primary">ดูแบบประกัน</Link>
              <Link href="/contact" className="btn-outline">ปรึกษาฟรี</Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-[32px] overflow-hidden ring-1 ring-gray-200/70">
            <Image src="/hero/cover.jpg" alt="Heath Planner" fill className="object-cover"/>
          </div>
        </div>
      </section>
	  
	  <HomeStrengths />
    <HomeSteps />

      {/* แถบติดต่อ */}
      <div className="py-6">
        <ContactStrip />
      </div>

      {/* การ์ดแบบประกันยอดนิยม (เหมือนเรฟ 4 ใบ) */}
      <HomePopular />
	  <AgentBenefits />

      {/* CEO/Intro + CTA 2 ปุ่ม */}
      <section className="section">
        <div className="container max-w-7xl grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-primary/5 -z-10"/>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-gray-200/70">
              <Image src="/hero/intro.jpg" alt="Intro" fill className="object-cover"/>
            </div>
          </div>
          <div>
            <h3 className="heading">Heath Planner — เราคือตัวแทนคุณภาพ</h3>
            <p className="subheading">
              ตัวแทนประกันชีวิตคุณภาพจาก อลิอันซ์ อยุธยา รับความคุ้มครองชีวิต พร้อมออกแบบการออมในแบบของคุณ เลือกระยะเวลาและจำนวนเงินออมได้ตามต้องการ....
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/contact?topic=ต้องการแผนที่ใช่" className="btn-primary">ต้องการความคุ้มครองที่ใช่</Link>
              <Link href="/agent" className="btn-outline">สมัครเป็นตัวแทน</Link>
            </div>
          </div>
        </div>
      </section>

	  <LeaderHighlight />
	  <HomeFAQ />

      {/* วิดีโอ */}
      <Section title="วิดีโอน่ารู้" subtitle="สาระสั้น ๆ เข้าใจประกันง่ายขึ้น">
        <VideoStrip />
      </Section>

      {/* บทความ */}
      <Section title="บทความ & ความรู้" subtitle="อัปเดตมุมคิดและเทคนิคเลือกความคุ้มครอง">
        <BlogGrid items={featuredPosts} />
        <div className="mt-8 text-center"><Link className="btn-outline" href="/blog">อ่านทั้งหมด</Link></div>
      </Section>

      {/* CTA ปิดท้าย */}
      <CTA />
    </>
  );
}
