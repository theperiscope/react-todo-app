import { useEffect, useMemo, useState } from 'react'
import Background from './Background'
import ChangeThemeButton from './ChangeThemeButton'
import { themes, ThemeContext } from './ThemeContext'

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme") // get referenced color
    if (typeof storedPrefs === "string" && storedPrefs !== null) {
      return storedPrefs === "dark" ? themes.dark : themes.light
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)")

    if (userMedia.matches) {
      return themes.dark
    }
  }

  return themes.light
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme())
  const value = useMemo(() => ({ theme, setTheme }), [theme])

  useEffect(() => {
    // https://tailwindcss.com/docs/dark-mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  return (
    <ThemeContext.Provider value={value} >
      <Background />
      <ChangeThemeButton />
      <br />
      {value.theme.name}
    </ThemeContext.Provider>
  )
}

export default App
