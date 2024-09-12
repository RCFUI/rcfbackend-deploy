import Joi from 'joi';

class MessagesValidator {

    static create() {
        return Joi.object({
            title: Joi.string().min(5).max(50).required(),
            thumbnail: Joi.string().min(5).max(100).required(),
            messageFile: Joi.string().min(5).max(100).required(),
            duration: Joi.string().min(5).max(20).required(),
            adminId: Joi.string().min(24).max(24).required(),
            date: Joi.date().required()
        });
    }

    static edit() {
        return Joi.object({
            title: Joi.string().min(5).max(50).required(),
            thumbnail: Joi.string().min(5).max(100).required(),
            messageFile: Joi.string().min(5).max(100).required(),
            duration: Joi.string().min(5).max(20).required(),
            date: Joi.date().required()
        });
    }
}

export default MessagesValidator;