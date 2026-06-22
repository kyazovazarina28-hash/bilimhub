import { useCallback, useEffect, useMemo, useRef, useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import MainDashboardHeader from "../components/MainDashboardHeader";
import MainDashboardProfile from "../components/MainDashboardProfile";
import RegisterModal from "../components/RegisterModal";
import { DashboardLangProvider, useDashboardLang } from "../context/DashboardLangContext";
import { DashboardSoundProvider, useDashboardSound } from "../context/DashboardSoundContext";
import { SUBJECT_LAYOUT } from "../data/dashboardTranslations";

interface NeonParticle {
  x: number;
  y: number;
  radius: number;
  color: string;
  glowColor: string;
  speedX: number;
  speedY: number;
}

const NEON_COLORS = [
  { core: "#10b981", glow: "rgba(16, 185, 129, 0.8)" },
  { core: "#38bdf8", glow: "rgba(56, 189, 248, 0.8)" },
  { core: "#a855f7", glow: "rgba(168, 85, 247, 0.8)" },
];

const HomeContent: FC = () => {
  const navigate = useNavigate();
  const { t } = useDashboardLang();
  const { playSound } = useDashboardSound();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const subjects = useMemo(
    () =>
      SUBJECT_LAYOUT.map((subject) => ({
        ...subject,
        name: t.subjects[subject.id],
      })),
    [t],
  );

  const goToSubject = useCallback(
    (path: string) => {
      navigate(path);
    },
    [navigate],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationFrameId = 0;
    const particles: NeonParticle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < 65; i++) {
        const colorSet = NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: colorSet.core,
          glowColor: colorSet.glow,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(3, 7, 18, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.12 * (1 - distance / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.shadowBlur = 6;
        ctx.shadowColor = p.glowColor;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.restore();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    const onResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const handleFirstGesture = () => {
      playSound("ambient");
      window.removeEventListener("click", handleFirstGesture);
    };
    window.addEventListener("click", handleFirstGesture);
    return () => window.removeEventListener("click", handleFirstGesture);
  }, [playSound]);

  return (
    <div className="relative min-h-screen select-none overflow-x-hidden bg-[#030712] font-sans text-white">
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-full w-full"
        aria-hidden
      />

      <MainDashboardHeader
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
      />

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />

      <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-12">
        <div className="mb-10 w-full pl-2 text-left">
          <h1 className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-2xl font-black uppercase tracking-wide text-transparent md:text-3xl">
            {t.welcome}
          </h1>
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:flex-row">
          <div className="grid w-full flex-1 grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                type="button"
                onClick={() => {
                  playSound("click");
                  goToSubject(subject.path);
                }}
                onMouseEnter={() => playSound("hover")}
                className="group relative flex min-h-[140px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-gray-800/80 bg-[#090f20]/60 p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40"
              >
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${subject.color}`}
                />
                <div className="mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {subject.icon}
                </div>
                <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-200">
                  {subject.name}
                </h3>
              </button>
            ))}
          </div>

          <MainDashboardProfile />
        </div>
      </main>
    </div>
  );
};

const Home: FC = () => (
  <DashboardLangProvider>
    <DashboardSoundProvider>
      <HomeContent />
    </DashboardSoundProvider>
  </DashboardLangProvider>
);

export default Home;
