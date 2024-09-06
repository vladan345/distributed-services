/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./page-sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#1B1B1B",
        white: "#FFFFFF",
        "light-grey": "#E6E6E6",
        light: "#F6F8F7",
        "pine-green": "#273F32",
        pistacio: "#C8EFA0",
        accent: "#FFCDB7",
      },
      screens: {
        "2xl": { max: "1600px" },
        "1xl": { max: "1400px" },
      },
    },
  },
  plugins: [],
};
