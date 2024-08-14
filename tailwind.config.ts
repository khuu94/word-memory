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
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gossip': {
          '50': '#f4fbea',
          '100': '#e5f5d2',
          '200': '#c1e899',
          '300': '#aade78',
          '400': '#8acd4e',
          '500': '#6cb230',
          '600': '#518e22',
          '700': '#406c1f',
          '800': '#36571d',
          '900': '#2e4a1d',
          '950': '#16280b',
        },
        'hippie-green': {
          '50': '#f2f8ed',
          '100': '#e1efd8',
          '200': '#c7e0b6',
          '300': '#a4cc8a',
          '400': '#82b764',
          '500': '#659b47',
          '600': '#55883b',
          '700': '#3c5f2c',
          '800': '#334d27',
          '900': '#2e4225',
          '950': '#152310',
        },
        'reno-sand': {
          '50': '#f9f6ed',
          '100': '#efe8d2',
          '200': '#e1cfa7',
          '300': '#d0b074',
          '400': '#c2954d',
          '500': '#b28140',
          '600': '#9a6735',
          '700': '#7b4d2d',
          '800': '#68402b',
          '900': '#5a3729',
          '950': '#331d15',
        },
      }
    },
  },
  plugins: [],
};

export default config;
