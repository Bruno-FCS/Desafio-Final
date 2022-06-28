const connection = require("../infra/connection");

module.exports = (app) => {
  app.get("/vehiclesdata", (req, res) => {
    connection.query("SELECT * FROM Vehicles_Data", (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(200).json(result);
      }
    });
  });

  app.get("/vehiclesdata/:vehicledata_id", (req, res) => {
    connection.query(
      `SELECT * FROM Vehicles_Data WHERE vehicledata_id = "${req.params.vehicledata_id}"`,
      (error, result) => {
        const vehicledata = result[0];
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json(vehicledata);
        }
      }
    );
  });

  app.post("/vehiclesdata", (req, res) => {
    const vehicledata = req.body;
    connection.query(
      "SELECT * FROM Vehicles_Data WHERE vehicledata_vin = ?",
      [vehicledata.vehicledata_vin],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        }
        if (result.length == 0) {
          connection.query(
            "INSERT INTO Vehicles_Data (vehicledata_vin, vehicledata_odometer, vehicledata_tire_pressure, vehicledata_status, vehicledata_battery_status, vehicledata_fuel_level, vehicledata_lat, vehicledata_long) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            [
              vehicledata.vehicledata_vin,
              vehicledata.vehicledata_odometer,
              vehicledata.vehicledata_tire_pressure,
              vehicledata.vehicledata_status,
              vehicledata.vehicledata_battery_status,
              vehicledata.vehicledata_fuel_level,
              vehicledata.vehicledata_lat,
              vehicledata.vehicledata_long,
            ],
            (error) => {
              if (error) {
                res.status(400).json(error);
              }
              res.status(201).json(vehicledata);
            }
          );
        } else {
          res.status(400).json("VIN already registered");
        }
      }
    );
  });

  app.patch("/vehiclesdata/:vehicledata_id", (req, res) => {
    const vehicledata = req.body;
    const vehicledata_id = parseInt(req.params.vehicledata_id);
    connection.query(
      "SELECT * FROM Vehicles_Data WHERE vehicledata_vin = ?",
      [vehicledata.vehicledata_vin],
      (error, result) => {
        if (error) {
          res.status(400).json(error);
        }
        if (result.length == 0) {
          connection.query(
            "UPDATE Vehicles_Data SET ? WHERE vehicledata_id = ?",
            [req.body, vehicledata_id],
            (error) => {
              if (error) {
                res.status(400).json(error);
              } else {
                res.status(200).json({ ...req.body, vehicledata_id });
              }
            }
          );
        } else if (result.length == 1) {
          if (result[0].vehicledata_id == vehicledata_id) {
            connection.query(
              "UPDATE Vehicles_Data SET ? WHERE vehicledata_id = ?",
              [req.body, vehicledata_id],
              (error) => {
                if (error) {
                  res.status(400).json(error);
                } else {
                  res.status(200).json({ ...req.body, vehicledata_id });
                }
              }
            );
          } else {
            res.status(400).json("VIN already registered");
          }
        } else {
          res.status(400).json("VIN already registered");
        }
      }
    );
  });

  app.delete("/vehiclesdata/:vehicledata_id", (req, res) => {
    const vehicledata_id = parseInt(req.params.vehicledata_id);
    connection.query(
      "DELETE FROM Vehicles_Data WHERE vehicledata_id = ?",
      [vehicledata_id],
      (error) => {
        if (error) {
          res.status(400).json(error);
        } else {
          res.status(200).json({ vehicledata_id });
        }
      }
    );
  });
};
