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
const member_1 = __importDefault(require("../services/member"));
const error_1 = require("../middleware/error");
const mongoose_1 = require("mongoose");
class MemberController {
    createMember(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const member = yield member_1.default.create(req.body);
                res.status(200).json({
                    status: 'success',
                    message: 'Created Successfully',
                    data: member
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
                const secondTimer = yield member_1.default.edit(req.body);
                res.status(200).json({
                    status: 'success',
                    message: 'Updated Successfully',
                    data: secondTimer
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    getOneMember(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = new mongoose_1.Types.ObjectId(req.params.id);
                const member = yield member_1.default.getOne(id);
                res.status(200).json({
                    status: 'success',
                    message: 'Retrieved successfully',
                    data: member
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
    getAllMembers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = Math.abs(Number(req.query.limit));
                const pageQuery = Math.abs(Number(req.query.page));
                const page = pageQuery ? pageQuery : 1;
                const skip = (page - 1) * limit;
                const members = yield member_1.default.getAll(skip, limit);
                const count = yield member_1.default.count();
                res.status(200).json({
                    status: 'success',
                    message: 'Retrieved successfully',
                    currentPage: page,
                    totalNumberOfPages: Math.ceil(count / limit),
                    count: count,
                    data: members
                });
            }
            catch (ex) {
                return (0, error_1.serverError)(ex, res);
            }
        });
    }
}
exports.default = MemberController;
//# sourceMappingURL=member.js.map