/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "epilogue" :  ["epilogue"],
      },
      colors: {
        "awhite": "hsl(0, 0%, 98%)",
        "mgray": "hsl(0, 0%, 41%)",
        "ablack": "hsl(0, 0%, 8%)"
      }
    },
  },
  plugins: [],
}