# 📝 Todo CLI App

A simple, file-based Command Line Todo List application built with **Node.js** and the **Commander.js** framework.

---

## 📦 Features

- ✅ Add todos from the terminal  
- ❌ Delete todos by index  
- 📄 View your current todo list  
- 💾 Persistent storage using `files.json`

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/SambhavJ2004/todo-cli.git
cd todo-cli
2. Install dependencies
bash
Copy
Edit
npm install
3. Run the CLI
bash
Copy
Edit
node index.js [command]
⚙️ Commands
Command	Description	Example
add <todo>	Adds a new todo item	node index.js add "Buy groceries"
delete <index>	Deletes a todo by its number	node index.js delete 1

Note: Index is 1-based, i.e., 1 refers to the first todo item.

🗃️ Data Storage
Todos are stored in a files.json file in the project directory. It uses JSON format to store an array of todo objects.

🛡️ .gitignore Notice
This project uses .gitignore to avoid pushing:

node_modules/ — can be reinstalled using npm install

files.json — keeps your personal todos local

📂 Project Structure
pgsql
Copy
Edit
todo-cli/
│
├── files.json          # Local JSON-based todo storage
├── index.js            # Main CLI logic
├── package.json        # Project metadata & dependencies
└── README.md           # You are here!
✨ Future Improvements
 Add list command

 Mark todos as done/undone

 Use timestamps

 Add category/tag support

 Interactive CLI (with inquirer.js)

🙌 Author
Sambhav Jain
