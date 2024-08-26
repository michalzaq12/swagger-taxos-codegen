"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewForSwagger2 = void 0;
const method_1 = require("./view-data/method");
const definition_1 = require("./view-data/definition");
const operation_1 = require("./view-data/operation");
function getViewForSwagger2(opts) {
    const swagger = opts.swagger;
    const data = {
        isES6: opts.isES6,
        description: swagger.info.description,
        isSecure: swagger.securityDefinitions !== undefined,
        imports: opts.imports,
        domain: swagger.schemes &&
            swagger.schemes.length > 0 &&
            swagger.host &&
            swagger.basePath
            ? `${swagger.schemes[0]}://${swagger.host}${swagger.basePath.replace(/\/+$/g, "")}`
            : "",
        methods: [],
        methodsByTag: {},
        globalMethods: [],
        definitions: []
    };
    let methods = makeMethodsFromPaths(data, opts, swagger);
    const latestVersions = (0, method_1.getLatestVersionOfMethods)(methods);
    methods = methods.map(setIsLatestVersion(latestVersions));
    data.methods = methods;
    //Sorting methods by tag
    for (const method of methods) {
        if (method.tags.length === 0) {
            data.globalMethods.push(method);
            continue;
        }
        for (let tag of method.tags) {
            tag = opts.getNamespace(tag);
            if (data.methodsByTag[tag] === undefined) {
                data.methodsByTag[tag] = [method];
            }
            else {
                data.methodsByTag[tag].push(method);
            }
        }
    }
    const definitions = (0, definition_1.makeDefinitionsFromSwaggerDefinitions)(swagger.definitions, swagger);
    // Removing all repeated generic interface
    const definitionsMap = new Map();
    for (let def of definitions) {
        const name = def.name.replace(/<.*>/, "");
        if (!definitionsMap.has(name))
            definitionsMap.set(name, def);
    }
    data.definitions = Array.from(definitionsMap.values());
    return Object.assign({}, data);
}
exports.getViewForSwagger2 = getViewForSwagger2;
function setIsLatestVersion(latestVersions) {
    return method => latestVersions.indexOf(method) > -1
        ? Object.assign(Object.assign({}, method), { isLatestVersion: true }) : method;
}
const makeMethodsFromPaths = (_data, opts, swagger) => (0, operation_1.getHttpMethodTuplesFromSwaggerPathsObject)(swagger.paths)
    .filter(method => (opts.includeDeprecated && (0, operation_1.isAuthorizedMethod)(method)) ||
    (0, operation_1.isAuthorizedAndNotDeprecated)(method))
    .map(([path, httpVerb, op, globalParams]) => {
    return (0, method_1.makeMethod)(path, opts, swagger, httpVerb, op, globalParams);
});
