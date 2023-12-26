import CreateTodoButton from "components/create-todo-button";
import TodoList from "components/todo-list";

import "styles/app.css";

const App = () => {
  const db = [
    {
      title: "asdf",
      date: "2000-01-01",
      complete: true,
      important: false,
    },
    {
      title: "asdf",
      date: "2000-01-02",
      complete: false,
      important: true,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">Todo-list</header>
      <TodoList dataList={db} />
      <CreateTodoButton />
    </div>
  );
};

export default App;
