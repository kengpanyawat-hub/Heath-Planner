// /app/terms/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข้อกำหนดการใช้งาน | Health Planner",
  description:
    "ข้อกำหนดและเงื่อนไขในการใช้งานเว็บไซต์ Health Planner เพื่อให้การใช้บริการเป็นไปอย่างถูกต้องและปลอดภัย",
};

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        ข้อกำหนดการใช้งาน (Terms of Service)
      </h1>

      <p className="mb-4">
        เว็บไซต์ Health Planner (“เว็บไซต์”) ถูกจัดทำขึ้นเพื่อให้ข้อมูลด้านการประกันและบริการต่าง ๆ
        การเข้าถึงและใช้งานเว็บไซต์นี้ถือว่าผู้ใช้ได้ยอมรับข้อกำหนดและเงื่อนไขเหล่านี้แล้ว
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        1. การยอมรับข้อกำหนด
      </h2>
      <p className="mb-3">
        ผู้ใช้งานตกลงที่จะปฏิบัติตามข้อกำหนดทุกประการของเว็บไซต์
        และยอมรับการเปลี่ยนแปลงที่อาจเกิดขึ้นโดยไม่ต้องแจ้งล่วงหน้า
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        2. การใช้งานเว็บไซต์
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>ห้ามใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ผิดกฎหมายหรือเป็นอันตราย</li>
        <li>
          ห้ามกระทำการใด ๆ ที่อาจก่อให้เกิดความเสียหายต่อระบบ ความปลอดภัย หรือข้อมูลของเว็บไซต์
        </li>
        <li>ห้ามเผยแพร่เนื้อหาที่ละเมิดลิขสิทธิ์ หรือข้อมูลเท็จ</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        3. ลิขสิทธิ์และทรัพย์สินทางปัญญา
      </h2>
      <p className="mb-3">
        ข้อมูลทั้งหมดในเว็บไซต์นี้ รวมถึงข้อความ รูปภาพ โลโก้
        และเนื้อหาอื่น ๆ เป็นทรัพย์สินของ Health Planner
        ห้ามทำซ้ำหรือดัดแปลงโดยไม่ได้รับอนุญาต
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
        4. การจำกัดความรับผิดชอบ
      </h2>
      <p className="mb-3">
      Health Planner ไม่รับผิดชอบต่อความเสียหายที่อาจเกิดขึ้นจากการใช้งานเว็บไซต์
        รวมถึงข้อมูลที่ผู้ใช้ส่งผ่านหรือได้รับจากเว็บไซต์นี้
      </p>

      <p className="mt-6">
        หากมีคำถามเพิ่มเติมเกี่ยวกับข้อกำหนดนี้ กรุณาติดต่อ{" "}
        <strong>legal@Healthplanner.com</strong>
      </p>
    </main>
  );
}
