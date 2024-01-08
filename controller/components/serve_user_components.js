const path = require("path");

class User {
  f_name = "Joe";
  l_name = "Blower";
  email = "joe@blow.com";

  getUser() {
    return { f_name: this.f_name, l_name: this.l_name, email: this.email };
  }

  /**
   * @param {string} props
   */
  isValid(props) {
    if (props == undefined) {
      return false;
    }
    if (props.trim().length === 0) {
      return false;
    }

    return true;
  }

  /**
   * @param {String} f_name
   * @param {String} l_name
   * @param {String} email
   */
  updateUser(f_name, l_name, email) {
    this.f_name = this.isValid(f_name) ? f_name : this.f_name;
    this.l_name = this.isValid(l_name) ? l_name : this.l_name;
    this.email = this.isValid(email) ? email : this.email;
  }
}

const USER = new User();

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveEditUserDetails(req, res) {
  res.render(
    path.resolve(__dirname, "../../public/partials/edit_user_details.ejs"),
    { u: USER.getUser() }
  );
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function serveUserDetails(req, res) {
  res.render(
    path.resolve(__dirname, "../../public/partials/user_details.ejs"),
    { u: USER.getUser() }
  );
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function updateUserInfo(req, res) {
  /** @type {typeof USER} */
  const { f_name, l_name, email } = req.body;

  USER.updateUser(f_name, l_name, email);

  res.render(
    path.resolve(__dirname, "../../public/partials/user_details.ejs"),
    { u: USER.getUser() }
  );
}

module.exports = {
  USER,
  serveUserDetails,
  serveEditUserDetails,
  updateUserInfo,
};
