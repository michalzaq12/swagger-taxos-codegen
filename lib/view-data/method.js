"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLatestVersionOfMethods = exports.getNamespace = exports.getPathToMethodName = exports.normalizeName = exports.makeMethod = void 0;
const responseType_1 = require("./responseType");
const version_1 = require("./version");
const parameter_1 = require("./parameter");
const headers_1 = require("./headers");
const lodash_1 = require("lodash");
const fp_1 = require("lodash/fp");
const fp_2 = require("lodash/fp");
function makeMethod(path, opts, swagger, httpVerb, op, secureTypes, globalParams) {
    const methodName = opts.getMethodName(op, httpVerb, path);
    const [successfulResponseType, successfulResponseTypeIsRef] = (0, responseType_1.getSuccessfulResponseType)(op, swagger);
    return {
        path,
        pathTemplateForParameters: path.replace(/{/g, "${parameters."),
        pathTemplate: path.replace(/{/g, "${"),
        methodName,
        isDeprecated: op.deprecated,
        version: (0, version_1.getVersion)(path),
        intVersion: (0, version_1.getIntVersion)(path),
        method: httpVerb.toUpperCase(),
        isGET: httpVerb.toUpperCase() === "GET",
        isPOST: httpVerb.toUpperCase() === "POST",
        tags: op.tags || [],
        summary: op.description || op.summary,
        externalDocs: op.externalDocs,
        isSecure: swagger.security !== undefined || op.security !== undefined,
        isSecureToken: secureTypes.indexOf("oauth2") !== -1,
        isSecureApiKey: secureTypes.indexOf("apiKey") !== -1,
        isSecureBasic: secureTypes.indexOf("basic") !== -1,
        parameters: (0, parameter_1.getParametersForMethod)(globalParams, op.parameters, swagger),
        hasAllOptionalParameters: checkIfMethodHasAllOptionalParameters(op.parameters),
        hasMultipleBodyParameters: checkIfMethodHasMupltipleBodyParameters(op.parameters),
        headers: (0, headers_1.getHeadersForMethod)(op, swagger),
        successfulResponseType,
        successfulResponseTypeIsRef,
        isLatestVersion: false
    };
}
exports.makeMethod = makeMethod;
const charactersToBeReplacedWithUnderscore = /\.|\-|\{|\}/g;
function normalizeName(id) {
    return id.replace(charactersToBeReplacedWithUnderscore, "_");
}
exports.normalizeName = normalizeName;
function getPathToMethodName(httpVerb, path) {
    // clean url path for requests ending with '/'
    const cleanPath = path.replace(/\/$/, "");
    let segments = cleanPath.split("/").slice(1);
    segments = (0, lodash_1.transform)(segments, (result, segment) => {
        if (segment[0] === "{" && segment[segment.length - 1] === "}") {
            segment = `by${segment[1].toUpperCase()}${segment.substring(2, segment.length - 1)}`;
        }
        result.push(segment);
    });
    const result = (0, lodash_1.camelCase)(segments.join("-"));
    return `${httpVerb.toLowerCase()}${result[0].toUpperCase()}${result.substring(1)}`;
}
exports.getPathToMethodName = getPathToMethodName;
function getNamespace(tag) {
    return (0, lodash_1.camelCase)(tag);
}
exports.getNamespace = getNamespace;
function checkIfMethodHasMupltipleBodyParameters(parameters) {
    if (parameters === undefined)
        return false;
    return parameters.filter(param => param.in === "body").length > 1;
}
function checkIfMethodHasAllOptionalParameters(parameters) {
    if (parameters === undefined)
        return true;
    return parameters.filter(param => param.required).length === 0;
}
const groupMethodsByMethodName = (methods) => (0, fp_1.values)((0, fp_1.groupBy)("methodName", methods));
const sortByVersion = (methods) => (0, fp_1.sortBy)("intVersion", methods);
const pickLast = (methods) => methods[methods.length - 1];
const isNotUndefined = (method) => !(0, fp_1.isUndefined)(method);
const getLatestVersionOfMethod = (0, fp_1.map)((0, fp_2.compose)(pickLast, sortByVersion));
exports.getLatestVersionOfMethods = (0, fp_2.compose)((0, fp_1.filter)(isNotUndefined), getLatestVersionOfMethod, groupMethodsByMethodName);
