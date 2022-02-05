const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        queen: colors.indigo,
        king: colors.yellow, // changing this will change theme
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // https://stackoverflow.com/questions/66416614/how-to-create-scrollable-element-in-tailwind-without-a-scrollbar
    // https://github.com/reslear/tailwind-scrollbar-hide
    plugin(function ({addUtilities}) {
      addUtilities({
        /* Hide scrollbar for Chrome, Safari and Opera */
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },

        /* Hide scrollbar for IE, Edge and Firefox */
        '.no-scrollbar': {
          '-ms-overflow-style': 'none' /* IE and Edge */,
          'scrollbar-width': 'none' /* Firefox */,
        },
      });
    }),
  ],
};
