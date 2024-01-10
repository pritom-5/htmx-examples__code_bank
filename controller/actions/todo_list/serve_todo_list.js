const path = require("path");
const { CATEGORIES, TODOS } = require("../../../data/todos_data");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

function serveTodoList(req, res) {
  // serve main todos page
  res.render(
    path.resolve(__dirname, "../../../public/pages/todos/todos_main.ejs"),
    {
      categories: CATEGORIES.getCategories(),
      todos: TODOS.getTodos(),
      total_todos_count: TODOS.getNosTodos(),
      total_todos_done_count: TODOS.getNosDoneTodos(),
    }
  );
}

module.exports = { serveTodoList };
