import {
  CodeGenOptions,
  ProvidedCodeGenOptions,
  makeOptions
} from "./options/options";
import { getViewForSwagger2 } from "./getViewForSwagger2";
import { transformToCodeWithMustache } from "./transform/transformToCodeWithMustache";
import { enhanceCode } from "./enhance";

function getCode(opts: CodeGenOptions): string {
  const isV2 = verifyThatWeAreGeneratingForSwagger2(opts);

  const data = isV2
    ? getViewForSwagger2({ ...opts, isV2 })
    : getViewForSwagger2({ ...opts, isV2 });
  return transformToCodeWithMustache(data, opts.template, opts.hbsContext);
}

export const CodeGen = {
  transformToViewData: getViewForSwagger2,
  transformToCodeWithMustache,
  generateCode: function(opts: ProvidedCodeGenOptions) {
    const options = makeOptions(opts);

    return enhanceCode(getCode(options), options);
  },
  getDataAndOptionsForGeneration: function(opts: ProvidedCodeGenOptions) {
    const options = makeOptions(opts);
    verifyThatWeAreGeneratingForSwagger2(options);
    const data = getViewForSwagger2(options);
    return { data, options };
  }
};

function verifyThatWeAreGeneratingForSwagger2(opts: CodeGenOptions): boolean {
  return opts.swagger.swagger ? opts.swagger.swagger === "2.0" : false;
}
