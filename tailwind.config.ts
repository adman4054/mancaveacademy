import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        workshop: {
          50: "#f6f7f9",
          100: "#eaedf0",
          200: "#d4dae0",
          300: "#aab4c0",
          400: "#7e8a99",
          500: "#5f6b79",
          600: "#475260",
          700: "#37404b",
          800: "#232a34",
          900: "#171c24",
          950: "#0f1319"
        }
      },
      boxShadow: {
        panel: "0 18px 45px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
