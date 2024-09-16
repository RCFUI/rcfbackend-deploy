"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = exports.blogSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.blogSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    articleDuration: {
        type: String,
        required: true,
        minLength: 3
    },
    body: {
        type: String,
        required: true,
        minLength: 3
    },
    author: {
        type: String,
        required: true,
        minLength: 3
    },
    images: [{
            type: String,
        }],
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.Blog = mongoose_1.default.model('blog', exports.blogSchema);
//# sourceMappingURL=blog.js.map