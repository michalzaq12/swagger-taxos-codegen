"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = exports.makeStringTypeSpec = void 0;
const typespec_1 = require("../typespec");
function makeStringTypeSpec(swaggerType) {
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { tsType: "string", isAtomic: true });
}
exports.makeStringTypeSpec = makeStringTypeSpec;
function isString(swaggerType) {
    return swaggerType.type === "string";
}
exports.isString = isString;
