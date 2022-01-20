module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#ED82E2",
        violet: "#8154E2",
        gray: "#7B7B7B"
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'laptop': '1024px'
      }
    },
  },
  plugins: [],
}
