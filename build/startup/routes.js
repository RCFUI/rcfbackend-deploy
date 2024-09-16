"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = __importDefault(require("../routes/messages"));
const upload_1 = __importDefault(require("../routes/upload"));
const firstTimer_1 = __importDefault(require("../routes/firstTimer"));
const enquiry_1 = __importDefault(require("../routes/enquiry"));
const blog_1 = __importDefault(require("../routes/blog"));
const member_1 = __importDefault(require("../routes/member"));
function routes(app) {
    app.use(express_1.default.json());
    app.use('/api/v1/messages', messages_1.default);
    app.use('/api/v1/upload', upload_1.default);
    app.use('/api/v1/first-timer', firstTimer_1.default);
    app.use('/api/v1/enquiry', enquiry_1.default);
    app.use('/api/v1/blog', blog_1.default);
    app.use('/api/v1/member', member_1.default);
}
exports.default = routes;
//# sourceMappingURL=routes.js.map