import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        graphite: "#161B22",
        surface: "#0C141C",
        "surface-low": "#141C24",
        "surface-mid": "#182029",
        "surface-high": "#232B33",
        metal: "#2E3640",
        accent: "#E11D2E",
        "accent-soft": "#FFB3AE",
        soft: "#AAB2BD",
        paper: "#F5F6F8"
      },
      boxShadow: {
        panel: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        header: "0 10px 40px rgba(0,0,0,0.42)",
        red: "0 0 22px rgba(225,29,46,0.28)"
      },
      maxWidth: {
        shell: "1280px"
      },
      backgroundImage: {
        "garage-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
