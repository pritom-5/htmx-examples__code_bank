const path = require("path");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns
 */
async function serveProductDetails(req, res) {
  const max = 10;
  const random_number = Math.floor(Math.random() * max);
  const response = await fetch(
    "https://dummyjson.com/products/" + String(random_number)
  );
  const product_details = await response.json();

  const details_html_path = path.resolve(
    "./public/partials/product_details.ejs"
  );
  res.render(details_html_path, { p: product_details });
}

module.exports = { serveProductDetails };
