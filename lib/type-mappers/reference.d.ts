import { TypeSpec } from "../typespec";
import { SwaggerReference, SwaggerType } from "../swagger/Swagger";
export interface ReferenceTypeSpec extends TypeSpec {
    readonly tsType: "ref";
    readonly target: string;
    readonly isRef: true;
}
export declare function makeReferenceTypeSpec(swaggerType: SwaggerReference): ReferenceTypeSpec;
export declare function isReference(swaggerType: SwaggerType): swaggerType is SwaggerReference;
