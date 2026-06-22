import { useEffect, useRef, type FC } from "react";
import { useNavigate } from "react-router-dom";
import spiderImg from "../assets/spider.svg";

const SPIDER_SIZE = 80;
const SPIDER_OFFSET = SPIDER_SIZE / 2;
const LERP_FACTOR = 0.05;

const ForestStartScreen: FC = () => {
  const navigate = useNavigate();

  const mousePos = useRef({ x: 0, y: 0 });
  const spiderPos = useRef({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 100,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 100,
  });
  const spiderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    spiderPos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    mousePos.current = { ...spiderPos.current };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrameId = 0;

    const updatePosition = () => {
      const dx = mousePos.current.x - spiderPos.current.x;
      const dy = mousePos.current.y - spiderPos.current.y;

      spiderPos.current.x += dx * LERP_FACTOR;
      spiderPos.current.y += dy * LERP_FACTOR;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

      if (spiderRef.current) {
        spiderRef.current.style.transform = `translate3d(${spiderPos.current.x - SPIDER_OFFSET}px, ${spiderPos.current.y - SPIDER_OFFSET}px, 0) rotate(${angle}deg)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0b2413] select-none">
      <img
        ref={spiderRef}
        src={spiderImg}
        alt="Жөргөмүш"
        className="pointer-events-none fixed left-0 top-0 z-10 h-20 w-20 will-change-transform"
      />

      <div className="relative z-20 flex h-full flex-col items-center justify-center">
        <div className="max-w-sm rounded-2xl border-4 border-black bg-[#14341e] p-8 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="mb-4 inline-block rounded-xl border-2 border-black bg-[#f0a56c] p-3">
            🦁
          </div>
          <h1 className="mb-2 text-2xl font-bold tracking-wider text-white">
            ТОКОЙ ДҮЙНӨСҮ
          </h1>
          <p className="mb-6 text-xs font-semibold text-[#a3e635]">
            ЖАНЫБАРЛАРДЫН СЫРЛАРЫН АЧУУГА ДАЯРСЫҢБЫ?
          </p>
          <button
            type="button"
            onClick={() => navigate("/game")}
            className="w-full rounded-xl border-2 border-black bg-[#22c55e] px-6 py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            ОЮНДУ БАШТОО 🚀
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 z-20 w-full text-center text-[10px] font-bold tracking-widest text-[#475569]">
        FAIRYGAME PLATFORM © 2026
      </div>
    </div>
  );
};

export default ForestStartScreen;
