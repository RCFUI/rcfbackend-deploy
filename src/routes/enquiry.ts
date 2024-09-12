import express from 'express';
import RequestBodyMiddleware from "../middleware/request-body";
import EnquiryValidator from "../validators/enquiry";
import EnquiryController from "../controller/enquiry";

const router = express.Router();
const enquiryController = new EnquiryController()

router.post('/', [RequestBodyMiddleware.validate(EnquiryValidator.create()), enquiryController.createEnquiry])

export default router;