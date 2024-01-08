const path = require("path");
const { USER } = require("../components/serve_user_components");
const { users } = require("../components/serve_users_bulk_components");
const { cars } = require("../components/serve_cars_selection");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
async function serveExamples(req, res) {
  const examples_path = path.resolve("./public/core/examples.ejs");

  const all_cars = cars.getAllCars();
  const first_car_models = cars.getModels(all_cars[0]);

  res.render(examples_path, {
    u: USER,
    users: users,
    cars: all_cars,
    models: first_car_models,
  });
}

module.exports = { serveExamples };
