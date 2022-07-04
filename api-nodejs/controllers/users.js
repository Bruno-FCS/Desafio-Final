const connection = require("../infra/connection");
const jwt = require("jsonwebtoken");

const SECRET = "brunofernandes";

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
            const token = jwt.sign(
              {
                user_id: result[0].user_id,
                user_name: result[0].user_name,
                user_email: result[0].user_email,
                user_full_name: result[0].user_full_name,
              },
              SECRET,
              { expiresIn: 86400 }
            );
            res.set("x-access-token", token);
            res.setHeader("Access-Control-Expose-Headers", "x-access-token");
            res.status(200).json({
              user_id: result[0].user_id,
              user_name: result[0].user_name,
              user_email: result[0].user_email,
              user_full_name: result[0].user_full_name,
            });
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
            [user, user_id],
            (error) => {
              if (error) {
                res.status(400).json(error);
              } else {
                const token = jwt.sign(
                  {
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_email: user.user_email,
                    user_full_name: user.user_full_name,
                  },
                  SECRET,
                  { expiresIn: 86400 }
                );
                res.set("x-access-token", token);
                res.setHeader(
                  "Access-Control-Expose-Headers",
                  "x-access-token"
                );
                res.status(200).json({
                  user_id: user.user_id,
                  user_name: user.user_name,
                  user_email: user.user_email,
                  user_full_name: user.user_full_name,
                });
              }
            }
          );
        } else if (result.length == 1) {
          if (result[0].user_id == user_id) {
            connection.query(
              "UPDATE User SET ? WHERE user_id = ?",
              [user, user_id],
              (error) => {
                if (error) {
                  res.status(400).json(error);
                } else {
                  const token = jwt.sign(
                    {
                      user_id: user.user_id,
                      user_name: user.user_name,
                      user_email: user.user_email,
                      user_full_name: user.user_full_name,
                    },
                    SECRET,
                    { expiresIn: 86400 }
                  );
                  res.set("x-access-token", token);
                  res.setHeader(
                    "Access-Control-Expose-Headers",
                    "x-access-token"
                  );
                  res.status(200).json({
                    user_id: user.user_id,
                    user_name: user.user_name,
                    user_email: user.user_email,
                    user_full_name: user.user_full_name,
                  });
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

  app.put("/users/change-password/:user_id", (req, res) => {
    const user_former_password = req.body.user_former_password;
    const user_password = req.body.user_password;
    const user_id = parseInt(req.params.user_id);
    connection.query(
      "SELECT * FROM User WHERE user_id = ? AND user_password = ?",
      [user_id, user_former_password],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        } else if (result.length <= 0) {
          res.status(400).json("Invalid former password");
        } else {
          connection.query(
            "UPDATE User SET user_password = ? WHERE user_id = ?",
            [user_password, user_id],
            (error) => {
              if (error) {
                res.status(400).json(error);
              } else {
                res.status(204).end();
              }
            }
          );
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
