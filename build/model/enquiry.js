"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enquiry = exports.enquirySchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.enquirySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.Enquiry = mongoose_1.default.model('enquiry', exports.enquirySchema);
//# sourceMappingURL=enquiry.js.map