const STORAGE_KEY = "todoList";


const load = () => {
  return localStorage.getItem(STORAGE_KEY);
};

const save = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

/**
 * DB Initialization
 */
localStorage.clear();

export {load, save};
