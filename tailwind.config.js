const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "0px",
      },
      keyframes: {
        rubber: {
          "from, to": {
            transform: "scale3d(1, 1, 1)",
          },

          "30%": {
            transform: "scale3d(1.25, 0.75, 1)",
          },

          "40%": {
            transform: "scale3d(0.75, 1.25, 1)",
          },

          "50%": {
            transform: "scale3d(1.15, 0.85, 1)",
          },

          "65%": {
            transform: "scale3d(.95, 1.05, 1)",
          },

          "75%": {
            transform: "scale3d(1.05, .95, 1)",
          },
        },
      },
      animation: {
        rubber: "rubber 0.5s both",
        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [],
};
