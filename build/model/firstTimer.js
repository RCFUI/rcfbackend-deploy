"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstTimer = exports.firstTimerSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.firstTimerSchema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 11
    },
    email: {
        type: String,
        required: true
    },
    invitedBy: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
        enum: ['M', 'F']
    },
    faculty: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    hallOfResidence: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    availableForCounselling: {
        type: String,
        // required: true,
    },
    prayerRequest: {
        type: String,
        minLength: 5
    },
    counsellingRequest: {
        type: String,
        minLength: 5
    },
    secondTimer: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.FirstTimer = mongoose_1.default.model('firstTimer', exports.firstTimerSchema);
//# sourceMappingURL=firstTimer.js.map