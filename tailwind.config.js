/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1620px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
