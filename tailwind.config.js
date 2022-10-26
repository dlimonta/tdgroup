/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts}"],
    theme: {
        fontFamily: {
            main: ["poppins", "Arial", "sans-serif"],
        },
        extend: {
            backgroundImage: {
                landing:
                    "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('src/assets/images/landing-image.jpg')",
            },
        },
    },
    plugins: [],
};
