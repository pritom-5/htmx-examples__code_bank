const path = require("path");

function getRandomRgb() {
  const color = ["pink", "cyan", "orange", "lime"];
  const random_color_val = color[Math.floor(Math.random() * color.length)];
  //   return `rgb(${random_color_val}, ${random_color_val + 100}, ${
  //     random_color_val + 120
  //   })`;
  return random_color_val;
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveAnimation(req, res) {
  const _path = path.resolve(
    __dirname,
    "../../../public/pages/animations_example/animations_example.ejs"
  );

  res.render(_path, {
    color: getRandomRgb(),
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveThrob(req, res) {
  const _path = path.resolve(
    __dirname,
    "../../../public/pages/animations_example/components/color_throb.ejs"
  );

  res.render(_path, {
    color: getRandomRgb(),
  });
}

module.exports = { serveAnimation, serveThrob };
