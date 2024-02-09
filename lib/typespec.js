"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTypeSpecFromSwaggerType = void 0;
function makeTypeSpecFromSwaggerType(swaggerType) {
    return {
        name: undefined,
        description: swaggerType.description,
        isEnum: false,
        isArray: false,
        isDictionary: false,
        isObject: false,
        isRef: false,
        isNullable: !swaggerType.required,
        isRequired: Boolean(swaggerType.required),
        tsType: undefined,
        isAtomic: false,
        target: undefined,
        properties: undefined
    };
}
exports.makeTypeSpecFromSwaggerType = makeTypeSpecFromSwaggerType;
