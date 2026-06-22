import { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedY: number;
  opacity: number;
  pulse: number;
}

const BUBBLE_COLORS = [
  "rgba(168, 85, 247, ",
  "rgba(236, 72, 153, ",
  "rgba(99, 102, 241, ",
];

export function useModalBubbleAnimation(isOpen: boolean) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationFrameId = 0;
    const bubbles: Bubble[] = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      canvas.width = parent?.clientWidth ?? 430;
      canvas.height = parent?.clientHeight ?? 550;
    };

    const initBubbles = () => {
      bubbles.length = 0;
      for (let i = 0; i < 22; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 22 + 10,
          color: BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)],
          speedY: -(Math.random() * 0.4 + 0.2),
          opacity: Math.random() * 0.2 + 0.1,
          pulse: Math.random() * Math.PI,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((b) => {
        b.pulse += 0.01;
        const currentOpacity = b.opacity + Math.sin(b.pulse) * 0.04;

        ctx.save();
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = `${b.color}0.3)`;
        ctx.fillStyle = `${b.color}${currentOpacity})`;
        ctx.fill();
        ctx.restore();

        b.y += b.speedY;
        if (b.y + b.radius < 0) {
          b.y = canvas.height + b.radius;
          b.x = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initBubbles();
    animate();

    const onResize = () => {
      resizeCanvas();
      initBubbles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  return canvasRef;
}
