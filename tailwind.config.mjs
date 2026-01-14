/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // We extend standard colors to ensure they exist
        gray: {
          950: '#020617', // Manually adding 950 just in case
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
