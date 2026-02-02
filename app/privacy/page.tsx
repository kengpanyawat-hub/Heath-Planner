// /app/privacy/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "นโยบายความเป็นส่วนตัว | Health Planner",
  description:
    "นโยบายความเป็นส่วนตัวของ Health Planner เกี่ยวกับการเก็บรักษา การใช้ และการปกป้องข้อมูลส่วนบุคคลของผู้ใช้บริการ",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        นโยบายความเป็นส่วนตัว (Privacy Policy)
      </h1>
      <p className="mb-4">
        Health Planner ให้ความสำคัญกับความเป็นส่วนตัวของผู้ใช้งานทุกท่าน
        เรามุ่งมั่นที่จะรักษาความปลอดภัยของข้อมูลส่วนบุคคลของคุณ
        และใช้ข้อมูลนั้นอย่างโปร่งใสภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA)
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        1. การเก็บรวบรวมข้อมูล
      </h2>
      <p className="mb-3">
        เราอาจเก็บข้อมูลส่วนบุคคล เช่น ชื่อ นามสกุล เบอร์โทรศัพท์ อีเมล
        และข้อมูลการติดต่ออื่น ๆ
        เพื่อใช้ในการให้บริการและติดต่อกลับตามความยินยอมของผู้ใช้
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        2. วัตถุประสงค์ในการใช้ข้อมูล
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>เพื่อให้บริการและติดต่อสื่อสารกับผู้ใช้งาน</li>
        <li>เพื่อปรับปรุงคุณภาพบริการและเว็บไซต์ของเรา</li>
        <li>เพื่อวิเคราะห์ทางการตลาดและการให้คำปรึกษา</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        3. การเปิดเผยข้อมูล
      </h2>
      <p className="mb-3">
        ข้อมูลของคุณจะไม่ถูกเปิดเผยแก่บุคคลที่สาม ยกเว้นกรณีที่จำเป็นต้องใช้ตามกฎหมาย
        หรือได้รับความยินยอมจากคุณล่วงหน้าเท่านั้น
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        4. ความปลอดภัยของข้อมูล
      </h2>
      <p className="mb-3">
        เราใช้มาตรการรักษาความปลอดภัยทั้งทางเทคนิคและการจัดการ
        เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        5. สิทธิของเจ้าของข้อมูล
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>สิทธิในการเข้าถึง แก้ไข หรือลบข้อมูลส่วนบุคคล</li>
        <li>สิทธิในการถอนความยินยอม</li>
        <li>สิทธิในการร้องเรียนหากพบการละเมิดข้อมูลส่วนบุคคล</li>
      </ul>

      <p className="mt-6">
        หากมีข้อสงสัยเกี่ยวกับนโยบายนี้ สามารถติดต่อได้ที่{" "}
        <strong>support@healthplanner.com</strong>
      </p>
    </main>
  );
}
