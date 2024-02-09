import { TypeSpec } from "../typespec";
import { SwaggerEnum, SwaggerType } from "../swagger/Swagger";
export interface EnumTypeSpec extends TypeSpec {
    readonly tsType: string;
    readonly isAtomic: true;
    readonly isEnum: true;
    readonly enum: ReadonlyArray<string>;
}
export declare function makeEnumTypeSpec(swaggerType: SwaggerEnum): EnumTypeSpec;
export declare function isEnum(swaggerType: SwaggerType): swaggerType is SwaggerEnum;
