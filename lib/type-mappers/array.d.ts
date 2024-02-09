import { TypeSpec } from "../typespec";
import { SwaggerArray, SwaggerType } from "../swagger/Swagger";
import { Swagger } from "../swagger/Swagger";
export interface ArrayTypeSpec extends TypeSpec {
    readonly tsType: string;
    readonly isAtomic: false;
    readonly isArray: true;
    readonly elementType: TypeSpec;
}
export declare function makeArrayTypeSpec(swaggerType: SwaggerArray, swagger: Swagger): ArrayTypeSpec;
export declare function isArray(swaggerType: SwaggerType): swaggerType is SwaggerArray;
