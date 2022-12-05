/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        primaryBold: "#883F76",
        regenGray: "#8F9BA9",
        kashmirBlue: "#475993",
        mercury: "#E9E9E9",
      },

      borderRadius: {
        20: "20px",
      },
    },
  },
  plugins: [],
};
