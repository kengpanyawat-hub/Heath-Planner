
# DragonSheild — Insurance Website (Next.js 14 + Tailwind)

ธีมสีหลัก: `#325BBA` + ขาว • ฟอนต์: Google Font **Prompt**

## วิธีติดตั้งและใช้งาน
1) แตกไฟล์ zip แล้วเปิดโฟลเดอร์ใน VS Code  
2) ติดตั้งแพ็กเกจ:
```bash
npm i
```
3) รันโหมดพัฒนา:
```bash
npm run dev
```
4) เปิดดูที่ http://localhost:3000

> โครงสร้างข้อมูลอยู่ที่ `data/products.json` และ `data/posts.json`

## โครงสร้างหน้า
- `/` หน้าแรก (Hero + สินค้าเด่น + บทความ + ฟอร์มติดต่อย่อ)
- `/products` รายการแบบประกัน + ตัวกรอง
- `/product/[id]` หน้ารายละเอียดแบบประกันจากไฟล์ JSON
- `/agent` หน้าสมัครตัวแทน (Call-to-Action)
- `/blog` รายการบทความ
- `/blog/[slug]` บทความเดี่ยว (HTML จาก JSON)
- `/contact` ฟอร์มติดต่อ + POST ไปยัง `/api/contact`
- `robots.txt` และ `sitemap.ts` สำหรับ SEO

## ปรับปรุง/ต่อยอด
- เชื่อมต่ออีเมลหรือ CRM ใน `app/api/contact/route.ts`
- เพิ่มแผนประกัน/บทความในไฟล์ JSON หรือเชื่อมฐานข้อมูลภายหลัง
- ปรับ OG/Metadata ใน `app/layout.tsx`
