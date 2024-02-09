import { HttpOperation, Swagger } from "../swagger/Swagger";
import * as prettier from "prettier";
export interface TemplateLocationsOptional extends Partial<TemplateLocations> {
}
export interface TemplateLocations {
    readonly main: string;
    readonly method: string;
    readonly methodSignature: string;
    readonly type: string;
    readonly interface: string;
    readonly parameter: string;
    readonly [key: string]: string;
}
export interface Options {
    readonly isES6: boolean;
    readonly includeDeprecated: boolean;
    readonly imports: ReadonlyArray<string>;
    readonly template: TemplateLocationsOptional;
    readonly hbsContext: any;
    readonly formatCode: boolean;
    readonly prettierOptions: prettier.Options;
    getNamespace(tag: string): string;
    getMethodName(op: HttpOperation, httpVerb: string, path: string): string;
}
interface SwaggerOption {
    readonly swagger: Swagger;
}
export interface CodeGenOptions extends Options, SwaggerOption {
    readonly template: TemplateLocations;
}
export interface ProvidedCodeGenOptions extends Partial<Options>, SwaggerOption {
}
export declare function makeOptions(options: ProvidedCodeGenOptions): CodeGenOptions;
export {};
