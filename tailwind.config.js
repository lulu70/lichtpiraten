module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#ffc40d",
      },
      screens: {
        hd: "1920px",
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
}
