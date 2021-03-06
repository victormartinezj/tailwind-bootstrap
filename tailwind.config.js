module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7952b3",
        primaryDark: "#61428f",
        customGreen: "#198754",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
  plugins: [],
};
