const path = require("path");
const { TODOS } = require("../../../../data/todos_data");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function updateTodoStatus(req, res) {
  const id = req.params.id;

  const todo = TODOS.getTodo(Number(id));
  todo?.updateTodoDone();

  res.render(
    path.resolve(
      __dirname,
      "../../../../public/pages/todos/components/todo_and_total_count_partial.ejs"
    ),
    {
      todo,
      total_todos_count: TODOS.getNosTodos(),
      total_todos_done_count: TODOS.getNosDoneTodos(),
    }
  );
}

module.exports = { updateTodoStatus };
