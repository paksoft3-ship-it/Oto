import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        graphite: "#161B22",
        metal: "#2E3640",
        accent: "#E11D2E",
        soft: "#AAB2BD",
        paper: "#F5F6F8"
      },
      boxShadow: {
        panel: "0 0 0 1px rgba(255,255,255,0.06)",
        header: "0 8px 30px rgba(0,0,0,0.32)"
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
