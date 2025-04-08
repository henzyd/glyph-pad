/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
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
  plugins: [require("tailwindcss-animate")],
};
