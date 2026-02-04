// app/agent/page.tsx
import type { Metadata } from "next";
import AgentClient from "./_client";
import { seo, orgJsonLd, personJsonLd, breadcrumbJsonLd } from "@/lib/metadata";

export const metadata: Metadata = seo.agent;

export default function Page() {
  return (
    <>
      <AgentClient />

      {/* JSON-LD */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "หน้าแรก", path: "/" },
              { name: "สมัครตัวแทน", path: "/agent" },
            ])
          ),
        }}
      />
    </>
  );
}