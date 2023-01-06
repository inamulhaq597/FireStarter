/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#C48AFE",
        white: "#FFFFFF",
        black: "#000000",
        // gray: "#3A3742",
        transpclr: "#34343E",
        // somecolor: "hsla(0,0%,100%,.15)",
      },
    },
  },
  plugins: [],
};
