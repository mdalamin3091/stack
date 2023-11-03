/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#377DFF",
        secondary: {
          DEFAULT: "#F0F5FA",
          50: "#F3F3F3",
          100: "#B0B7C3",
          200: "#8A94A6",
          300: "#323B4B",
        },
        error: "#FF5630",
      },
      height: {
        "screen-85": "85vh",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
