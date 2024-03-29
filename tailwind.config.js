/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        banglaRegular: ["banglaRegular", "sans-serif"],
        banglaBold: ["banglaBold", "sans-serif"],
        banglaSemiBold: ["banglaSemiBold", "sans-serif"],
        aeonik: ["aeonik", "sans-serif"],
      },
      colors: {
        primaryColor: "#160098"
      },
      fontSize: {
        heading: "60px"
      }
    },
  },
  plugins: [],
}

