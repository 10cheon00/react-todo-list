import TodoListItem from "components/todo-list-item";

const TodoList = ({dataList}) => {
  return (
    <ul className="todo-list">
      {dataList.map(data => {
        return (
          <TodoListItem key={data.title} todo={data} />
        )
      })}
    </ul>
  )
}

export default TodoList;