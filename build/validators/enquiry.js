"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class EnquiryValidator {
    static create() {
        return joi_1.default.object({
            name: joi_1.default.string().min(2).required(),
            phoneNumber: joi_1.default.string().min(11).max(11).required(),
            email: joi_1.default.string().email().required(),
            info: joi_1.default.string().min(5).required()
        });
    }
}
exports.default = EnquiryValidator;
//# sourceMappingURL=enquiry.js.map