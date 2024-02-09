import { CodeGenOptions, ProvidedCodeGenOptions } from "./options/options";
import { getViewForSwagger2 } from "./getViewForSwagger2";
import { transformToCodeWithMustache } from "./transform/transformToCodeWithMustache";
export declare const CodeGen: {
    transformToViewData: typeof getViewForSwagger2;
    transformToCodeWithMustache: typeof transformToCodeWithMustache;
    generateCode: (opts: ProvidedCodeGenOptions) => Promise<string>;
    getDataAndOptionsForGeneration: (opts: ProvidedCodeGenOptions) => {
        data: import("./getViewForSwagger2").ViewData;
        options: CodeGenOptions;
    };
};
