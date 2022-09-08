import { AppTitle } from './components/AppTitle'
import Background from './components/Background'
import ChangeThemeModeButton from './components/ChangeThemeModeButton'
import { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'
import ToDoAdd from './components/ToDoAdd'
import ToDoBar from './components/ToDoBar'
import ToDoItemList from './components/ToDoItemList'

function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') || 'auto')
  const value = useMemo(() => ({ themeMode, setThemeMode }), [themeMode])
  const [filterName, setFilterName] = useState('all')

  const [todos, setToDos] = useState([])

  const onFilterToDo = e => {
    setFilterName(e)
  }

  const onClearCompletedToDos = () => {
    const filteredToDos = todos.filter(todo => !todo.checked)
    setToDos(filteredToDos)
  }

  const onAddToDo = newToDo => {
    setToDos(currentState => [...currentState, newToDo])
  }

  const onChangeToDo = id => {
    const toDoIndex = todos.findIndex(todo => todo.id === id)
    const updatedToDos = [...todos]
    updatedToDos[toDoIndex].checked = !updatedToDos[toDoIndex].checked

    setToDos(updatedToDos)
  }

  const onDeleteToDo = id => {
    setToDos(currentState => currentState.filter(todo => todo.id !== id))
  }

  const arrayMove = (arr, fromIndex, toIndex) => {
    // shouldn't happen but this is to add elements if toIndex is past number of elements in the array
    if (toIndex >= arr.length) {
      var toAdd = toIndex - arr.length + 1
      while (toAdd--) {
        arr.push(undefined)
      }
    }
    arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0])
    return arr // for testing
  }

  const onDragDropToDo = (from, to) => {
    const fromIndex = todos.findIndex(x => x.id === from)
    const toIndex = todos.findIndex(x => x.id === to)

    const updatedToDos = [...todos]
    arrayMove(updatedToDos, fromIndex, toIndex)
    setToDos(updatedToDos)
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const todosInStorage = localStorage.getItem('todos')
    todosInStorage && setToDos(JSON.parse(todosInStorage))
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos, isLoading])

  // change theme based on the current state
  useEffect(() => {
    let matchMedia
    const registerPrefersColorSchemeListener = () => {
      matchMedia = window.matchMedia('(prefers-color-scheme: light)')
      matchMedia.addEventListener('change', onPrefersLightChange)
    }
    const unregisterPrefersColorSchemeListener = () => {
      if (matchMedia) matchMedia.removeListener(onPrefersLightChange)
    }
    const onPrefersLightChange = scheme => {
      if (scheme.matches) {
        document.documentElement.classList.remove('dark')
      } else {
        document.documentElement.classList.add('dark')
      }
    }

    // always unregister, registration only needed for 'auto' themeMode
    unregisterPrefersColorSchemeListener()

    let theme
    switch (themeMode) {
      case 'light':
      case 'dark':
        theme = themeMode
        break
      case 'auto':
        theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
        registerPrefersColorSchemeListener() // start monitoring
        break
      default:
        throw new Error('invalid themeMode value')
    }

    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [themeMode])

  return (
    <ThemeContext.Provider value={value}>
      <Background />
      <div className="relative top-[60px] left-0 flex justify-center border-3 border-red-500">
        <div className="grid grid-cols-2 gap-0 content-start w-mobile sm:w-desktop">
          <AppTitle>TODO</AppTitle>
          <ChangeThemeModeButton />
          <div className="grid grid-cols-1 gap-0 mt-[8px] content-start w-mobile sm:w-desktop">
            <ToDoAdd onAdd={onAddToDo} />
            <ToDoItemList
              filterName={filterName}
              todos={todos}
              onChangeToDo={onChangeToDo}
              onDeleteToDo={onDeleteToDo}
              onDragDropToDo={onDragDropToDo}
            />
            <ToDoBar
              currentFilter={filterName}
              todos={todos}
              onFilter={onFilterToDo}
              onClearCompleted={onClearCompletedToDos}
            />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
