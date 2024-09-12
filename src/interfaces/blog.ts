import {Types} from "mongoose";


export interface IBlog {
    title: string,
    articleDuration: string,
    body: string,
    author: string,
    images?: string[]
}
export interface IBlogData {
    _id: Types.ObjectId
    title: string,
    articleDuration: string,
    body: string,
    author: string,
    images?: string[],
    isDeleted: boolean,
    createdAt: NativeDate,
    updatedAt: NativeDate
}