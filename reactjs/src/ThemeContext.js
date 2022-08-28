import {useContext, createContext} from 'react'

export const themes = {
  light: {
    name: 'light',
    background: '#ccc',
    bgDesktop: './images/bg-desktop-light.jpg',
    bgMobile: './images/bg-mobile-light.jpg',
  },
  dark: {
    name: 'dark',
    background: '#333',
    bgDesktop: './images/bg-desktop-dark.jpg',
    bgMobile: './images/bg-mobile-dark.jpg',
  },
}

export const useTheme = () => useContext(ThemeContext);

// default value but really we are managing it via state, localStorage, change theme button, etc.
export const ThemeContext = createContext(themes.light)

