"use client";

import { useState } from "react";

type Attendance = "yes" | "no";

export default function RSVPSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("yes");
  const [guestCount, setGuestCount] = useState("1");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim()) return;

    setSubmitted(true);
  }

  return (
    <section className="bg-[#eee4d7] px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#9a8068]">
          We Would Love to See You
        </p>

        <h2 className="mt-4 font-serif text-4xl text-[#55483d]">RSVP</h2>

        <p className="mt-3 text-sm leading-7 text-[#847365]">
          Kindly confirm your presence and celebrate this special day with us.
        </p>

        {submitted ? (
          <div className="mt-10 border border-[#c9b69f] px-6 py-10">
            <h3 className="font-serif text-2xl text-[#55483d]">Thank You!</h3>
            <p className="mt-3 text-sm text-[#847365]">
              Your response has been recorded on this page.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6 text-left">
            <div>
              <label
                htmlFor="guest-name"
                className="mb-2 block text-xs uppercase tracking-wider text-[#74604e]"
              >
                Your Name
              </label>

              <input
                id="guest-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter your full name"
                required
                maxLength={100}
                className="w-full border border-[#c9b69f] bg-transparent px-4 py-3 text-sm text-[#55483d] outline-none placeholder:text-[#a99a8a] focus:border-[#806b57]"
              />
            </div>

            <fieldset>
              <legend className="mb-3 text-xs uppercase tracking-wider text-[#74604e]">
                Will You Attend?
              </legend>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-[#55483d]">
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === "yes"}
                    onChange={() => setAttendance("yes")}
                  />
                  Joyfully Accept
                </label>

                <label className="flex items-center gap-2 text-sm text-[#55483d]">
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === "no"}
                    onChange={() => setAttendance("no")}
                  />
                  Regretfully Decline
                </label>
              </div>
            </fieldset>

            {attendance === "yes" && (
              <div>
                <label
                  htmlFor="guest-count"
                  className="mb-2 block text-xs uppercase tracking-wider text-[#74604e]"
                >
                  Number of Guests
                </label>

                <select
                  id="guest-count"
                  value={guestCount}
                  onChange={(event) => setGuestCount(event.target.value)}
                  className="w-full border border-[#c9b69f] bg-transparent px-4 py-3 text-sm text-[#55483d] outline-none focus:border-[#806b57]"
                >
                  {[1, 2, 3, 4, 5].map((count) => (
                    <option key={count} value={count}>
                      {count} {count === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#71604f] px-6 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#55483d]"
            >
              Confirm RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
