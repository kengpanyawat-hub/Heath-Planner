/** @type {import('next').NextConfig} */
const nextConfig = {
  // สร้างเป็น Static site (โฟลเดอร์ out/)
  output: 'export',

  // ให้ URL มีเครื่องหมาย / ท้ายทาง (ช่วยเวลาอัปขึ้นโฮสต์แบบไฟล์ล้วน)
  trailingSlash: true,

  // ใช้ไฟล์รูปแบบ static: ปิด image optimization ของ Next
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [], // ใช้รูปใน /public เป็นหลัก
  },

  // ปิด experimental ที่ไม่จำเป็น เพื่อลด edge case ระหว่าง build
  experimental: {
    typedRoutes: false,
  },

  // ให้ build ต่อได้แม้มี warning ประเภท lint/type
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
