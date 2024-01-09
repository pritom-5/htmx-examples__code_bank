const path = require("path");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveCounter(req, res) {
  res.render(
    path.resolve(
      path.resolve(__dirname, "../../../public/pages/counter/counter.ejs")
    )
  );
}

module.exports = { serveCounter };
