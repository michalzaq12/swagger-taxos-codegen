"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.makeNumberTypeSpec = void 0;
const typespec_1 = require("../typespec");
function makeNumberTypeSpec(swaggerType) {
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { tsType: "number", isAtomic: true });
}
exports.makeNumberTypeSpec = makeNumberTypeSpec;
function isNumber(swaggerType) {
    return swaggerType.type === "number" || swaggerType.type === "integer";
}
exports.isNumber = isNumber;
