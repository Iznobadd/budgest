/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
  theme: {
    extend: {
        backgroundColor: {
            primary: "#F6F6F9",
            secondary: "#1D1B31",
        },
        colors: {
            primary: "#7380ec",
            danger: "#ff7782",
            success: "#41f1b6",
            warning: "#ffbb55",
            info_dark: "#7d8da1",
            info_light: "#dce1eb",
            dark: "#363949"
        }
    },
  },
  plugins: [],
}

