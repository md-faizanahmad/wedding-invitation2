export default function InvitationBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Base garden atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e8ddc8] via-[#f5eddf] to-[#9ca486]" />

      {/* Champagne curtains */}
      <div className="absolute -left-[12%] -top-[5%] h-[75%] w-[38%] rounded-b-[50%] bg-gradient-to-r from-[#9f8061] via-[#d8c2a0] to-[#b69a78] shadow-[12px_10px_35px_rgba(76,55,36,0.15)]" />

      <div className="absolute -right-[12%] -top-[5%] h-[75%] w-[38%] rounded-b-[50%] bg-gradient-to-l from-[#9f8061] via-[#d8c2a0] to-[#b69a78] shadow-[-12px_10px_35px_rgba(76,55,36,0.15)]" />

      {/* Central garden arch */}
      <div className="absolute left-1/2 top-[8%] h-[48%] w-[78%] max-w-[620px] -translate-x-1/2 rounded-t-full border-[10px] border-[#a8a184]/70 bg-gradient-to-b from-[#dce0ce] to-[#f2eadc] shadow-inner sm:border-[14px]" />

      {/* Garden foliage */}
      <div className="absolute -bottom-16 -left-10 h-48 w-[55%] rounded-[50%] bg-gradient-to-t from-[#526448] to-[#8d9a77]" />
      <div className="absolute -bottom-16 -right-10 h-48 w-[55%] rounded-[50%] bg-gradient-to-t from-[#526448] to-[#8d9a77]" />

      {/* Fountain silhouette */}
      <div className="absolute bottom-[9%] left-1/2 flex -translate-x-1/2 flex-col items-center opacity-70">
        <div className="h-12 w-2 rounded-full bg-[#e6dfca]" />
        <div className="h-3 w-24 rounded-[50%] bg-[#e6dfca] shadow-[0_3px_8px_rgba(45,50,35,0.2)] sm:w-32" />
        <div className="h-7 w-16 rounded-b-full border-b-4 border-x-4 border-[#e6dfca] sm:w-24" />
        <div className="h-2 w-32 rounded-[50%] bg-[#e6dfca] sm:w-40" />
      </div>

      {/* Soft lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.5),transparent_65%)]" />
    </div>
  );
}
