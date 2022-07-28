module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: true, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "text-color": "#9199a0",
                "text-darker": "#61686f",
                "text-darkest": "#494e53",
                "pink-accent": "#a385b3",
            },
        },
        FontFamily: {
            "jetbrains-mono": ["JetBrains Mono", "monospace"],  
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
