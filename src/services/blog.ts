import {IBlog, IBlogData} from "../interfaces/blog";
import {Blog} from "../model/blog";
import {Types} from "mongoose";


class BlogService {

    async create(payload:IBlog): Promise<IBlogData> {
        return await Blog.create(payload);
    }

    async edit(id:Types.ObjectId, payload:IBlog): Promise<IBlogData> {
        const {title, articleDuration, author, body, images} = payload;
        return await Blog.findByIdAndUpdate(id,{
            title, articleDuration, author, body, images
        },
            {new: true, useFindAndModify: false});
    }

    async get(id: Types.ObjectId): Promise<IBlogData> {
        return await Blog.findById(id);
    }

    async getAll(skip: number, limit: number): Promise<IBlogData[]> {
        return await Blog.find({isDeleted: false}).skip(skip).limit(limit);
    }

    async count(): Promise<number> {
        return await Blog.countDocuments({isDeleted:false}).exec();
    }

    async delete(id: Types.ObjectId): Promise<IBlogData> {
        return await Blog.findByIdAndUpdate(id, {isDeleted: true});
    }
}

export default new BlogService();