import TodoListItem from "components/todo-list-item";

import "styles/todo-list.css"

const TodoList = ({dataList, todoListDispatch}) => {
  return (
    <ul className="todo-list">
      {dataList.map((data, index) => {
        return (
          <TodoListItem key={index} todo={data} todoListDispatch={todoListDispatch} />
        )
      })}
    </ul>
  )
}

export default TodoList;