"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGen = void 0;
const options_1 = require("./options/options");
const getViewForSwagger2_1 = require("./getViewForSwagger2");
const transformToCodeWithMustache_1 = require("./transform/transformToCodeWithMustache");
const enhance_1 = require("./enhance");
function getCode(opts) {
    verifyThatWeAreGeneratingForSwagger2(opts);
    const data = (0, getViewForSwagger2_1.getViewForSwagger2)(opts);
    return (0, transformToCodeWithMustache_1.transformToCodeWithMustache)(data, opts.template, opts.hbsContext);
}
exports.CodeGen = {
    transformToViewData: getViewForSwagger2_1.getViewForSwagger2,
    transformToCodeWithMustache: transformToCodeWithMustache_1.transformToCodeWithMustache,
    generateCode: function (opts) {
        const options = (0, options_1.makeOptions)(opts);
        return (0, enhance_1.enhanceCode)(getCode(options), options);
    },
    getDataAndOptionsForGeneration: function (opts) {
        const options = (0, options_1.makeOptions)(opts);
        verifyThatWeAreGeneratingForSwagger2(options);
        const data = (0, getViewForSwagger2_1.getViewForSwagger2)(options);
        return { data, options };
    }
};
function verifyThatWeAreGeneratingForSwagger2(opts) {
    if (opts.swagger.swagger !== "2.0") {
        throw new Error("Only Swagger 2 specs are supported");
    }
}
