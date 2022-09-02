import { themes, useTheme } from '../ThemeContext'
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'
import { useEffect } from 'react'

function NewChangeThemeButton(props) {
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
    <div className="mt-[22px] text-right">
      <button
        className="text-[40px] leading-[40px] font-bold text-light-very-light-gray dark:light-very-light-gray"
        onClick={toggleTheme}
      >
        {theme.name === 'light' && <img src={moon} alt="moon icon" />}
        {theme.name === 'dark' && <img src={sun} alt="sun icon" />}
      </button>
    </div>
  )
}

export default NewChangeThemeButton
