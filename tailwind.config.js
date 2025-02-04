/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        red: "hsl(0, 100%, 74%)",
        green: "hsl(154, 59%, 51%)",

        // Accent
        blue: "hsl(248, 32%, 49%)",

        // Neutral
        "dark-blue": "hsl(249, 10%, 26%)",
        "grayish-blue": "hsl(246, 25%, 77%)",
      },
    },
  },
  plugins: [],
};
