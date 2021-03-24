const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded());

const routes = require("./routes/routes.js")(app);

const server = app.listen(3001, () => {
  console.log("listening on port %s....", server.address().port);
});
