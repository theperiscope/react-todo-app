/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '300': '300px'
      },
      width: {
        'desktop': '540px',
        'mobile': '330px'
      },
      fontSize: {

      },
      letterSpacing: {
        appTitle: '0.20em'
      },
      colors: {
        'light-desktop-background-color': '#fafafa',
        'light-control-background-color': '#ffffff',
        'light-placeholder-color': '#9e9da1',
        'light-very-light-gray': 'hsl(var(--color-light-very-light-gray) / <alpha-value>)',
        'light-very-light-grayish-blue': 'hsl(var(--color-light-very-light-grayish-blue) / <alpha-value>)',
        'light-light-grayish-blue': 'hsl(var(--color-light-light-grayish-blue) / <alpha-value>)',
        'light-dark-grayish-blue': 'hsl(var(--color-light-dark-grayish-blue) / <alpha-value>)',
        'light-very-dark-grayish-blue': 'hsl(var(--color-light-very-dark-grayish-blue) / <alpha-value>)',

        'dark-very-dark-blue': 'hsl(var(--color-dark-very-dark-blue) / <alpha-value>)',
        'dark-very-dark-desaturated-blue': 'hsl(var(--color-dark-very-dark-desaturated-blue) / <alpha-value>)',
        'dark-light-grayish-blue': 'hsl(var(--color-dark-light-grayish-blue) / <alpha-value>)',
        'dark-light-grayish-blue-hover': 'hsl(var(--color-dark-light-grayish-blue-hover) / <alpha-value>)',
        'dark-dark-grayish-blue': 'hsl(var(--color-dark-dark-grayish-blue) / <alpha-value>)',
        'dark-very-dark-grayish-blue': 'hsl(var(--color-dark-very-dark-grayish-blue) / <alpha-value>)'
      },
      backgroundImage: {
        'desktopDark': "url('./images/bg-desktop-dark.jpg')",
        'desktopLight': "url('./images/bg-desktop-light.jpg')",
        'mobileDark': "url('./images/bg-mobile-dark.jpg')",
        'mobileLight': "url('./images/bg-mobile-light.jpg')"
      },
      screens: {
        'xs': '375px',
        '2xl': '1440px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
