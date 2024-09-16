"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RequestBodyMiddleware {
    static validate(schema) {
        return (req, res, next) => {
            const { error } = schema.validate(req.body, { abortEarly: false });
            if (error === undefined) {
                return next();
            }
            const errResponse = this.formatError(error === null || error === void 0 ? void 0 : error.details);
            return res.status(400).send({ message: errResponse, data: null });
        };
    }
    static formatError(arr) {
        return arr.map((err) => err.message);
    }
}
exports.default = RequestBodyMiddleware;
//# sourceMappingURL=request-body.js.map