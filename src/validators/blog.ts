import Joi from "joi";


class BlogValidator{

    static create() {
        return Joi.object({
            title: Joi.string().min(3).required(),
            articleDuration: Joi.string().required(),
            body: Joi.string().min(20).required(),
            author: Joi.string().min(3).required(),
            images: Joi.array<string>(),
            isDeleted: Joi.boolean()
        });
    }
    static edit() {
        return Joi.object({
            title: Joi.string().min(3).required(),
            articleDuration: Joi.string().required(),
            body: Joi.string().min(20).required(),
            author: Joi.string().min(3).required(),
            images: Joi.array<string>(),
            isDeleted: Joi.boolean()
        });
    }
}

export default BlogValidator;