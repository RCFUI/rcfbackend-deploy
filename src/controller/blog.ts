import {Request, Response} from 'express';
import blogService from '../services/blog'
import {serverError} from "../middleware/error";
import {Types} from "mongoose";
import {IBlogData} from "../interfaces/blog";
class BlogController {

    async create(req:Request, res:Response): Promise<void> {
        try {
            const blog = await blogService.create(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Blog created successfully!',
                data: blog
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }
    async edit(req:Request, res:Response): Promise<void> {
        try {
            const id = req.params.id as unknown as Types.ObjectId;
            const blog = await blogService.edit(id, req.body);

            if(!blog){
                res.status(404).json({
                    status: 'failed',
                    message: 'Blog with the given ID not found!',
                    data: blog
                });
            }

            res.status(200).json({
                status: 'success',
                message: 'Blog edited successfully!',
                data: blog
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }
    async delete(req:Request, res:Response): Promise<void> {
        try {
            const id = req.query.id as unknown as Types.ObjectId;
            await blogService.delete(id);
            res.status(200).json({
                status: 'success',
                message: 'Blog deleted successfully!',
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }
    async get(req:Request, res:Response): Promise<void> {
        try {
            const id = req.params.id as unknown as Types.ObjectId;
            const blog = await blogService.get(id);

            if(!blog){
                res.status(404).json({
                    status: 'failed',
                    message: 'Blog with the given ID not found!',
                    data: blog
                });
            }

            res.status(200).json({
                status: 'success',
                message: 'Blog retrieved successfully!',
                data: blog
            });
        } catch (ex) {
            console.log("ex:", ex)
            return serverError(ex, res);
        }
    }
    async getAll(req:Request, res:Response): Promise<void> {
        try {
            const limit = Math.abs(Number(req.query.limit));
            const pageQuery = Math.abs(Number(req.query.page));
            const page = pageQuery ? pageQuery : 1
            const skip = (page - 1) * limit;

            const blogs: IBlogData[] = await blogService.getAll(skip, limit);
            const count: number = await blogService.count();
            res.status(200).json({
                status: 'success',
                message: 'Blogs retrieved successfully!',
                currentPage: page,
                totalPages: Math.ceil(count/limit),
                count: count,
                data: blogs
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }
}

export default BlogController;