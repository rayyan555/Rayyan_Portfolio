/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      boxShadow: {
        "glow-blue": "0 0 10px 3px rgba(59, 130, 246, 0.7)",
      },
    },
  },
  plugins: [],
};
