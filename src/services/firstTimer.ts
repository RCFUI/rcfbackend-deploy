import {IFirstTimer, IFirstTimerData, ISecondTimer} from "../interfaces/firstTimer";
import {FirstTimer} from "../model/firstTimer";
import {Types} from "mongoose";

class FirstTimerService {

    async create(payload:IFirstTimer): Promise<IFirstTimerData> {
        return await FirstTimer.create(payload);
    }

    async createSecondTimer(payload:ISecondTimer): Promise<IFirstTimerData> {
        const {fullName, phoneNumber, email, invitedBy, sex,
            faculty, department, level, hallOfResidence, roomNumber
            , availableForCounselling, prayerRequest, counsellingRequest} = payload;

        return FirstTimer.findOneAndUpdate({email}, {
                fullName, phoneNumber, invitedBy, sex,
                faculty, department, level, hallOfResidence, roomNumber
                , availableForCounselling, prayerRequest, counsellingRequest, secondTimer: true
            },
            {new: true, useFindAndModify: false});
    }

    async getOne(id: Types.ObjectId): Promise<IFirstTimerData> {
        return await FirstTimer.findById(id);
    }

    async getAll(skip: number, limit: number): Promise<IFirstTimerData[]> {
        return await FirstTimer.find().skip(skip).limit(limit).sort({createdAt: -1});
    }

    async count(): Promise<number> {
        return await FirstTimer.countDocuments().exec()
    }
}

export default new FirstTimerService;