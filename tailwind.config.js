/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        grey50: "hsl(0, 0%, 97%)",
        blue950: "hsl(229, 31%, 21%)",
        blue600: "hsl(231, 69%, 60%)",
        red400: "hsl(0, 94%, 66%)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
    plugins: [],
  },
};
