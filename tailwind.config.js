const openVariant = require("./plugins/openVariant");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("./plugins/openVariant")],
};
