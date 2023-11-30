/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playFair: ['Playfair Display', 'sans-serif']
      },
      backgroundImage: {
        'diagonal-split': "linear-gradient(to bottom right, #DDFFED 50%, transparent 50%)",
      },
      backgroundSize: {
        '180%': '180%',
      },
    },
  },
  plugins: [],
}
