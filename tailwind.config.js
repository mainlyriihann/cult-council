/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 8s linear infinite',
        'shine-medium': 'shine 7s linear infinite',
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}

