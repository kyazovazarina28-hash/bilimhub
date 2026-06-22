import { useEffect, useRef, type FC } from "react";
import { useNavigate } from "react-router-dom";

const SEGMENTS_COUNT = 5;
const SEGMENT_LABELS = ["⏳", "📜", "🪨", "🏰", "🛡️"];

const HistoryStartScreen: FC = () => {
  const navigate = useNavigate();

  const mousePos = useRef({ x: 0, y: 0 });
  const historySegments = useRef(
    Array.from({ length: SEGMENTS_COUNT }, () => ({ x: 100, y: 100 })),
  );
  const segmentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const startX = window.innerWidth / 2;
    const startY = window.innerHeight / 2;
    mousePos.current = { x: startX, y: startY };
    historySegments.current = Array.from({ length: SEGMENTS_COUNT }, () => ({
      x: startX,
      y: startY,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId = 0;
    const updateHistoryChain = () => {
      const head = historySegments.current[0];
      head.x += (mousePos.current.x - head.x) * 0.16;
      head.y += (mousePos.current.y - head.y) * 0.16;

      for (let i = 1; i < SEGMENTS_COUNT; i++) {
        const prev = historySegments.current[i - 1];
        const curr = historySegments.current[i];
        curr.x += (prev.x - curr.x) * 0.22;
        curr.y += (prev.y - curr.y) * 0.22;
      }

      segmentRefs.current.forEach((el, idx) => {
        if (!el) return;
        const seg = historySegments.current[idx];
        const scale = 1 - idx * 0.06;
        el.style.transform = `translate3d(${seg.x - 18}px, ${seg.y - 18}px, 0) scale(${scale})`;
        el.style.zIndex = `${100 - idx}`;
      });

      animationFrameId = requestAnimationFrame(updateHistoryChain);
    };

    animationFrameId = requestAnimationFrame(updateHistoryChain);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full select-none overflow-hidden bg-[#1a1208]">
      {Array.from({ length: SEGMENTS_COUNT }).map((_, idx) => (
        <div
          key={idx}
          ref={(el) => {
            segmentRefs.current[idx] = el;
          }}
          className={`pointer-events-none absolute flex h-9 w-9 items-center justify-center rounded-full border-2 border-black text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] will-change-transform ${
            idx === 0
              ? "animate-pulse bg-[#f59e0b] text-lg text-black"
              : "bg-[#92400e] text-amber-100"
          }`}
          style={{ left: 0, top: 0, position: "fixed" }}
        >
          {SEGMENT_LABELS[idx]}
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <div className="mx-4 w-full max-w-sm rounded-2xl border-4 border-black bg-[#3d2a14] p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-4 inline-block animate-bounce rounded-xl border-2 border-black bg-[#f59e0b] p-3 text-2xl">
            📜
          </div>
          <h1 className="mb-2 text-2xl font-black uppercase tracking-wider text-[#fbbf24]">
            УБАКЫТ САЯКАТЫ
          </h1>
          <p className="mb-6 text-xs font-bold uppercase tracking-wide text-amber-200">
            Тарыхый сырларды ачууга даярсыңбы?
          </p>
          <button
            type="button"
            onClick={() => navigate("/history-game")}
            className="w-full rounded-xl border-2 border-black bg-[#fbbf24] px-6 py-3 font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ОЮНДУ БАШТОО 🚀
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 z-10 w-full text-center text-[10px] font-bold tracking-widest text-amber-900">
        FAIRYGAME PLATFORM © 2026
      </div>
    </div>
  );
};

export default HistoryStartScreen;
