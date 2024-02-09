import { Swagger } from "../swagger/Swagger";
import { SwaggerType, SwaggerEnum, SwaggerArray, SwaggerDictionary } from "../swagger/Swagger";
import { TypeSpec } from "../typespec";
export declare function makeFakeSwagger(): Swagger;
export declare function makeSwaggerType(overrides: Partial<SwaggerEnum | SwaggerType | SwaggerArray | SwaggerDictionary> & {
    type: SwaggerType["type"];
}): SwaggerType;
export declare function makeEmptyTypeSpec(): TypeSpec;
