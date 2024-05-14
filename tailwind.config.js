/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
    ],
    darkMode: "class",
  theme: {
    extend: {
        backgroundColor: {
            primary: "#f1f5f9",
            primary_dark: "#0f1824",
            secondary: "#ffffff",
            secondary_dark: "#132337",
            accent: "#eff6ff",
            accent_dark: "#1C2E45",
        },
        colors: {
            primary: "#92afd3",
            secondary: "#3b82f6",
            icons: "#39475a",
            border_light: "#e2e8f0",
            border_dark: "#1c2e45",
            blue: "#3b82f6",
            blue_accent: "#2563eb"
        }
    },
  },
  plugins: [],
}

