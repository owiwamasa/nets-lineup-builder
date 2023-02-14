"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var utils_1 = require("../utils");
var db = require("../../models");
var Lineup = db.Lineup, Player = db.Player, LeagueAverage = db.LeagueAverage;
var lineupComparisonRouter = express_1.default.Router();
lineupComparisonRouter.post("/", (0, utils_1.asyncHandler)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var playerIds, lineupCode, lineup, players, two_pt_makes_total_1, two_pt_attempts_total_1, three_pt_makes_total_1, three_pt_attempts_total_1, off_rating_sum_1, def_rating_sum_1, ast_per_100_sum_1, lineupData, leagueAverage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                playerIds = req.body.playerIds;
                lineupCode = playerIds.sort(function (a, b) { return a - b; }).join("_");
                return [4 /*yield*/, Lineup.findOne({
                        where: { lineup_code: lineupCode },
                    })];
            case 1:
                lineup = _a.sent();
                if (!!lineup) return [3 /*break*/, 4];
                return [4 /*yield*/, Player.findAll({
                        where: { nba_id: playerIds },
                    })];
            case 2:
                players = _a.sent();
                two_pt_makes_total_1 = 0;
                two_pt_attempts_total_1 = 0;
                three_pt_makes_total_1 = 0;
                three_pt_attempts_total_1 = 0;
                off_rating_sum_1 = 0;
                def_rating_sum_1 = 0;
                ast_per_100_sum_1 = 0;
                players.forEach(function (player) {
                    two_pt_makes_total_1 += player.dataValues.two_pt_makes;
                    two_pt_attempts_total_1 += player.dataValues.two_pt_attempts;
                    three_pt_makes_total_1 += player.dataValues.three_pt_makes;
                    three_pt_attempts_total_1 += player.dataValues.three_pt_attempts;
                    off_rating_sum_1 += player.dataValues.off_rating;
                    def_rating_sum_1 += player.dataValues.def_rating;
                    ast_per_100_sum_1 += player.dataValues.ast_per_100;
                });
                lineupData = {
                    lineup_code: lineupCode,
                    efg_pct: (0, utils_1.mathRound)(((two_pt_makes_total_1 + 1.5 * three_pt_makes_total_1) /
                        (two_pt_attempts_total_1 + three_pt_attempts_total_1)) *
                        100, 1),
                    fg_pct: (0, utils_1.mathRound)(((two_pt_makes_total_1 + three_pt_makes_total_1) /
                        (two_pt_attempts_total_1 + three_pt_attempts_total_1)) *
                        100, 1),
                    three_pt_pct: three_pt_makes_total_1 > 0
                        ? (0, utils_1.mathRound)((three_pt_makes_total_1 / three_pt_attempts_total_1) * 100, 1)
                        : 0,
                    off_rating: (0, utils_1.mathRound)(off_rating_sum_1 / players.length, 0),
                    def_rating: (0, utils_1.mathRound)(def_rating_sum_1 / players.length, 0),
                    ast_per_100: ast_per_100_sum_1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                };
                return [4 /*yield*/, Lineup.create(lineupData)];
            case 3:
                lineup = _a.sent();
                _a.label = 4;
            case 4: return [4 /*yield*/, LeagueAverage.findOne({
                    order: [["id", "DESC"]],
                })];
            case 5:
                leagueAverage = _a.sent();
                res.send((0, utils_1.calculateLineupComparison)(lineup, leagueAverage));
                return [2 /*return*/];
        }
    });
}); }));
exports.default = lineupComparisonRouter;
