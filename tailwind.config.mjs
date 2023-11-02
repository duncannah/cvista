/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ['"Inter var"', "Inter", "sans-serif"],
			mono: ["JetBrains Mono", "monospace"],
		},
		extend: {},
	},
	// darkMode: "class",
	plugins: [require("rippleui"), require("@tailwindcss/typography")],
};
