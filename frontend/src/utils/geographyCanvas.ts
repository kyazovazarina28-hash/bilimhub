import type { PlanetVisual } from "../data/geographyPlanets";

export interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  twinkle: number;
}

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function drawPlanet(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  theme: PlanetVisual & { id?: string },
  rotation: number,
  floatOffset: number,
  glowBoost: number,
  showRing: boolean,
  scale = 1,
): void {
  const cx = width / 2;
  const cy = height / 2 + floatOffset;
  const r = Math.min(width, height) * 0.34 * scale;
  const glowScale = 1 + glowBoost * 0.4;

  const glowRgb = hexToRgb(theme.planetGlow);
  const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 2.4 * glowScale);
  outerGlow.addColorStop(
    0,
    `rgba(${glowRgb.r},${glowRgb.g},${glowRgb.b},${0.5 + glowBoost * 0.35})`,
  );
  outerGlow.addColorStop(0.45, `${theme.planetColor}44`);
  outerGlow.addColorStop(1, "transparent");
  ctx.fillStyle = outerGlow;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 2.4 * glowScale, 0, Math.PI * 2);
  ctx.fill();

  if (showRing) {
    ctx.save();
    ctx.translate(cx, cy + r * 0.08);
    ctx.scale(1, 0.28);
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.55, 0, Math.PI * 2);
    ctx.strokeStyle = `${theme.ringColor}99`;
    ctx.lineWidth = r * 0.14;
    ctx.shadowColor = theme.ringColor;
    ctx.shadowBlur = 16 + glowBoost * 20;
    ctx.stroke();
    ctx.restore();
  }

  const body = ctx.createRadialGradient(
    cx - r * 0.28,
    cy - r * 0.28,
    r * 0.06,
    cx,
    cy,
    r,
  );
  body.addColorStop(0, "#f8fafc");
  body.addColorStop(0.22, theme.planetColor);
  body.addColorStop(0.72, theme.planetSecondary);
  body.addColorStop(1, "#020617");
  ctx.fillStyle = body;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip();

  const bandCount = theme.id === "puzzles" ? 14 : 10;
  for (let i = 0; i < bandCount; i += 1) {
    const bandY = cy + Math.sin(rotation * 0.55 + i * 0.55) * r * 0.52;
    const dy = bandY - cy;
    if (Math.abs(dy) >= r) continue;
    const bandW = Math.sqrt(r * r - dy * dy) * 2;
    ctx.fillStyle = theme.bandColors[i % theme.bandColors.length] + "66";
    ctx.fillRect(cx - bandW / 2, bandY - 4, bandW, 8);
  }

  for (let i = 0; i < 5; i += 1) {
    const lon = rotation + i * 1.1;
    const px = cx + Math.cos(lon) * r * 0.38;
    const py = cy + Math.sin(lon * 0.82) * r * 0.3;
    ctx.beginPath();
    ctx.ellipse(px, py, r * 0.14, r * 0.08, lon * 0.45, 0, Math.PI * 2);
    ctx.fillStyle = `${theme.planetSecondary}99`;
    ctx.fill();
  }

  ctx.restore();

  if (showRing) {
    ctx.save();
    ctx.translate(cx, cy + r * 0.05);
    ctx.scale(1, 0.26);
    ctx.beginPath();
    ctx.arc(0, 0, r * 1.62, Math.PI * 0.08, Math.PI * 0.92);
    ctx.strokeStyle = `${theme.ringColor}cc`;
    ctx.lineWidth = r * 0.1;
    ctx.stroke();
    ctx.restore();
  }

  ctx.strokeStyle = `rgba(255,255,255,${0.18 + glowBoost * 0.25})`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - r * 0.22, cy - r * 0.28, r * 0.11, 0, Math.PI * 2);
  ctx.stroke();
}
