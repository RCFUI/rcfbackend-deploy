"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class MemberValidator {
    static create() {
        return joi_1.default.object({
            firstName: joi_1.default.string().min(2).required(),
            lastName: joi_1.default.string().min(2).required(),
            phoneNumber: joi_1.default.string().min(11).max(11).required(),
            email: joi_1.default.string().email().required(),
            sex: joi_1.default.string().valid('M', 'F').required(),
            faculty: joi_1.default.string().required(),
            department: joi_1.default.string().required(),
            level: joi_1.default.string().valid('100', '200', '300', '400', '500', '600').required(),
            hallOfResidence: joi_1.default.string().required(),
            roomNumber: joi_1.default.string().required(),
            availableForCounselling: joi_1.default.string(),
            prayerRequest: joi_1.default.string().min(5),
            counsellingRequest: joi_1.default.string().min(5),
        });
    }
    static edit() {
        return joi_1.default.object({
            firstName: joi_1.default.string().min(2).required(),
            lastName: joi_1.default.string().min(2).required(),
            email: joi_1.default.string().email().required(),
            phoneNumber: joi_1.default.string().min(11).max(11).required(),
            sex: joi_1.default.string().valid('M', 'F').required(),
            faculty: joi_1.default.string().required(),
            department: joi_1.default.string().required(),
            level: joi_1.default.string().valid('100', '200', '300', '400', '500', '600').required(),
            hallOfResidence: joi_1.default.string().required(),
            roomNumber: joi_1.default.string().alphanum().required(),
            availableForCounselling: joi_1.default.string(),
            prayerRequest: joi_1.default.string().min(5),
            counsellingRequest: joi_1.default.string().min(5),
        });
    }
}
exports.default = MemberValidator;
//# sourceMappingURL=member.js.map