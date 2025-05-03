import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      maxWidth: {
        App: "1700px",
      },
      screens: {
        smallMobile: { max: "320px" },

        mediumMobile: { max: "375px" },

        largeMobile: { max: "425px" },

        largeMobile_545: { max: "545px" },

        tablet_768: { max: "768px" },

        tablet: { max: "900px" },

        largeTabletAndBelow: { max: "1024px" },

        laptopAndAbove: { min: "1024px" },

        largeLaptop: { min: "1440px" },
      },
    },
  },
} satisfies Config;
