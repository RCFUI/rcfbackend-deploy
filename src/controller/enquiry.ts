import {Request, Response} from 'express';
import enquiryService from "../services/enquiry";
import {serverError} from "../middleware/error";


class EnquiryController{

    async createEnquiry(req: Request, res: Response): Promise<void>{
        try {
            const enquiry = await enquiryService.create(req.body);
            res.status(200).json({
                status: 'success',
                message: 'Info sent successfully!',
                data: enquiry
            });
        } catch (ex) {
            return serverError(res, ex);
        }
    }
}

export default EnquiryController;