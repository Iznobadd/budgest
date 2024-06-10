/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.tsx",
        "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {},
            colors: {},
            transitionProperty: {
                position: "right, left, top, bottom, margin, padding",
            },
        },
    },
    plugins: [],
};
