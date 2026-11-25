interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function Envelope({ isOpen, onOpen }: EnvelopeProps) {
  return (
    <div
      className="relative isolate aspect-[1.5/1] w-full [perspective:1000px]"
      aria-label="Wedding invitation envelope"
    >
      {/* Envelope back */}
      <div className="absolute inset-0 z-0 border border-[#c3c8a9] bg-[#e6e3ce] shadow-[0_25px_60px_rgba(25,35,20,0.25)]" />

      {/* Invitation letter */}
      <div
        className={`
          absolute left-[8%] top-[5%] z-[1]
          flex h-[88%] w-[84%]
          flex-col items-center justify-center
          bg-[#fbf8ef] text-center
          transition-transform duration-1000 ease-in-out
          ${isOpen ? "-translate-y-[65%]" : "translate-y-0"}
        `}
      >
        <span className="font-heading text-2xl text-primary-dark">
          Wedding Invitation
        </span>

        <span className="mt-2 text-xs tracking-[0.2em] text-muted">
          TOGETHER WITH OUR FAMILIES
        </span>
      </div>

      {/* Envelope front panels */}
      <div className="absolute inset-0 z-[3] overflow-hidden">
        <div className="absolute inset-0 [clip-path:polygon(0_0,54%_50%,0_100%)] bg-[#c3c9a9]" />

        <div className="absolute inset-0 [clip-path:polygon(100%_0,46%_50%,100%_100%)] bg-[#b2bb97]" />

        <div className="absolute inset-0 [clip-path:polygon(0_100%,50%_47%,100%_100%)] bg-gradient-to-br from-[#dce0c4] to-[#aab391]" />
      </div>

      {/* Wax seal */}
      <button
        type="button"
        onClick={onOpen}
        disabled={isOpen}
        aria-label="Open wedding invitation"
        className={`
          absolute left-1/2 top-1/2 z-[5]
          grid size-[62px] -translate-x-1/2 -translate-y-1/2
          place-items-center rounded-full
          border border-[#b5a077]
          bg-[radial-gradient(circle_at_35%_30%,#d5c39a,#9d8050)]
          text-2xl text-[#fff9e9]
          shadow-md transition-all duration-300
          hover:scale-105
          disabled:pointer-events-none
          ${isOpen ? "scale-50 opacity-0" : "scale-100 opacity-100"}
        `}
      >
        ♥
      </button>

      {/* Envelope flap */}
      <div
        className={`
          absolute inset-0 z-[4]
          origin-top
          [clip-path:polygon(0_0,100%_0,50%_57%)]
          bg-gradient-to-br from-[#e4e6d0] to-[#aab391]
          [backface-visibility:hidden]
          transition-transform duration-700 ease-in-out
          ${isOpen ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"}
        `}
      />
    </div>
  );
}
