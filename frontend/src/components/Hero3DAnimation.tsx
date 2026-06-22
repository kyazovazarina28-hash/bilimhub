import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const GRID_COLS = 48;
const GRID_ROWS = 28;
const SPACING = 0.38;
const WAVE_SPEED = 0.65;
const WAVE_AMPLITUDE = 1.15;
const REPEL_RADIUS = 2.8;
const REPEL_STRENGTH = 1.8;
const TILT_STRENGTH = 0.18;
const LERP_FACTOR = 0.06;

interface MouseState {
  x: number;
  y: number;
  active: boolean;
}

interface ParticleWaveProps {
  mouseRef: React.RefObject<MouseState>;
  isDark: boolean;
  reducedMotion: boolean;
}

function ParticleWave({ mouseRef, isDark, reducedMotion }: ParticleWaveProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { camera } = useThree();

  const particleCount = GRID_COLS * GRID_ROWS;

  const baseCoords = useMemo(() => {
    const xs = new Float32Array(particleCount);
    const ys = new Float32Array(particleCount);
    const offsetX = ((GRID_COLS - 1) * SPACING) / 2;
    const offsetY = ((GRID_ROWS - 1) * SPACING) / 2;
    let index = 0;
    for (let row = 0; row < GRID_ROWS; row += 1) {
      for (let col = 0; col < GRID_COLS; col += 1) {
        xs[index] = col * SPACING - offsetX;
        ys[index] = row * SPACING - offsetY;
        index += 1;
      }
    }
    return { xs, ys };
  }, [particleCount]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyan = new THREE.Color("#06b6d4");
    const neonGreen = new THREE.Color("#4ade80");
    const skyBlue = new THREE.Color("#36a7f6");
    const deepBlue = new THREE.Color("#0c8ce7");

    for (let i = 0; i < particleCount; i += 1) {
      const x = baseCoords.xs[i];
      const y = baseCoords.ys[i];
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = 0;

      const waveMix = (Math.sin(x * 0.35) + Math.cos(y * 0.35) + 2) / 4;
      const gradient = cyan
        .clone()
        .lerp(neonGreen, waveMix)
        .lerp(skyBlue, 0.35)
        .lerp(deepBlue, isDark ? 0.15 : 0.05);

      colors[i * 3] = gradient.r;
      colors[i * 3 + 1] = gradient.g;
      colors[i * 3 + 2] = gradient.b;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [baseCoords.xs, baseCoords.ys, isDark, particleCount]);

  const targetRotation = useRef({ x: 0, y: 0 });
  const cameraTarget = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
    const positions = positionAttr.array as Float32Array;
    const time = reducedMotion ? 0 : state.clock.elapsedTime * WAVE_SPEED;
    const mouse = mouseRef.current;

    const mouseWorldX = mouse.x * 9;
    const mouseWorldY = mouse.y * 5.5;

    for (let i = 0; i < particleCount; i += 1) {
      const x = baseCoords.xs[i];
      const y = baseCoords.ys[i];

      let z =
        Math.sin(x * 0.55 + time) * Math.cos(y * 0.55 + time) * WAVE_AMPLITUDE;

      if (mouse.active && !reducedMotion) {
        const dx = x - mouseWorldX;
        const dy = y - mouseWorldY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < REPEL_RADIUS) {
          const influence = 1 - distance / REPEL_RADIUS;
          const ripple = Math.sin(distance * 2.5 - time * 3) * 0.25;
          z += influence * influence * (REPEL_STRENGTH + ripple);
        }
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    positionAttr.needsUpdate = true;

    if (groupRef.current) {
      const nextRotX = mouse.active && !reducedMotion ? mouse.y * TILT_STRENGTH : 0;
      const nextRotY = mouse.active && !reducedMotion ? mouse.x * TILT_STRENGTH : 0;

      targetRotation.current.x = THREE.MathUtils.lerp(
        targetRotation.current.x,
        nextRotX,
        LERP_FACTOR,
      );
      targetRotation.current.y = THREE.MathUtils.lerp(
        targetRotation.current.y,
        nextRotY,
        LERP_FACTOR,
      );

      groupRef.current.rotation.x = targetRotation.current.x;
      groupRef.current.rotation.y = targetRotation.current.y;
    }

    if (!reducedMotion) {
      const camX = mouse.active ? mouse.x * 0.6 : 0;
      const camY = mouse.active ? mouse.y * 0.35 : 0;
      cameraTarget.current.x = THREE.MathUtils.lerp(
        cameraTarget.current.x,
        camX,
        LERP_FACTOR,
      );
      cameraTarget.current.y = THREE.MathUtils.lerp(
        cameraTarget.current.y,
        camY,
        LERP_FACTOR,
      );
      camera.position.x = cameraTarget.current.x;
      camera.position.y = -2 + cameraTarget.current.y;
      camera.lookAt(0, 0, 0);
    }
  });

  return (
    <group ref={groupRef} rotation={[-0.35, 0, 0]}>
      <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
        <pointsMaterial
          size={isDark ? 0.075 : 0.065}
          vertexColors
          transparent
          opacity={isDark ? 0.9 : 0.75}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

function Scene({
  mouseRef,
  isDark,
  reducedMotion,
}: {
  mouseRef: React.RefObject<MouseState>;
  isDark: boolean;
  reducedMotion: boolean;
}) {
  return (
    <>
      <color attach="background" args={["transparent"]} />
      <fog attach="fog" args={[isDark ? "#072849" : "#f0f7ff", 14, 28]} />
      <ambientLight intensity={isDark ? 0.35 : 0.55} />
      <pointLight position={[0, 0, 8]} intensity={isDark ? 1.2 : 0.8} color="#4ade80" />
      <pointLight position={[-6, 4, 6]} intensity={0.6} color="#06b6d4" />
      <ParticleWave
        mouseRef={mouseRef}
        isDark={isDark}
        reducedMotion={reducedMotion}
      />
    </>
  );
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function useIsDarkTheme(): boolean {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function Hero3DAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<MouseState>({ x: 0, y: 0, active: false });
  const reducedMotion = usePrefersReducedMotion();
  const isDark = useIsDarkTheme();

  useEffect(() => {
    const updateMouse = (event: MouseEvent) => {
      const bounds = containerRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;

      if (!inside) {
        mouseRef.current = { x: 0, y: 0, active: false };
        return;
      }

      const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      const y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
      mouseRef.current = { x, y, active: true };
    };

    window.addEventListener("mousemove", updateMouse, { passive: true });
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  if (reducedMotion) {
    return (
      <div
        ref={containerRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(74,222,128,0.1),transparent_70%)]" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, -2, 13], fov: 50, near: 0.1, far: 100 }}
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        frameloop="always"
        performance={{ min: 0.85 }}
      >
        <Scene mouseRef={mouseRef} isDark={isDark} reducedMotion={reducedMotion} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-kyrgyz-950/90" />
    </div>
  );
}
