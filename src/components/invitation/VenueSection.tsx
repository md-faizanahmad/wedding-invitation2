import { invitation } from "@/data/invitation";

export default function VenueSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    invitation.event.mapsQuery,
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#f5eee4] px-6 py-20 text-center">
      <p className="font-sans text-xs uppercase tracking-[0.35em] text-[#9a8068]">
        Join Us
      </p>

      <h2 className="mt-4 font-serif text-4xl text-[#55483d]">The Venue</h2>

      <div className="mx-auto mt-8 max-w-md border-y border-[#c9b69f] py-8">
        <h3 className="font-serif text-2xl text-[#55483d]">
          {invitation.event.venue}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#847365]">
          {invitation.event.address}
        </p>

        <p className="mt-5 text-sm text-[#847365]">
          {invitation.event.date} · {invitation.event.time}
        </p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex border border-[#8b7764] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[#55483d] transition-colors hover:bg-[#55483d] hover:text-white"
        >
          View Location
        </a>
      </div>
    </section>
  );
}
