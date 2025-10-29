import * as React from "react";

/** วงกลม badge ไล่เฉด + เงา */
export function IconBadge({
  children,
  size = 80,
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) {
  const px = `${size}px`;
  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-full shadow-[0_8px_24px_rgba(50,91,186,0.25)]",
        "bg-[linear-gradient(135deg,#325BBA_0%,#6087E1_100%)]",
        className,
      ].join(" ")}
      style={{ width: px, height: px }}
    >
      {children}
    </div>
  );
}

/** วงกลม badge ขนาดเล็ก (เช่นใน Contact) */
export function IconPill({
  children,
  size = 44,
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) {
  const px = `${size}px`;
  return (
    <div
      className={[
        "inline-flex items-center justify-center rounded-full",
        "bg-[linear-gradient(135deg,#325BBA_0%,#6087E1_100%)]",
        "shadow-[0_6px_18px_rgba(50,91,186,0.25)]",
        className,
      ].join(" ")}
      style={{ width: px, height: px }}
    >
      {children}
    </div>
  );
}

/* ===== Glyphs (เส้น 2px, สี currentColor) ===== */
export const ClockGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DollarGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 3v18M8 8a3 3 0 0 0 3 3h2a3 3 0 1 1 0 6H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BookGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M4 5a3 3 0 0 1 3-3h10v18H7a3 3 0 0 1-3-3V5Z" stroke="currentColor" strokeWidth="2" />
    <path d="M17 2h1a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const LaptopGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 18h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ThumbsGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M7 10v9H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3Zm0 0 5-7a2 2 0 0 1 2 2v3h4a2 2 0 0 1 2 2l-1 5a2 2 0 0 1-2 2H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const UsersGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 11a3 3 0 1 0 0-6" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 21a7 7 0 0 1 14 0M16 21a5 5 0 0 1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* Navigation / Contact glyphs (เล็ก) */
export const PhoneGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M22 16.9v2a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 4.2 5.9 2 2 0 0 1 6.1 4h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L9 11a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const LineGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p} aria-label="LINE">
    <path
      d="
        M7.5 5.5
        H16.5
        a4 4 0 0 1 4 4
        v3
        a4 4 0 0 1-4 4
        h-5.2
        l-3.3 2.4
        c-.6.44-1.4-.08-1.2-.78
        l.6-2.02
        H7.5
        a4 4 0 0 1-4-4
        v-3
        a4 4 0 0 1 4-4
        Z
      "
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FacebookGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.45 2.9h-2.35v7A10 10 0 0 0 22 12Z"/>
  </svg>
);

/* Navbar glyphs */
export const MenuGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
export const CloseGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
export const ChevronDownGlyph = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...p}>
    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
