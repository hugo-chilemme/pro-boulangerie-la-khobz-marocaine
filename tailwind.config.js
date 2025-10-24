/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
      },
    },
    extend: {
      colors: {
        // 🌾 Palette artisanale marocaine
        sand: {
          50:  "#fdfaf5",
          100: "#faf3ea",
          200: "#f4e4cc",
          300: "#edd5ad",
          400: "#e6c68f",
          500: "#dcb878",
          600: "#c59f63",
          700: "#a98252",
          800: "#8c6842",
          900: "#6e4f31",
        },
        clay: {
          50:  "#f9f3f0",
          100: "#f1e2d9",
          200: "#e2c2b1",
          300: "#d2a38a",
          400: "#c28462",
          500: "#b26c4c",
          600: "#93563c",
          700: "#74412e",
          800: "#552b20",
          900: "#361512",
        },
        gold: {
          50:  "#fff9e5",
          100: "#fff3cc",
          200: "#ffe699",
          300: "#ffd966",
          400: "#ffcc33",
          500: "#ffbf00",
          600: "#e6ac00",
          700: "#cc9900",
          800: "#b38600",
          900: "#806000",
        },
        olive: {
          50:  "#f6f8f4",
          100: "#e9efe3",
          200: "#d3dec0",
          300: "#bccd9e",
          400: "#a6bb7b",
          500: "#90aa59",
          600: "#748845",
          700: "#586631",
          800: "#3c441d",
          900: "#202209",
        },
        dark: {
          50:  "#f4f4f4",
          100: "#dcdcdc",
          200: "#bdbdbd",
          300: "#9e9e9e",
          400: "#7f7f7f",
          500: "#606060",
          600: "#4a4a4a",
          700: "#333333",
          800: "#1d1d1d",
          900: "#000000",
        },

        // 🎨 Couleurs globales de thème (bg / text / border)
        background: "#faf3ea",   // sable clair (fond principal)
        foreground: "#1d1d1d",   // texte principal
        card: "#fff9e5",         // fond des cartes
        "card-foreground": "#4a4a4a",
        primary: "#ffbf00",      // doré
        "primary-foreground": "#1d1d1d",
        secondary: "#b26c4c",    // terre cuite
        "secondary-foreground": "#fffaf0",
        muted: "#f4e4cc",
        "muted-foreground": "#74412e",
        accent: "#90aa59",       // olive
        "accent-foreground": "#1d1d1d",
        border: "#edd5ad",
        input: "#faf3ea",
        ring: "#ffbf00",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        title: ["'Playfair Display'", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
        gold: "0 0 15px rgba(255,191,0,0.4)",
      },
    },
  },
  plugins: [],
};
