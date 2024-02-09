"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntVersion = exports.getVersion = void 0;
const versionRegEx = /\/api\/(v\d+)\//;
function getVersion(path) {
    const version = versionRegEx.exec(path);
    // TODO: This only supports versions until v9, v10 will return 1?
    return (version && version[1]) || "v0";
}
exports.getVersion = getVersion;
function getIntVersion(path) {
    return parseInt(getVersion(path).substr(1));
}
exports.getIntVersion = getIntVersion;
