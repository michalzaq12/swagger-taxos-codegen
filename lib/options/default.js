"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PREDEFINED_TEMPLATES = exports.DEFAULT_OPTIONS = void 0;
const path_1 = require("path");
const method_1 = require("../view-data/method");
const DEFAULT_TEMPLATE_PATH = (0, path_1.join)(__dirname, "..", "..", "templates");
exports.DEFAULT_OPTIONS = {
    isES6: false,
    imports: [],
    includeDeprecated: false,
    template: {
        main: (0, path_1.join)(DEFAULT_TEMPLATE_PATH, "main.hbs"),
        method: (0, path_1.join)(DEFAULT_TEMPLATE_PATH, "method.hbs"),
        methodSignature: (0, path_1.join)(DEFAULT_TEMPLATE_PATH, "methodSignature.hbs"),
        type: (0, path_1.join)(DEFAULT_TEMPLATE_PATH, "type.hbs"),
        interface: (0, path_1.join)(DEFAULT_TEMPLATE_PATH, "interface.hbs"),
        parameter: (0, path_1.join)(DEFAULT_TEMPLATE_PATH, "parameter.hbs")
    },
    formatCode: true,
    hbsContext: {},
    prettierOptions: {},
    getNamespace(tag) {
        return (0, method_1.getNamespace)(tag);
    },
    getMethodName(op, httpVerb, path) {
        return op.operationId
            ? (0, method_1.normalizeName)(op.operationId)
            : (0, method_1.getPathToMethodName)(httpVerb, path);
    }
};
exports.PREDEFINED_TEMPLATES = Object.keys(exports.DEFAULT_OPTIONS.template);
