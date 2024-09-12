import {Types} from "mongoose";


export interface IEnquiry {
    name: string,
    phoneNumber: string,
    email: string,
    info: string
}

export interface IEnquiryData {
    _id: Types.ObjectId,
    name: string,
    phoneNumber: string,
    email: string,
    info: string,
    createdAt: Date,
    updatedAt: Date
}