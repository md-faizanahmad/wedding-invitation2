export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Invitation experience will be implemented here */}
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-muted">
            A Special Invitation
          </p>

          <h1 className="font-heading text-5xl font-medium text-primary md:text-7xl">
            Wedding Invitation
          </h1>

          <p className="mt-4 font-body text-sm text-muted">
            A beautiful beginning to forever.
          </p>
        </div>
      </section>
    </main>
  );
}
