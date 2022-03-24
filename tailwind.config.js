module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          "0%": { color: "#ffffff" },
          "49%": { color: "#ffffff" },
          "60%": { color: "transparent" },
          "99%": { color: "transparent" },
          "100%": { color: "#ffffff" },
        },
      },
    },
  },
  plugins: [],
};
