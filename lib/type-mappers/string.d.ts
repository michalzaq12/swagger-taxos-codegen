import { TypeSpec } from "../typespec";
import { SwaggerString, SwaggerType } from "../swagger/Swagger";
export interface StringTypeSpec extends TypeSpec {
    readonly tsType: "string";
    readonly isAtomic: true;
}
export declare function makeStringTypeSpec(swaggerType: SwaggerString): StringTypeSpec;
export declare function isString(swaggerType: SwaggerType): swaggerType is SwaggerString;
