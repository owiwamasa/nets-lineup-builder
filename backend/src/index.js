const express = require("express");
const cors = require("cors");
const playerRouter = require("./routes/players");
const leagueAverageRouter = require("./routes/leagueAverages");
const shotRouter = require("./routes/shots");
const lineupRouter = require("./routes/lineups");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/players", playerRouter);
app.use("/leagueAverages", leagueAverageRouter);
app.use("/shots", shotRouter);
app.use("/lineups", lineupRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
