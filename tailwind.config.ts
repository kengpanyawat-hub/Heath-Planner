
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#325BBA"
      },
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: []
};
export default config;
