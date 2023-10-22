/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1700px" },
      xl: { max: "1365px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "479px" },
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
        },
        body: {
          minWidth: "320px",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
        main: {
          flex: "1 1 auto",
        },
        ".container": {
          maxWidth: "1110px",
          margin: "0 auto",
          padding: "0 20px",
        },
      });
    }),
  ],
};
