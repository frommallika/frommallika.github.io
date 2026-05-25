import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        saffron: '#D97706',
        magenta: '#BE185D',
        emerald: '#047857',
        cream: '#FDFBF7',
        gold: '#B45309',
        rust: '#C46A3C',
        olive: '#6E7F4D',
        plum: '#5A2A5A',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
