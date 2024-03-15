import type { Config } from 'tailwindcss'

import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ["Roboto Mono"],
      },
      colors: {
        primary: '#2596be',
        primary_shadow: '#d4edf7',
        secondary: '#a9a9a9',
        secondary_shadow: '#e6e6e6',
        danger: '#ff6f61',
        danger_shadow: '#ffd0cc',
        selected: '#aadcee'
      },
    },
  },
  // plugins: [
  //   require('@tailwindcss/forms'),
  // ],
} satisfies Config)
