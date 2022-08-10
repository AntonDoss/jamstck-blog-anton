module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#f5f5f7",
        labelGrey: "#6e6e73",
      },
      fontSize: {
        "32xl": "32px",
        "21md": "21px",
        "28md": "28px",
        "19sm": "19px",
      },
      // container: {
      //   screens: {
      //     sm: "345px",
      //     md: "680px",
      //     lg: "1148px",
      //     xl: "1280px",
      //     "2xl": "1536px",
      //   },
      // },
    },
  },
  plugins: [],
};
