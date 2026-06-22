import { motion } from "framer-motion";
import {
  ArrowLeft,
  FunctionSquare,
  RefreshCw,
  Search,
  TrendingUp,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MATH_FORMULAS } from "../data/formulas";
import type { MathFormula } from "../types/educational";

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 360;
const PADDING = 40;
const SAMPLE_COUNT = 100;

interface GraphPoint {
  x: number;
  y: number;
}

interface ChartData {
  points: GraphPoint[];
  formula: string;
  xMin: number;
  xMax: number;
  error: string | null;
}

/** Боштуктарды жана кош функция жазууларын тазалайт. */
function sanitizeFormula(raw: string): string {
  const cleanFormula = raw.split(",")[0].trim();
  return cleanFormula.replace(/\^/g, "**");
}

/** Коопсуз текшерүү — eval() колдонулбай, Math контексти аркылуу. */
function isSafeExpression(expr: string): boolean {
  if (!expr.trim()) return false;
  if (
    /[;{}[\]`=\\'"]|function|return|import|eval|window|document|process|this|new\s|=>|&&|\|\|/i.test(
      expr,
    )
  ) {
    return false;
  }
  return true;
}

/**
 * Формуланы x мааниси үчүн эсептейт.
 * Math.sin, Math.cos, Math.pow, Math.sqrt ж.б. колдоого алынат.
 */
function evaluateFunction(expr: string, x: number): number {
  if (!isSafeExpression(expr)) {
    throw new Error("Invalid formula");
  }

  try {
    const fn = new Function(
      "x",
      "Math",
      `"use strict"; return (${expr});`,
    ) as (x: number, math: typeof Math) => number;

    const result = fn(x, Math);
    return typeof result === "number" ? result : Number.NaN;
  } catch {
    throw new Error("Invalid formula");
  }
}

function computeGraphPoints(
  formula: string,
  xMin: number,
  xMax: number,
): { points: GraphPoint[]; error: string | null } {
  if (!Number.isFinite(xMin) || !Number.isFinite(xMax)) {
    return { points: [], error: "X мин жана X макс сан болушu керек." };
  }
  if (xMin >= xMax) {
    return { points: [], error: "X мин X макстан кичине болушu керек." };
  }

  const cleanFormula = sanitizeFormula(formula);
  if (!cleanFormula) {
    return { points: [], error: "Формула бош болбошu керек." };
  }

  const points: GraphPoint[] = [];

  for (let i = 0; i <= SAMPLE_COUNT; i++) {
    const x = xMin + (i / SAMPLE_COUNT) * (xMax - xMin);
    try {
      const y = evaluateFunction(cleanFormula, x);
      if (Number.isFinite(y)) {
        points.push({ x, y });
      }
    } catch {
      return {
        points: [],
        error: "Ката формула. Мисалы: x * x, Math.sin(x), Math.pow(x, 2)",
      };
    }
  }

  if (points.length < 2) {
    return {
      points: [],
      error: "График түзүлбөй калды. Формуланы же диапазонду текшериңиз.",
    };
  }

  return { points, error: null };
}

interface GraphPlotterProps {
  plotRequest?: { expression: string; nonce: number };
}

function GraphPlotter({ plotRequest }: GraphPlotterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [formula, setFormula] = useState<string>("x * x");
  const [xMin, setXMin] = useState<number>(-3);
  const [xMax, setXMax] = useState<number>(5);
  const [renderTrigger, setRenderTrigger] = useState<number>(1);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const inputsRef = useRef({ formula: "x * x", xMin: -3, xMax: 5 });

  useEffect(() => {
    inputsRef.current = { formula, xMin, xMax };
  }, [formula, xMin, xMax]);

  const runGraphUpdate = useCallback(
    (nextFormula: string, nextXMin: number, nextXMax: number) => {
      setIsUpdating(true);
      const { points, error } = computeGraphPoints(nextFormula, nextXMin, nextXMax);
      setChartData({
        points,
        formula: sanitizeFormula(nextFormula),
        xMin: nextXMin,
        xMax: nextXMax,
        error,
      });
      setIsUpdating(false);
    },
    [],
  );

  const handleUpdateGraph = () => {
    inputsRef.current = { formula, xMin, xMax };
    setRenderTrigger(Date.now());
  };

  useEffect(() => {
    if (renderTrigger === 0) return;
    const { formula: f, xMin: min, xMax: max } = inputsRef.current;
    runGraphUpdate(f, min, max);
  }, [renderTrigger, runGraphUpdate]);

  useEffect(() => {
    if (!plotRequest) return;
    setFormula(plotRequest.expression);
    inputsRef.current = {
      formula: plotRequest.expression,
      xMin: inputsRef.current.xMin,
      xMax: inputsRef.current.xMax,
    };
    setRenderTrigger(plotRequest.nonce);
  }, [plotRequest]);

  const drawGraph = useCallback((data: ChartData) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;
    canvas.style.width = `${CANVAS_WIDTH}px`;
    canvas.style.height = `${CANVAS_HEIGHT}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const isDark = document.documentElement.classList.contains("dark");
    const bgColor = isDark ? "#072849" : "#f8fafc";
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const { points, error, xMin: cfgXMin, xMax: cfgXMax, formula: label } = data;

    if (error || points.length === 0) {
      return;
    }

    const gridColor = isDark ? "#1e3a5f" : "#e2e8f0";
    const axisColor = isDark ? "#64748b" : "#94a3b8";
    const lineColor = isDark ? "#4ade80" : "#16a34a";
    const textColor = isDark ? "#94a3b8" : "#64748b";

    const plotWidth = CANVAS_WIDTH - PADDING * 2;
    const plotHeight = CANVAS_HEIGHT - PADDING * 2;

    let yMin = Infinity;
    let yMax = -Infinity;
    for (const point of points) {
      yMin = Math.min(yMin, point.y);
      yMax = Math.max(yMax, point.y);
    }

    if (yMin === yMax) {
      yMin -= 1;
      yMax += 1;
    }

    const yPadding = (yMax - yMin) * 0.1;
    yMin -= yPadding;
    yMax += yPadding;

    const toCanvasX = (x: number) =>
      PADDING + ((x - cfgXMin) / (cfgXMax - cfgXMin)) * plotWidth;
    const toCanvasY = (y: number) =>
      PADDING + plotHeight - ((y - yMin) / (yMax - yMin)) * plotHeight;

    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const x = PADDING + (i / 10) * plotWidth;
      ctx.beginPath();
      ctx.moveTo(x, PADDING);
      ctx.lineTo(x, CANVAS_HEIGHT - PADDING);
      ctx.stroke();

      const y = PADDING + (i / 10) * plotHeight;
      ctx.beginPath();
      ctx.moveTo(PADDING, y);
      ctx.lineTo(CANVAS_WIDTH - PADDING, y);
      ctx.stroke();
    }

    const zeroY = toCanvasY(0);
    const zeroX = toCanvasX(0);

    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 1.5;

    if (zeroY >= PADDING && zeroY <= CANVAS_HEIGHT - PADDING) {
      ctx.beginPath();
      ctx.moveTo(PADDING, zeroY);
      ctx.lineTo(CANVAS_WIDTH - PADDING, zeroY);
      ctx.stroke();
    }

    if (zeroX >= PADDING && zeroX <= CANVAS_WIDTH - PADDING) {
      ctx.beginPath();
      ctx.moveTo(zeroX, PADDING);
      ctx.lineTo(zeroX, CANVAS_HEIGHT - PADDING);
      ctx.stroke();
    }

    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 2.5;
    ctx.lineJoin = "round";
    ctx.beginPath();

    let started = false;
    for (const point of points) {
      const cx = toCanvasX(point.x);
      const cy = toCanvasY(point.y);
      if (cy < PADDING - 50 || cy > CANVAS_HEIGHT - PADDING + 50) {
        started = false;
        continue;
      }
      if (!started) {
        ctx.moveTo(cx, cy);
        started = true;
      } else {
        ctx.lineTo(cx, cy);
      }
    }
    ctx.stroke();

    ctx.fillStyle = textColor;
    ctx.font = "11px Inter, sans-serif";
    ctx.fillText(`x: [${cfgXMin}, ${cfgXMax}]`, PADDING, CANVAS_HEIGHT - 10);
    ctx.fillText(`y = ${label}`, PADDING, 16);
  }, []);

  useEffect(() => {
    if (chartData) {
      drawGraph(chartData);
    }
  }, [chartData, drawGraph]);

  useEffect(() => {
    if (!chartData) return;
    const observer = new MutationObserver(() => drawGraph(chartData));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, [chartData, drawGraph]);

  return (
    <div className="card-base overflow-hidden">
      <div className="border-b border-kyrgyz-100 px-5 py-4 dark:border-kyrgyz-800">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-alpine-500" />
          <h2 className="text-lg font-bold text-kyrgyz-950 dark:text-white">
            График куруучу
          </h2>
        </div>
        <p className="mt-1 text-sm text-kyrgyz-500 dark:text-slate-400">
          y = f(x) функциясынын графигин караңыз
        </p>
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <label
              htmlFor="graph-formula"
              className="mb-1.5 block text-xs font-medium text-kyrgyz-600 dark:text-slate-400"
            >
              Функция f(x)
            </label>
            <input
              id="graph-formula"
              type="text"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
              placeholder="x * x, Math.sin(x)"
              className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="graph-xmin"
              className="mb-1.5 block text-xs font-medium text-kyrgyz-600 dark:text-slate-400"
            >
              X мин
            </label>
            <input
              id="graph-xmin"
              type="number"
              step="any"
              value={xMin}
              onChange={(e) => setXMin(Number(e.target.value))}
              className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
          </div>
          <div>
            <label
              htmlFor="graph-xmax"
              className="mb-1.5 block text-xs font-medium text-kyrgyz-600 dark:text-slate-400"
            >
              X макс
            </label>
            <input
              id="graph-xmax"
              type="number"
              step="any"
              value={xMax}
              onChange={(e) => setXMax(Number(e.target.value))}
              className="w-full rounded-xl border border-kyrgyz-200 bg-white px-3 py-2.5 text-sm focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
          </div>
        </div>

        {chartData?.error && (
          <p className="rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-600 dark:bg-red-950/30 dark:text-red-400">
            {chartData.error}
          </p>
        )}

        <div className="overflow-x-auto rounded-xl border border-kyrgyz-100 dark:border-kyrgyz-800">
          <canvas ref={canvasRef} className="mx-auto block" />
        </div>

        <motion.button
          type="button"
          onClick={handleUpdateGraph}
          disabled={isUpdating}
          whileTap={{ scale: 0.95 }}
          className="btn-primary gap-2 disabled:opacity-60"
        >
          {isUpdating ? (
            <RefreshCw className="h-4 w-4 animate-spin" />
          ) : (
            <RefreshCw className="h-4 w-4" />
          )}
          {isUpdating ? "Жаңыланууда..." : "Графикти жаңыртуу"}
        </motion.button>
      </div>
    </div>
  );
}

function FormulaCard({
  formula,
  onPlot,
}: {
  formula: MathFormula;
  onPlot: (expression: string) => void;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="card-base p-4"
    >
      <span className="inline-block rounded-full bg-kyrgyz-100 px-2.5 py-0.5 text-xs font-medium text-kyrgyz-600 dark:bg-kyrgyz-800 dark:text-kyrgyz-300">
        {formula.category}
      </span>
      <h3 className="mt-2 font-semibold text-kyrgyz-950 dark:text-white">
        {formula.name}
      </h3>
      <p className="mt-2 font-mono text-lg text-alpine-600 dark:text-alpine-400">
        {formula.latex}
      </p>
      <p className="mt-2 text-sm text-kyrgyz-600 dark:text-slate-400">
        {formula.description}
      </p>
      <button
        type="button"
        onClick={() => onPlot(formula.expression)}
        className="btn-ghost mt-3 gap-1.5 px-0 text-alpine-600 hover:bg-transparent dark:text-alpine-400"
      >
        <FunctionSquare className="h-4 w-4" />
        Графикте көрсөтүү
      </button>
    </motion.div>
  );
}

export default function MathToolsPage() {
  const [search, setSearch] = useState("");
  const [plotRequest, setPlotRequest] = useState<
    { expression: string; nonce: number } | undefined
  >();

  const filteredFormulas = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return MATH_FORMULAS;
    return MATH_FORMULAS.filter(
      (f) =>
        f.name.toLowerCase().includes(query) ||
        f.category.toLowerCase().includes(query) ||
        f.latex.toLowerCase().includes(query) ||
        f.description.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <div className="container-app py-8 sm:py-12">
      <Link
        to="/subjects/matematika"
        className="btn-ghost mb-6 inline-flex gap-1.5 px-0 hover:bg-transparent"
      >
        <ArrowLeft className="h-4 w-4" />
        Математика сабагына
      </Link>

      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-kyrgyz-950 dark:text-white">
          Математика куралдары
        </h1>
        <p className="mt-2 text-kyrgyz-600 dark:text-slate-400">
          Формулалар китепканасы жана интерактивдүү график куруучу
        </p>
      </motion.div>

      <div className="mt-8">
        <GraphPlotter plotRequest={plotRequest} />
      </div>

      <div className="mt-10">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-bold text-kyrgyz-950 dark:text-white">
            Формулалар китепканасы
          </h2>
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-kyrgyz-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Издөө..."
              className="w-full rounded-xl border border-kyrgyz-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-alpine-400 focus:outline-none focus:ring-2 focus:ring-alpine-400/30 dark:border-kyrgyz-700 dark:bg-kyrgyz-900 dark:text-white"
            />
          </div>
        </div>

        {filteredFormulas.length === 0 ? (
          <p className="text-center text-sm text-kyrgyz-500 dark:text-slate-400">
            Эч нерсе табылган жок.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredFormulas.map((formula) => (
              <FormulaCard
                key={formula.id}
                formula={formula}
                onPlot={(expression) =>
                  setPlotRequest({ expression, nonce: Date.now() })
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
