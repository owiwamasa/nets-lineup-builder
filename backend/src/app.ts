import express, { Express, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
