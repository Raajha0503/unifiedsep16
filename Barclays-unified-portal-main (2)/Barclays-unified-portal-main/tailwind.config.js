/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}', './assets/**/*.{html,js}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        barclays: {
          blue: '#00AEEF',
          'blue-dark': '#0077A3',
          'blue-light': '#1A222B',
          cyan: '#00C1D5',
          red: '#ff6b6b',
          yellow: '#ffe066',
          green: '#22c55e',
        },
        // Dark theme colors
        dark: {
          bg: '#10151A',
          surface: '#1A222B',
          text: '#E6F6FB',
          muted: '#7FB7C9',
          border: '#2A3A4D',
          'input-bg': '#10151A',
          'header-bg': '#1A222B',
        },
        // Light theme colors
        light: {
          bg: '#FFFFFF',
          surface: '#F8FAFC',
          text: '#1A222B',
          muted: '#475569',
          border: '#CBD5E1',
          'input-bg': '#FFFFFF',
          'header-bg': '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'logo-float': 'logoFloat 2s ease-in-out infinite',
        'logo-glow': 'logoGlow 3s ease-in-out infinite',
        'dot-bounce': 'dotBounce 1.4s ease-in-out infinite',
        'pulse-custom': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        logoFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        logoGlow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 20px rgba(0, 174, 239, 0.3))',
          },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(0, 174, 239, 0.6))' },
        },
        dotBounce: {
          '0%, 80%, 100%': {
            transform: 'scale(0.8)',
            opacity: '0.5',
          },
          '40%': {
            transform: 'scale(1.2)',
            opacity: '1',
          },
        },
      },
      boxShadow: {
        barclays: '0 20px 40px rgba(0, 174, 239, 0.15)',
        'barclays-hover': '0 25px 50px rgba(0, 174, 239, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
