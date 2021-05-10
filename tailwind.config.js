const range = {
	'1/7': '14.2857143%',
	'2/7': '28.5714286%',
	'3/7': '42.8571429%',
	'4/7': '57.1428571%',
	'5/7': '71.4285714%',
	'6/7': '85.7142857%',
	'6.8/7': '97.1428%',
	'25p': '25vw',
	'.5': '5%',
	'1/10': '10%',
	'2/10': '20%',
	'3/10': '30%',
	'4/10': '40%',
	'5/10': '50%',
	'6/10': '60%',
	'7/10': '70%',
	'8/10': '80%',
	'9/10': '90%',
	'10/10': '100%',
};

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			margin: {
				...range,
			},
			width: {
				...range,
			},
			minWidth: {
				...range,
			},
			maxWidth: {
				...range,
			},
			maxHeight: {
				...range,
			},
			padding: {
				...range,
			},
			height: {
				'3/4': '75vh',
				'line': '1px',
				'3/10': '30vh',
				...range,
			},
			borderRadius: {
				'sm-box': '35px',
			},
			colors: {
				green: {
					500: '#5B6D5B',
				},
				red: {
					500: 'FB3640',
				},
			},
			blue: {
				500: '#2978B5',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('tailwind-scrollbar-hide'),
		// ...
	],
};
