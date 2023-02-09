const express = require("express");
const playerRouter = require("./routes/players");
// const path = require("path");
require("dotenv").config();

const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

app.use("/players", playerRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
