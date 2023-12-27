import { useReducer } from "react";

import CreateTodoButton from "components/create-todo-button";
import TodoList from "components/todo-list";
import { todoListReducer, todoListInitializer } from "helpers/todo-list-reducer";

import "styles/app.css";

const App = () => {
  const [db, dispatch] = useReducer(todoListReducer, [], todoListInitializer);

  return (
    <div className="App">
      <header className="App-header">Todo-list</header>
      <TodoList dataList={db} todoListDispatch={dispatch}/>
      <CreateTodoButton todoListDispatch={dispatch}/>
    </div>
  );
};

export default App;
