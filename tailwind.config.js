/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#248232',
          light: '#2ba84a',
          dark: '#1a6624',
        },
        dark: {
          DEFAULT: '#040f0f',
          2: '#2d3a3a',
          3: '#1a2626',
        },
        body: '#fcfffc',
        heading: '#fcfffc',
        accent: '#2ba84a',
        warning: '#FFA70B',
        stroke: '#2d3a3a',
        gray: {
          light: '#fcfffc',
          DEFAULT: '#2d3a3a',
          dark: '#9ca3af',
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeInDown: 'fadeInDown 0.6s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.6s ease-out forwards',
        fadeInRight: 'fadeInRight 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(36, 130, 50, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(36, 130, 50, 0.6)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
