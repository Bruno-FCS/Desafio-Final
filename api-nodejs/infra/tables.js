class Tables {
  init(connection) {
    this.connection = connection;

    this.createUserTable();
    this.createVehicleTable();
    this.createVehicleDataTable();
  }

  createUserTable() {
    const sql =
      "CREATE TABLE IF NOT EXISTS User (user_id int NOT NULL AUTO_INCREMENT," +
      "user_name varchar(20) NOT NULL, user_email varchar(50) NOT NULL," +
      "user_password varchar(20) NOT NULL, user_full_name varchar(50) NOT NULL," +
      "user_join_date datetime NOT NULL, PRIMARY KEY(user_id))";

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("User table successfully created");
      }
    });
  }

  createVehicleTable() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Vehicle (vehicle_id int NOT NULL AUTO_INCREMENT," +
      "vehicle_model varchar(20) NOT NULL, vehicle_total_volume int NOT NULL," +
      "vehicle_connected int NOT NULL, vehicle_software_updates int NOT NULL, PRIMARY KEY(vehicle_id))";

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Vehicle table successfully created");
      }
    });
  }

  createVehicleDataTable() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Vehicle_Data (vehicledata_id int NOT NULL AUTO_INCREMENT," +
      "vehicledata_vin varchar(20) NOT NULL, vehicledata_odometer varchar(10) NOT NULL," +
      "vehicledata_tire_pressure varchar(20) NOT NULL, vehicledata_status varchar(5) NOT NULL," +
      "vehicledata_battery_status varchar(5) NOT NULL, vehicledata_fuel_level varchar(5) NOT NULL," +
      "vehicledata_lat varchar(10) NOT NULL, vehicledata_long varchar(10) NOT NULL, PRIMARY KEY(vehicledata_id))";

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Vehicle_Data table successfully created");
      }
    });
  }
}

module.exports = new Tables();
