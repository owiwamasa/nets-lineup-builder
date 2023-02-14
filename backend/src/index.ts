import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import playerRouter from "./routes/players";
import shotRouter from "./routes/shots";
import lineupComparisonRouter from "./routes/lineupComparison";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/players", playerRouter);
app.use("/shots", shotRouter);
app.use("/lineupComparison", lineupComparisonRouter);

app.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`)
);
