"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const multer = require("multer");
const multer_1 = __importDefault(require("multer"));
const express_1 = __importDefault(require("express"));
const upload_1 = __importDefault(require("../controller/upload"));
const router = express_1.default.Router();
const upload = (0, multer_1.default)();
const uploadController = new upload_1.default();
router.post("/single-image", upload.single("document"), [uploadController.singleImage]);
router.post("/multiple-images", upload.array("documents", 20), [uploadController.multipleImages]);
router.post("/single-message", upload.single("document"), [uploadController.singleMessage]);
router.post("/multiple-messages", upload.array("documents", 5), [uploadController.multipleMessages]);
exports.default = router;
//# sourceMappingURL=upload.js.map