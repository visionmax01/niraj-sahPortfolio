/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#1e3a8a',
        accent: '#3b82f6',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'rotateShadow': 'rotateShadow 8s ease-in-out infinite',
        'rotateShadowHover': 'rotateShadow 4s ease-in-out infinite',
      },
      keyframes: {
        rotateShadow: {
          '0%, 100%': {
            'box-shadow': '0 0 15px 5px rgba(59, 130, 246, 0.7), 0 0 30px 10px rgba(99, 102, 241, 0.5), 0 0 45px 15px rgba(168, 85, 247, 0.3)'
          },
          '25%': {
            'box-shadow': '0 0 15px 5px rgba(99, 102, 241, 0.7), 0 0 30px 10px rgba(168, 85, 247, 0.5), 0 0 45px 15px rgba(236, 72, 153, 0.3)'
          },
          '50%': {
            'box-shadow': '0 0 15px 5px rgba(168, 85, 247, 0.7), 0 0 30px 10px rgba(236, 72, 153, 0.5), 0 0 45px 15px rgba(239, 68, 68, 0.3)'
          },
          '75%': {
            'box-shadow': '0 0 15px 5px rgba(236, 72, 153, 0.7), 0 0 30px 10px rgba(239, 68, 68, 0.5), 0 0 45px 15px rgba(59, 130, 246, 0.3)'
          }
        }
      },
    },
  },
  plugins: [],
}