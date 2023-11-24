const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["InterVariable", "Inter", "sans-serif"],
			mono: ["JetBrains Mono", "monospace"],
		},
		extend: {
			colors: {
				current: "currentColor",
			},
			textShadow: {
				sm: "0 1px 2px var(--tw-shadow-color)",
				DEFAULT: "0 2px 4px var(--tw-shadow-color)",
				lg: "0 8px 16px var(--tw-shadow-color)",
			},
		},
	},
	// darkMode: "class",
	plugins: [
		require("rippleui"),
		require("@tailwindcss/typography"),
		plugin(function ({matchUtilities, theme}) {
			matchUtilities(
				{
					"text-shadow": (value) => ({
						textShadow: value,
					}),
				},
				{values: theme("textShadow")},
			);
		}),
	],
};
