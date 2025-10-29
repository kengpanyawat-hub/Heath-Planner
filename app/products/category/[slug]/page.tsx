import Section from "@/components/Section";
import CategoryHero from "@/components/CategoryHero";
import BulletSection from "@/components/BulletSection";
import RelatedProducts from "@/components/RelatedProducts";
import categories from "@/data/categories.json";
import products from "@/data/products.json";

type Cat = {
  slug: string;
  title: string;
  hero: string;
  intro?: string;
  sections?: { heading:string; bullets:string[] }[];
  relatedCategory?: string;
};

export const dynamicParams = false;

export function generateStaticParams(){
  return (categories as Cat[]).map(c => ({ slug: c.slug }));
}

export function generateMetadata({ params }:{ params:{ slug:string } }){
  const c = (categories as Cat[]).find(x => x.slug === params.slug);
  return { title: c ? c.title : "แบบประกัน" };
}

export default function Page({ params }:{ params:{ slug:string } }){
  const cat = (categories as Cat[]).find(x => x.slug === params.slug);
  if(!cat) return null;

  const related = (products as any[]).filter(p => p.category === cat.relatedCategory);

  return (
    <>
      <section className="pt-10 pb-4">
        <CategoryHero title={cat.title} hero={cat.hero} intro={cat.intro} />
      </section>

      {/* บล็อกหัวข้อแบบ bullet ตามหมวด */}
      {cat.sections?.map((s, i)=>(
        <BulletSection key={i} heading={s.heading} bullets={s.bullets}/>
      ))}

      {/* การ์ดสินค้าแนะนำ */}
      <RelatedProducts items={related}/>
    </>
  );
}
