// components/HomePopular.tsx
import { products } from "@/data/products.ts";
import ProductGrid from "@/components/ProductGrid";

export default function HomePopular() {
  // เลือก 6 รายการแรก หรือจะเปลี่ยนเงื่อนไขการคัด “ยอดนิยม” ภายหลังได้
  const popular = products.slice(0, 6);

  return (
    <section className="py-12">
      <div className="container max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#325BBA]">
            แบบประกันยอดนิยม
          </h2>
          <p className="text-gray-600 mt-1">
            แผนที่ลูกค้านิยมเลือก คุ้มค่า ใช้งานง่าย
          </p>
        </div>

        {/* ProductGrid จะแสดง 6 ชิ้นตามที่ส่งเข้าไป */}
        <ProductGrid items={popular} filterable={false} />
      </div>
    </section>
  );
}
