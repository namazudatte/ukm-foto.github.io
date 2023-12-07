/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        skyTema: "#7dd3fc",
        bgDark: "#040523",
        dark: "#0f172a",
        tema: "#0DCAF0",
      },
      fontFamily: {
        inter: ["Inter"],
        sofia: ["Sofia"],
      },
    },
  },
  plugins: [],
};
