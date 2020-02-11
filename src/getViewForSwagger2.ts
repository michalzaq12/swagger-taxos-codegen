import { merge } from "lodash";
import { CodeGenOptions } from "./options/options";
import { Swagger } from "./swagger/Swagger";
import {
  makeMethod,
  Method,
  getLatestVersionOfMethods
} from "./view-data/method";
import {
  Definition,
  makeDefinitionsFromSwaggerDefinitions
} from "./view-data/definition";
import {
  getHttpMethodTuplesFromSwaggerPathsObject,
  isAuthorizedAndNotDeprecated,
  isAuthorizedMethod
} from "./view-data/operation";
import { convertOpenApiToSwagger } from "./transform/convertOpenApiToSwaggeri";
import { OpenApi } from "./swagger/Openapi";

export type GenerationTargetType = "typescript" | "custom";

export interface ViewData {
  isES6: boolean;
  description: string;
  isSecure: boolean;
  imports: ReadonlyArray<string>;
  domain: string;
  isSecureToken: boolean;
  isSecureApiKey: boolean;
  isSecureBasic: boolean;
  methods: Method[];
  methodsByTag: { [tag: string]: Method[] };
  globalMethods: Method[];
  definitions: Definition[];
}

export function getViewForSwagger2(opts: CodeGenOptions): ViewData {
  const swagger = opts.isV2
    ? (opts.swagger as Swagger)
    : convertOpenApiToSwagger(opts.swagger as OpenApi);

  const data: ViewData = {
    isES6: opts.isES6,
    description: swagger.info.description,
    isSecure: swagger.securityDefinitions !== undefined,
    isSecureToken: false,
    isSecureApiKey: false,
    isSecureBasic: false,
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
  data: ViewData,
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
      // TODO: Start of untested security stuff that needs fixing
      const secureTypes = [];

      if (
        swagger.securityDefinitions !== undefined ||
        op.security !== undefined
      ) {
        const mergedSecurity = merge([], swagger.security, op.security).map(
          security => Object.keys(security)
        );
        if (swagger.securityDefinitions) {
          for (const sk in swagger.securityDefinitions) {
            if (mergedSecurity.join(",").indexOf(sk) !== -1) {
              secureTypes.push(swagger.securityDefinitions[sk].type);
            }
          }
        }
      }
      // End of untested

      const method: Method = makeMethod(
        path,
        opts,
        swagger,
        httpVerb,
        op,
        secureTypes,
        globalParams
      );

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
