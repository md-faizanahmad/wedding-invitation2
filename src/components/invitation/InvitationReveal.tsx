import { invitation } from "@/data/invitation";
import WeddingStage from "./WeddingStage";
import CurtainReveal from "./CurtainReveal";

export default function InvitationReveal() {
  const { couple, event, messages } = invitation;

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-5 py-12">
      <WeddingStage />
      <CurtainReveal />

      <section className="relative z-10 mx-auto flex min-h-[85svh] w-full max-w-85 flex-col items-center justify-center px-5 py-12 text-center">
        {/* Introduction */}
        <p className="font-heading text-lg italic text-[#76664c]">
          We&apos;re getting married
        </p>

        <div className="my-5 flex items-center gap-3">
          <span className="h-px w-12 bg-[#ad9877]" />
          <span className="text-xs text-[#927a55]">♥</span>
          <span className="h-px w-12 bg-[#ad9877]" />
        </div>

        {/* Couple names */}
        <h1 className="font-heading text-5xl font-medium italic leading-tight text-[#4d4938]">
          {couple.firstName}
        </h1>

        <div className="my-3 font-heading text-2xl italic text-[#a28a65]">
          &
        </div>

        <h2 className="font-heading text-5xl font-medium italic leading-tight text-[#4d4938]">
          {couple.secondName}
        </h2>

        {/* Family information */}
        <div className="mt-7 space-y-1 font-heading text-sm italic leading-relaxed text-[#75694f]">
          <p>{messages.invitation}</p>
          <p>{messages.request}</p>
        </div>

        {/* Event details */}
        <div className="mt-7 space-y-2 font-body text-[11px] tracking-[0.12em] text-[#655c49]">
          <p className="font-semibold uppercase">{event.date}</p>
          <p>{event.time}</p>
          <p className="pt-2 font-semibold uppercase">{event.venue}</p>
          <p className="normal-case tracking-normal">{event.address}</p>
        </div>

        {/* Closing message */}
        <div className="mt-8">
          <span className="text-sm text-[#927a55]">✦</span>
          <p className="mt-2 font-heading text-lg italic text-[#76664c]">
            {messages.closing}
          </p>
        </div>
      </section>
    </main>
  );
}
