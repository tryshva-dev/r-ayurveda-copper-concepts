/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        basalt: "#17110d",
        copper: "#b36a38",
        "copper-dark": "#6f321c",
        "copper-light": "#e2a06a",
        turmeric: "#d8a929",
        sandal: "#f2dfbf",
        "temple-red": "#7e241b",
        neem: "#2d5d4a",
        jasmine: "#fff8ec",
        smoke: "#2b2018",
      },
      boxShadow: {
        ember: "0 24px 90px rgba(111, 50, 28, 0.28)",
        product: "0 28px 70px rgba(76, 38, 23, 0.18)",
        nav: "0 18px 40px rgba(38, 20, 10, 0.12)",
      },
      backgroundImage: {
        "temple-grid":
          "linear-gradient(rgba(111,50,28,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(111,50,28,0.06) 1px, transparent 1px)",
        "copper-radial":
          "radial-gradient(circle at 30% 25%, rgba(226,160,106,0.35), transparent 34%), radial-gradient(circle at 82% 10%, rgba(216,169,41,0.22), transparent 28%), linear-gradient(135deg, #fff8ec 0%, #f2dfbf 46%, #e4bd84 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
