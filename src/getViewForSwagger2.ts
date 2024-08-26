import {CodeGenOptions} from "./options/options";
import {Swagger} from "./swagger/Swagger";
import {getLatestVersionOfMethods, makeMethod, Method} from "./view-data/method";
import {Definition, makeDefinitionsFromSwaggerDefinitions} from "./view-data/definition";
import {
  getHttpMethodTuplesFromSwaggerPathsObject,
  isAuthorizedAndNotDeprecated,
  isAuthorizedMethod
} from "./view-data/operation";

export type GenerationTargetType = "typescript" | "custom";

export interface ViewData {
  isES6: boolean;
  description: string;
  isSecure: boolean;
  imports: ReadonlyArray<string>;
  domain: string;
  methods: Method[];
  methodsByTag: { [tag: string]: Method[] };
  globalMethods: Method[];
  definitions: Definition[];
}

export function getViewForSwagger2(opts: CodeGenOptions): ViewData {
  const swagger = opts.swagger;

  const data: ViewData = {
    isES6: opts.isES6,
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    imports: opts.imports,
    domain:
      swagger.schemes &&
      swagger.schemes.length > 0 &&
      swagger.host &&
      swagger.basePath
        ? `${swagger.schemes[0]}://${swagger.host}${swagger.basePath.replace(
            /\/+$/g,
            ""
          )}`
        : "",
    methods: [],
    methodsByTag: {},
    globalMethods: [],
    definitions: []
  };

  let methods = makeMethodsFromPaths(data, opts, swagger);

  const latestVersions = getLatestVersionOfMethods(methods);

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
      } else {
        data.methodsByTag[tag].push(method);
      }
    }
  }

  const definitions = makeDefinitionsFromSwaggerDefinitions(
    swagger.definitions,
    swagger
  );

  // Removing all repeated generic interface
  const definitionsMap = new Map();

  for (let def of definitions) {
    const name = def.name.replace(/<.*>/, "");
    if (!definitionsMap.has(name)) definitionsMap.set(name, def);
  }

  data.definitions = Array.from(definitionsMap.values());

  return {
    ...data
  };
}

function setIsLatestVersion(
  latestVersions: Method[]
): (method: Method) => Method {
  return method =>
    latestVersions.indexOf(method) > -1
      ? {
          ...method,
          isLatestVersion: true
        }
      : method;
}

const makeMethodsFromPaths = (
  _data: ViewData,
  opts: CodeGenOptions,
  swagger: Swagger
): Method[] =>
  getHttpMethodTuplesFromSwaggerPathsObject(swagger.paths)
    .filter(
      method =>
        (opts.includeDeprecated && isAuthorizedMethod(method)) ||
        isAuthorizedAndNotDeprecated(method)
    )
    .map(([path, httpVerb, op, globalParams]) => {
      return makeMethod(
          path,
          opts,
          swagger,
          httpVerb,
          op,
          globalParams
      );
    });
