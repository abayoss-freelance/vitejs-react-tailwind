/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["10px", "10px"],
      },
      colors: {
        primary: colors.blue,
        gray: colors.blueGray,
        "blue-gray": colors.blueGray,
      },
      boxShadow: {
        primary: "0 4px 14px 0 rgb(113 123 188 / 39%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
  ],
};
