const connection = require("../infra/connection");

module.exports = (app) => {
  app.get("/users", (req, res) => {
    connection.query("SELECT * FROM User", (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(result);
      }
    });
  });

  app.get("/users/:user_id", (req, res) => {
    connection.query(
      `SELECT * FROM User WHERE user_name = "${req.params.user_id}"`,
      (error, result) => {
        const user = result[0];
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json(user);
        }
      }
    );
  });

  app.post("/users", (req, res) => {
    const user = req.body;
    const user_join_date = new Date();
    const userWithDate = { ...user, user_join_date };
    connection.query(
      "SELECT * FROM User WHERE user_name = ? OR user_email = ?",
      [userWithDate.user_name, userWithDate.user_email],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        }
        if (result.length == 0) {
          connection.query(
            "INSERT INTO User (user_name, user_email, user_password, user_full_name, user_join_date) VALUES (?, ?, ?, ?, ?)",
            [
              userWithDate.user_name,
              userWithDate.user_email,
              userWithDate.user_password,
              userWithDate.user_full_name,
              userWithDate.user_join_date,
            ],
            (error) => {
              if (error) {
                res.status(400).json(error);
              }
              res.status(201).json(result);
            }
          );
        } else {
          res.status(400).json("Username or email already registered");
        }
      }
    );
  });

  app.post("/users/login", (req, res) => {
    const user_name = req.body.user_name;
    const user_password = req.body.user_password;
    connection.query(
      "SELECT * FROM User WHERE user_name = ? AND user_password = ?",
      [user_name, user_password],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        } else {
          if (result.length == 0) {
            res.status(400).json("Username or password invalid");
          } else {
            res.status(200).json(result[0]);
          }
        }
      }
    );
  });

  app.put("/users/:user_id", (req, res) => {
    const user = req.body;
    const user_id = parseInt(req.params.user_id);
    connection.query(
      "SELECT * FROM User WHERE user_name = ? OR user_email = ?",
      [user.user_name, user.user_email],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        }
        if (result.length == 0) {
          connection.query(
            "UPDATE User SET ? WHERE user_id = ?",
            [req.body, user_id],
            (error) => {
              if (error) {
                res.status(400).json(error);
              } else {
                res.status(200).json({ ...req.body, user_id });
              }
            }
          );
        } else if (result.length == 1) {
          if (result[0].user_id == user_id) {
            connection.query(
              "UPDATE User SET ? WHERE user_id = ?",
              [req.body, user_id],
              (error) => {
                if (error) {
                  res.status(400).json(error);
                } else {
                  res.status(200).json({ ...req.body, user_id });
                }
              }
            );
          } else {
            res.status(400).json("Username or email already registered");
          }
        } else {
          res.status(400).json("Username or email already registered");
        }
      }
    );
  });

  app.delete("/users/:user_id", (req, res) => {
    const user_id = parseInt(req.params.user_id);
    connection.query(
      "DELETE FROM User WHERE user_id = ?",
      [user_id],
      (error) => {
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json({ user_id });
        }
      }
    );
  });
};
