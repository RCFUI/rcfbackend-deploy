import express from 'express';
import RequestBodyMiddleware from "../middleware/request-body";
import FirstTimerValidator from "../validators/firstTimer";
import FirstTimerController from "../controller/firstTimer";

const router = express.Router();
const firstTimerController = new FirstTimerController();

router.post('/', [RequestBodyMiddleware.validate(FirstTimerValidator.create()), firstTimerController.createFirstTimer])

router.post('/second-timer', [RequestBodyMiddleware.validate(FirstTimerValidator.edit()), firstTimerController.createSecondTimer])

router.get('/', firstTimerController.getAllFirstTimers)

router.get('/:id', firstTimerController.getOneFirstTimer)

export default router;