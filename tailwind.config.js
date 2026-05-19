/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bodoni Moda"', '"Bodoni 72"', "Didot", '"Libre Baskerville"', "Georgia", "serif"],
        body: ["Montserrat", "Avenir", "Helvetica Neue", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        basalt: "#271811",
        copper: "#8c4f10",
        "copper-dark": "#894d0d",
        "copper-light": "#ffb77b",
        turmeric: "#d8a929",
        sandal: "#ffeae1",
        "temple-red": "#8d4938",
        neem: "#2d5d4a",
        jasmine: "#fff8f6",
        smoke: "#3d2d25",
      },
      boxShadow: {
        ember: "5px 5px 0 rgba(39, 24, 17, 0.12)",
        product: "4px 4px 0 rgba(39, 24, 17, 0.1)",
        nav: "0 2px 0 rgba(39, 24, 17, 0.12)",
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
