export default function InvitationReveal() {
  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#f8f5ec] px-6 py-16">
      {/* Decorative border */}
      <div className="pointer-events-none absolute inset-4 border border-[#c9c1a5] sm:inset-8" />

      <section className="relative z-10 mx-auto w-full max-w-xl text-center">
        <p className="font-body text-[10px] uppercase tracking-[0.35em] text-[#8b9273]">
          Together with their families
        </p>

        <p className="mt-12 font-heading text-2xl italic text-[#9a8b6c]">
          Request the pleasure of your company
        </p>

        <h1 className="mt-8 font-heading text-6xl font-medium text-[#687454] sm:text-7xl">
          Wedding
          <span className="mt-1 block italic">Celebration</span>
        </h1>

        <div className="mx-auto my-8 h-px w-20 bg-[#c9b990]" />

        <p className="font-body text-xs uppercase tracking-[0.25em] text-[#8b9273]">
          The wedding of
        </p>

        <p className="mt-5 font-heading text-4xl text-[#687454]">Your Names</p>

        <p className="mt-8 font-body text-sm tracking-[0.2em] text-[#817d70]">
          DATE · TIME · VENUE
        </p>
      </section>
    </main>
  );
}
