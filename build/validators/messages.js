"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class MessagesValidator {
    static create() {
        return joi_1.default.object({
            title: joi_1.default.string().min(5).max(50).required(),
            thumbnail: joi_1.default.string().min(5).max(100).required(),
            messageFile: joi_1.default.string().min(5).max(100).required(),
            duration: joi_1.default.string().min(5).max(20).required(),
            adminId: joi_1.default.string().min(24).max(24).required(),
            date: joi_1.default.date().required()
        });
    }
    static edit() {
        return joi_1.default.object({
            title: joi_1.default.string().min(5).max(50).required(),
            thumbnail: joi_1.default.string().min(5).max(100).required(),
            messageFile: joi_1.default.string().min(5).max(100).required(),
            duration: joi_1.default.string().min(5).max(20).required(),
            date: joi_1.default.date().required()
        });
    }
}
exports.default = MessagesValidator;
//# sourceMappingURL=messages.js.map