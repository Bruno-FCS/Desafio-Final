const customExpress = require("./config/customExpress");
const connection = require("./infra/connection");
const Tables = require("./infra/tables");

const PORT = 3001;

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully connected");

    Tables.init(connection);

    const app = customExpress();

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  }
});
