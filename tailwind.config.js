/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			screens: {
				sm: "375px",
				// => @media (min-width: 640px) { ... }
				md: "768px",
				lg: "1440px",
			},
			colors: {
				"main-black": "#0a0a11",
			},
		},
	},
	plugins: [],
};
