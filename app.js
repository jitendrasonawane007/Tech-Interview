require("dotenv").config();
const express = require("express");
const user = require("./src/routes/user.route");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");

app.use(express.json());
app.use("/user", user);
app.listen(port, () => {
  console.log(`Server Running On Port:${port}....!!!`);
});
