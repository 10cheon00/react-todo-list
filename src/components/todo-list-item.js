const TodoListItem = ({todo}) => {
  return (
    <li>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
      <div>{todo.date}</div>
      <div>{todo.complete}</div>
      <div>{todo.important}</div>
    </li>
  )
}

export default TodoListItem;
