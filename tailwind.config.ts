import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 2s linear forwards",
      },
      keyframes: {
        float: {
          "0%": {
            opacity: "1",
            top: "-15px",
            transform: "rotateZ(0deg)",
          },
          "12%": {
            transform: "rotateZ(-20deg) scale(0.9)",
          },
          "24%": {
            transform: "rotateZ(20deg) scale(0.7)",
            left: "3px",
            opacity: "0.7",
          },
          "40%": {
            transform: "rotateZ(-11deg) scale(0.6)",
            left: "-3px",
          },
          "70%": {
            transform: "rotateZ(10deg) scale(0.4)",
            left: "3px",
            opacity: "0.5",
          },
          "90%": {
            transform: "scale(0.2)",
            left: "-3px",
          },
          "100%": {
            opacity: "0",
            top: "-120px",
            transform: "rotateZ(-5deg) scale(0.1)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config;
