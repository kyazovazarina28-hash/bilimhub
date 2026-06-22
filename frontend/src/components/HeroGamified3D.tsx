import { useEffect, useRef } from "react";

const TILT_X = Math.PI / 3;
const FOV = 900;
const STAR_COUNT = 180;
const ORBIT_SEGMENTS = 128;
const PARALLAX_STRENGTH = 28;
const PARALLAX_LERP = 0.06;

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface Projected {
  sx: number;
  sy: number;
  scale: number;
  depth: number;
}

interface PlanetDef {
  name: string;
  orbitRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  speed: number;
  phase: number;
  hasRings: boolean;
  ringColor: string;
}

interface Star {
  x: number;
  y: number;
  z: number;
  driftX: number;
  driftY: number;
  size: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  brightness: number;
}

interface CameraState {
  offsetX: number;
  offsetY: number;
  targetX: number;
  targetY: number;
}

const PLANETS: PlanetDef[] = [
  {
    name: "Меркурий",
    orbitRadius: 72,
    radius: 4,
    color: "#b0b0b0",
    glowColor: "#d4d4d4",
    speed: 1.8,
    phase: 0.2,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Венера",
    orbitRadius: 98,
    radius: 5.5,
    color: "#e8cda0",
    glowColor: "#f5deb3",
    speed: 1.35,
    phase: 1.4,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Жер",
    orbitRadius: 128,
    radius: 6,
    color: "#2563eb",
    glowColor: "#4ade80",
    speed: 1.0,
    phase: 2.6,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Марс",
    orbitRadius: 158,
    radius: 5,
    color: "#ef4444",
    glowColor: "#f87171",
    speed: 0.82,
    phase: 4.1,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Юпитер",
    orbitRadius: 200,
    radius: 11,
    color: "#c4a35a",
    glowColor: "#d4b483",
    speed: 0.55,
    phase: 0.8,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Сатурн",
    orbitRadius: 248,
    radius: 9.5,
    color: "#94a3b8",
    glowColor: "#cbd5e1",
    speed: 0.42,
    phase: 3.5,
    hasRings: true,
    ringColor: "#94a3b8",
  },
  {
    name: "Уран",
    orbitRadius: 296,
    radius: 7,
    color: "#67e8f9",
    glowColor: "#a5f3fc",
    speed: 0.32,
    phase: 5.2,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Нептун",
    orbitRadius: 340,
    radius: 6.8,
    color: "#1e3a8a",
    glowColor: "#3b82f6",
    speed: 0.25,
    phase: 1.9,
    hasRings: false,
    ringColor: "",
  },
  {
    name: "Плутон",
    orbitRadius: 378,
    radius: 3.2,
    color: "#d1d5db",
    glowColor: "#e5e7eb",
    speed: 0.18,
    phase: 4.8,
    hasRings: false,
    ringColor: "",
  },
];

function getLayoutScale(width: number, height: number): number {
  return Math.min(width, height) / 900;
}

function rotateX(point: Vec3, angle: number): Vec3 {
  const cosA = Math.cos(angle);
  const sinA = Math.sin(angle);
  return {
    x: point.x,
    y: point.y * cosA - point.z * sinA,
    z: point.y * sinA + point.z * cosA,
  };
}


function projectPoint(
  point: Vec3,
  width: number,
  height: number,
  camera: CameraState,
): Projected {
  const depth = FOV + point.z;
  const scale = FOV / Math.max(depth, 1);
  return {
    sx: width / 2 + (point.x + camera.offsetX) * scale,
    sy: height / 2 + (point.y + camera.offsetY) * scale,
    scale,
    depth: point.z,
  };
}

function buildStars(): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < STAR_COUNT; i += 1) {
    stars.push({
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2,
      z: Math.random(),
      driftX: (Math.random() - 0.5) * 0.012,
      driftY: (Math.random() - 0.5) * 0.012,
      size: 0.4 + Math.random() * 1.4,
      twinkleSpeed: 0.5 + Math.random() * 2.5,
      twinkleOffset: Math.random() * Math.PI * 2,
      brightness: 0.4 + Math.random() * 0.6,
    });
  }
  return stars;
}

function getPlanetPosition(planet: PlanetDef, time: number, layoutScale: number): Vec3 {
  const angle = time * planet.speed + planet.phase;
  const raw: Vec3 = {
    x: Math.cos(angle) * planet.orbitRadius * layoutScale,
    y: 0,
    z: Math.sin(angle) * planet.orbitRadius * layoutScale,
  };
  return rotateX(raw, TILT_X);
}

function drawOrbitPath(
  ctx: CanvasRenderingContext2D,
  orbitRadius: number,
  width: number,
  height: number,
  camera: CameraState,
  layoutScale: number,
): void {
  ctx.beginPath();
  for (let i = 0; i <= ORBIT_SEGMENTS; i += 1) {
    const angle = (i / ORBIT_SEGMENTS) * Math.PI * 2;
    const raw: Vec3 = {
      x: Math.cos(angle) * orbitRadius * layoutScale,
      y: 0,
      z: Math.sin(angle) * orbitRadius * layoutScale,
    };
    const rotated = rotateX(raw, TILT_X);
    const proj = projectPoint(rotated, width, height, camera);
    if (i === 0) ctx.moveTo(proj.sx, proj.sy);
    else ctx.lineTo(proj.sx, proj.sy);
  }
  ctx.closePath();
  ctx.strokeStyle = "rgba(186, 210, 255, 0.2)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawStarfield(
  ctx: CanvasRenderingContext2D,
  stars: Star[],
  width: number,
  height: number,
  time: number,
  camera: CameraState,
): void {
  for (const star of stars) {
    const driftX = star.x + Math.sin(time * 0.08 + star.twinkleOffset) * star.driftX * 40;
    const driftY = star.y + Math.cos(time * 0.06 + star.twinkleOffset) * star.driftY * 40;
    const parallaxX =
      width * 0.5 + driftX * width * 0.55 + camera.offsetX * 0.15 * star.z;
    const parallaxY =
      height * 0.5 + driftY * height * 0.55 + camera.offsetY * 0.15 * star.z;
    const twinkle =
      star.brightness *
      (0.55 + 0.45 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset));
    ctx.beginPath();
    ctx.arc(parallaxX, parallaxY, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220, 235, 255, ${twinkle})`;
    ctx.fill();
  }
}

function drawSun(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  time: number,
  camera: CameraState,
  layoutScale: number,
): void {
  const pulse = 0.92 + Math.sin(time * 2.2) * 0.08;
  const sunPos = projectPoint({ x: 0, y: 0, z: 0 }, width, height, camera);
  const baseRadius = 38 * layoutScale * pulse;

  const outerGlow = ctx.createRadialGradient(
    sunPos.sx,
    sunPos.sy,
    0,
    sunPos.sx,
    sunPos.sy,
    baseRadius * 4.5,
  );
  outerGlow.addColorStop(0, "rgba(255, 200, 50, 0.5)");
  outerGlow.addColorStop(0.35, "rgba(255, 120, 20, 0.18)");
  outerGlow.addColorStop(1, "transparent");
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(sunPos.sx, sunPos.sy, baseRadius * 4.5, 0, Math.PI * 2);
  ctx.fill();

  const midGlow = ctx.createRadialGradient(
    sunPos.sx,
    sunPos.sy,
    baseRadius * 0.2,
    sunPos.sx,
    sunPos.sy,
    baseRadius * 2.2,
  );
  midGlow.addColorStop(0, "rgba(255, 240, 150, 0.95)");
  midGlow.addColorStop(0.5, "rgba(255, 180, 40, 0.55)");
  midGlow.addColorStop(1, "transparent");
  ctx.fillStyle = midGlow;
  ctx.beginPath();
  ctx.arc(sunPos.sx, sunPos.sy, baseRadius * 2.2, 0, Math.PI * 2);
  ctx.fill();

  const core = ctx.createRadialGradient(
    sunPos.sx - baseRadius * 0.25,
    sunPos.sy - baseRadius * 0.25,
    baseRadius * 0.05,
    sunPos.sx,
    sunPos.sy,
    baseRadius,
  );
  core.addColorStop(0, "#fffef0");
  core.addColorStop(0.35, "#ffd54f");
  core.addColorStop(0.7, "#ff8f00");
  core.addColorStop(1, "#e65100");
  ctx.fillStyle = core;
  ctx.beginPath();
  ctx.arc(sunPos.sx, sunPos.sy, baseRadius, 0, Math.PI * 2);
  ctx.fill();
}

function drawPlanetRings(
  ctx: CanvasRenderingContext2D,
  sx: number,
  sy: number,
  planetRadius: number,
  scale: number,
  ringColor: string,
  depth: number,
): void {
  const ringWidth = planetRadius * scale * 2.4;
  const ringHeight = planetRadius * scale * 0.55;
  const alpha = depth < 0 ? 0.35 : 0.65;

  ctx.save();
  ctx.translate(sx, sy);
  ctx.scale(1, 0.35 + Math.abs(depth) * 0.0005);
  ctx.beginPath();
  ctx.ellipse(0, 0, ringWidth, ringHeight, 0, 0, Math.PI * 2);
  ctx.strokeStyle = ringColor;
  ctx.globalAlpha = alpha;
  ctx.lineWidth = Math.max(1.5, planetRadius * scale * 0.35);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawJupiterBands(
  ctx: CanvasRenderingContext2D,
  sx: number,
  sy: number,
  r: number,
): void {
  ctx.save();
  ctx.beginPath();
  ctx.arc(sx, sy, r, 0, Math.PI * 2);
  ctx.clip();
  const bands = ["#d4b483", "#c4a35a", "#b8956a", "#d4b483", "#a08050"];
  bands.forEach((color, i) => {
    const bandH = (r * 2) / bands.length;
    ctx.fillStyle = color;
    ctx.fillRect(sx - r, sy - r + i * bandH, r * 2, bandH);
  });
  ctx.restore();
}

function drawEarth(
  ctx: CanvasRenderingContext2D,
  sx: number,
  sy: number,
  r: number,
): void {
  const body = ctx.createRadialGradient(sx - r * 0.3, sy - r * 0.3, r * 0.1, sx, sy, r);
  body.addColorStop(0, "#86efac");
  body.addColorStop(0.35, "#2563eb");
  body.addColorStop(1, "#0f172a");
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(sx, sy, r, 0, Math.PI * 2);
  ctx.fill();
}

function drawPlanet(
  ctx: CanvasRenderingContext2D,
  planet: PlanetDef,
  position: Vec3,
  width: number,
  height: number,
  camera: CameraState,
  layoutScale: number,
): void {
  const proj = projectPoint(position, width, height, camera);
  const r = planet.radius * layoutScale * proj.scale;

  if (planet.hasRings && position.z >= -10) {
    drawPlanetRings(ctx, proj.sx, proj.sy, planet.radius * layoutScale, proj.scale, planet.ringColor, position.z);
  }

  const glow = ctx.createRadialGradient(proj.sx, proj.sy, 0, proj.sx, proj.sy, r * 2.8);
  glow.addColorStop(0, `${planet.glowColor}55`);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(proj.sx, proj.sy, r * 2.8, 0, Math.PI * 2);
  ctx.fill();

  if (planet.name === "Жер") {
    drawEarth(ctx, proj.sx, proj.sy, r);
  } else if (planet.name === "Юпитер") {
    const body = ctx.createRadialGradient(
      proj.sx - r * 0.3,
      proj.sy - r * 0.3,
      r * 0.1,
      proj.sx,
      proj.sy,
      r,
    );
    body.addColorStop(0, "#ffffff");
    body.addColorStop(0.25, planet.color);
    body.addColorStop(1, "#0f172a");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.arc(proj.sx, proj.sy, r, 0, Math.PI * 2);
    ctx.fill();
    drawJupiterBands(ctx, proj.sx, proj.sy, r);
  } else {
    const body = ctx.createRadialGradient(
      proj.sx - r * 0.3,
      proj.sy - r * 0.3,
      r * 0.1,
      proj.sx,
      proj.sy,
      r,
    );
    body.addColorStop(0, "#ffffff");
    body.addColorStop(0.25, planet.color);
    body.addColorStop(1, "#0f172a");
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.arc(proj.sx, proj.sy, r, 0, Math.PI * 2);
    ctx.fill();
  }

  if (planet.hasRings && position.z < -10) {
    drawPlanetRings(ctx, proj.sx, proj.sy, planet.radius * layoutScale, proj.scale, planet.ringColor, position.z);
  }
}

function drawBackground(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
): void {
  const grad = ctx.createRadialGradient(
    width * 0.5,
    height * 0.45,
    0,
    width * 0.5,
    height * 0.5,
    Math.max(width, height) * 0.75,
  );
  grad.addColorStop(0, "#0a1628");
  grad.addColorStop(0.45, "#060d18");
  grad.addColorStop(1, "#020617");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);
}

export default function HeroGamified3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>(buildStars());
  const cameraRef = useRef<CameraState>({
    offsetX: 0,
    offsetY: 0,
    targetX: 0,
    targetY: 0,
  });
  const timeRef = useRef(0);
  const frameRef = useRef<number>(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionQuery.matches;
    const onMotionChange = (event: MediaQueryListEvent): void => {
      reducedMotionRef.current = event.matches;
    };
    motionQuery.addEventListener("change", onMotionChange);

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) {
      motionQuery.removeEventListener("change", onMotionChange);
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      motionQuery.removeEventListener("change", onMotionChange);
      return undefined;
    }

    const resize = (): void => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = container.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const handleMouseMove = (event: MouseEvent): void => {
      const bounds = container.getBoundingClientRect();
      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!inside) {
        cameraRef.current.targetX = 0;
        cameraRef.current.targetY = 0;
        return;
      }

      const nx = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      const ny = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      cameraRef.current.targetX = nx * PARALLAX_STRENGTH;
      cameraRef.current.targetY = ny * PARALLAX_STRENGTH * 0.6;
    };

    const handleMouseLeave = (): void => {
      cameraRef.current.targetX = 0;
      cameraRef.current.targetY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave);

    let lastFrame = performance.now();

    const render = (now: number): void => {
      const delta = reducedMotionRef.current
        ? 0
        : Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;
      timeRef.current += delta;

      const camera = cameraRef.current;
      camera.offsetX += (camera.targetX - camera.offsetX) * PARALLAX_LERP;
      camera.offsetY += (camera.targetY - camera.offsetY) * PARALLAX_LERP;

      const { width, height } = container.getBoundingClientRect();
      const layoutScale = getLayoutScale(width, height);
      const time = timeRef.current;

      drawBackground(ctx, width, height);
      drawStarfield(ctx, starsRef.current, width, height, time, camera);

      for (const planet of PLANETS) {
        drawOrbitPath(ctx, planet.orbitRadius, width, height, camera, layoutScale);
      }

      const planetStates = PLANETS.map((planet) => ({
        planet,
        position: getPlanetPosition(planet, time, layoutScale),
      }));
      planetStates.sort((a, b) => a.position.z - b.position.z);

      for (const { planet, position } of planetStates.filter((p) => p.position.z < 0)) {
        drawPlanet(ctx, planet, position, width, height, camera, layoutScale);
      }

      drawSun(ctx, width, height, time, camera, layoutScale);

      for (const { planet, position } of planetStates.filter((p) => p.position.z >= 0)) {
        drawPlanet(ctx, planet, position, width, height, camera, layoutScale);
      }

      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 min-h-full overflow-hidden"
    >
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/80 dark:from-kyrgyz-950/40 dark:to-kyrgyz-950/95" />
    </div>
  );
}
