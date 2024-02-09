"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enhanceCode = void 0;
const beautify_1 = require("./beautify");
function enhanceCode(source, opts) {
    return (0, beautify_1.beautifyCode)(opts.formatCode, source, opts.prettierOptions);
}
exports.enhanceCode = enhanceCode;
