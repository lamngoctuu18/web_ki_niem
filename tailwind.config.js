/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'pink-pastel': '#F8BBD0',
        'pink-light': '#F9DDEB',
        'pink-bg': '#FDECEC',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'script': ['Sedgwick Ave', 'Kalam', 'Dancing Script', 'Caveat', 'cursive'],
        'sedgwick': ['Sedgwick Ave', 'cursive'],
      },
      boxShadow: {
        'pink': '0 4px 6px -1px rgba(244, 114, 182, 0.1), 0 2px 4px -1px rgba(244, 114, 182, 0.06)',
        'pink-md': '0 4px 6px -1px rgba(244, 114, 182, 0.2), 0 2px 4px -1px rgba(244, 114, 182, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'scale-in': 'scaleIn 0.8s ease-in-out',
        'heart-pulse': 'heartPulse 2s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'fade-up': 'fadeUp 0.5s ease-out',
        'shake': 'shake 0.2s ease-in-out',
        'bounce-gentle': 'bounceGentle 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        heartPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

