"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLine, faFacebookF } from "@fortawesome/free-brands-svg-icons";

/** ปุ่มวงกลมแบบไล่เฉดตามธีม */
function IconPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full">
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,#3E6FE0_0%,#325BBA_100%)] shadow-[0_8px_24px_rgba(50,91,186,.25)]" />
      <span className="absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,.18)_0%,rgba(255,255,255,.06)_100%)]" />
      <span className="relative text-white">{children}</span>
    </span>
  );
}

export default function ContactStrip() {
  return (
    <div className="container max-w-6xl">
      <div className="rounded-3xl bg-white border border-primary/15 shadow-sm px-6 py-6 md:px-10 md:py-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {/* โทร */}
          <a
            href="tel:0815789955"
            className="group flex items-center justify-center gap-4 rounded-2xl px-3 py-3 hover:bg-primary/5 transition"
          >
            <IconPill>
              <FontAwesomeIcon icon={faPhone} className="h-5 w-5" />
            </IconPill>
            <span className="text-center sm:text-left">
              <div className="text-xs uppercase tracking-wide text-gray-500">โทร</div>
              <div className="font-semibold text-gray-900 group-hover:text-primary">081-578-9955</div>
            </span>
          </a>

          {/* LINE */}
          <a
            href="https://lin.ee/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-4 rounded-2xl px-3 py-3 hover:bg-primary/5 transition"
          >
            <IconPill>
              <FontAwesomeIcon icon={faLine} className="h-5 w-5" />
            </IconPill>
            <span className="text-center sm:text-left">
              <div className="text-xs uppercase tracking-wide text-gray-500">LINE</div>
              <div className="font-semibold text-gray-900 group-hover:text-primary">@Healthplanner</div>
            </span>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-4 rounded-2xl px-3 py-3 hover:bg-primary/5 transition"
          >
            <IconPill>
              <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
            </IconPill>
            <span className="text-center sm:text-left">
              <div className="text-xs uppercase tracking-wide text-gray-500">Facebook</div>
              <div className="font-semibold text-gray-900 group-hover:text-primary">Health Planner</div>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
