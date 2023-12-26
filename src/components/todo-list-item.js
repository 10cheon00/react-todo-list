import { useState } from "react";

import EmptyStarIcon from "components/empty-star-icon";
import TrashBinIcon from "components/trash-bin-icon";

import "styles/todo-list-item.css";

const TodoListItem = ({ todo }) => {
  const [todoState, setTodo] = useState(todo);

  const toggleImportant = () => {
    const newTodo = { ...todoState };
    newTodo.important = !newTodo.important;
    setTodo(newTodo);
  };

  return (
    <li
      className={`todo-list-item ${
        todoState.complete ? "todo-list-item-complete" : ""
      }`}
    >
      <div className="todo-list-item-column">
        <p className="todo-list-item-title">{todoState.title}</p>
        <div
          className={`todo-list-item-icon todo-list-item-important ${
            todoState.important ? "todo-list-item-important-checked" : ""
          }`}
          onClick={toggleImportant}
        >
          <EmptyStarIcon />
        </div>
      </div>
      <div className="todo-list-item-column">
        <p className="todo-list-item-date">{todoState.date}</p>
        <div className="todo-list-item-icon todo-list-item-trashbin" onClick={todoState.removeItem}>
          <TrashBinIcon />
        </div>
      </div>
    </li>
  );
};

export default TodoListItem;
