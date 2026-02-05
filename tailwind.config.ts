import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals
        black: '#121212',
        charcoal: '#1E1E1E',
        bone: '#F5F2EC',
        offWhite: '#FAF8F3',
        
        // Text
        textDark: '#1A1A1A',
        textGrey: '#6F6F6F',
        borderGrey: '#D6D6D6',
        
        // Accent (using Electric Teal - can swap to Lime or Cobalt)
        accent: '#00E5C4', // Electric Teal
        accentLime: '#B6F300', // Electric Lime alternative
        accentBlue: '#3B5BFF', // Cobalt Blue alternative
      },
      animation: {
        // Fade and slide animations
        fadeIn: 'fadeIn 0.6s ease-in-out',
        fadeInUp: 'fadeInUp 0.6s ease-out',
        fadeInDown: 'fadeInDown 0.6s ease-out',
        slideInLeft: 'slideInLeft 0.6s ease-out',
        slideInRight: 'slideInRight 0.6s ease-out',
        
        // Hover animations
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        
        // Button animations
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
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 5px rgba(0, 229, 196, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(0, 229, 196, 0.6)' },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}

export default config
