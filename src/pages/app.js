import TodoList from 'components/todo-list'

import 'styles/app.css'

const App = () => {
  const db = [
    {
      "title": "asdf",
      "description" : "asdfasdfadf",
      "date": "2000-01-01",
      "complete": false,
      "important": true
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        Todo-list
      </header>
      <TodoList dataList={db}/>
    </div>
  );
}

export default App;
