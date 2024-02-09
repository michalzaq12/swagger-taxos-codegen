"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDefinitionsFromSwaggerDefinitions = void 0;
const lodash_1 = require("lodash");
const typescript_1 = require("../typescript");
function makeDefinitionsFromSwaggerDefinitions(swaggerDefinitions, swagger) {
    return (0, lodash_1.map)((0, lodash_1.entries)(swaggerDefinitions), ([name, swaggerDefinition]) => ({
        name,
        description: swaggerDefinition.description,
        tsType: (0, typescript_1.convertType)(swaggerDefinition, swagger)
    }));
}
exports.makeDefinitionsFromSwaggerDefinitions = makeDefinitionsFromSwaggerDefinitions;
