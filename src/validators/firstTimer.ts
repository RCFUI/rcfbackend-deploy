import Joi from 'joi';


class FirstTimerValidator {

    static create(){
        return Joi.object({
            fullName: Joi.string().min(5).required(),
            phoneNumber: Joi.string().min(11).max(11).required(),
            email: Joi.string().email().required(),
            invitedBy: Joi.string().required(),
            sex: Joi.string().valid('M', 'F').required(),
            faculty: Joi.string().required(),
            department: Joi.string().required(),
            level: Joi.string().valid('100', '200', '300', '400', '500', '600').required(),
            hallOfResidence: Joi.string().required(),
            roomNumber: Joi.string().alphanum().required(),
            availableForCounselling: Joi.string(),
            prayerRequest: Joi.string().min(5),
            counsellingRequest: Joi.string().min(5),
        })
    }

    static edit(){
        return Joi.object({
            fullName: Joi.string().min(5).required(),
            email: Joi.string().email().required(),
            phoneNumber: Joi.string().min(11).max(11).required(),
            invitedBy: Joi.string().required(),
            sex: Joi.string().valid('M', 'F').required(),
            faculty: Joi.string().required(),
            department: Joi.string().required(),
            level: Joi.string().valid('100', '200', '300', '400', '500', '600').required(),
            hallOfResidence: Joi.string().required(),
            roomNumber: Joi.string().alphanum().required(),
            availableForCounselling: Joi.string(),
            prayerRequest: Joi.string().min(5),
            counsellingRequest: Joi.string().min(5),
        })
    }
}

export default FirstTimerValidator;