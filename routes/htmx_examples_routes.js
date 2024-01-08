const { Router } = require("express");
const { serveExamples } = require("../controller/pages/serve_examples");
const {
  serveProductDetails,
} = require("../controller/components/serve_product_details");
const {
  serveUserDetails,
  serveEditUserDetails,
  updateUserInfo,
} = require("../controller/components/serve_user_components");
const {
  updateUsersStatusActivate,
  updateUsersStatusInactivate,
} = require("../controller/components/serve_users_bulk_components");
const { serveProducts } = require("../controller/pages/serve_products");
const {
  serveProductsComponent,
  serveProductsRowsComponent,
} = require("../controller/components/serve_products_component");

const htmx_example_routes = Router();

htmx_example_routes.route("/").get(serveExamples);
htmx_example_routes.route("/product_details/").get(serveProductDetails);

htmx_example_routes.route("/users/active/").put(updateUsersStatusActivate);
htmx_example_routes.route("/users/inactive/").put(updateUsersStatusInactivate);

htmx_example_routes
  .route("/contact/1/")
  .get(serveUserDetails)
  .put(updateUserInfo);

htmx_example_routes.route("/products/").get(serveProducts);
htmx_example_routes.route("/products/all/").get(serveProductsComponent);

// TODO:
// do the prodcuts example but with table
htmx_example_routes.route("/products/table/").get(serveProductsRowsComponent);

htmx_example_routes.route("/contact/1/edit/").get(serveEditUserDetails);

module.exports = { htmx_example_routes };
