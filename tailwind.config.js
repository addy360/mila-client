module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald",
      },
      colors: {
        primary: {
          DEFAULT: "#FFFF00",
          50: "#FFFFB8",
          100: "#FFFFA3",
          200: "#FFFF7A",
          300: "#FFFF52",
          400: "#FFFF29",
          500: "#FFFF00",
          600: "#C7C700",
          700: "#8F8F00",
          800: "#575700",
          900: "#1F1F00",
        },
        secondary: {
          DEFAULT: "#00FFFF",
          50: "#B8FFFF",
          100: "#A3FFFF",
          200: "#7AFFFF",
          300: "#52FFFF",
          400: "#29FFFF",
          500: "#00FFFF",
          600: "#00C7C7",
          700: "#008F8F",
          800: "#005757",
          900: "#001F1F",
        },
        prisec: {
          DEFAULT: "#FF00FF",
          50: "#FFB8FF",
          100: "#FFA3FF",
          200: "#FF7AFF",
          300: "#FF52FF",
          400: "#FF29FF",
          500: "#FF00FF",
          600: "#C700C7",
          700: "#8F008F",
          800: "#570057",
          900: "#1F001F",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
