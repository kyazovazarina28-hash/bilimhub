import { useEffect, useRef, type FC } from "react";
import { useNavigate } from "react-router-dom";

const SEGMENTS_COUNT = 6;
const SEGMENT_LABELS = ["⚛️", "+", "−", "+", "−", "⚡"];

const PhysicsStartScreen: FC = () => {
  const navigate = useNavigate();

  const mousePos = useRef({ x: 0, y: 0 });
  const physicsSegments = useRef(
    Array.from({ length: SEGMENTS_COUNT }, () => ({ x: 100, y: 100 })),
  );
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    mousePos.current = { x: startX, y: startY };
    physicsSegments.current = Array.from({ length: SEGMENTS_COUNT }, () => ({
      x: startX,
      y: startY,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId = 0;

    const updatePhysicsChain = () => {
      const headLerp = 0.18;
      const head = physicsSegments.current[0];
      head.x += (mousePos.current.x - head.x) * headLerp;
      head.y += (mousePos.current.y - head.y) * headLerp;

      const chainLerp = 0.22;
      for (let i = 1; i < SEGMENTS_COUNT; i++) {
        const prev = physicsSegments.current[i - 1];
        const curr = physicsSegments.current[i];
        curr.x += (prev.x - curr.x) * chainLerp;
        curr.y += (prev.y - curr.y) * chainLerp;
      }

      segmentRefs.current.forEach((el, idx) => {
        if (!el) return;
        const seg = physicsSegments.current[idx];
        const scale = 1 - idx * 0.06;
        el.style.transform = `translate3d(${seg.x - 20}px, ${seg.y - 20}px, 0) scale(${scale})`;
        el.style.zIndex = `${100 - idx}`;
      });

      animationFrameId = requestAnimationFrame(updatePhysicsChain);
    };

    animationFrameId = requestAnimationFrame(updatePhysicsChain);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full select-none overflow-hidden bg-[#130624]">
      {Array.from({ length: SEGMENTS_COUNT }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => {
            segmentRefs.current[idx] = el;
          }}
          className={`pointer-events-none absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-black text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] will-change-transform ${
            idx === 0
              ? "animate-spin bg-[#a855f7] text-lg text-white [animation-duration:3s]"
              : idx % 2 === 1
                ? "bg-cyan-400 text-black shadow-[0_0_10px_#22d3ee]"
                : "bg-pink-500 text-white shadow-[0_0_10px_#ec4899]"
          }`}
          style={{ left: 0, top: 0, position: "fixed" }}
        >
          {SEGMENT_LABELS[idx]}
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="mx-4 w-full max-w-sm rounded-2xl border-4 border-black bg-[#241442] p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-4 inline-block animate-bounce rounded-xl border-2 border-black bg-[#a855f7] p-3 text-2xl">
            ⚛️
          </div>
          <h1 className="mb-2 text-2xl font-black uppercase tracking-wider text-[#a855f7]">
            ФИЗИКА ААЛАМЫ
          </h1>
          <p className="mb-6 text-xs font-bold uppercase tracking-wide text-cyan-400">
            Кванттык сырларды ачууга даярсыңбы?
          </p>
          <button
            type="button"
            onClick={() => navigate("/physics-game")}
            className="w-full rounded-xl border-2 border-black bg-[#a3e635] px-6 py-3 font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ОЮНДУ БАШТОО 🚀
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 z-10 w-full text-center text-[10px] font-bold tracking-widest text-purple-900">
        FAIRYGAME PLATFORM © 2026
      </div>
    </div>
  );
};

export default PhysicsStartScreen;
