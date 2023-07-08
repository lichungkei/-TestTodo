const todoList = [];

// Get the todo list
async function list() {
  return todoList;
}

// Add a new task to the todo list
async function add(task) {
  todoList.push(task);
  return true;
}

// Remove a task from the todo list
async function remove(name) {
  const index = todoList.findIndex((task) => task.name === name);
  if (index !== -1) {
    todoList.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  list,
  add,
  remove,
};