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
const {
  userValidation,
  userValidationEmail,
} = require("../controller/components/serve_user_validation");
const {
  serveCarsSelection,
  getSelectedCar,
} = require("../controller/components/serve_cars_selection");
const {
  serveAnimation,
  serveThrob,
} = require("../controller/actions/serve_animations/serve_animations");

const htmx_example_routes = Router();

htmx_example_routes.route("/").get(serveExamples);
htmx_example_routes.route("/product_details/").get(serveProductDetails);

htmx_example_routes.route("/users/active/").put(updateUsersStatusActivate);
htmx_example_routes.route("/users/inactive/").put(updateUsersStatusInactivate);

htmx_example_routes
  .route("/contact/1/")
  .get(serveUserDetails)
  .put(updateUserInfo);

//  prodcuts related
htmx_example_routes.route("/products/").get(serveProducts);
htmx_example_routes.route("/products/all/").get(serveProductsComponent);

htmx_example_routes.route("/products/table/").get(serveProductsRowsComponent);

htmx_example_routes.route("/contact/1/edit/").get(serveEditUserDetails);

// validation related
htmx_example_routes.route("/user/").post(userValidation);
htmx_example_routes.route("/user/email/").post(userValidationEmail);

// cars selection
htmx_example_routes.route("/cars/").get(serveCarsSelection);
htmx_example_routes.route("/cars/selected/").get(getSelectedCar);

// animations
htmx_example_routes.route("/animations/").get(serveAnimation);
htmx_example_routes.route("/animations/color/").get(serveThrob);

module.exports = { htmx_example_routes };
