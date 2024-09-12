import { Request, Response } from "express";
import UploadService from "../services/upload";
import { FileObject } from "../interfaces/messages";


class UploadController {

    async singleImage(req:Request, res:Response){
        const file = req.file;
        if(!req.file){
            res.status(400).json({
                status: 'failed',
                message: 'File missing. Kindly select a file for upload!'
            });
        }
        const url = await UploadService.singleImage(file);
        res.status(200).json({
            status: 'success',
            message: "File uploaded successfully",
            data: url
        });
    }

    async multipleImages(req:Request, res:Response){
        const files = req.files as unknown as FileObject[];
        if(!req.files){
            res.status(400).json({
                status: 'failed',
                message: 'Files missing. Kindly select files for upload!'
            });
        }
        const urls = await UploadService.multipleImages(files);
        res.status(200).json({
            status: 'success',
            message: "Files uploaded successfully",
            data: urls
        });
    }

    async singleMessage(req:Request, res:Response){
        const file = req.file;
        if(!req.file){
            res.status(400).json({
                status: 'failed',
                message: 'File missing. Kindly select a file for upload!'
            });
        }
        const url = await UploadService.singleMessage(file);
        res.status(200).json({
            status: 'success',
            message: "File uploaded successfully",
            data: url
        });
    }

    async multipleMessages(req:Request, res:Response){
        const files = req.files as unknown as FileObject[];
        if(!req.files){
            res.status(400).json({
                status: 'failed',
                message: 'Files missing. Kindly select files for upload!'
            });
        }
        const urls = await UploadService.multipleMessages(files);
        res.status(200).json({
            status: 'success',
            message: "Image uploaded successfully",
            data: urls
        });
    }
}

export default UploadController;