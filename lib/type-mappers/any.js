"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAnyTypeSpec = void 0;
const typespec_1 = require("../typespec");
function makeAnyTypeSpec(swaggerType) {
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { tsType: "any", isAtomic: true });
}
exports.makeAnyTypeSpec = makeAnyTypeSpec;
