const express = require("express");

const { PORT } = require("./config/serverConfig");
const connect = require("./config/database");
const apiRoutes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, async () => {
  console.log("Twitter is running on port:", PORT);
  await connect();
});
