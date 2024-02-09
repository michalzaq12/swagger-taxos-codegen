"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeadersForMethod = void 0;
function getHeadersForMethod(op, swagger) {
    const headers = [];
    const produces = op.produces || swagger.produces;
    if (produces) {
        headers.push({
            name: "Accept",
            value: `'${produces.join(", ")}'`
        });
    }
    const consumes = op.consumes || swagger.consumes;
    if (consumes) {
        const preferredContentType = consumes[0] || "";
        headers.push({ name: "Content-Type", value: `'${preferredContentType}'` });
    }
    return headers;
}
exports.getHeadersForMethod = getHeadersForMethod;
