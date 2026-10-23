/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0b2545" },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Sora", "DM Sans", "sans-serif"],
      },
      boxShadow: { soft: "0 20px 50px -20px rgba(2,132,199,.35)" },
    },
  },
  plugins: [],
};
