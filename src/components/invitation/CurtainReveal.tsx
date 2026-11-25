"use client";

import { useEffect, useState } from "react";

export default function CurtainReveal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const animation = window.setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => window.clearTimeout(animation);
  }, []);

  const curtainStyle =
    "absolute inset-y-0 w-[52%] transition-transform duration-[2200ms] ease-in-out";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
    >
      {/* Left curtain */}
      <div
        className={`${curtainStyle} left-0 origin-left ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          background:
            "repeating-linear-gradient(90deg, #b69b7c 0%, #e9d8bd 9%, #c9b294 17%, #f0e2ca 25%, #b69b7c 34%)",
          boxShadow: "inset -18px 0 30px rgba(85, 61, 39, 0.18)",
        }}
      >
        <div className="absolute inset-y-0 right-0 w-3 bg-linear-to-l from-[#a78b6b]/50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#f0e2ca]/60 to-transparent" />
      </div>

      {/* Right curtain */}
      <div
        className={`${curtainStyle} right-0 origin-right ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          background:
            "repeating-linear-gradient(90deg, #b69b7c 0%, #e9d8bd 9%, #c9b294 17%, #f0e2ca 25%, #b69b7c 34%)",
          boxShadow: "inset 18px 0 30px rgba(85, 61, 39, 0.18)",
        }}
      >
        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-[#a78b6b]/50 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f0e2ca]/60 to-transparent" />
      </div>
    </div>
  );
}
