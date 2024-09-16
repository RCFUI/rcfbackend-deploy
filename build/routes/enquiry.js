"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const request_body_1 = __importDefault(require("../middleware/request-body"));
const enquiry_1 = __importDefault(require("../validators/enquiry"));
const enquiry_2 = __importDefault(require("../controller/enquiry"));
const router = express_1.default.Router();
const enquiryController = new enquiry_2.default();
router.post('/', [request_body_1.default.validate(enquiry_1.default.create()), enquiryController.createEnquiry]);
exports.default = router;
//# sourceMappingURL=enquiry.js.map