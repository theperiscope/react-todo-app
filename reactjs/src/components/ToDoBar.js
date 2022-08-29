import { useMemo } from 'react'
import './ToDoBar.css'

function ToDoBar({ todos }) {

  const totalLeftTasks = useMemo(() => {
    return todos.filter(task => !task.checked).length
  }, [todos])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3">
      <div className='x1 bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 pt-4 pb-3 m-0 order-1 sm:order-1 text-left   sm:text-left                                        text-xs text-gray-900 dark:text-gray-300'>{totalLeftTasks} {totalLeftTasks === 1 ? "item" : "items"} left</div>
      <div className='x2 bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 pt-4 pb-3 m-0 order-2 sm:order-3 text-right  sm:text-right                                       text-sm text-gray-900 dark:text-gray-300'>Clear Completed</div>
      <div className='x3 bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 pt-4 pb-3 m-0 order-3 sm:order-2 text-center sm:text-left  col-span-2 sm:col-span-1 mt-3 sm:mt-0 text-sm text-gray-900 dark:text-gray-300'>All Active Completed</div>
      <div className='order-4 col-span-2 sm:col-span-3 my-8'>
        <div className='text-center text-xs text-black dark:text-white'>Drag and drop to reorder list</div>
      </div>
    </div>
  )
}

export default ToDoBar