import headlessuiPlugin from '@headlessui/tailwindcss';
import aspectRatio from '@tailwindcss/aspect-ratio';
import formsPlugin from '@tailwindcss/forms';
import { Config } from 'tailwindcss/types/config';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      transitionTimingFunction: {
        'smooth-in-out': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
      colors: {
        primary: {
          default: '#000000',
          100: '#eaeaea',
          200: '#d5d5d5',
          300: '#bfbfbf',
          400: '#aaaaaa',
          500: '#959595',
          600: '#808080',
          700: '#6a6a6a',
          800: '#555555',
          900: '#404040',
          1000: '#2a2a2a',
          1100: '#151515',
        },
        secondary: {
          default: '#ffd700',
          100: '#fff9db',
          200: '#fff4b6',
          300: '#ffee92',
          400: '#ffe86d',
          500: '#ffe249',
          600: '#ffdd24',
          700: '#d9b700',
          800: '#b39600',
          900: '#8c7600',
          1000: '#665600',
        },
        neutral: {
          'base-white': '#fafafa',
          100: '#e4e4e4',
          200: '#cfcece',
          300: '#bab8b8',
          400: '#a5a1a1',
          500: '#908b8b',
          600: '#7a7474',
          700: '#655f5f',
          800: '#4e4949',
          900: '#383434',
          1000: '#221f1f',
          'base-black': '#0b0a0a',
        },
        success: {
          default: '#18ac6c',
          100: '#a3f2d0',
          200: '#47e5a1',
          300: '#117a4d',
        },
        warning: {
          default: '#ebbd00',
          100: '#ffeda3',
          200: '#ffdb48',
          300: '#a58500',
        },
        error: {
          default: '#d82014',
          100: '#f7b0ab',
          200: '#f06158',
          300: '#98160e',
        },
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin, aspectRatio],
} satisfies Config;
