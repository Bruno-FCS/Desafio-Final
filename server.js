const express = require("express");
const app = express();

const PORT = process.env.PORT || 4200;

app.use(express.static(__dirname + "/dist/projeto"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/projeto/index.html");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
