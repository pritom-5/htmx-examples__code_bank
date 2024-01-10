class Categories {
  /** @type {string[]} */
  categories = [];

  /**
   * @param  {...string} initial_categories
   */
  constructor(...initial_categories) {
    initial_categories.forEach((c) => this.categories.push(c));
  }

  /** @param {string} name  */
  addCategory(name) {
    this.categories.push(name);
  }

  getCategories() {
    return this.categories;
  }
}

class Todo {
  /**
   * @param {string} title
   * @param {string} desc
   * @param {string} done
   * @param {string} category
   */
  constructor(title, desc, done, category) {
    this.title = title;
    this.desc = desc;
    this.done = done === "on" ? true : false;
    this.category = category;
    this.id = this.getRandomId();
  }

  /** @param {Todo} updated_todo  */
  updateTodo(updated_todo) {
    // TODO:
    // sanitize

    this.title = updated_todo.title;
    this.desc = updated_todo.desc;
    this.done = updated_todo.done;
    this.category = updated_todo.category;
  }

  updateTodoDone() {
    this.done = !this.done;
  }

  getRandomId() {
    return Math.floor(Math.random() * 1000);
  }
}

class Todos {
  /** @type {Todo[]} */
  todos = [];

  seedTodos() {
    const seed_values = [
      { title: "todo 1", desc: "desc 1", done: "on", category: "new" },
      { title: "todo 2", desc: "desc 2", done: "", category: "new" },
      { title: "todo 3", desc: "desc 3", done: "on", category: "new" },
      { title: "todo 4", desc: "desc 4", done: "", category: "new" },
    ];

    for (const value of seed_values) {
      this.addTodo(value);
    }
  }

  /** @param {{title: string, desc: string, done: string, category: string}} new_todo */
  addTodo(new_todo) {
    this.todos.push(
      new Todo(new_todo.title, new_todo.desc, new_todo.done, new_todo.category)
    );
  }

  /** @param {number} id  */
  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }

  getNosTodos() {
    return this.todos.length;
  }

  getNosDoneTodos() {
    return this.todos.filter((todo) => todo.done).length;
  }

  getTodos() {
    return this.todos;
  }

  /** @param {string} search_input  */
  getSearchedTodos(search_input) {
    search_input = search_input.toLowerCase();

    return this.todos.filter((todo) => {
      for (const c of search_input.split(" ")) {
        if (todo.title.includes(c)) {
          return true;
        }
      }
    });
  }
}

const CATEGORIES = new Categories("new", "important", "work");
const TODOS = new Todos();

// seed initial values
TODOS.seedTodos();

module.exports = { CATEGORIES, TODOS };
