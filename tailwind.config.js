/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                royal: {
                    black: '#09090b',
                    purple: '#6b21a8',
                    accent: '#a855f7',
                },
                gold: {
                    DEFAULT: '#FFD700',
                    dim: '#BFA100',
                    glow: '#FFA500',
                },
                orange: {
                    DEFAULT: '#F97316',
                    bright: '#FF5722',
                }
            }
        },
    },
    plugins: [],
};