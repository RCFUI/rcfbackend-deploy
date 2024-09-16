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
const firstTimer_1 = require("../model/firstTimer");
class FirstTimerService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield firstTimer_1.FirstTimer.create(payload);
        });
    }
    createSecondTimer(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName, phoneNumber, email, invitedBy, sex, faculty, department, level, hallOfResidence, roomNumber, availableForCounselling, prayerRequest, counsellingRequest } = payload;
            return firstTimer_1.FirstTimer.findOneAndUpdate({ email }, {
                fullName, phoneNumber, invitedBy, sex,
                faculty, department, level, hallOfResidence, roomNumber,
                availableForCounselling, prayerRequest, counsellingRequest, secondTimer: true
            }, { new: true, useFindAndModify: false });
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield firstTimer_1.FirstTimer.findById(id);
        });
    }
    getAll(skip, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield firstTimer_1.FirstTimer.find().skip(skip).limit(limit).sort({ createdAt: -1 });
        });
    }
    count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield firstTimer_1.FirstTimer.countDocuments().exec();
        });
    }
}
exports.default = new FirstTimerService;
//# sourceMappingURL=firstTimer.js.map