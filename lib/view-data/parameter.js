"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParametersForMethod = void 0;
const fp_1 = require("lodash/fp");
const typescript_1 = require("../typescript");
//Ignore parameters which contain the x-exclude-from-bindings extension
const isExcludeFromBindingHeader = (parameter) => parameter["x-exclude-from-bindings"] === true;
// Ignore headers which are injected by proxies & app servers
// eg: https://cloud.google.com/appengine/docs/go/requests#Go_Request_headers
const isProxyHeader = (parameter) => parameter["x-exclude-from-bindings"] === true;
const isNotParameterToBeIgnored = (parameter) => !isExcludeFromBindingHeader(parameter) && !isProxyHeader(parameter);
const getParametersForMethod = (globalParams, params = [], swagger) => params
    .concat(globalParams)
    .filter(isNotParameterToBeIgnored)
    .map((parameter) => makeTypeSpecParameter(parameter, swagger));
exports.getParametersForMethod = getParametersForMethod;
function makeTypespecParameterFromSwaggerParameter(parameter, swagger) {
    const isSingleton = parameter.enum && parameter.enum.length === 1;
    return Object.assign(Object.assign({}, parameter), { camelCaseName: (0, fp_1.camelCase)(parameter.name), isBodyParameter: false, isPathParameter: false, isQueryParameter: false, isHeaderParameter: false, isFormParameter: false, cardinality: parameter.required ? "" : "?", tsType: (0, typescript_1.convertType)(parameter, swagger), isSingleton, singleton: isSingleton ? parameter.enum[0] : undefined });
}
function makeTypeSpecParameter(parameter, swagger) {
    if ((0, fp_1.isString)(parameter.$ref)) {
        const segments = parameter.$ref.split("/");
        parameter =
            swagger.parameters[segments.length === 1 ? segments[0] : segments[2]];
    }
    switch (parameter.in) {
        case "body":
            return makeBodyParameter(parameter, swagger);
            break;
        case "path":
            return makePathParameter(parameter, swagger);
            break;
        case "query":
            return makeQueryParameter(parameter, swagger);
            break;
        case "header":
            return makeHeaderParameter(parameter, swagger);
            break;
        case "formData":
            return makeFormParameter(parameter, swagger);
            break;
        default:
            neverGuard(parameter.in);
    }
    throw new Error("Unsupported parameter type");
}
function neverGuard(_v) { }
function makeBodyParameter(parameter, swagger) {
    return Object.assign(Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger)), { isBodyParameter: true });
}
function makePathParameter(parameter, swagger) {
    return Object.assign(Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger)), { isPathParameter: true });
}
function makeQueryParameter(parameter, swagger) {
    return Object.assign(Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger)), { isQueryParameter: true, pattern: parameter["x-name-pattern"], isPatternType: parameter["x-name-pattern"] !== undefined });
}
function makeHeaderParameter(parameter, swagger) {
    return Object.assign(Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger)), { isHeaderParameter: true });
}
function makeFormParameter(parameter, swagger) {
    return Object.assign(Object.assign({}, makeTypespecParameterFromSwaggerParameter(parameter, swagger)), { isFormParameter: true });
}
