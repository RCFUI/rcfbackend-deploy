import { Response } from "express";

export const serverError = (err:any, res:Response) => {
    const status = err.status ? err.status : 400;
    res.status(status).json({
        status: 'failed',
        message: err.message || 'Internal Server Error',
        data: null
    })
}