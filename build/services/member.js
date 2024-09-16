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
const member_1 = require("../model/member");
class MemberService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield member_1.Member.create(payload);
        });
    }
    edit(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, phoneNumber, email, sex, faculty, department, level, hallOfResidence, roomNumber, availableForCounselling, prayerRequest, counsellingRequest } = payload;
            return member_1.Member.findOneAndUpdate({ email }, {
                firstName, lastName, phoneNumber, sex,
                faculty, department, level, hallOfResidence, roomNumber,
                availableForCounselling, prayerRequest, counsellingRequest
            }, { new: true, useFindAndModify: false });
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield member_1.Member.findById(id);
        });
    }
    getAll(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield member_1.Member.find().skip(skip).limit(limit).sort({ createdAt: -1 });
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield member_1.Member.countDocuments().exec();
        });
    }
}
exports.default = new MemberService;
//# sourceMappingURL=member.js.map