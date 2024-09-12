import Joi from 'joi';

class EnquiryValidator {

    static create(){
        return Joi.object({
            name: Joi.string().min(2).required(),
            phoneNumber: Joi.string().min(11).max(11).required(),
            email: Joi.string().email().required(),
            info: Joi.string().min(5).required()
        })
    }
}

export default EnquiryValidator;