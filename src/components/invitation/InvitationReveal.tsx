import { invitation } from "@/data/invitation";
import WeddingStage from "./WeddingStage";
import CurtainReveal from "./CurtainReveal";
import ScratchReveal from "./ScratchReveal";
import WeddingCountdown from "./WeddingCountdown";
import VenueSection from "./VenueSection";
import EventSchedule from "./EventSchedule";
import RSVPSection from "./RSVPSection";

export default function InvitationReveal() {
  const { couple, event, messages } = invitation;

  return (
    <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
      <WeddingStage />
      <CurtainReveal />

      {/* Main invitation */}
      <section className="relative z-10 mx-auto flex min-h-svh w-full max-w-97.5 flex-col items-center justify-center px-6 py-16 text-center">
        <p className="font-heading text-lg italic text-[#76664c]">
          We&apos;re getting married
        </p>

        <div className="my-5 flex items-center gap-3">
          <span className="h-px w-12 bg-[#ad9877]" />
          <span className="text-xs text-[#927a55]">♥</span>
          <span className="h-px w-12 bg-[#ad9877]" />
        </div>

        <h1 className="font-heading text-5xl font-medium italic text-[#4d4938]">
          {couple.firstName}
        </h1>

        <span className="my-3 font-heading text-2xl italic text-[#a28a65]">
          &
        </span>

        <h2 className="font-heading text-5xl font-medium italic text-[#4d4938]">
          {couple.secondName}
        </h2>

        <div className="mt-7 space-y-1 font-heading text-sm italic text-[#75694f]">
          <p>{messages.invitation}</p>
          <p>{messages.request}</p>
        </div>

        <div className="mt-7 space-y-2 font-body text-[11px] tracking-[0.12em] text-[#655c49]">
          <p className="font-semibold uppercase">{event.date}</p>
          <p>{event.time}</p>
          <p className="pt-2 font-semibold uppercase">{event.venue}</p>
          <p className="normal-case tracking-normal">{event.address}</p>
        </div>

        <p className="mt-8 font-heading text-lg italic text-[#76664c]">
          {messages.closing}
        </p>

        <span className="mt-12 animate-bounce text-xl text-[#927a55]">↓</span>
        <p className="mt-2 font-body text-[9px] uppercase tracking-[0.25em] text-[#76664c]">
          Scroll for details
        </p>
      </section>

      {/* Ceremony details */}
      <section className="relative z-10 mx-auto flex min-h-[75svh] w-full max-w-97.5 flex-col items-center justify-center px-7 py-20 text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[#76664c]">
          Save the date
        </p>

        <div className="my-5 h-px w-16 bg-[#ad9877]" />

        <h2 className="font-heading text-4xl italic text-[#4d4938]">
          Wedding Ceremony
        </h2>

        <p className="mt-6 font-heading text-2xl text-[#76664c]">
          {event.date}
        </p>

        <p className="mt-3 font-body text-xs tracking-widest text-[#655c49]">
          {event.time}
        </p>

        <div className="my-8 text-2xl text-[#927a55]">❀</div>

        <h3 className="font-heading text-2xl italic text-[#4d4938]">
          {event.venue}
        </h3>

        <p className="mt-3 max-w-65 font-body text-xs leading-6 text-[#655c49]">
          {event.address}
        </p>

        <p className="mt-10 font-heading text-lg italic text-[#76664c]">
          We look forward to celebrating with you.
        </p>
      </section>
      <ScratchReveal />
      <WeddingCountdown />
      <VenueSection />
      <EventSchedule />
      <RSVPSection />
    </main>
  );
}
