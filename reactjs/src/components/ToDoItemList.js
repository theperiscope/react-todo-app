import ToDoItem from './ToDoItem'

function ToDoItemList({ todos, onChangeToDo, onDeleteToDo }) {
  return (
    <div className='first:rounded-md last:rounded-b-md'>
      {todos.map(todo =>
        <ToDoItem key={todo.id} onChange={onChangeToDo} onDelete={onDeleteToDo} {...todo} />
      )}
    </div>
  )
}

export default ToDoItemList