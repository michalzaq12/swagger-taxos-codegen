import { TypeSpec } from "../typespec";
import { Swagger, Parameter } from "../swagger/Swagger";
export interface TypeSpecParameter extends Parameter {
    readonly isBodyParameter: boolean;
    readonly isPathParameter: boolean;
    readonly isQueryParameter: boolean;
    readonly isHeaderParameter: boolean;
    readonly isFormParameter: boolean;
    readonly tsType: TypeSpec;
    readonly cardinality: "" | "?";
}
export declare const getParametersForMethod: (globalParams: ReadonlyArray<Parameter>, params: readonly Parameter[] | undefined, swagger: Swagger) => TypeSpecParameter[];
