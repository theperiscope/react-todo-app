import { themes, useTheme } from './ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect } from 'react'

function ChangeThemeButton(props) {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light)
      return
    }
    setTheme(themes.dark)
    return
  }

  // update theme value in localStorage when 'theme' variable dependency changes
  useEffect(() => {
    localStorage.setItem('theme', theme.name)
  }, [theme])

  return (
    <button className='bg-blue-300 p-4 text-white border-4 border-blue-400' onClick={toggleTheme}>
      {theme.name === "light" && <FaMoon />}
      {theme.name === "dark" && <FaSun />}
    </button>
  )
}

export default ChangeThemeButton