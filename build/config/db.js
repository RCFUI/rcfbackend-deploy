"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
module.exports = function () {
    const database = process.env.MONGODB_URI;
    if (database) {
        mongoose_1.default.set("strictQuery", false);
        mongoose_1.default
            .connect(database, {
            autoIndex: false, // Don't build indexes
            maxPoolSize: 10, // Maintain up to 10 socket connections
            serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
            socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            family: 4, // Use IPv4, skip trying IPv6
        })
            .then(() => console.log(`Connected to database...`));
    }
};
//# sourceMappingURL=db.js.map