module.exports = {
  purge: ["*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#7952b3",
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
