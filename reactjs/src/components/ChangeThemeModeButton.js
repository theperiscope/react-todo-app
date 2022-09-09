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

    // update app state, will check updated local storage
    setThemeMode(newMode)
  }

  const modes = [
    { id: 'themeMode-dark', themeMode: 'dark', bg: 'bg-iconDark' },
    { id: 'themeMode-auto', themeMode: 'auto', bg: 'bg-iconLightDark' },
    { id: 'themeMode-light', themeMode: 'light', bg: 'bg-iconLight' },
  ]
  const radioModes = modes.map(m => (
    <div className='inline-block ml-2'>
      <input
        type="radio"
        id={m.id}
        name="themeMode"
        value={m.id}
        onChange={() => onChange(m.themeMode)}
        checked={themeMode === m.themeMode}
        className="hidden"
      />
      <label for={m.id} className="opacity-30 text-gray-800 text-sm;">
        <span className={`inline-block w-[28px] h-[28px] -mt-[1px] mr-[4px] mb-0 ml-0 align-middle cursor-pointer bg-no-repeat bg-center text-center rounded-[50%] border-[1px] border-white/[.33] shadow bg-white/[.13] ${m.bg}`}>
          <em className='inline-block'></em>
        </span>
      </label>
    </div>
  ))

  return <div className="custom-radios flex justify-end mt-5">{radioModes}</div>
}

export default ChangeThemeModeButton
