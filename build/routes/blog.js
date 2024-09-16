"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = __importDefault(require("../controller/blog"));
const request_body_1 = __importDefault(require("../middleware/request-body"));
const blog_2 = __importDefault(require("../validators/blog"));
const router = express_1.default.Router();
const blogController = new blog_1.default();
router.post('/', [request_body_1.default.validate(blog_2.default.create()), blogController.create]);
router.post('/:id', [request_body_1.default.validate(blog_2.default.create()), blogController.edit]);
router.post('/delete', [blogController.delete]);
router.get('/:id', [blogController.get]);
router.get('/', [blogController.getAll]);
exports.default = router;
//# sourceMappingURL=blog.js.map