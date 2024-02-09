"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEmptyTypeSpec = exports.makeSwaggerType = exports.makeFakeSwagger = void 0;
const lodash_1 = require("lodash");
function makeFakeSwagger() {
    return {};
}
exports.makeFakeSwagger = makeFakeSwagger;
function makeSwaggerType(overrides) {
    return (0, lodash_1.merge)({
        description: undefined,
        $ref: undefined,
        required: [],
        type: overrides.type,
        properties: {},
        allOf: undefined,
        minItems: 0
    }, overrides);
}
exports.makeSwaggerType = makeSwaggerType;
function makeEmptyTypeSpec() {
    return {
        name: undefined,
        description: undefined,
        isEnum: false,
        isArray: false,
        isDictionary: false,
        isObject: false,
        isRef: false,
        isNullable: false,
        isRequired: true,
        tsType: undefined,
        isAtomic: false,
        target: undefined,
        properties: undefined
    };
}
exports.makeEmptyTypeSpec = makeEmptyTypeSpec;
