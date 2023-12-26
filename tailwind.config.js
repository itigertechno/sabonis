/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withMT = require('@material-tailwind/react/utils/withMT');

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
        },
        screens: {
            'w260': '260px',
            'w468': '468px',
            'w768': {"max": "768px"},
            'w1024': {"max": "1024px"},
            'w1024-min': {"min": "1024px"},
            'w1260': {"max": "1260px"},
            'w1330': '1330px',
            'w1240': '1240px',
            'w1440': '1440px',
            'w1640': '1640px',
        },
        typography: {
            defaultProps: {
                className: '',
            },
        },
        extend: {},
    },
    plugins: [],
});
