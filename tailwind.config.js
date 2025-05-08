/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				noto: [
					'Noto Serif Devanagari',
					'serif'
				],
				oswald: [
					'Oswald',
					'sans-serif'
				],
				poppin: [
					'Poppins',
					'sans-serif'
				],
				young: [
					'Young Serif',
					'serif'
				]
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				hero: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cb349ae4-3e2f-43dc-4a19-e0dd36f1b700/public')",
				hero2: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ade9af1f-67be-4cba-226e-1bf537e1f500/public')",
				hero3: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2607d4d0-6e2f-4911-d91e-65b8a9610800/public')",
				herohfd: "url('/main/hfd_images/maintop.jpg')",
				hero2hfd: "url('/main/hfd_images/top2.jpg')",
				hero3hfd: "url('/main/hfd_images/back.jpg')",
				hero4hfd: "url('/main/hfd_images/back3.jpg')",
				hero5hfd: "url('/main/hfd_images/backform.jpg')",
				web1: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/48536b02-eb70-4c76-e0db-6495c8288100/public')",
				mobile1: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/956d5b51-9bfd-494a-1ea8-b3765bcd3d00/public')",
				backg: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0a4edc3e-78a4-42cd-18ef-e5f6fbb7a400/public')",
				back2: "url('https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9eec78d2-0724-48b3-f81f-a8b59d5dbe00/public')",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}
