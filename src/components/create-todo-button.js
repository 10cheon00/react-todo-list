import { createTodo } from "helpers/api"

import "styles/create-todo-button.css"

const CreateTodoButton = ({todoListDispatch}) => {
  const createNewTodo = () => {
    // todo: this code must be changed to generate form modal.
    createTodo({
      title: Math.random()*100,
      date: "2000-01-01",
      complete: true,
      important: false,
    });
    todoListDispatch();
  }
  return (
    <button className="create-todo-button" onClick={createNewTodo}>
      New Todo
    </button>
  )
}

export default CreateTodoButton;
