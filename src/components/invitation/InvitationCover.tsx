"use client";

import { useState } from "react";
import Envelope from "./Envelope";
import FloralDecoration from "./FloralDecoration";

export default function InvitationCover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="relative grid min-h-svh place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_45%,#9ba586_0%,transparent_65%),linear-gradient(145deg,#667354,#849071_55%,#596449)] px-5 py-10">
      <FloralDecoration className="pointer-events-none absolute -left-8 -top-10 z-0 w-48 opacity-70 sm:w-64" />

      <FloralDecoration
        flip
        className="pointer-events-none absolute -bottom-10 -right-8 z-0 w-48 opacity-70 sm:w-64"
      />
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-24 -top-32 size-62.5 rounded-full border border-white/10" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 size-62.5 rounded-full border border-white/10" />

      {/* Invitation content */}
      <div className="relative z-10 flex w-full flex-col items-center gap-12">
        <p className="text-center text-[10px] font-medium tracking-[0.3em] text-[#f5edda]">
          YOU ARE CORDIALLY INVITED
        </p>

        {/* Envelope */}
        <div className="w-full max-w-105 px-2.5">
          <Envelope isOpen={isOpen} onOpen={() => setIsOpen(true)} />
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="font-heading text-3xl italic text-white">
            A celebration of love
          </p>

          <p className="mt-3 text-[10px] tracking-[0.2em] text-[#f0eadc]">
            {isOpen ? "YOUR INVITATION AWAITS" : "TAP THE SEAL TO OPEN"}
          </p>
        </div>
      </div>
    </main>
  );
}
