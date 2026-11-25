import { invitation } from "@/data/invitation";
import FloralDecoration from "./FloralDecoration";
import InvitationBackdrop from "./InvitationBackdrop";
import CurtainReveal from "./CurtainReveal";
import WeddingStage from "./WeddingStage";

export default function InvitationReveal() {
  const { couple, event, messages } = invitation;

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden px-6 py-20">
      {/* <InvitationBackdrop /> */}
      <WeddingStage />
      <CurtainReveal />
      {/* Floral decorations */}
      <FloralDecoration className="absolute -left-8 top-0 z-2 w-40 opacity-80 sm:w-64" />

      <FloralDecoration
        flip
        className="absolute -right-8 top-0 z-2 w-40 opacity-80 sm:w-64"
      />

      <FloralDecoration
        flip
        className="absolute -bottom-8 left-0 z-2 w-36 rotate-180 opacity-70 sm:w-56"
      />

      <FloralDecoration className="absolute -bottom-8 right-0 z-2 w-36 rotate-180 opacity-70 sm:w-56" />

      {/* Invitation content */}
      <section className="relative z-10 mx-auto w-full max-w-xl text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#687454]">
          {messages.invitation}
        </p>

        <p className="mt-12 font-heading text-2xl italic text-[#9a8b6c]">
          {messages.request}
        </p>

        <h1 className="mt-8 font-heading text-6xl font-medium text-[#687454] sm:text-7xl">
          {event.title}
        </h1>

        <div className="mx-auto my-8 h-px w-20 bg-[#c9b990]" />

        <p className="font-body text-xs uppercase tracking-[0.25em] text-[#687454]">
          The wedding of
        </p>

        <p className="mt-5 font-heading text-4xl text-[#687454]">
          {couple.firstName}
          <span className="mx-3 italic">&</span>
          {couple.secondName}
        </p>

        <div className="mt-8 space-y-2 font-body text-sm text-[#625e52]">
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p className="pt-3 font-medium">{event.venue}</p>
          <p>{event.address}</p>
        </div>

        <p className="mt-10 font-heading text-xl italic text-[#9a8b6c]">
          {messages.closing}
        </p>
      </section>
    </main>
  );
}
