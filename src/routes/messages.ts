import express from 'express';
import MessagesController from '../controller/messages';
import RequestBodyMiddleware from '../middleware/request-body';
import MessagesValidator from '../validators/messages';

const router = express.Router();
const messagesController = new MessagesController();

router.post('/', [RequestBodyMiddleware.validate(MessagesValidator.create()), messagesController.createMessage]);

router.post('/edit/:id', [RequestBodyMiddleware.validate(MessagesValidator.edit()), messagesController.editMessage]);

router.get('/', [messagesController.getMessages]);

router.get('/:id', [messagesController.getOneMessage]);

router.patch('/delete/:id', [messagesController.deleteMessage]);

export default router;