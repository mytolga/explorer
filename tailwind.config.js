/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yes: '#00ff00',
        no: '#ff0000',
        info: '#65a30d',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: 'var(--bg-active)',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          "primary": "#f5f5f4",
          "primary-content": "#ca8a04",
          "secondary": "#1c19117",
          "base-100": "#ca8a04",
          "base-200": "#f5f5f4",
          "base-300": "#f5f5f4",
          "base-content": "#111827",
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          "primary": "#ca8a04",
          "primary-content": "#1c1917",
          "secondary": "#111827",
          "base-100": "#1c1917",
          "base-200": "#f5f5f4",
          "base-300": "f5f5f4",
          "base-content": "#fb923c",
          "neutral": "#ca8a04",
          "neutral-content": "#1c1917",
        },
      },
    ],
  },
};
