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
const {
  serveActiveSearch,
} = require("../controller/actions/active_search/serve_active_search");
const {
  serveCounter,
} = require("../controller/actions/serve_counter/serve_counter");
const {
  serveTodoList,
} = require("../controller/actions/todo_list/serve_todo_list");
const {
  serveAddTodo,
} = require("../controller/actions/todo_list/components/serve_add_todo");
const {
  updateTodoStatus,
} = require("../controller/actions/todo_list/components/update_todo");

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

// active search
htmx_example_routes.route("/active_search/").get(serveActiveSearch);

// counter
htmx_example_routes.route("/counter/").get(serveCounter);

// todo_apline_js
htmx_example_routes.route("/todos/").get(serveTodoList).post(serveAddTodo);
htmx_example_routes.route("/todos/status/:id").put(updateTodoStatus);

module.exports = { htmx_example_routes };
