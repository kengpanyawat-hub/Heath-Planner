// app/activities/[slug]/page.tsx
import ActivitiesClient from "./_client";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  // เผื่อ build เป็น static export มีหน้า team แน่นอน
  return [{ slug: "team" }];
}

export function generateMetadata({ params }: Props) {
  const title = `รูปกิจกรรมทั้งหมด — ${params.slug} | Heath Planner`;
  const description =
    "รวมภาพบรรยากาศกิจกรรม ทีมงาน และความสำเร็จร่วมกัน โดย Heath Planner";
  return { title, description };
}

export default function ActivitiesAllPage({ params }: Props) {
  return <ActivitiesClient slug={params.slug} />;
}
