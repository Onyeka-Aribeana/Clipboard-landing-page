module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "header-desktop": "url('./images/bg-header-desktop.png')",
        "header-mobile": "url('./images/bg-header-mobile.png')",
      },
      fontFamily: {
        body: ["Bai Jamjuree", "sans-serif"],
      },
      colors: {
        "strong-cyan": "#26baa4",
        "light-blue": "#6173ff",
        "dark-grayish-blue": "#4c545d",
        "grayish-blue": "#9fabb2",
      },
      flexShrink: {
        "2": 2,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
