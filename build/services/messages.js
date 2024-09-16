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
const messages_1 = require("../model/messages");
class MessagesService {
    create(message) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messages_1.Messages.create(message);
        });
    }
    getOneMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messages_1.Messages.findById(id);
        });
    }
    getMessages(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messages_1.Messages.find({ isDeleted: false }).skip(skip).limit(limit).sort({ createdAt: -1 });
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messages_1.Messages.countDocuments({ isDeleted: false }).exec();
        });
    }
    edit(id, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, thumbnail, messageFile, duration, date } = message;
            return yield messages_1.Messages.findByIdAndUpdate(id, {
                title, thumbnail, messageFile, duration, date
            }, { new: true, useFindAndModify: false });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield messages_1.Messages.findByIdAndUpdate(id, { isDeleted: true });
        });
    }
}
exports.default = new MessagesService();
//# sourceMappingURL=messages.js.map