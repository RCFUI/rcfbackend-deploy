import {Request, Response} from 'express';
import memberService from '../services/member'
import {serverError} from "../middleware/error";
import {Types} from "mongoose";
import {IMemberData} from "../interfaces/member";

class MemberController{

    async createMember(req:Request, res:Response): Promise<void>{
        try {
            const member = await memberService.create(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Created Successfully',
                data: member
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }
    async edit(req:Request, res:Response): Promise<void>{
        try {
            const secondTimer = await memberService.edit(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Updated Successfully',
                data: secondTimer
            });
        } catch (ex) {
            return serverError(ex, res);
        }
    }

    async getOneMember(req:Request, res:Response): Promise<void> {
        try {
            const id = new Types.ObjectId(req.params.id);
            const member = await memberService.getOne(id);
            res.status(200).json({
                status: 'success',
                message: 'Retrieved successfully',
                data: member
            });
        } catch (ex){
            return serverError(ex, res);
        }
    }

    async getAllMembers(req:Request, res:Response): Promise<void> {
        try {
            const limit: number = Math.abs(Number(req.query.limit));
            const pageQuery: number = Math.abs(Number(req.query.page));
            const page: number = pageQuery ? pageQuery : 1
            const skip: number = (page - 1) * limit;

            const members:IMemberData[] = await memberService.getAll(skip, limit);
            const count: number = await memberService.count();
            res.status(200).json({
                status: 'success',
                message: 'Retrieved successfully',
                currentPage: page,
                totalNumberOfPages: Math.ceil(count/limit),
                count: count,
                data: members
            })
        } catch (ex){
            return serverError(ex, res);
        }
    }
}

export default MemberController;