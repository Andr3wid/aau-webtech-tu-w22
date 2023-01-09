const express = require("express");
const cors = require("cors");
const DbService = require("./services/DbService");
const locationRouter = require('./routes/LocationRouter');

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} on ${req.url} from ${req.ip}`
  );
  next();
});

app.get("/", (req, res) => {
  res.send("weatherly-backend is up and running");
});

app.use('/location', locationRouter);

app.listen(port, () => {
  DbService.testConnection()
    .then(() => {
      console.log("DB connection test successful");
      console.log(`weatherly-backend running on port ${port}`);
    })
    .catch((err) => {
      console.error(
        "Failed to connect to databse, shutting down application",
        err
      );
      process.exit(1);
    });
});
