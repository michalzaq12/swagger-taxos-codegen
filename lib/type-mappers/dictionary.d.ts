import { TypeSpec } from "../typespec";
import { SwaggerDictionary, SwaggerType } from "../swagger/Swagger";
import { Swagger } from "../swagger/Swagger";
export interface DictionaryTypeSpec extends TypeSpec {
    readonly tsType: string;
    readonly isAtomic: false;
    readonly isDictionary: true;
    readonly isArray: false;
    readonly elementType: TypeSpec;
}
export declare function makeDictionaryTypeSpec(swaggerType: SwaggerDictionary, swagger: Swagger): DictionaryTypeSpec;
export declare function isDictionary(swaggerType: SwaggerType): swaggerType is SwaggerDictionary;
