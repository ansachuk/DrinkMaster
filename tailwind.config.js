module.exports = {
	content: [
		"./Components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"main-black": "#0a0a11",
			},
			screens: {
				sm: "375px",
				// => @media (min-width: 640px) { ... }
				md: "768px",
				lg: "1440px",
			},
			keyframes: {
				ballsAnimation: {
					"0%, 100%": {
						transform: "translateY(0) scale(1) rotate(0)",
						opacity: "1",
					},
					"25%": {
						transform: "translateY(-50px) scale(0.8) rotate(45deg)",
						opacity: "0.5",
					},
					"50%": {
						transform: "translateY(-100px) scale(0.6) rotate(90deg)",
						opacity: "0.2",
					},
					"75%": {
						transform: "translateY(-50px) scale(0.8) rotate(45deg)",
						opacity: "0.5",
					},
				},
			},
		},
	},
	plugins: [],
};
