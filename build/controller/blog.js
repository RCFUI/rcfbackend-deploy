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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_1 = __importDefault(require("../services/blog"));
const error_1 = require("../middleware/error");
class BlogController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const blog = yield blog_1.default.create(req.body);
                res.status(200).json({
                    status: 'success',
                    message: 'Blog created successfully!',
                    data: blog
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    edit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const blog = yield blog_1.default.edit(id, req.body);
                if (!blog) {
                    res.status(404).json({
                        status: 'failed',
                        message: 'Blog with the given ID not found!',
                        data: blog
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Blog edited successfully!',
                    data: blog
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.query.id;
                yield blog_1.default.delete(id);
                res.status(200).json({
                    status: 'success',
                    message: 'Blog deleted successfully!',
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const blog = yield blog_1.default.get(id);
                if (!blog) {
                    res.status(404).json({
                        status: 'failed',
                        message: 'Blog with the given ID not found!',
                        data: blog
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: 'Blog retrieved successfully!',
                    data: blog
                });
            }
            catch (ex) {
                console.log("ex:", ex);
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = Math.abs(Number(req.query.limit));
                const pageQuery = Math.abs(Number(req.query.page));
                const page = pageQuery ? pageQuery : 1;
                const skip = (page - 1) * limit;
                const blogs = yield blog_1.default.getAll(skip, limit);
                const count = yield blog_1.default.count();
                res.status(200).json({
                    status: 'success',
                    message: 'Blogs retrieved successfully!',
                    currentPage: page,
                    totalPages: Math.ceil(count / limit),
                    count: count,
                    data: blogs
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
}
exports.default = BlogController;
//# sourceMappingURL=blog.js.map