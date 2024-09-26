/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        // Override the default 'sm' breakpoint to 480px
        sm: "480px",
        "2xl": "1440px",
      },

      colors: {
        darkPurple: "#1a002d", 
        purple: "#2c0038", 
        gold: "#ffd700", 
        mutedGold: "#e6b31c",
        white: "#ffffff", 
      },
    },
  },
  plugins: [],
};
