import ToDoItem from './ToDoItem'

function ToDoItemList({ filterName, todos, onChangeToDo, onDeleteToDo }) {
  return (
    <div className='first:rounded-md last:rounded-b-md'>
      {todos
        .filter(todo =>
          filterName === 'all' ||
          (filterName === 'active' && !todo.checked) ||
          (filterName === 'completed' && todo.checked)
        )
        .map(todo =>
          <ToDoItem key={todo.id} onChange={onChangeToDo} onDelete={onDeleteToDo} {...todo} />
        )}
    </div>
  )
}

export default ToDoItemList