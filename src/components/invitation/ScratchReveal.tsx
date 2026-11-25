"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function ScratchReveal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isScratching = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);

  const drawHeart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;

    const heart = new Path2D();
    heart.moveTo(width / 2, height * 0.88);
    heart.bezierCurveTo(
      width * 0.12,
      height * 0.62,
      width * 0.02,
      height * 0.37,
      width * 0.23,
      height * 0.22,
    );
    heart.bezierCurveTo(
      width * 0.36,
      height * 0.12,
      width * 0.47,
      height * 0.22,
      width / 2,
      height * 0.35,
    );
    heart.bezierCurveTo(
      width * 0.66,
      height * 0.12,
      width * 0.89,
      height * 0.17,
      width * 0.96,
      height * 0.39,
    );
    heart.bezierCurveTo(
      width * 1.02,
      height * 0.59,
      width * 0.75,
      height * 0.78,
      width / 2,
      height * 0.88,
    );
    heart.closePath();

    ctx.save();
    ctx.clip(heart);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#fff0b5");
    gradient.addColorStop(0.35, "#d9b45c");
    gradient.addColorStop(0.7, "#a77b35");
    gradient.addColorStop(1, "#f5d98c");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Glitter texture
    for (let i = 0; i < 350; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;

      ctx.beginPath();
      ctx.arc(x, y, Math.random() * 1.5 + 0.3, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0 ? "#fff9dc" : "#8e652e";
      ctx.globalAlpha = Math.random() * 0.65 + 0.2;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    ctx.restore();

    // Heart outline
    ctx.strokeStyle = "#c7a45e";
    ctx.lineWidth = 2;
    ctx.stroke(heart);
  }, []);

  useEffect(() => {
    drawHeart();
  }, [drawHeart]);

  const checkReveal = (ctx: CanvasRenderingContext2D) => {
    const { width, height } = ctx.canvas;
    const pixels = ctx.getImageData(0, 0, width, height).data;

    let total = 0;
    let transparent = 0;

    // Sample pixels for performance
    for (let i = 3; i < pixels.length; i += 64) {
      total++;

      if (pixels[i] < 30) {
        transparent++;
      }
    }

    if (transparent / total > 0.45) {
      setIsRevealed(true);
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (isRevealed) return;

    isScratching.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);

    const ctx = event.currentTarget.getContext("2d");
    if (!ctx) return;

    const rect = event.currentTarget.getBoundingClientRect();

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(
      event.clientX - rect.left,
      event.clientY - rect.top,
      18,
      0,
      Math.PI * 2,
    );
    ctx.fill();

    checkReveal(ctx);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching.current || isRevealed) return;

    const ctx = event.currentTarget.getContext("2d");
    if (!ctx) return;

    const rect = event.currentTarget.getBoundingClientRect();

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 36;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);

    checkReveal(ctx);
  };

  const handlePointerUp = () => {
    isScratching.current = false;
  };

  return (
    <section className="flex min-h-[85svh] flex-col items-center justify-center bg-[#f8f2e8] px-6 py-16 text-center">
      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[#8b795a]">
        A little surprise awaits
      </p>

      <h2 className="mt-4 font-heading text-4xl italic text-[#6d7457]">
        Scratch to Reveal
      </h2>

      <p className="mt-3 max-w-xs font-body text-xs leading-6 text-[#827966]">
        Use your finger or mouse to gently scratch the golden heart.
      </p>

      <div className="relative mt-8 aspect-square w-full max-w-[290px]">
        {/* Hidden message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-12">
          <span className="text-3xl text-[#b99a5d]">♥</span>

          <p className="mt-3 font-heading text-2xl italic text-[#687454]">
            Save the Date
          </p>

          <p className="mt-2 font-heading text-xl text-[#76664c]">
            25 December 2026
          </p>

          <p className="mt-3 font-body text-[10px] text-[#827966]">
            We can&apos;t wait to celebrate with you!
          </p>
        </div>

        {/* Scratchable heart */}
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className={`absolute inset-0 h-full w-full touch-none ${
            isRevealed ? "pointer-events-none opacity-0" : "cursor-crosshair"
          }`}
          aria-label="Scratch the golden heart to reveal the wedding date"
        />
      </div>

      <p className="mt-6 font-body text-[10px] uppercase tracking-[0.2em] text-[#96845f]">
        {isRevealed ? "SURPRISE REVEALED ♥" : "SCRATCH THE HEART"}
      </p>
    </section>
  );
}
