import { TypeSpec } from "../typespec";
import { SwaggerBoolean, SwaggerType } from "../swagger/Swagger";
export interface BooleanTypeSpec extends TypeSpec {
    readonly tsType: "boolean";
    readonly isAtomic: true;
}
export declare function makeBooleanTypeSpec(swaggerType: SwaggerBoolean): BooleanTypeSpec;
export declare function isBoolean(swaggerType: SwaggerType): swaggerType is SwaggerBoolean;
