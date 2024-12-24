/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      "red": "#FF4655",
      "body": "#111111",
      "gray": "#303030"
    },
    backgroundSize: {
      "fill": "100% 100%",
      "cover": "cover",
    },
    backgroundImage: {
      "news-block": "linear-gradient(180deg, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 0) 100%)",
      "news-block-x": "linear-gradient(to bottom, rgba(17, 17, 17, 0) 0%, rgba(17, 17, 17, 1) 100%)",
    }
  },
  plugins: [],
};