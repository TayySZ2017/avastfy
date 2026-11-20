import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        squircle: 'var(--radius-card)',
        'squircle-sm': 'var(--radius-sm)',
        'squircle-lg': 'var(--radius-lg)',
      },
      colors: {
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
        ambient1: 'rgb(var(--ambient-1) / <alpha-value>)',
        ambient2: 'rgb(var(--ambient-2) / <alpha-value>)',
        ambient3: 'rgb(var(--ambient-3) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};

export default config;
