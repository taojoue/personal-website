module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    flexBasis: {
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '42.8571429%',
      '4/4': '100%',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#d400e8',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      center: true
    }
  },
  plugins: [],
}
