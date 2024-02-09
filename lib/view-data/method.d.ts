import { CodeGenOptions } from "../options/options";
import { Swagger, HttpOperation, Parameter } from "../swagger/Swagger";
import { TypeSpecParameter } from "./parameter";
import { Header } from "./headers";
export interface Method {
    readonly methodName: string;
    readonly isDeprecated: boolean;
    readonly intVersion: number;
    readonly isLatestVersion: boolean;
    readonly isSecure: boolean;
    readonly isSecureToken: boolean;
    readonly isSecureApiKey: boolean;
    readonly isSecureBasic: boolean;
    readonly path: string;
    readonly pathTemplateForParameters: string;
    readonly pathTemplate: string;
    readonly version: string;
    readonly method: string;
    readonly isGET: boolean;
    readonly isPOST: boolean;
    readonly tags: ReadonlyArray<string>;
    readonly summary: string;
    readonly externalDocs: string;
    readonly parameters: TypeSpecParameter[];
    readonly hasAllOptionalParameters: boolean;
    readonly hasMultipleBodyParameters: boolean;
    readonly headers: Header[];
    readonly successfulResponseType: string;
    readonly successfulResponseTypeIsRef: boolean;
}
export declare function makeMethod(path: string, opts: CodeGenOptions, swagger: Swagger, httpVerb: string, op: HttpOperation, secureTypes: string[], globalParams: ReadonlyArray<Parameter>): Method;
export declare function normalizeName(id: string): string;
export declare function getPathToMethodName(httpVerb: string, path: string): string;
export declare function getNamespace(tag: string): string;
export declare const getLatestVersionOfMethods: (methods: Method[]) => Method[];
