"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDictionary = exports.makeDictionaryTypeSpec = void 0;
const typespec_1 = require("../typespec");
const typescript_1 = require("../typescript");
function makeDictionaryTypeSpec(swaggerType, swagger) {
    const elementTypeSpec = (0, typescript_1.convertType)(swaggerType.additionalProperties, swagger);
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { elementType: elementTypeSpec, tsType: `{ [key: string]: ${elementTypeSpec.target ||
            elementTypeSpec.tsType ||
            "any"} }`, isArray: false, isAtomic: false, isDictionary: true });
}
exports.makeDictionaryTypeSpec = makeDictionaryTypeSpec;
function isDictionary(swaggerType) {
    return (swaggerType.type === "object" &&
        swaggerType.hasOwnProperty("additionalProperties") &&
        swaggerType.additionalProperties !== false);
}
exports.isDictionary = isDictionary;
