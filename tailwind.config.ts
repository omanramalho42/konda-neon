import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'growlight': '0px 0px 8px 2px #FFC607',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
