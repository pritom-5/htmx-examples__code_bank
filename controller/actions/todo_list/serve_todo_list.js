const path = require("path");
const { CATEGORIES } = require("../../../data/todos_data");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

function serveTodoList(req, res) {
  res.render(
    path.resolve(__dirname, "../../../public/pages/todos/todos_main.ejs"),
    {
      categories: CATEGORIES.getCategories(),
    }
  );
}

module.exports = { serveTodoList };
