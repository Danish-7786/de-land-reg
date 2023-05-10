/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
     'xs':'360px',
    },
    extend: {
      backgroundImage: {
       'hero':"url('/images/hero.jpg')",
      },
    },
  },
  plugins: [],
}
