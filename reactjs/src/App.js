import { useEffect, useMemo, useState } from 'react'
import Background from './Background'
import NewChangeThemeButton from './NewChangeThemeButton'
import { AppTitle } from './components/AppTitle'
import { themes, ThemeContext } from './ThemeContext'
import ToDoItemList from './components/ToDoItemList'
import ToDoAdd from './components/ToDoAdd'
import ToDoBar from './components/ToDoBar'

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

  const [todos, setToDos] = useState([
    { id: 'task-1', label: "Complete online JavaScript course", checked: true },
    { id: 'task-2', label: "Jog around the park 3x", checked: false },
    { id: 'task-3', label: "10 minutes meditation", checked: false },
    { id: 'task-4', label: "Read for 1 hour", checked: false },
    { id: 'task-5', label: "Pick up groceries", checked: false },
    { id: 'task-6', label: "Complete Todo App on Frontend Mentor", checked: false },
  ])

  const onAddToDo = (newToDo) => {
    setToDos(currentState => [...currentState, newToDo])
  }

  const onChangeToDo = (id) => {
    const toDoIndex = todos.findIndex(todo => todo.id === id)
    const updatedToDos = [...todos]
    updatedToDos[toDoIndex].checked = !updatedToDos[toDoIndex].checked

    setToDos(updatedToDos)
  }

  const onDeleteToDo = (id) => {
    setToDos(currentState => currentState.filter(todo => todo.id !== id))
  }

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
      <div className='relative top-[60px] left-0 flex justify-center border-3 border-red-500'>
        <div className='grid grid-cols-2 gap-0 content-start w-mobile sm:w-desktop'>
          <div className='mt-[19px]'><AppTitle>TODO</AppTitle></div>
          <div className='mt-[22px] text-right'><NewChangeThemeButton /></div>
          <div className='grid grid-cols-1 gap-0 mt-[8px] content-start w-mobile sm:w-desktop'>
            <ToDoAdd onAdd={onAddToDo} />
            <ToDoItemList todos={todos} onChangeToDo={onChangeToDo} onDeleteToDo={onDeleteToDo} />
            <ToDoBar todos={todos} />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
