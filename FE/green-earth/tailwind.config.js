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
      },
    },
  },
  plugins: [],
};
