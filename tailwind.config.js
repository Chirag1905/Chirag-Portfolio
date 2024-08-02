/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
// import colors from "./tailwindcss/colors"
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        ...colors,
      primary: colors.purple,
      secondary: colors.pink,
        sky: '#00aaff',
        stone: '#a0a0a0',
        neutral: '#6b7280',
        gray: '#9ca3af',
        slate: '#64748b',
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");
// module.exports = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/**/*.{html,js,ts,jsx,tsx}',  
//     './public/**/*.html',
//   ],
//   theme: {
//     extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
//     },
//     // colors: {
      // ...colors,
      // primary: colors.purple,
      // secondary: colors.pink,
//     // },
//     colors: {
//       sky: '#00aaff',
//       stone: '#a0a0a0',
//       neutral: '#6b7280',
//       gray: '#9ca3af',
//       slate: '#64748b',
//     },
//   },
//   plugins: [],
// }
