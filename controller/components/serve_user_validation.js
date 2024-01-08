const path = require("path");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function userValidation(req, res) {
  const input_vals = req.body;
  console.log(input_vals);

  res.send("userValidation");
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function userValidationEmail(req, res) {
  const valid_email = "test@test.com";
  const email = req.body.email;

  const email_html_path = path.resolve(
    __dirname,
    "../../public/partials/user_email_validation.ejs"
  );

  if (email !== valid_email) {
    res.render(email_html_path, {
      validity_class: "invalid",
      message: "invalid email",
    });
    return;
  }

  res.render(email_html_path, {
    validity_class: "valid",
    message: "valid email",
  });
}

module.exports = { userValidation, userValidationEmail };
