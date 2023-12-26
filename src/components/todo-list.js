import TodoListItem from "components/todo-list-item";

import "styles/todo-list.css"

const TodoList = ({dataList}) => {
  return (
    <ul className="todo-list">
      {dataList.map((data, index) => {
        return (
          <TodoListItem key={index} todo={data} />
        )
      })}
    </ul>
  )
}

export default TodoList;