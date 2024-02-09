"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSchema = void 0;
function isSchema(swaggerType) {
    return swaggerType.hasOwnProperty("schema");
}
exports.isSchema = isSchema;
