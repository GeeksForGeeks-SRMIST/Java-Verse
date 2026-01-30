/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1a202c", // Placeholder
                secondary: "#2d3748", // Placeholder
                accent: "#38b2ac", // Placeholder
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/hero-bg.svg')", // Placeholder
            }
        },
    },
    plugins: [],
}
