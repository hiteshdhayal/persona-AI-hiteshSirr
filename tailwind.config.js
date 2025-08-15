// tailwind.config.js
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      keyframes: {
        popup: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        popup: "popup 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
