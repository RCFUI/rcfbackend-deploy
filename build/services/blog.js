"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = require("../model/blog");
class BlogService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield blog_1.Blog.create(payload);
        });
    }
    edit(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, articleDuration, author, body, images } = payload;
            return yield blog_1.Blog.findByIdAndUpdate(id, {
                title, articleDuration, author, body, images
            }, { new: true, useFindAndModify: false });
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield blog_1.Blog.findById(id);
        });
    }
    getAll(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield blog_1.Blog.find({ isDeleted: false }).skip(skip).limit(limit);
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield blog_1.Blog.countDocuments({ isDeleted: false }).exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield blog_1.Blog.findByIdAndUpdate(id, { isDeleted: true });
        });
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blog.js.map