"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSuccessfulResponseType = void 0;
const typescript_1 = require("../typescript");
const defaultSuccessfulResponseType = "void";
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success
const successfulCodes = [
    "200", // OK
    "201", // Created
    "202", // Accepted
    "203", // Non-Authoritative Information
    "204", // No Content
    "205", // Reset Content
    "206", // Partial Content
    "207", // Multi-Status
    "208", // Already Reported
    "226" // IM Used
];
function onlySuccessful(statusCode) {
    return successfulCodes.includes(statusCode);
}
function getSuccessfulResponse(op) {
    const definedSuccessCodes = Object.keys(op.responses).filter(onlySuccessful);
    if (definedSuccessCodes.length === 0) {
        throw new Error("No success responses defined");
    }
    return op.responses[definedSuccessCodes[0]];
}
function getSuccessfulResponseType(op, swagger) {
    let successfulResponseTypeIsRef = false;
    let successfulResponseType;
    try {
        const successfulResponse = getSuccessfulResponse(op);
        const convertedType = (0, typescript_1.convertType)(successfulResponse, swagger);
        if (convertedType.target) {
            successfulResponseTypeIsRef = true;
        }
        successfulResponseType =
            convertedType.target ||
                convertedType.tsType ||
                defaultSuccessfulResponseType;
    }
    catch (error) {
        successfulResponseType = defaultSuccessfulResponseType;
    }
    return [successfulResponseType, successfulResponseTypeIsRef];
}
exports.getSuccessfulResponseType = getSuccessfulResponseType;
