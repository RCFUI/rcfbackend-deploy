"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./startup/routes"));
exports.app = (0, express_1.default)();
// Specify the allowed origin in the cors() function
exports.app.use((0, cors_1.default)({
    origin: ["https://rcfui.org"],
    credentials: true
}));
// app.use(
//   session({
//     secret: process.env.JWT_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
(0, routes_1.default)(exports.app);
require("./config/db")();
exports.app.get("/", function (req, res) {
    res.json({
        message: "API is working now",
        ack: Date.now(),
    });
});
const port = process.env.PORT || 7171;
exports.app.listen(port, () => {
    console.log(`Express server listening at port ${port}`);
});
//# sourceMappingURL=app.js.map