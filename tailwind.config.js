/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1080px",
      },
      center: true,
      //
      // padding: "100px",
    },
    extend: {
      colors: {
        first: "#374151",
        end: "#111827",
      },
      fontFamily: {
        sans: ["Patrick Hand", "system-ui"],
      },
    },
  },
  plugins: [
    // plugin(({ addUtilities }) => {
    //   const utilities = {
    //     ".bg-search": {
    //       backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-search'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E")`,
    //       backgroundRepeat: "no-repeat",
    //       backgroundPosition: "10px",
    //     },
    //   };
    //   addUtilities(utilities);
    // }),
  ],
};
