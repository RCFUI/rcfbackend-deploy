import { Types } from "mongoose";

export interface IMessage {
    title: string,
    thumbnail: string,
    messageFile: string,
    duration: string,
    // adminId: Types.ObjectId,
    date: Date
}

export interface IMessageData {
    _id: Types.ObjectId,
    title: string,
    thumbnail: string,
    messageFile: string,
    duration: string,
    // adminId: Types.ObjectId,
    date: Date,
    isDeleted: Boolean,
    createdAt: Date,
    updatedAt: Date
}

export interface IEditMessage {
    title: string,
    thumbnail: string,
    messageFile: string,
    duration: string,
    date: Date
}

export interface FileObject {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    buffer: ArrayBuffer
}