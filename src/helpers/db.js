const STORAGE_KEY = "todoList";

let index = 0;

const load = () => {
  return localStorage.getItem(STORAGE_KEY);
};

const save = (data) => {
  data.index = ++index;
  console.log(index, data.index);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

/**
 * DB Initialization
 */
localStorage.clear();

export {load, save};
