/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1280px",
      },
      letterSpacing: {
        tighter: "-0.5px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
