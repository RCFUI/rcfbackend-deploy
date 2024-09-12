import { Request, Response } from 'express';
import messageService from '../services/messages';
import { Types } from 'mongoose';
import { serverError } from '../middleware/error';
class MessagesController {


    async createMessage(req:Request, res:Response): Promise<void> {
        try {
            const message = await messageService.create(req.body);
            res.status(200).json({
                status: 'success',
                message: "Message uploaded successfully",
                data: message
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }

    async editMessage(req:Request, res:Response): Promise<void> {
        try {
            const messageId = req.params.id as unknown as Types.ObjectId;
            const message = await messageService.edit(messageId, req.body);
            res.status(200).json({
                status: 'success',
                message: "Message edited successfully",
                data: message
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }

    async deleteMessage(req:Request, res:Response): Promise<void> {
        try {
            const messageId = req.params.id as unknown as Types.ObjectId;
            await messageService.delete(messageId);
            res.status(200).json({
                status: 'success',
                message: "Message deleted successfully",
                data: []
            })
        } catch (ex) {
            return serverError(ex, res);
        }
    }

    async getMessages(req:Request, res:Response): Promise<void> {
        try {
            const limit = Math.abs(Number(req.query.limit));
            const pageQuery = Math.abs(Number(req.query.page));
            const page = pageQuery ? pageQuery : 1
            const skip = (page - 1) * limit;
    
            const messages = await messageService.getMessages(skip, limit);
            const count = await messageService.count();
            res.status(200).json({
                status: 'success',
                message: "Messages retrieved successfully",
                currentPage: page,
                totalNumberOfPages: Math.ceil(count/limit),
                count: count,
                data: messages
            })
        } catch (ex) {
            return serverError(ex, res);
        }
    }

    async getOneMessage(req:Request, res:Response): Promise<void> {
        try {
            const id = (req.params.id as unknown as Types.ObjectId);
            const message = await messageService.getOneMessage(id);

            if(!message){
                res.status(404).json({
                    status: 'failed',
                    message: "Message with the given ID not found!",
                    data: message
                })
            }

            res.status(200).json({
                status: 'success',
                message: "Message uploaded successfully",
                data: message
            })
        } catch (ex) {
            return serverError(ex, res);
        }
    }
}

export default MessagesController;