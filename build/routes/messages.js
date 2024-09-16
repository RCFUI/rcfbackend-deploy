"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = __importDefault(require("../controller/messages"));
const request_body_1 = __importDefault(require("../middleware/request-body"));
const messages_2 = __importDefault(require("../validators/messages"));
const router = express_1.default.Router();
const messagesController = new messages_1.default();
router.post('/', [request_body_1.default.validate(messages_2.default.create()), messagesController.createMessage]);
router.post('/edit/:id', [request_body_1.default.validate(messages_2.default.edit()), messagesController.editMessage]);
router.get('/', [messagesController.getMessages]);
router.get('/:id', [messagesController.getOneMessage]);
router.patch('/delete/:id', [messagesController.deleteMessage]);
exports.default = router;
//# sourceMappingURL=messages.js.map