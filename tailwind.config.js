/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ["General Sans", "sans-serif"],
      },
      backgroundImage: {
        terminal: "url('/3d-portfolio/assets/terminal.png')",
      },
    },
    
  },
  plugins: [],
};
