"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnum = exports.makeEnumTypeSpec = void 0;
const typespec_1 = require("../typespec");
function makeEnumTypeSpec(swaggerType) {
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { tsType: swaggerType.enum.map(str => JSON.stringify(str)).join(" | "), enum: swaggerType.enum, isEnum: true, isAtomic: true });
}
exports.makeEnumTypeSpec = makeEnumTypeSpec;
function isEnum(swaggerType) {
    return Boolean(swaggerType.hasOwnProperty("enum") && swaggerType.enum);
}
exports.isEnum = isEnum;
