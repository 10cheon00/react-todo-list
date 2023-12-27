import EmptyStarIcon from "components/empty-star-icon";
import TrashBinIcon from "components/trash-bin-icon";

import "styles/todo-list-item.css";
import { updateTodo, removeTodo } from "helpers/api";

const TodoListItem = ({ todo, todoListDispatch }) => {

  const toggleImportant = () => {
    todo.important = !todo.important;
    updateTodo(todo);
    todoListDispatch();
  };

  const remove = () => {
    removeTodo(todo);
    todoListDispatch();
  }

  return (
    <li
      className={`todo-list-item ${
        todo.complete ? "todo-list-item-complete" : ""
      }`}
    >
      <div className="todo-list-item-column">
        <p className="todo-list-item-title">{todo.title}</p>
        <div
          className={`todo-list-item-icon todo-list-item-important ${
            todo.important ? "todo-list-item-important-checked" : ""
          }`}
          onClick={toggleImportant}
        >
          <EmptyStarIcon />
        </div>
      </div>
      <div className="todo-list-item-column">
        <p className="todo-list-item-date">{todo.date}</p>
        <div className="todo-list-item-icon todo-list-item-trashbin" onClick={remove}>
          <TrashBinIcon />
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
