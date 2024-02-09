"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = exports.makeArrayTypeSpec = void 0;
const typescript_1 = require("../typescript");
const typespec_1 = require("../typespec");
function makeArrayTypeSpec(swaggerType, swagger) {
    const elementTypeSpec = (0, typescript_1.convertType)(swaggerType.items, swagger);
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { elementType: elementTypeSpec, tsType: `Array<${elementTypeSpec.target ||
            elementTypeSpec.tsType ||
            "any"}>`, isArray: true, isAtomic: false });
}
exports.makeArrayTypeSpec = makeArrayTypeSpec;
function isArray(swaggerType) {
    return swaggerType.type === "array";
}
exports.isArray = isArray;
