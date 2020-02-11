import {
  OpenApi,
  PathItemObject as OpenApiPathItemObject,
  HttpOperation as OpenApiHttpOperation,
  HttpMethod
} from "../swagger/Openapi";
import {
  Swagger,
  PathItemObject,
  HttpOperation,
  SwaggerType
} from "../swagger/Swagger";
import { URL } from "url";

function getFirstKey(o: object): string {
  return Object.keys(o)[0];
}

function transformPath(path: OpenApiPathItemObject): PathItemObject {
  return Object.keys(path)
    .map(
      (key): { [key: string]: HttpOperation } => {
        const method = path[key as HttpMethod] as OpenApiHttpOperation;
        const content = method.responses[200].content;
        const responses =
          Object.keys(content).length === 0
            ? ({} as { [key: string]: SwaggerType })
            : ({
                [200]: content[getFirstKey(content)].schema
              } as { [key: string]: SwaggerType });
        return { [key]: { ...method, responses } };
      }
    )
    .reduce((prev, curr) => ({ ...prev, ...curr }), {});
}

export function convertOpenApiToSwagger(openApi: OpenApi): Swagger {
  const url = new URL(
    openApi.servers && openApi.servers.length > 0 ? openApi.servers[0].url : ""
  );
  return {
    swagger: "2.0",
    security: [],
    securityDefinitions: {},
    host: url.host,
    basePath: url.pathname,
    paths: Object.keys(openApi.paths)
      .map(key => ({ [key]: transformPath(openApi.paths[key]) }))
      .reduce((p, r) => ({ ...p, ...r }), {}),
    schemes: [url.protocol],
    info: {
      description: openApi.info.description ? openApi.info.description : ""
    },
    parameters: openApi.parameters,
    produces: [],
    consumes: [],
    definitions: Object.keys(openApi.components.schemas)
      .map(key => ({ [key]: openApi.components.schemas[key] }))
      .reduce((p, r) => ({ ...p, ...r }))
  };
}
