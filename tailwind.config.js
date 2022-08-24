/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        mainColor: "#210D5A",
        secondColor: "#210d5a4a",
        activeColor: "#794ADC",
      },
      backgroundColor: {
        mainColor: "#fff",
        secondColor: "#794ADC",
      },

      borderColor: {
        mainColor: "#1919191a",
        activeBorder: "#794ADC",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
