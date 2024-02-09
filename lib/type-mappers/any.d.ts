import { TypeSpec } from "../typespec";
import { SwaggerType } from "../swagger/Swagger";
export interface AnyTypeSpec extends TypeSpec {
    readonly tsType: "any";
    readonly isAtomic: true;
}
export declare function makeAnyTypeSpec(swaggerType: SwaggerType): AnyTypeSpec;
