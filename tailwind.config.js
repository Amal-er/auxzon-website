/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        novembm: ["Novembm", "sans-serif"],
        customBlue: "#E6F1FB",
        "custom-black":
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.2)",
        "custom-purple": "#5c429A",
        "extra-relaxed": "1.8",
        customPara: "#05253B",
      },
    },
  },
  plugins: [],
};
