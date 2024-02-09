"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getViewForSwagger2 = void 0;
const lodash_1 = require("lodash");
const method_1 = require("./view-data/method");
const definition_1 = require("./view-data/definition");
const operation_1 = require("./view-data/operation");
function getViewForSwagger2(opts) {
    const swagger = opts.swagger;
    const data = {
        isES6: opts.isES6,
        description: swagger.info.description,
        isSecure: swagger.securityDefinitions !== undefined,
        isSecureToken: false,
        isSecureApiKey: false,
        isSecureBasic: false,
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
const makeMethodsFromPaths = (data, opts, swagger) => (0, operation_1.getHttpMethodTuplesFromSwaggerPathsObject)(swagger.paths)
    .filter(method => (opts.includeDeprecated && (0, operation_1.isAuthorizedMethod)(method)) ||
    (0, operation_1.isAuthorizedAndNotDeprecated)(method))
    .map(([path, httpVerb, op, globalParams]) => {
    // TODO: Start of untested security stuff that needs fixing
    const secureTypes = [];
    if (swagger.securityDefinitions !== undefined ||
        op.security !== undefined) {
        const mergedSecurity = (0, lodash_1.merge)([], swagger.security, op.security).map(security => Object.keys(security));
        if (swagger.securityDefinitions) {
            for (const sk in swagger.securityDefinitions) {
                if (mergedSecurity.join(",").indexOf(sk) !== -1) {
                    secureTypes.push(swagger.securityDefinitions[sk].type);
                }
            }
        }
    }
    // End of untested
    const method = (0, method_1.makeMethod)(path, opts, swagger, httpVerb, op, secureTypes, globalParams);
    // TODO: It seems the if statements below are pretty weird...
    // This runs in a for loop which is run for every "method"
    // in every "api" but we modify the parameter passed in to the
    // function, therefore changing the global state by setting it to
    // the last api + method combination?
    // No test covers this scenario at the moment.
    if (method.isSecure && method.isSecureToken) {
        data.isSecureToken = method.isSecureToken;
    }
    if (method.isSecure && method.isSecureApiKey) {
        data.isSecureApiKey = method.isSecureApiKey;
    }
    if (method.isSecure && method.isSecureBasic) {
        data.isSecureBasic = method.isSecureBasic;
    }
    // End of weird statements
    return method;
});
