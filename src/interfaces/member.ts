import {Types} from "mongoose";


export interface IMember {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
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
export interface IEditMember {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
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

export interface IMemberData {
    _id: Types.ObjectId
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    sex: string,
    faculty: string,
    department: string,
    level: string,
    hallOfResidence: string,
    roomNumber: string,
    availableForCounselling?: string,
    prayerRequest?: string,
    counsellingRequest?: string,
    createdAt: NativeDate,
    updatedAt: NativeDate
}
