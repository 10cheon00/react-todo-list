import {load, save} from "helpers/db";
let index = 0;

const getTodoList = () => {
  return JSON.parse(load());
};

const createTodo = (todo) => {
  const todoList = getTodoList();

  if (todoList === null) {
    todo.index = ++index;
    save([todo]);
    return;
  }

  todo.index = ++index;
  todoList.push(todo);

  save(todoList);
};

const removeTodo = (todo) => {
  const todoList = getTodoList();

  if (todoList === null) {
    return;
  }

  save(todoList.filter((item) => item.index !== todo.index));
};

const updateTodo = (todo) => {
  const todoList = getTodoList();

  if (todoList === null) {
    return;
  }

  save(
    todoList.map((item) =>
      item.index === todo.index ? { ...item, ...todo } : item
    )
  );
};

export { getTodoList, createTodo, removeTodo, updateTodo };
