const express = require("express");
const { htmx_example_routes } = require("./routes/htmx_examples_routes");
const app = express();

// read urlencoded
app.use(express.urlencoded({ extended: true }));
// read json
app.use(express.json());

// serve static
app.use(express.static("public"));
// serve view engine
app.set("view engine", "ejs");

// route
app.use("/examples/", htmx_example_routes);

// listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`listening to port: ${PORT}`);
});
