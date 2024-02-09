"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReference = exports.makeReferenceTypeSpec = void 0;
const typespec_1 = require("../typespec");
const lodash_1 = require("lodash");
function makeReferenceTypeSpec(swaggerType) {
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { target: swaggerType.$ref.substring(swaggerType.$ref.lastIndexOf("/") + 1), tsType: "ref", isRef: true });
}
exports.makeReferenceTypeSpec = makeReferenceTypeSpec;
function isReference(swaggerType) {
    return (0, lodash_1.isString)(swaggerType.$ref);
}
exports.isReference = isReference;
