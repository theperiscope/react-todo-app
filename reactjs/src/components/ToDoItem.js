import cross from '../images/icon-cross.svg'
import './ToDoItem.css'

function ToDoItem({ id, label, checked, onChange, onDelete }) {

  return (
    <div className="checkbox-wrapper flex items-center border-b border-light-very-dark-grayish-blue-300 dark:border-dark-very-dark-grayish-blue bg-light-control-background-color dark:bg-dark-very-dark-desaturated-blue px-4 py-[4px] m-0">
      <input
        id={id}
        name="task"
        type="checkbox"
        checked={checked}
        onChange={() => onChange(id)}
        className='w-4 h-4 ring-3 focus:ring-0 focus:ring-white/[1.0] outline-0 bg-light-control-background-color border-gray-300 dark:bg-gray-700 dark:border-gray-600' />
      <label htmlFor={id} className="ml-2 w-full text-[19px] pt-[15px] pb-[12px] ligh text-gray-900 dark:text-gray-300">{label}</label>
      { !checked && <button className='p-[10px] font-bold  text-light-very-light-gray dark:light-very-light-gray' onClick={() => onDelete(id)}><img src={cross} alt="cross icon" /></button> }
    </div>
  )
}

export default ToDoItem