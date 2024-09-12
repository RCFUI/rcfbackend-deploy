import express from 'express';
import RequestBodyMiddleware from "../middleware/request-body";
import MemberValidator from "../validators/member";
import MemberController from "../controller/member";

const router = express.Router();
const memberController = new MemberController();

router.post('/', [RequestBodyMiddleware.validate(MemberValidator.create()), memberController.createMember])

router.post('/edit', [RequestBodyMiddleware.validate(MemberValidator.edit()), memberController.edit])

router.get('/', memberController.getAllMembers)

router.get('/:id', memberController.getOneMember)

export default router;