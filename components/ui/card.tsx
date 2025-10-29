import * as React from "react";

export function Card({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "rounded-2xl border border-gray-200/70 bg-white shadow-sm",
        className,
      ].join(" ")}
      {...props}
    />
  );
}
