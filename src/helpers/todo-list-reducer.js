import { getTodoList } from "helpers/api";


const todoListReducer = (state, action) => {
  return getTodoList();
};

const todoListInitializer = () => {
  return [];
};

export { todoListReducer, todoListInitializer };
