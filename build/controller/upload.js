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
const upload_1 = __importDefault(require("../services/upload"));
class UploadController {
    singleImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            if (!req.file) {
                res.status(400).json({
                    status: 'failed',
                    message: 'File missing. Kindly select a file for upload!'
                });
            }
            const url = yield upload_1.default.singleImage(file);
            res.status(200).json({
                status: 'success',
                message: "File uploaded successfully",
                data: url
            });
        });
    }
    multipleImages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            if (!req.files) {
                res.status(400).json({
                    status: 'failed',
                    message: 'Files missing. Kindly select files for upload!'
                });
            }
            const urls = yield upload_1.default.multipleImages(files);
            res.status(200).json({
                status: 'success',
                message: "Files uploaded successfully",
                data: urls
            });
        });
    }
    singleMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = req.file;
            if (!req.file) {
                res.status(400).json({
                    status: 'failed',
                    message: 'File missing. Kindly select a file for upload!'
                });
            }
            const url = yield upload_1.default.singleMessage(file);
            res.status(200).json({
                status: 'success',
                message: "File uploaded successfully",
                data: url
            });
        });
    }
    multipleMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            if (!req.files) {
                res.status(400).json({
                    status: 'failed',
                    message: 'Files missing. Kindly select files for upload!'
                });
            }
            const urls = yield upload_1.default.multipleMessages(files);
            res.status(200).json({
                status: 'success',
                message: "Image uploaded successfully",
                data: urls
            });
        });
    }
}
exports.default = UploadController;
//# sourceMappingURL=upload.js.map