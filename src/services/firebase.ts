import { getDownloadURL, uploadBytes, ref as storageRef, getStorage } from "firebase/storage";
import firebase_app from "../config/firebase";
import { FileObject } from "../interfaces/messages";

export const uploadDocument = async (file: FileObject, userId: string, path: string): Promise<string> => {
    const storage = getStorage(firebase_app);
    const storageRefs = storageRef(storage, `${path}/${userId}${file.originalname}`);
    console.log("multerFile:", file)
    await uploadBytes(storageRefs, file.buffer);
    const downloadURL = await getDownloadURL(storageRefs);
    return downloadURL;

}