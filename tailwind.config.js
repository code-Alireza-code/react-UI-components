/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('./src/assets/img7.jpg')",
      },
      boxShadow: {
        customShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
