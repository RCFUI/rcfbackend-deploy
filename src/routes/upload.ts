// const multer = require("multer");
import multer from 'multer';
import express from "express";
import UploadController from '../controller/upload';

const router = express.Router();
const upload = multer();
const uploadController = new UploadController();

router.post("/single-image", upload.single("document"), [uploadController.singleImage]);

router.post("/multiple-images", upload.array("documents", 20), [uploadController.multipleImages]);

router.post("/single-message", upload.single("document"), [uploadController.singleMessage]);

router.post("/multiple-messages", upload.array("documents", 5), [uploadController.multipleMessages]);

export default router;
