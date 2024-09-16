"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_body_1 = __importDefault(require("../middleware/request-body"));
const firstTimer_1 = __importDefault(require("../validators/firstTimer"));
const firstTimer_2 = __importDefault(require("../controller/firstTimer"));
const router = express_1.default.Router();
const firstTimerController = new firstTimer_2.default();
router.post('/', [request_body_1.default.validate(firstTimer_1.default.create()), firstTimerController.createFirstTimer]);
router.post('/second-timer', [request_body_1.default.validate(firstTimer_1.default.edit()), firstTimerController.createSecondTimer]);
router.get('/', firstTimerController.getAllFirstTimers);
router.get('/:id', firstTimerController.getOneFirstTimer);
exports.default = router;
//# sourceMappingURL=firstTimer.js.map