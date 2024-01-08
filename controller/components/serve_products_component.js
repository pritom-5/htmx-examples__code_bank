const path = require("path");
const { getProducts } = require("../pages/serve_products");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function serveProductsComponent(req, res) {
  const page_no = req.query.page;
  const products = await getProducts(Number(page_no));

  res.render(path.resolve("./public/partials/products_list.ejs"), {
    products: products.products,
    page_no: Number(page_no) + 1,
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function serveProductsRowsComponent(req, res) {
  const page_no = req.query.page;
  const products = await getProducts(Number(page_no));

  res.render(path.resolve("./public/partials/products_list_table.ejs"), {
    products: products.products,
    page_no: Number(page_no) + 1,
  });
}

module.exports = { serveProductsComponent, serveProductsRowsComponent };
