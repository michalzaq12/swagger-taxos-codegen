import { TypeSpec } from "../typespec";
import { SwaggerNumber, SwaggerType } from "../swagger/Swagger";
export interface NumberTypeSpec extends TypeSpec {
    readonly tsType: "number";
    readonly isAtomic: true;
}
export declare function makeNumberTypeSpec(swaggerType: SwaggerNumber): NumberTypeSpec;
export declare function isNumber(swaggerType: SwaggerType): swaggerType is SwaggerNumber;
