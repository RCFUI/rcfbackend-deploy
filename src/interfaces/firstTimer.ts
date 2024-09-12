import {Types} from "mongoose";


export interface IFirstTimer {
    fullName: string,
    phoneNumber: string,
    email: string,
    invitedBy: string,
    sex: string,
    faculty: string,
    department: string,
    level: string,
    hallOfResidence: string,
    roomNumber: string,
    availableForCounselling?: string,
    prayerRequest?: string,
    counsellingRequest?: string,
}
export interface ISecondTimer {
    fullName: string,
    phoneNumber: string,
    email: string,
    invitedBy: string,
    sex: string,
    faculty: string,
    department: string,
    level: string,
    hallOfResidence: string,
    roomNumber: string,
    availableForCounselling?: string,
    prayerRequest?: string,
    counsellingRequest?: string,
}

export interface IFirstTimerData {
    _id: Types.ObjectId
    fullName: string,
    phoneNumber: string,
    email: string,
    invitedBy: string,
    sex: string,
    faculty: string,
    department: string,
    level: string,
    hallOfResidence: string,
    roomNumber: string,
    availableForCounselling?: string,
    prayerRequest?: string,
    counsellingRequest?: string,
    secondTimer: Boolean,
    createdAt: NativeDate,
    updatedAt: NativeDate
}
