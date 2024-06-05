/** @type {import('tailwindcss').Config} */
// import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ok:'#000000',
      }
    }
  },
  darkMode: "class",
};
