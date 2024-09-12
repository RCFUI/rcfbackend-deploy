import express from 'express';
import BlogController from "../controller/blog";
import RequestBodyMiddleware from "../middleware/request-body";
import BlogValidator from "../validators/blog";


const router = express.Router();
const blogController = new BlogController();

router.post('/', [RequestBodyMiddleware.validate(BlogValidator.create()), blogController.create])
router.post('/:id', [RequestBodyMiddleware.validate(BlogValidator.create()), blogController.edit])
router.post('/delete', [blogController.delete])
router.get('/:id', [blogController.get])
router.get('/', [blogController.getAll])

export default router;