/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff', // Very light blue
          100: '#e0f2fe', // Light blue
          200: '#bae6fd', // Soft blue
          300: '#7dd3fc', // Bright sky blue
          400: '#38bdf8', // Vibrant blue
          500: '#0ea5e9', // Strong blue
          600: '#0284c7', // Deep blue
          700: '#0369a1', // Darker blue
          800: '#075985', // Navy blue
          900: '#0c4a6e', // Very dark blue
        },
        secondary: {
          50: '#e6f4ff', // Pale blue
          100: '#b3e0ff', // Light pastel blue
          200: '#80ccff', // Soft cyan-blue
          300: '#4db8ff', // Bright cyan-blue
          400: '#1a9cff', // Vibrant cyan-blue
          500: '#0077e6', // Rich blue
          600: '#005bb3', // Deep cyan-blue
          700: '#004080', // Dark cyan-blue
          800: '#00264d', // Very dark cyan-blue
          900: '#00101a', // Almost black with a blue tint
        },
        accent: {
          50: '#e6f7ff', // Pale cyan
          100: '#b3e5fc', // Light cyan
          200: '#80d4fa', // Soft cyan
          300: '#4dc3f7', // Bright cyan
          400: '#1ab1f5', // Vibrant cyan
          500: '#0091ea', // Strong cyan-blue
          600: '#0077b6', // Deep cyan-blue
          700: '#005d83', // Dark cyan-blue
          800: '#004359', // Very dark cyan-blue
          900: '#002933', // Almost black with a cyan tint
        },
        neutral: {
          50: '#f8fafc', // Very light gray with a blue tint
          100: '#f1f5f9', // Light gray with a blue tint
          200: '#e2e8f0', // Soft gray with a blue tint
          300: '#cbd5e1', // Medium gray with a blue tint
          400: '#94a3b8', // Gray with a blue tint
          500: '#64748b', // Slate gray
          600: '#475569', // Dark slate gray
          700: '#334155', // Very dark slate gray
          800: '#1e293b', // Almost black with a blue tint
          900: '#0f172a', // Very dark blue-gray
        },
      },
      backgroundImage: {
        'hero-bg': "url('/perfect-blue-sky-with-beautiful-clouds_1033311-714.avif')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
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
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
