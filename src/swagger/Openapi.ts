import { SwaggerSchema, Parameter, SwaggerType } from "./Swagger";

export interface InfoObject {
  readonly description?: string;
  readonly title: string;
  readonly version: string;
}

export interface ServerObject {
  readonly url: string;
  readonly description?: string;
}

export interface OpenApiType {
  readonly description: string;
  readonly content: {
    [type: string]: MediaTypeObject;
  };
}

export interface MediaTypeObject {
  schema: SwaggerSchema;
}

export type HttpMethod =
  | "get"
  | "put"
  | "post"
  | "delete"
  | "options"
  | "head"
  | "patch";

export const schemaAllowedHttpMethods: HttpMethod[] = [
  "get",
  "put",
  "post",
  "delete",
  "options",
  "head",
  "patch"
];

// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#pathItemObject
export type PathItemObject = { readonly [op in HttpMethod]?: HttpOperation } & {
  readonly parameters?: ReadonlyArray<Parameter>;
};

// https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#paths-object
export type PathsObject = {
  readonly [index: string]: PathItemObject;
};

export interface HttpOperation {
  readonly deprecated: boolean;
  readonly security: boolean;
  readonly responses: {
    readonly [index: string]: OpenApiType;
  };
  readonly operationId: string;
  readonly tags: ReadonlyArray<string>;
  readonly description: string;
  readonly summary: string;
  readonly externalDocs: string;
  readonly produces: ReadonlyArray<string>;
  readonly consumes: ReadonlyArray<string>;
  readonly parameters: ReadonlyArray<Parameter>;
}

export interface ComponentsObject {}

export interface OpenApi {
  readonly swagger?: false;
  readonly openapi: string;
  readonly info: InfoObject;
  readonly servers: ServerObject[];
  readonly paths: PathsObject;
  readonly components: {
    readonly schemas: {
      readonly [index: string]: SwaggerType;
    };
  };
  readonly parameters: {
    readonly [index: string]: Parameter;
  };
}
