import type { Config } from 'tailwindcss'

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'selector',
	theme: {
		extend: {
			screens: {
				x93: '393px',
				xsm: '400px',
				xsx: '480px',
			},
			colors: {
				menuback: '#222222',
				primary: '#312c85',
				backcolor: '#F2F2F2',
				darkgray: '#323232',
				menucyan: '#B2DCED',
				buttoncyan: '#66BACD',
				buttoncyanhigh: '#73C6D9',
				bug: '#90C12D',
				bugback: '#fcfde9',
				dark: '#7B7171',
				darkback: '#ebe0e0',
				dragon: '#4558f7',
				dragonback: '#e9ebfb',
				electric: '#f4d242',
				electricback: '#fcf8ea',
				fairy: '#f872f8',
				fairyback: '#f3e0f3',
				fighting: '#f5b742',
				fightingback: '#f9f3e8',
				fire: '#f97443',
				fireback: '#f4e6e1',
				flying: '#8eccfd',
				flyingback: '#e5f1fb',
				ghost: '#A86DAC',
				ghostback: '#e3cee4',
				grass: '#5BDD3C',
				grassback: '#e6f5e3',
				ground: '#d59544',
				groundback: '#f3eadf',
				ice: '#41d2f0',
				iceback: '#e0f1f5',
				normal: '#c9c9c9',
				normalback: '#eaeaea',
				poison: '#af4ef3',
				poisonback: '#f1e6f9',
				psychic: '#ff6885',
				psychicback: '#f9e7eb',
				rock: '#dcd798',
				rockback: '#fbfae9',
				steel: '#67b7e1',
				steelback: '#e1eff6',
				water: '#40a2fc',
				waterback: '#ecf6ff',
				cardTooltipBg: '#4d4d4d',
			},
			backgroundImage: {
				'hero-banner': "url('/assets/Home_banner_degrade.png')",
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			height: {
				"5v": "5dvh",
				"7v": "7dvh",
				"8v": "8dvh",
				"9v": "9dvh",
				"10v": "10dvh",
				"19v": "19dvh",
				"20v": "20dvh",
				"21v": "21dvh",
				"22v": "22dvh",
				"25v": "25dvh",
				"28v": "28dvh",
				"30v": "30dvh",
				"35v": "35dvh",
				"40v": "40dvh",
				"50v": "50dvh",
				"60v": "60dvh",
				"70v": "70dvh",
				"75v": "75dvh",
				"80v": "80dvh",
				"90v": "90dvh",
				"91v": "91dvh",
				"92v": "92dvh",
				"93v": "93dvh",
				"95v": "95dvh",
				"100v": "100dvh",
			},
			width: {
				"4v": "4.3dvw",
				"5v": "5dvw",
				"6v": "6dvw",
				"7v": "7dvw",
				"8v": "8dvw",
				"9v": "9dvw",
				"10v": "10dvw",
				"11v": "11dvw",
				"12v": "12dvw",
				"14v": "14dvw",
				"15v": "15dvw",
				"20v": "20dvw",
				"25v": "25dvw",
				"30v": "30dvw",
				"35v": "35dvw",
				"40v": "40dvw",
				"43v": "43dvw",
				"50v": "50dvw",
				"60v": "60dvw",
				"70v": "70dvw",
				"75v": "75dvw",
				"80v": "80dvw",
				"85v": "85dvw",
				"89v": "89dvw",
				"90v": "90dvw",
				"91v": "91dvw",
				"92v": "92dvw",
				"93v": "93dvw",
				"94v": "94dvw",
				"95v": "95dvw",
				"96v": "96dvw",
				"100v": "100dvw",
			},
			animation: {
				fade: 'fadeIn .5s ease-in-out',
				pulse: 'pulse 1.5s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
