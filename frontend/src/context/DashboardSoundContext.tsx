import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type DashboardSoundType = "click" | "hover" | "open" | "ambient";

interface DashboardSoundContextValue {
  isMuted: boolean;
  toggleMuted: () => void;
  playSound: (type: DashboardSoundType, force?: boolean) => void;
}

const DashboardSoundContext = createContext<DashboardSoundContextValue | null>(null);

function getAudioContextClass(): typeof AudioContext | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as Window & { webkitAudioContext?: typeof AudioContext };
  return window.AudioContext ?? w.webkitAudioContext;
}

export function DashboardSoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(false);
  const isMutedRef = useRef(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  const playSound = useCallback((type: DashboardSoundType, force = false) => {
    if (!force && isMutedRef.current) return;

    try {
      const AudioCtx = getAudioContextClass();
      if (!AudioCtx) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        void ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(580, now);
        osc.frequency.exponentialRampToValueAtTime(320, now + 0.12);
        gainNode.gain.setValueAtTime(0.15, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === "hover") {
        osc.type = "triangle";
        osc.frequency.setValueAtTime(750, now);
        osc.frequency.exponentialRampToValueAtTime(950, now + 0.07);
        gainNode.gain.setValueAtTime(0.035, now);
        gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      } else if (type === "open") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(850, now + 0.28);
        gainNode.gain.setValueAtTime(0.18, now);
        gainNode.gain.linearRampToValueAtTime(0.01, now + 0.28);
        osc.start(now);
        osc.stop(now + 0.28);
      } else if (type === "ambient") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.linearRampToValueAtTime(240, now + 0.7);
        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.linearRampToValueAtTime(0.01, now + 0.8);
        osc.start(now);
        osc.stop(now + 0.8);
      }
    } catch (e) {
      console.log("Audio Context Error:", e);
    }
  }, []);

  const toggleMuted = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      isMutedRef.current = next;
      if (!next && prev) {
        playSound("click", true);
      }
      return next;
    });
  }, [playSound]);

  const value = useMemo(
    () => ({ isMuted, toggleMuted, playSound }),
    [isMuted, toggleMuted, playSound],
  );

  return (
    <DashboardSoundContext.Provider value={value}>
      {children}
    </DashboardSoundContext.Provider>
  );
}

export function useDashboardSound(): DashboardSoundContextValue {
  const ctx = useContext(DashboardSoundContext);
  if (!ctx) {
    throw new Error("useDashboardSound must be used within DashboardSoundProvider");
  }
  return ctx;
}
