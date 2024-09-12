import { Types } from "mongoose";
import { IEditMessage, IMessage, IMessageData } from "../interfaces/messages";
import { Messages } from "../model/messages";


class MessagesService {

    async create(message:IMessage): Promise<IMessageData> {
        return await Messages.create(message);
    }

    async getOneMessage(id:Types.ObjectId): Promise<IMessageData> {
        return await Messages.findById(id);
    }

    async getMessages(skip:number, limit:number): Promise<IMessageData[]> {
        return await Messages.find({isDeleted: false}).skip(skip).limit(limit).sort({createdAt: -1});
    }

    async count(): Promise<number> {
        return await Messages.countDocuments({isDeleted: false}).exec()
      }

    async edit(id: Types.ObjectId, message:IEditMessage): Promise<IMessageData> {
        const { title, thumbnail, messageFile, duration, date} = message;
        return await Messages.findByIdAndUpdate(id, {
            title, thumbnail, messageFile, duration, date
        },
        {new: true, useFindAndModify: false});
    }

    async delete(id:Types.ObjectId): Promise<void> {
        return await Messages.findByIdAndUpdate(id, {isDeleted: true});
    }
}

export default new MessagesService();