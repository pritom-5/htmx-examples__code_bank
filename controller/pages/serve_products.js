const path = require("path");

const LIMIT = 3;

/**
 * @param {number} page
 * @returns {Promise<ProductsT>}
 */
async function getProducts(page = 0) {
  const skip_products = page * LIMIT;
  const res = await fetch(
    `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip_products}`
  );
  const products = await res.json();

  return products;
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
async function serveProducts(req, res) {
  const products = await getProducts();

  res.render(path.resolve("./public/core/products.ejs"), {
    products: products.products,
    page_no: 1,
  });
}

module.exports = { serveProducts, getProducts };
