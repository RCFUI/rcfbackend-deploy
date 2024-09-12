import {Types} from "mongoose";
import {IEditMember, IMember, IMemberData} from "../interfaces/member";
import {Member} from "../model/member";

class MemberService {

    async create(payload:IMember): Promise<IMemberData> {
        return await Member.create(payload);
    }

    async edit(payload:IEditMember): Promise<IMemberData> {
        const {firstName, lastName, phoneNumber, email, sex,
            faculty, department, level, hallOfResidence, roomNumber
            , availableForCounselling, prayerRequest, counsellingRequest} = payload;

        return Member.findOneAndUpdate({email}, {
                firstName, lastName, phoneNumber, sex,
                faculty, department, level, hallOfResidence, roomNumber
                , availableForCounselling, prayerRequest, counsellingRequest
            },
            {new: true, useFindAndModify: false});
    }

    async getOne(id: Types.ObjectId): Promise<IMemberData> {
        return await Member.findById(id);
    }

    async getAll(skip: number, limit: number): Promise<IMemberData[]> {
        return await Member.find().skip(skip).limit(limit).sort({createdAt: -1});
    }

    async count(): Promise<number> {
        return await Member.countDocuments().exec()
    }
}

export default new MemberService;