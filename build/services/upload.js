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
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = require("./firebase");
class UploadService {
    singleImage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const upload = yield (0, firebase_1.uploadDocument)(file, 'xyx', PathEnum.IMAGES);
            console.log("upload:", upload);
            return upload;
        });
    }
    multipleImages(files) {
        return __awaiter(this, void 0, void 0, function* () {
            let uploadUrls = [];
            for (let file of files) {
                const upload = yield (0, firebase_1.uploadDocument)(file, 'xyx', PathEnum.IMAGES);
                console.log(upload);
                uploadUrls.push(upload);
            }
            return uploadUrls;
        });
    }
    singleMessage(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const upload = yield (0, firebase_1.uploadDocument)(file, 'xyx', PathEnum.MESSAGES);
            return upload;
        });
    }
    multipleMessages(files) {
        return __awaiter(this, void 0, void 0, function* () {
            let uploadUrls = [];
            for (let file of files) {
                const upload = yield (0, firebase_1.uploadDocument)(file, 'xyx', PathEnum.MESSAGES);
                uploadUrls.push(upload);
            }
            return uploadUrls;
        });
    }
}
var PathEnum;
(function (PathEnum) {
    PathEnum["IMAGES"] = "gallery";
    PathEnum["MESSAGES"] = "messages";
})(PathEnum || (PathEnum = {}));
exports.default = new UploadService();
//# sourceMappingURL=upload.js.map