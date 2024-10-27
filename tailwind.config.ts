import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeColor: '#030E8C',
        autofillDark: 'rgba(70, 90, 126, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true, // Center the container
      padding: '1rem', // Add default padding
      screens: {
        sm: '640px',
        md: '1024px',
        lg: '1440px',
      },
    },
    keyframes: {
      glow: {
        '0%, 100%': { boxShadow: '0 0 15px 5px rgba(51, 180, 244, 0.5)' },
        '50%': { boxShadow: '0 0 15px 10px rgba(51, 180, 244, 1)' },
      },
    },
    animation: {
      glow: 'glow 2s infinite',
    },
  },
}
export default config
