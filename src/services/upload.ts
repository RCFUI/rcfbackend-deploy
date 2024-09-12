import { FileObject } from "../interfaces/messages";
import { uploadDocument } from "./firebase";


class UploadService {

    async singleImage(file:any):Promise<string> {
        const upload = await uploadDocument(file, 'xyx', PathEnum.IMAGES);
        console.log("upload:", upload)
        return upload;
    }

    async multipleImages(files:FileObject[]):Promise<string[]> {
        let uploadUrls:string[] = [];
        for(let file of files){
            const upload = await uploadDocument(file, 'xyx', PathEnum.IMAGES); 
            console.log(upload) 
            uploadUrls.push(upload);
        } 
        return uploadUrls;
    }

    async singleMessage(file:any):Promise<string> {
        const upload = await uploadDocument(file, 'xyx', PathEnum.MESSAGES);
        return upload;
    }

    async multipleMessages(files:FileObject[]):Promise<string[]> {
        let uploadUrls:string[] = [];
        for(let file of files){
            const upload = await uploadDocument(file, 'xyx', PathEnum.MESSAGES);  
            uploadUrls.push(upload);
        } 
        return uploadUrls;
    }
}

enum PathEnum {
    IMAGES = 'gallery',
    MESSAGES = 'messages'
}

export default new UploadService();