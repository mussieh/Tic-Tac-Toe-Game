/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xl: { max: "1440px" },
            lg: { max: "1024px" },
            md: { max: "520px" },
            sm: { max: "425px" },
            xs: { max: "375px" },
        },
        extend: {
            colors: {
                darkNavy: "#1A2A33",
                semiDarkNavy: "#1F3641",
                silver: "#A8BFC9",
                silverHover: "#DBE8ED",
                lightBlue: "#31C3BD",
                lightBlueHover: "#65E9E4",
                lightYellow: "#F2B137",
                lightYellowHover: "#FFC860",
            },
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
            backgroundImage: () => ({
                xOutline:
                    "url('/tic-tac-toe game/src/assets/images/icon-x-outline.svg')",
                oOutline:
                    "url('/tic-tac-toe game/src/assets/images/icon-o-outline.svg')",
            }),
        },
    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                html: { fontSize: "10px" },
            });
        }),
    ],
};
