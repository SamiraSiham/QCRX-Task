/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Georgia: ["Georgia", "sans-serif"],
      },
      keyframes:{
        "loop-scroll":{
          '0%' : {transform: "translateX(0)"},
          '25%' : {transform: "translateX(-55%)"},
          '50%' : {transform: "translateX(0)"},
          '75%' : {transform: "translateX(55%)"},
          '100%' : {transform: "translateX(0)"},
        },
      },
      animation:{
        "loop-scroll":  "loop-scroll 15s linear infinite",
      }
    },
  },
  plugins: [],
  variants:{
    extend:{
      display: ["focus-group"]
    }
  }
};
