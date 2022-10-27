/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FDFDFD",
        darkBeige: "#CCC3A7",
        "darkBeige-hover": "#BAAE88",
        "darkBeige-active": "#ABA285",
        darkRed: "#AB5656",
        "darkRed-hover": "#BC8181",
        "darkRed-active": "#D77777",
        stoneRed: "#CBC0C0",
        "stoneRed-hover": "#A08E8E",
        "stoneRed-active": "#877777",
        "stoneRed-dropdown": "#F8F3F3",
        "stoneRed-dropdown-hover": "#E7D6D6",
        darkBrown: "#5B2020",
        blackBrown: "#4F3838",
        oceanBlue: "#3D8ED9",
        "oceanBlue-hover": "#0072DB",
        "oceanBlue-active": "#0055A4",
      },
      spacing: {
        188: "47rem",
        100: "25rem",
        76: "19rem",
        52: "13rem",
        18: "4.5rem",
        1.1: "110%",
      },
    },
  },
  plugins: [],
};
