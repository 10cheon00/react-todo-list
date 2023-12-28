import { useReducer, useState } from "react";

import CreateTodoModal from "components/create-todo-modal";
import TodoList from "components/todo-list";
import {
  todoListReducer,
  todoListInitializer,
} from "helpers/todo-list-reducer";

import "styles/create-todo-button.css";
import "styles/app.css";
import { createTodo } from "helpers/api";

const App = () => {
  const [db, dispatch] = useReducer(todoListReducer, [], todoListInitializer);
  const [modalActive, setModalActive] = useState(false);
  const showCreateTodoModal = () => setModalActive(true);
  const closeCreateTodoModal = () => setModalActive(false);
  const createNewTodo = () => {
    createTodo({
      title: title,
      date: date,
      important: false,
      complete: false,
    });
    dispatch();
    closeCreateTodoModal();
    setTitle("");
    setDate("");
  };
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="App">
      <header className="App-header">Todo-list</header>
      <TodoList dataList={db} todoListDispatch={dispatch} />
      <button className="create-todo-button" onClick={showCreateTodoModal}>
        New Todo
      </button>
      <CreateTodoModal isActive={modalActive} closeModal={closeCreateTodoModal}>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus={true}
          ></input>
        </div>
        <div>
          <label>날짜</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <div className="create-todo-modal-buttonlist">
          <button className="create-todo-modal-button" onClick={createNewTodo}>
            추가
          </button>
          <button
            className="create-todo-modal-button"
            onClick={closeCreateTodoModal}
          >
            취소
          </button>
        </div>
      </CreateTodoModal>
    </div>
  );
};

export default App;
