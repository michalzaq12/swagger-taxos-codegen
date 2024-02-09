import { TypeSpec } from "../typespec";
import { SwaggerType } from "../swagger/Swagger";
import { Swagger } from "../swagger/Swagger";
export interface ObjectTypeSpec extends TypeSpec {
    readonly tsType: "object";
    readonly isAtomic: false;
    readonly isObject: true;
    readonly requiredPropertyNames: ReadonlyArray<string>;
    readonly properties: ReadonlyArray<TypeSpec>;
}
export declare function makeObjectTypeSpec(swaggerType: SwaggerType, swagger: Swagger): ObjectTypeSpec;
