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
          <input type="radio" id="themeMode-dark" name="themeMode" value="themeMode-dark" onChange={() => onChange('dark')} checked={themeMode === 'dark'}  />
          <label for="themeMode-dark">
            <span>
              <em></em>
            </span>
          </label>
        </div>
        <div>
          <input type="radio" id="themeMode-auto" name="themeMode" value="themeMode-auto" onChange={() => onChange('auto')} checked={themeMode === 'auto'}  />
          <label for="themeMode-auto">
            <span>
              <em></em>
            </span>
          </label>
        </div>
        <div>
          <input type="radio" id="themeMode-light" name="themeMode" value="themeMode-light" onChange={() => onChange('light')} checked={themeMode === 'light'}  />
          <label for="themeMode-light">
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
