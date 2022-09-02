import { useState } from 'react'
import { v4 as uuid } from 'uuid'

function ToDoAdd({ onAdd }) {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    if (!!taskName) {
      const newTask = {
        id: uuid(),
        label: taskName,
        checked: false,
      }

      onAdd(newTask)
      setTaskName('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div
          id="addCircle"
          className="absolute left-[14px] sm:left-[26px] top-[50px] bg-white dark:bg-dark-very-dark-desaturated-blue border-[1px] rounded-[50%] border-[#cccccc] dark:border-gray-600 w-[24px] h-[24px] appearance-none outline-0 outline-none cursor-pointer align-middle"
        ></div>
        <input
          id="addToDo"
          className="w-full placeholder-light-placeholder-color pt-[21px] pb-[17px] pl-[53px] sm:pl-[69px] text-[12px] sm:text-[19px] text-black dark:text-white bg-light-very-light-gray dark:bg-dark-very-dark-desaturated-blue mt-[30px] mb-[25px] rounded-md border border-gray-200 dark:border-gray-700"
          type="text"
          placeholder="Create a new todo..."
          onChange={event => setTaskName(event.target.value)}
          value={taskName}
        />
      </div>
    </form>
  )
}

export default ToDoAdd
