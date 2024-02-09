"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.makeBooleanTypeSpec = void 0;
const typespec_1 = require("../typespec");
function makeBooleanTypeSpec(swaggerType) {
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { tsType: "boolean", isAtomic: true });
}
exports.makeBooleanTypeSpec = makeBooleanTypeSpec;
function isBoolean(swaggerType) {
    return swaggerType.type === "boolean";
}
exports.isBoolean = isBoolean;
