import { invitation } from "@/data/invitation";

export default function EventSchedule() {
  return (
    <section className="bg-[#f5eee4] px-6 py-20">
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
            Save the Moments
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#55483d]">
            Wedding Events
          </h2>

          <p className="mt-3 text-sm text-[#847365]">
            A day filled with love, traditions and celebrations.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute bottom-4 left-[5px] top-4 w-px bg-[#c9b69f]" />

          <div className="space-y-10">
            {invitation.schedule.map((event, index) => (
              <div
                key={`${event.time}-${event.title}`}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-[#9a8068] bg-[#f5eee4]" />

                <p className="text-xs uppercase tracking-[0.2em] text-[#9a8068]">
                  {event.time}
                </p>

                <h3 className="mt-2 font-serif text-2xl text-[#55483d]">
                  {event.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#847365]">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
