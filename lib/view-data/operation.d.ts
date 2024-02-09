import { PathAndMethodTupleWithPathParams, PathsObject } from "../swagger/Swagger";
export declare const isAuthorizedMethod: ([_path, httpVerb]: PathAndMethodTupleWithPathParams) => boolean;
export declare const isAuthorizedAndNotDeprecated: (httpOperationEntryWithPathParamsAndPath: PathAndMethodTupleWithPathParams) => boolean;
export declare const getHttpMethodTuplesFromSwaggerPathsObject: (paths: PathsObject) => PathAndMethodTupleWithPathParams[];
