const path = require("path");

class User {
  /**
   * @param {string} id
   * @param {string} name
   * @param {string} email
   * @param {"Active" | "Inactive"} status
   */
  constructor(id, name, email, status) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.status = status;
  }

  /**
   * @param {"Active" | "Inactive"} status
   */
  updateUserStatus(status) {
    this.status = status;
  }
}

/** @type {User[]} */
const users = [];
users.push(new User("1", "Joe", "joe@smith.org", "Active"));
users.push(new User("2", "Angie", "angie@a.org", "Active"));
users.push(new User("3", "Fuqua", "fuqua@b.org", "Active"));
users.push(new User("4", "Kim", "Kim@c.org", "Inactive"));

// seperate users activate and inactive status
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function updateUsersStatusActivate(req, res) {
  const users_id = Object.keys(req.body);

  if (users.length > 0) {
    for (const userid of users_id) {
      users.find((user) => user.id === userid)?.updateUserStatus("Active");
    }
  }

  res.render(path.resolve(__dirname, "../../public/partials/list_users"), {
    users,
  });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
function updateUsersStatusInactivate(req, res) {
  const users_id = Object.keys(req.body);

  if (users.length > 0) {
    for (const userid of users_id) {
      users.find((user) => user.id === userid)?.updateUserStatus("Inactive");
    }
  }

  res.render(path.resolve(__dirname, "../../public/partials/list_users"), {
    users,
  });
}

module.exports = {
  users,
  updateUsersStatusActivate,
  updateUsersStatusInactivate,
};
