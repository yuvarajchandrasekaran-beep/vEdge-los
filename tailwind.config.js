/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vodacom red ramp — overrides Tailwind's default `blue`
        // so existing `*-blue-*` utilities adopt the brand palette.
        blue: {
          50: '#fff0f0',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7a7a',
          400: '#ff4747',
          500: '#f51919',
          600: '#e60000', // Vodacom red
          700: '#c20000',
          800: '#990000',
          900: '#6b0000',
        },
        primary: {
          50: '#fff0f0',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff7a7a',
          400: '#ff4747',
          500: '#f51919',
          600: '#e60000', // Vodacom red
          700: '#c20000',
          800: '#990000',
          900: '#6b0000',
        },
        // Vodacom dark/anthracite + aubergine secondary accent
        brand: {
          dark: '#1a1a1c',     // anthracite (sidebar)
          DEFAULT: '#e60000',  // Vodacom red
          light: '#ff4747',
          aubergine: '#5e2750',
        },
      },
    },
  },
  plugins: [],
}
