/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "app-red": "#eb5946",
		"app-pink":"#e93e69"
      },
	  fontFamily: {
		'montserrat-alternates': ['Montserrat Alternates']
	  }
    },
  },
  plugins: [],
};
