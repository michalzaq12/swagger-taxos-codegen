"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertType = void 0;
const object_1 = require("./type-mappers/object");
const reference_1 = require("./type-mappers/reference");
const enum_1 = require("./type-mappers/enum");
const string_1 = require("./type-mappers/string");
const number_1 = require("./type-mappers/number");
const boolean_1 = require("./type-mappers/boolean");
const array_1 = require("./type-mappers/array");
const dictionary_1 = require("./type-mappers/dictionary");
const any_1 = require("./type-mappers/any");
const schema_1 = require("./type-mappers/schema");
/**
 * Recursively converts a swagger type description into a typescript type, i.e., a model for our mustache
 * template.
 *
 * Not all type are currently supported, but they should be straightforward to add.
 *
 * @param swaggerType a swagger type definition, i.e., the right hand side of a swagger type definition.
 * @param swagger the full swagger spec object
 * @returns a recursive structure representing the type, which can be used as a template model.
 */
function convertType(swaggerType, swagger) {
    if ((0, schema_1.isSchema)(swaggerType)) {
        return convertType(swaggerType.schema, swagger);
    }
    else if ((0, reference_1.isReference)(swaggerType)) {
        return (0, reference_1.makeReferenceTypeSpec)(swaggerType);
    }
    else if ((0, enum_1.isEnum)(swaggerType)) {
        return (0, enum_1.makeEnumTypeSpec)(swaggerType);
    }
    else if ((0, string_1.isString)(swaggerType)) {
        return (0, string_1.makeStringTypeSpec)(swaggerType);
    }
    else if ((0, number_1.isNumber)(swaggerType)) {
        return (0, number_1.makeNumberTypeSpec)(swaggerType);
    }
    else if ((0, boolean_1.isBoolean)(swaggerType)) {
        return (0, boolean_1.makeBooleanTypeSpec)(swaggerType);
    }
    else if ((0, array_1.isArray)(swaggerType)) {
        return (0, array_1.makeArrayTypeSpec)(swaggerType, swagger);
    }
    else if ((0, dictionary_1.isDictionary)(swaggerType)) {
        // case where a it's a Dictionary<string, someType>
        return (0, dictionary_1.makeDictionaryTypeSpec)(swaggerType, swagger);
    }
    else if (swaggerType.minItems >= 0 &&
        swaggerType.hasOwnProperty("title") &&
        !swaggerType.$ref) {
        return (0, any_1.makeAnyTypeSpec)(swaggerType);
    }
    // Remaining types are created as objects
    return (0, object_1.makeObjectTypeSpec)(swaggerType, swagger);
}
exports.convertType = convertType;
