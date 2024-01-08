/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveActiveSearch(req, res) {
  const search_query = req.query.search;

  res.send(search_query);
}

module.exports = { serveActiveSearch };
