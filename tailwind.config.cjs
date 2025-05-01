/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: '#000000',
        secondary: '#666666',
        success: '#10B981',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      fontSize: {
        // Mobile first approach
        'heading-hero': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 40px
        'heading-large': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 32px
        'heading-medium': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 24px
        'body-large': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0' }], // 20px
        'body': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }], // 16px
        'small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.02em' }], // 14px

        // Tablet (md)
        'md-heading-hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 56px
        'md-heading-large': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 40px
        'md-heading-medium': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 32px
        'md-body-large': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0' }], // 24px
        'md-body': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }], // 18px

        // Desktop (lg)
        'lg-heading-hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }], // 72px
        'lg-heading-large': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 56px
        'lg-heading-medium': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }], // 40px
        'lg-body-large': ['2rem', { lineHeight: '1.5', letterSpacing: '0' }], // 32px
        'lg-body': ['1.25rem', { lineHeight: '1.5', letterSpacing: '0' }], // 20px
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '4rem',
        },
      },
    },
  },
  plugins: [],
} 