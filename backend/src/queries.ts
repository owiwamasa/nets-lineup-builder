import pg from "pg";

const pool = new pg.Pool({
  user: "oweniwamasa",
  host: "localhost",
  database: "nba-shots-db-development",
  password: "",
  port: 5432,
});
