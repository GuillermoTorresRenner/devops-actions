/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B463C",
        secondary: "#CDDFB7",
        neutral: "#F4F1E9",
        accent: "#EDDC50",
        dark: "#231F20",
        grey: "#3C3C3C",
        fondo: "#B9B9B9",
      },
      fontFamily: {
        urbanist: ["var(--urbanist)"],
        merryweather: ["var(--merryweather)"],
      },
      fontSize: {
        h1: "2.833rem",
        h2: "2.333rem",
        h3: "1.833",
        subhead: "1.667rem",
        caption: "1rem",
        button: "1.5rem",
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
        '6000': '6000ms',
      }
    },
  },
  plugins: [],
};
