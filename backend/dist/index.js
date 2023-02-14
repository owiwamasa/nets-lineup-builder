"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var players_1 = __importDefault(require("./routes/players"));
var shots_1 = __importDefault(require("./routes/shots"));
var lineupComparison_1 = __importDefault(require("./routes/lineupComparison"));
var body_parser_1 = __importDefault(require("body-parser"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/players", players_1.default);
app.use("/shots", shots_1.default);
app.use("/lineupComparison", lineupComparison_1.default);
app.listen(process.env.PORT, function () {
    return console.log("Running on port ".concat(process.env.PORT));
});
