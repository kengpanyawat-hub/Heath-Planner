type T = { name:string; title:string; text:string; avatar?:string; };
const REVIEWS:T[] = [
  { name:"ลูกค้า A", title:"ความเอาใจใส่", text:"ดูแลใกล้ชิด บริการประทับใจค่ะ", avatar:"/reviews/a.jpg" },
  { name:"ลูกค้า B", title:"บริการ", text:"อธิบายละเอียดแบบประกันได้อย่างครบถ้วน ประทับใจบริการหลังการขาย", avatar:"/reviews/b.jpg" },
  { name:"ลูกค้า C", title:"ความไว้วางใจ", text:"แนะนำแผนที่ตรงกับงบและเป้าหมาย", avatar:"/reviews/c.jpg" }
];

export default function Testimonials(){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {REVIEWS.map(r => (
        <figure key={r.name} className="rounded-2xl bg-gray-50 border border-gray-200/70 p-6">
          <div className="flex items-center gap-4">
            <img src={r.avatar ?? "/reviews/placeholder.jpg"} alt={r.name}
                 className="h-14 w-14 rounded-full object-cover"/>
            <div>
              <div className="font-semibold">{r.title}</div>
              <div className="text-sm text-gray-500">{r.name}</div>
            </div>
          </div>
          <figcaption className="mt-4 text-gray-700 leading-7">{r.text}</figcaption>
        </figure>
      ))}
    </div>
  );
}
