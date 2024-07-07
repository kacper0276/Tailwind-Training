/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        phone: "375px",
      },
      rounded: {
        xl: "50px",
      },
    },
  },
  plugins: [],
};
