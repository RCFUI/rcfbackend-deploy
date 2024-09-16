"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = exports.messagesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.messagesSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    messageFile: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    // adminId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'admin'
    // },
    date: {
        type: Date,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Messages = mongoose_1.default.model('messages', exports.messagesSchema);
//# sourceMappingURL=messages.js.map