import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mainTheme: {
          primary: "#A94438",
          secondary: "#D24545",
          accent: "#E6BAA3",
          neutral: "#231f20",
          "base-100": "#f5f5f5",
          info: "#41afff",
          success: "#38a944",
          warning: "#ff8239",
          error: "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
};
export default config;
