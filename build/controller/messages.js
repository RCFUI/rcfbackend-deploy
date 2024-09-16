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
const messages_1 = __importDefault(require("../services/messages"));
const error_1 = require("../middleware/error");
class MessagesController {
    createMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const message = yield messages_1.default.create(req.body);
                res.status(200).json({
                    status: 'success',
                    message: "Message uploaded successfully",
                    data: message
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    editMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageId = req.params.id;
                const message = yield messages_1.default.edit(messageId, req.body);
                res.status(200).json({
                    status: 'success',
                    message: "Message edited successfully",
                    data: message
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    deleteMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const messageId = req.params.id;
                yield messages_1.default.delete(messageId);
                res.status(200).json({
                    status: 'success',
                    message: "Message deleted successfully",
                    data: []
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    getMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = Math.abs(Number(req.query.limit));
                const pageQuery = Math.abs(Number(req.query.page));
                const page = pageQuery ? pageQuery : 1;
                const skip = (page - 1) * limit;
                const messages = yield messages_1.default.getMessages(skip, limit);
                const count = yield messages_1.default.count();
                res.status(200).json({
                    status: 'success',
                    message: "Messages retrieved successfully",
                    currentPage: page,
                    totalNumberOfPages: Math.ceil(count / limit),
                    count: count,
                    data: messages
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    getOneMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const message = yield messages_1.default.getOneMessage(id);
                if (!message) {
                    res.status(404).json({
                        status: 'failed',
                        message: "Message with the given ID not found!",
                        data: message
                    });
                }
                res.status(200).json({
                    status: 'success',
                    message: "Message uploaded successfully",
                    data: message
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
}
exports.default = MessagesController;
//# sourceMappingURL=messages.js.map