import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/**/*.blade.php", "./resources/**/*.tsx"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                primary: "#f6f9fe",
                secondary: "#ffffff",
                accent: "#0f917c",
                hover: "#85c5bb",
            },
            colors: {
                primary: "#090909",
                secondary: "#ffffff",
                accent: "#0f917c",
            },
            transitionProperty: {
                position: "right, left, top, bottom, margin, padding",
            },
        },
    },
    plugins: [
        require("flowbite/plugin")({
            charts: true,
        }),
    ],
};
