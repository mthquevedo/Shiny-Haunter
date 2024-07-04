import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
		primary:'#2D3073',
		backcolor:'#EAEDF6',
		darkgray:'#323232',
		menucyan:'#B2DCED',
		buttoncyan:'#66BACD',
		buttoncyanhigh:'#73C6D9',
      },
	fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"35v": "35vh",
				"40v": "40vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      width: {
				"10v": "10vw",
				"15v": "15vw",
				"20v": "20vw",
				"30v": "30vw",
				"35v": "35vw",
				"40v": "40vw",
				"50v": "50vw",
				"60v": "60vw",
				"70v": "70vw",
				"80v": "80vw",
				"85v": "85vw",
				"90v": "90vw",
				"100v": "100vw",
			},
    },
  },
  plugins: [],
} satisfies Config