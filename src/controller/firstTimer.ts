import {Request, Response} from 'express';
import firstTimerService from '../services/firstTimer'
import {serverError} from "../middleware/error";
import {IFirstTimerData} from "../interfaces/firstTimer";
import {Types} from "mongoose";

class FirstTimerController{

    async createFirstTimer(req:Request, res:Response): Promise<void>{
        try {
            const firstTimer = await firstTimerService.create(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Created Successfully',
                data: firstTimer
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }
        async createSecondTimer(req:Request, res:Response): Promise<void>{
        try {
            const secondTimer = await firstTimerService.createSecondTimer(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Created Successfully',
                data: secondTimer
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }

    async getOneFirstTimer(req:Request, res:Response): Promise<void> {
        try {
            const id = new Types.ObjectId(req.params.id);
            const firstTimer = await firstTimerService.getOne(id);
            res.status(200).json({
                status: 'success',
                message: 'Retrieved successfully',
                data: firstTimer
            });
        } catch (ex){
            return serverError(ex, res);
        }
    }

    async getAllFirstTimers(req:Request, res:Response): Promise<void> {
        try {
            const limit = Math.abs(Number(req.query.limit));
            const pageQuery = Math.abs(Number(req.query.page));
            const page = pageQuery ? pageQuery : 1
            const skip = (page - 1) * limit;

            const firstTimers:IFirstTimerData[] = await firstTimerService.getAll(skip, limit);
            const count: number = await firstTimerService.count();
            res.status(200).json({
                status: 'success',
                message: 'Retrieved successfully',
                currentPage: page,
                totalNumberOfPages: Math.ceil(count/limit),
                count: count,
                data: firstTimers
            })
        } catch (ex){
            return serverError(ex, res);
        }
    }
}

export default FirstTimerController;