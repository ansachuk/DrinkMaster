import formsPlugin from "@tailwindcss/forms";
import { type Config } from "tailwindcss";

export default {
	content: [
		"./Components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{html,js}",
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			xs: ["0.75rem", { lineHeight: "1rem" }],
			sm: ["0.875rem", { lineHeight: "1.5rem" }],
			base: ["1rem", { lineHeight: "1.75rem" }],
			lg: ["1.125rem", { lineHeight: "2rem" }],
			xl: ["1.25rem", { lineHeight: "2rem" }],
			"2xl": ["1.5rem", { lineHeight: "2rem" }],
			"3xl": ["1.75rem", { lineHeight: "2.5rem" }],
			"4xl": ["2rem", { lineHeight: "3.5rem" }],
			"5xl": ["2.5rem", { lineHeight: "3.5rem" }],
			"6xl": ["3rem", { lineHeight: "3.75rem" }],
			"7xl": ["3.75rem", { lineHeight: "4rem" }],
			"8xl": ["4.5rem", { lineHeight: "4rem" }],
			"9xl": ["6rem", { lineHeight: "4rem" }],
		},
		extend: {
			colors: {
				"main-black": "#0a0a11",
				"main-black-lg": "#08070b",
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
	plugins: [formsPlugin],
} satisfies Config;
