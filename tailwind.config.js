/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.tsx",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
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
