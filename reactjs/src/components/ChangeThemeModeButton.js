import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'
import { useTheme } from '../ThemeContext'
import './ChangeThemeModeButton.css'

function ChangeThemeModeButton() {
  // we use context to set changed theme here and update
  // local storage instead of bubbling up via component events
  const { themeMode, setThemeMode } = useTheme()

  const onChange = newMode => {
    // update local storage
    switch (newMode) {
      case 'light':
      case 'dark':
        localStorage.setItem('themeMode', newMode)
        break
      case 'auto':
        localStorage.removeItem('themeMode')
        break
      default:
        throw new Error('invalid newMode value')
    }

    // update app state
    setThemeMode(newMode)
  }

  return (
    <>
      <div className="custom-radios flex justify-end">
        <div>
          <input type="radio" id="color-1" name="color" value="color-1" onChange={() => onChange('light')} checked={themeMode === 'light'}  />
          <label for="color-1">
            <span>
              <em></em>
            </span>
          </label>
        </div>
        <div>
          <input type="radio" id="color-2" name="color" value="color-2" onChange={() => onChange('auto')} checked={themeMode === 'auto'}  />
          <label for="color-2">
            <span>
              <em></em>
            </span>
          </label>
        </div>
        <div>
          <input type="radio" id="color-3" name="color" value="color-3" onChange={() => onChange('dark')} checked={themeMode === 'dark'}  />
          <label for="color-3">
            <span>
              <em></em>
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

export default ChangeThemeModeButton
