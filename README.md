# 📝 Todo CLI App

A simple, file-based Command Line Todo List application built with **Node.js** and the **Commander.js** framework.

---

## 📦 Features

- ✅ Add todos from the terminal  
- ❌ Delete todos by index  
- 📄 View your current todo list  
- 💾 Persistent storage using `files.json`

---

# ⚙️ Commands
| Command          | Description                  | Example                             |
| ---------------- | ---------------------------- | ----------------------------------- |
| `add <todo>`     | Adds a new todo item         | `node index.js add "Buy groceries"` |
| `delete <index>` | Deletes a todo by its number | `node index.js delete 1`            |

---

# 🗃️ Data Storage
-Todos are stored in a files.json file in the project directory. 
-It uses JSON format to store an array of todo objects.
