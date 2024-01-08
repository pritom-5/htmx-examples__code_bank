const path = require("path");
const { USER } = require("../components/serve_user_components");
const { users } = require("../components/serve_users_bulk_components");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
async function serveExamples(req, res) {
  const examples_path = path.resolve("./public/core/examples.ejs");
  res.render(examples_path, { u: USER, users: users });
}

module.exports = { serveExamples };
