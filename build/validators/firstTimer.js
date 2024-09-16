"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class FirstTimerValidator {
    static create() {
        return joi_1.default.object({
            fullName: joi_1.default.string().min(5).required(),
            phoneNumber: joi_1.default.string().min(11).max(11).required(),
            email: joi_1.default.string().email().required(),
            invitedBy: joi_1.default.string().required(),
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
    static edit() {
        return joi_1.default.object({
            fullName: joi_1.default.string().min(5).required(),
            email: joi_1.default.string().email().required(),
            phoneNumber: joi_1.default.string().min(11).max(11).required(),
            invitedBy: joi_1.default.string().required(),
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
exports.default = FirstTimerValidator;
//# sourceMappingURL=firstTimer.js.map