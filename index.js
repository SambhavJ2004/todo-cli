const { Command } = require("commander");
const program = new Command();
const fs = require("fs");

const filePath = "files.json";

let todos = [];

// Load todos from file
function loadTodos() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    todos = JSON.parse(data);
  } catch (err) {
    todos = [];
  }
}

// Save todos to file
function saveTodos() {
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
}

// Display todos
function render() {
  if (todos.length === 0) {
    console.log("No todos yet!");
    return;
  }
  console.log("Your Todos:");
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo.title}`);
  });
}

program.name("todoList").description("CLI based ToDo List").version("0.8.0");

program
  .command("add")
  .argument("<str>", "Todo item")
  .action((todo) => {
    loadTodos();
    todos.push({ title: todo });
    saveTodos();
    console.log(`Added: "${todo}"`);
    render();
  });

program
  .command("delete")
  .argument("<index>", "Todo number to delete")
  .action((indexStr) => {
    loadTodos();
    const index = parseInt(indexStr) - 1;
    if (index >= 0 && index < todos.length) {
      const removed = todos.splice(index, 1);
      saveTodos();
      console.log(`Deleted: "${removed[0].title}"`);
    } else {
      console.log("Invalid index");
    }
    render();
  });

program.parse();
