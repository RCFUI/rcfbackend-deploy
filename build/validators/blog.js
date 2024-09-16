"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class BlogValidator {
    static create() {
        return joi_1.default.object({
            title: joi_1.default.string().min(3).required(),
            articleDuration: joi_1.default.string().required(),
            body: joi_1.default.string().min(20).required(),
            author: joi_1.default.string().min(3).required(),
            images: joi_1.default.array(),
            isDeleted: joi_1.default.boolean()
        });
    }
    static edit() {
        return joi_1.default.object({
            title: joi_1.default.string().min(3).required(),
            articleDuration: joi_1.default.string().required(),
            body: joi_1.default.string().min(20).required(),
            author: joi_1.default.string().min(3).required(),
            images: joi_1.default.array(),
            isDeleted: joi_1.default.boolean()
        });
    }
}
exports.default = BlogValidator;
//# sourceMappingURL=blog.js.map