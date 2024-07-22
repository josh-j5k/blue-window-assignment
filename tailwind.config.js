/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				primary: ["Montserrat", "sans-serif"],
			},
			screens: {
				"-2xl": { max: "1535px" },
				// => @media (max-width: 1536px) { ... }
				"-xl": { max: "1279px" },
				// => @media (max-width: 1279px) { ... }
				"desktop-min": { min: "1200px" },
				// => @media (max-width: 1279px) { ... }
				"-lg": { max: "1199px" },
				// => @media (max-width: 1023px) { ... }
				"-md": { max: "743px" },
				// => @media (max-width: 769px) { ... }
				"-sm": { max: "320px" },
				// => @media (max-width: 639px) { ... }
			},
			colors: {
				cta: "#009129",
				"cta-hover": "#056a21",
			},
			width: {
				clamp: "clamp(min(1000px, 98%), 500px, max(320px))",
			},
			boxShadow: {
				round:
					"0 4px 6px 2px rgb(0 0 0 / 0.1), 0 -4px 6px 2px rgb(0 0 0 / 0.1)",
			},
		},
	},
	plugins: [],
}
