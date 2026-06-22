/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        kyrgyz: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc5fb",
          400: "#36a7f6",
          500: "#0c8ce7",
          600: "#006fc5",
          700: "#0159a0",
          800: "#064b84",
          900: "#0b3f6e",
          950: "#072849",
        },
        alpine: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        sunset: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(12, 140, 231, 0.18), transparent), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(34, 197, 94, 0.12), transparent)",
        "hero-gradient-dark":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(12, 140, 231, 0.25), transparent), radial-gradient(ellipse 60% 50% at 100% 0%, rgba(34, 197, 94, 0.15), transparent)",
        "card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(7, 40, 73, 0.08), 0 4px 6px -4px rgba(7, 40, 73, 0.05)",
        "soft-dark":
          "0 2px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -4px rgba(0, 0, 0, 0.2)",
        glow: "0 0 40px -10px rgba(34, 197, 94, 0.4)",
        "glow-blue": "0 0 40px -10px rgba(12, 140, 231, 0.4)",
      },
      rotate: {
        135: "135deg",
      },
      animation: {
        "fade-in": "fadeIn 0.25s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 6s linear infinite",
        "spin-custom": "spin-custom 10s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.97)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-custom": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
