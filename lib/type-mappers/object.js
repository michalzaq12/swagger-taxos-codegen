"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeObjectTypeSpec = void 0;
const typespec_1 = require("../typespec");
const lodash_1 = require("lodash");
const typescript_1 = require("../typescript");
function makeObjectTypeSpec(swaggerType, swagger) {
    // TODO: We threat everything that reaches this point as an object but not the required properties? (Removing the check for object makes the tests fail)
    const requiredPropertyNames = swaggerType.type === "object" && (0, lodash_1.isArray)(swaggerType.required)
        ? swaggerType.required
        : [];
    // Some special handling is needed to support overlapping properties. The list of properties must be reversed to get the
    // overriding properties first. Only then can we filter out any duplicates. To get the original order back, the array
    // is reversed once more
    const allProperties = (0, lodash_1.concat)(getAllOfProperties(swaggerType, swagger), getObjectProperties(swaggerType, swagger, requiredPropertyNames));
    const uniqueProperties = (0, lodash_1.uniqBy)((0, lodash_1.reverse)(allProperties), "name");
    const properties = (0, lodash_1.reverse)(uniqueProperties);
    return Object.assign(Object.assign({}, (0, typespec_1.makeTypeSpecFromSwaggerType)(swaggerType)), { tsType: "object", isObject: true, isAtomic: false, properties,
        requiredPropertyNames });
}
exports.makeObjectTypeSpec = makeObjectTypeSpec;
function getObjectProperties(swaggerType, swagger, requiredPropertyNames) {
    return (0, lodash_1.map)(swaggerType.properties, (propertyType, propertyName) => (Object.assign(Object.assign({}, (0, typescript_1.convertType)(propertyType, swagger)), { name: propertyName, isRequired: (0, lodash_1.includes)(requiredPropertyNames, propertyName) })));
}
function getAllOfProperties(swaggerType, swagger) {
    if (!swaggerType.allOf) {
        return [];
    }
    return (0, lodash_1.flatten)((0, lodash_1.map)(swaggerType.allOf, ref => {
        if (!ref.$ref) {
            const property = (0, typescript_1.convertType)(ref, swagger);
            return (0, lodash_1.filter)(property.properties);
        }
        const refSegments = ref.$ref.split("/");
        const name = refSegments[refSegments.length - 1];
        return (0, lodash_1.flatten)((0, lodash_1.filter)((0, lodash_1.map)((0, lodash_1.filter)(swagger.definitions, (__, definitionName) => definitionName === name), definition => {
            const property = (0, typescript_1.convertType)(definition, swagger);
            return property.properties;
        }), lodash_1.isArray));
    }));
}
