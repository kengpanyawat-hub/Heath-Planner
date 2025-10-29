// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Prompt } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

const font = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.heathplanner.com/"),
  title: {
    default: "Heath Planner — วางแผนประกันชีวิต สุขภาพ อุบัติเหตุ และกลุ่ม",
    template: "%s | HeathPlanner",
  },
  description:
    "Heath Planner ที่ปรึกษาประกันชีวิตและการเงิน ช่วยออกแบบความคุ้มครองสุขภาพ ออมระยะยาว บำนาญ และวางแผนลดหย่อนภาษีสำหรับบุคคล/นิติบุคคล โดยทีมมืออาชีพจากอลิอันซ์ อยุธยา",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Heath Planner",
    description: "Heath Planner ที่ปรึกษาประกันชีวิตและการเงิน ช่วยออกแบบความคุ้มครองสุขภาพ ออมระยะยาว บำนาญ และวางแผนลดหย่อนภาษีสำหรับบุคคล/นิติบุคคล โดยทีมมืออาชีพจากอลิอันซ์ อยุธยา",
    url: "https://www.heathplanner.com/",
    siteName: "HeathPlanner",
    images: [{ url: "/logo.svg" }],
    locale: "th_TH",
    type: "website",
  },
  // >>> สำคัญ: ประกาศ favicon / apple-icon / mask-icon ที่นี่
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" }, // ถ้ามี
    ],
    apple: [{ url: "/apple-icon.png" }],       // ถ้ามี
    other: [{ rel: "mask-icon", url: "/mask-icon.svg", color: "#0F3DDE" }], // ถ้ามี
  },
  // (ทางเลือก) สีแถบเบราว์เซอร์มือถือ
  themeColor: "#0F3DDE",
};

export const viewport: Viewport = {
  themeColor: "#0F3DDE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className={font.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
