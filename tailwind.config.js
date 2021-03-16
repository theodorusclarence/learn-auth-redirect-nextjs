const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                primary: ['Inter', ...fontFamily.sans],
            },
            colors: {
                primary: {
                    400: '#00E0F3',
                    500: '#00c4fd',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
