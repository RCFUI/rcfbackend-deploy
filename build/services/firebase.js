"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadDocument = void 0;
const storage_1 = require("firebase/storage");
const firebase_1 = __importDefault(require("../config/firebase"));
const uploadDocument = (file, userId, path) => __awaiter(void 0, void 0, void 0, function* () {
    const storage = (0, storage_1.getStorage)(firebase_1.default);
    const storageRefs = (0, storage_1.ref)(storage, `${path}/${userId}${file.originalname}`);
    console.log("multerFile:", file);
    yield (0, storage_1.uploadBytes)(storageRefs, file.buffer);
    const downloadURL = yield (0, storage_1.getDownloadURL)(storageRefs);
    return downloadURL;
});
exports.uploadDocument = uploadDocument;
//# sourceMappingURL=firebase.js.map