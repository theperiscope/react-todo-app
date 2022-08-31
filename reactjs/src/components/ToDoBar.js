import { useMemo } from 'react'
import './ToDoBar.css'

function ToDoBar({ currentFilter, todos, onFilter, onClearCompleted }) {

  const totalLeftTasks = useMemo(() => {
    return todos.filter(task => !task.checked).length
  }, [todos])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3">
      <div className='x1 bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 pt-4 pb-3 m-0 order-1 sm:order-1 text-left   sm:text-left  text-xs text-gray-900 dark:text-gray-300'>{totalLeftTasks} {totalLeftTasks === 1 ? "item" : "items"} left</div>
      <div className='x2 bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 pt-4 pb-3 m-0 order-2 sm:order-3 text-right  sm:text-right text-sm text-gray-900 dark:text-gray-300'>
        <ul>
          <li><button onClick={() => onClearCompleted()}>Clear Completed</button></li>
        </ul>
      </div>
      <div className='x3 bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 pt-4 pb-3 m-0 order-3 sm:order-2 text-center sm:text-left  col-span-2 sm:col-span-1 mt-3 sm:mt-0 text-sm text-gray-900 dark:text-gray-300'>
        <div className="flex justify-between">
            <div className={`filter ${currentFilter === 'all' && 'active'}`}><button onClick={() => onFilter('all')}>All</button></div>
            <div className={`filter ${currentFilter === 'active' && 'active'}`}><button onClick={() => onFilter('active')}>Active</button></div>
            <div className={`filter ${currentFilter === 'completed' && 'active'}`}><button onClick={() => onFilter('completed')}>Completed</button></div>
        </div>
      </div>
      <div className='order-4 col-span-2 sm:col-span-3 my-8'>
        <div className='text-center text-xs text-light-very-light-grayish-blue dark:text-gray-600'>Drag and drop to reorder list</div>
      </div>
    </div>
  )
}

export default ToDoBar