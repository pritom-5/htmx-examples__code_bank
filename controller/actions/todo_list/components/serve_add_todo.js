const path = require("path");
const { CATEGORIES, TODOS } = require("../../../../data/todos_data");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveAddTodo(req, res) {
  const new_todo = req.body;

  TODOS.addTodo(new_todo);

  // replace on with boolean value
  new_todo.done = new_todo.done === "on" ? true : false;

  res.render(
    path.resolve(
      __dirname,
      "../../../../public/pages/todos/components/form_and_todo_partial.ejs"
    ),
    {
      todo: new_todo,
      categories: CATEGORIES.getCategories(),
      total_todos_count: TODOS.getNosTodos(),
      total_todos_done_count: TODOS.getNosDoneTodos(),
    }
  );
}

module.exports = { serveAddTodo };
