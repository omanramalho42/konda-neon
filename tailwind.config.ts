import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'growlight': '0px 0px 8px 2px #FFC607',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'linear-gradient(90deg, #FF5E82 0%, #63ABFD 100%)',
        'gradient-linear': 'linear-gradient(90deg, #63ABFD 3.49%, #F6F7A0 28.91%, #FF5E82 75.09%)',
        'home-pattern': "url('../assets/img/background.jpeg')",
        'home-pattern-mobile': "url('../assets/img/bg.jpeg')",
      },
      backgroundPosition: {
        'small': 'center right -2rem'
      }
    },
  },
  plugins: [],
}
export default config
