import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "nox-black": "#0D0D0D",
        "nox-red": "#E80028",
        "nox-white": "#FFFFFF",
        "nox-grey": "#1A1A1A",
        "nox-light": "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cairo: ["Cairo", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
