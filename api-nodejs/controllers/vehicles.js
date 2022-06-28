const connection = require("../infra/connection");

module.exports = (app) => {
  app.get("/vehicles", (req, res) => {
    connection.query("SELECT * FROM Vehicles", (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(result);
      }
    });
  });

  app.get("/vehicles/:vehicle_id", (req, res) => {
    connection.query(
      `SELECT * FROM Vehicles WHERE vehicle_id = "${req.params.vehicle_id}"`,
      (error, result) => {
        const vehicle = result[0];
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json(vehicle);
        }
      }
    );
  });

  app.post("/vehicles", (req, res) => {
    const vehicle = req.body;
    connection.query(
      "SELECT * FROM Vehicles WHERE vehicle_model = ?",
      [vehicle.vehicle_model],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        }
        if (result.length == 0) {
          connection.query(
            "INSERT INTO Vehicles (vehicle_model, vehicle_total_volume, vehicle_connected, vehicle_software_updates) VALUES (?, ?, ?, ?)",
            [
              vehicle.vehicle_model,
              vehicle.vehicle_total_volume,
              vehicle.vehicle_connected,
              vehicle.vehicle_software_updates,
            ],
            (error) => {
              if (error) {
                res.status(400).json(error);
              }
              res.status(201).json(vehicle);
            }
          );
        } else {
          res.status(400).json("Model already registered");
        }
      }
    );
  });

  app.patch("/vehicles/:vehicle_id", (req, res) => {
    const vehicle = req.body;
    const vehicle_id = parseInt(req.params.vehicle_id);
    connection.query(
      "SELECT * FROM Vehicles WHERE vehicle_model = ?",
      [vehicle.vehicle_model],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        }
        if (result.length == 0) {
          connection.query(
            "UPDATE Vehicles SET ? WHERE vehicle_id = ?",
            [req.body, vehicle_id],
            (error) => {
              if (error) {
                res.status(400).json(error);
              } else {
                res.status(200).json({ ...req.body, vehicle_id });
              }
            }
          );
        } else if (result.length == 1) {
          if (result[0].vehicle_id == vehicle_id) {
            connection.query(
              "UPDATE Vehicles SET ? WHERE vehicle_id = ?",
              [req.body, vehicle_id],
              (error) => {
                if (error) {
                  res.status(400).json(error);
                } else {
                  res.status(200).json({ ...req.body, vehicle_id });
                }
              }
            );
          } else {
            res.status(400).json("Model already registered");
          }
        } else {
          res.status(400).json("Model already registered");
        }
      }
    );
  });

  app.delete("/vehicles/:vehicle_id", (req, res) => {
    const vehicle_id = parseInt(req.params.vehicle_id);
    connection.query(
      "DELETE FROM Vehicles WHERE vehicle_id = ?",
      [vehicle_id],
      (error) => {
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json({ vehicle_id });
        }
      }
    );
  });
};
