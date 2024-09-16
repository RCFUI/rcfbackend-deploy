"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_body_1 = __importDefault(require("../middleware/request-body"));
const member_1 = __importDefault(require("../validators/member"));
const member_2 = __importDefault(require("../controller/member"));
const router = express_1.default.Router();
const memberController = new member_2.default();
router.post('/', [request_body_1.default.validate(member_1.default.create()), memberController.createMember]);
router.post('/edit', [request_body_1.default.validate(member_1.default.edit()), memberController.edit]);
router.get('/', memberController.getAllMembers);
router.get('/:id', memberController.getOneMember);
exports.default = router;
//# sourceMappingURL=member.js.map