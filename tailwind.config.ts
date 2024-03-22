import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx,css}",
    "./src/**/*.{tsx,css}"
  ],
  theme: {
    fontSize: {
      'font1-desktop': '6.25rem',
      'font1-tabletL': '5rem',
      'font1-tabletS': '3.75rem',
      'font1-mobile': '3rem',
      'font1': '2.5rem',
      'font2-tabletS': '2.375rem',
      'font2-mobile': '2rem',
      'font2': '1.75rem',
      'font3-tabletS': '2.25rem',
      'font3': '1.625rem',
      'font4': '1.5rem',
      'font5': '1.375rem',
      'font6': '1.25rem',
      'font7': '1.125rem',
      'font8': '0.938rem',
      'font9': '0.875rem',
      'font10': '0.813rem'
    },
    spacing: {
      'section-padding': '60px',
    },
    extend: {
      screens: {
        mobile: "480px",
        tabletS: "580px",
        tablet: "768px",
        tabletL: "992px",
        desktop: "1200px"
      },
      colors: {
        middleBlueGreen: "#80c2bd",
        sonicSilver: "#707070",
        eerieBlack: "#191515",
        oceanGreen: "#64C491",
        candyPink: "#DE636B",
        cultured: "#F5F5F5",
        white: "#FFFFFF",
        black: "#000000"
      },
      transitionDuration: {
        '250': '250ms',
        '750': '750ms',
      },
      transitionTimingFunction: {
        'cubic-out': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-in': 'cubic-bezier(0.33, 0.85, 0.56, 1.02)'
      },
      boxShadow: {
        'header': '0 2px 20px rgba(0, 0, 0, 0.1)',
        'header-actions': '0 -2px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;


