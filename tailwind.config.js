/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#5c6ac4",
        },
        secondary: "#ecc94b",
      },
    },
  },
  plugins: [],
};
