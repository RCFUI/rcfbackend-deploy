"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = void 0;
const serverError = (err, res) => {
    const status = err.status ? err.status : 400;
    res.status(status).json({
        status: 'failed',
        message: err.message || 'Internal Server Error',
        data: null
    });
};
exports.serverError = serverError;
//# sourceMappingURL=error.js.map