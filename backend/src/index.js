const express = require("express");
const playerRouter = require("./routes/players");
const leagueAverageRouter = require("./routes/leagueAverages");
require("dotenv").config();

const app = express();

app.use("/players", playerRouter);
app.use("/leagueAverages", leagueAverageRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
