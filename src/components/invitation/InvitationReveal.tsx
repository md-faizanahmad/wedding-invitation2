import { invitation } from "@/data/invitation";

export default function InvitationReveal() {
  const { couple, event, messages } = invitation;

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f8f5ec] px-6 py-16">
      <div className="pointer-events-none absolute inset-4 border border-[#c9c1a5] sm:inset-8" />

      <section className="relative z-10 mx-auto w-full max-w-xl text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#8b9273]">
          {messages.invitation}
        </p>

        <p className="mt-12 font-heading text-2xl italic text-[#9a8b6c]">
          {messages.request}
        </p>

        <h1 className="mt-8 font-heading text-6xl font-medium text-[#687454] sm:text-7xl">
          {event.title}
        </h1>

        <div className="mx-auto my-8 h-px w-20 bg-[#c9b990]" />

        <p className="font-body text-xs uppercase tracking-[0.25em] text-[#8b9273]">
          The wedding of
        </p>

        <p className="mt-5 font-heading text-4xl text-[#687454]">
          {couple.firstName}
          <span className="mx-3 italic">&</span>
          {couple.secondName}
        </p>

        <div className="mt-8 space-y-2 font-body text-sm text-[#817d70]">
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
