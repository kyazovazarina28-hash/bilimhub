import { useEffect, useRef } from "react";

const AMBIENT_FREQS = [220, 247, 261, 293, 329];

function getAudioContextClass(): typeof AudioContext | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as Window & { webkitAudioContext?: typeof AudioContext };
  return window.AudioContext ?? w.webkitAudioContext;
}

export function useSubjectAmbientMusic(enabled = true) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    if (!enabled) return undefined;

    try {
      const AudioCtx = getAudioContextClass();
      if (!AudioCtx) return undefined;

      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      gainNode.gain.setValueAtTime(0.05, ctx.currentTime);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;

      void ctx.resume();

      const resumeOnGesture = () => {
        if (ctx.state === "suspended") {
          void ctx.resume();
        }
        window.removeEventListener("click", resumeOnGesture);
        window.removeEventListener("keydown", resumeOnGesture);
      };
      window.addEventListener("click", resumeOnGesture);
      window.addEventListener("keydown", resumeOnGesture);

      const interval = setInterval(() => {
        if (ctx.state === "running") {
          const randomFreq =
            AMBIENT_FREQS[Math.floor(Math.random() * AMBIENT_FREQS.length)];
          osc.frequency.exponentialRampToValueAtTime(randomFreq, ctx.currentTime + 2);
        }
      }, 3000);

      return () => {
        clearInterval(interval);
        window.removeEventListener("click", resumeOnGesture);
        window.removeEventListener("keydown", resumeOnGesture);
        try {
          osc.stop();
        } catch {
          /* already stopped */
        }
        void ctx.close();
        audioCtxRef.current = null;
        oscillatorRef.current = null;
      };
    } catch (e) {
      console.log("Музыканы ойнотууга уруксат берилген жок", e);
      return undefined;
    }
  }, [enabled]);
}
