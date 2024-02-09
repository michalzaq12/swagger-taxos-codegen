"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpMethodTuplesFromSwaggerPathsObject = exports.isAuthorizedAndNotDeprecated = exports.isAuthorizedMethod = void 0;
const Swagger_1 = require("../swagger/Swagger");
const fp_1 = require("lodash/fp");
const getPathParameters = (api) => api.parameters || [];
const onlyHttpVerbEntries = (httpVerbAndOperation) => {
    // Since we're using a type predicate here to assert if the httpVerb is a valid HttpMethod and we want to keep the original
    // schemasAllowedHttpMethods a strongly typed list of HttpMethods we'll cast it here to a list of strings to make
    // sure we can call indexOf on it.
    return (Swagger_1.schemaAllowedHttpMethods.indexOf(httpVerbAndOperation[0]) > -1);
};
const addPathAndPathParams = ([path, api]) => (0, fp_1.entries)(api)
    .filter(onlyHttpVerbEntries)
    .map(([httpVerb, httpOperationDescription]) => [
    path,
    httpVerb,
    httpOperationDescription,
    getPathParameters(api)
]);
const operationIsNotDeprecated = ([_path, _httpVerb, op]) => !op.deprecated;
// TODO: This list seems too extensive. Leaving this for now to be backwards compatible, but this check can probably be removed and we can
// leave it up to the schema. This way we are verifying if the schema is valid which seems out of scope.
// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#path-item-object
const authorizedMethods = [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH",
    "COPY",
    "HEAD",
    "OPTIONS",
    "LINK",
    "UNLINK",
    "PURGE",
    "LOCK",
    "UNLOCK",
    "PROPFIND"
];
const isAuthorizedMethod = ([_path, httpVerb]) => authorizedMethods.indexOf(httpVerb.toUpperCase()) > -1;
exports.isAuthorizedMethod = isAuthorizedMethod;
const isAuthorizedAndNotDeprecated = (httpOperationEntryWithPathParamsAndPath) => operationIsNotDeprecated(httpOperationEntryWithPathParamsAndPath) &&
    (0, exports.isAuthorizedMethod)(httpOperationEntryWithPathParamsAndPath);
exports.isAuthorizedAndNotDeprecated = isAuthorizedAndNotDeprecated;
const getHttpMethodTuplesFromSwaggerPathsObject = (paths) => (0, fp_1.flatten)((0, fp_1.entries)(paths).map(addPathAndPathParams));
exports.getHttpMethodTuplesFromSwaggerPathsObject = getHttpMethodTuplesFromSwaggerPathsObject;
