/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.tsx"],
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
