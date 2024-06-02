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
          "primary": "#FFA500", // Turuncu
          "primary-content": "#000000", // Siyah
          "secondary": "#D2691E", // Koyu Turuncu
          "base-100": "#FFFFFF", // Beyaz
          "base-200": "#FFFFFF", // Beyaz
          "base-300": "#FFFFFF", // Beyaz
          "base-content": "#000000", // Siyah
          "neutral": "#00FF00", // Yeşil (başarı mesajları)
          "neutral-content": "#FF0000", // Kırmızı (hata mesajları)
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          "primary": "#FFA500", // Turuncu
          "primary-content": "#000000", // Siyah
          "secondary": "#D2691E", // Koyu Turuncu
          "base-100": "#000000", // Siyah
          "base-200": "#000000", // Siyah
          "base-300": "#000000", // Siyah
          "base-content": "#FFA500", // Turuncu
          "neutral": "#00FF00", // Yeşil (başarı mesajları)
          "neutral-content": "#FF0000", // Kırmızı (hata mesajları)
        },
      },
    ],
  },
};
