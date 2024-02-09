import { SwaggerType, Swagger } from "../swagger/Swagger";
import { TypeSpec } from "../typespec";
export interface Definition {
    readonly name: string;
    readonly description: string | undefined;
    readonly tsType: TypeSpec;
}
export declare function makeDefinitionsFromSwaggerDefinitions(swaggerDefinitions: {
    [index: string]: SwaggerType;
}, swagger: Swagger): Definition[];
