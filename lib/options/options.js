"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeOptions = void 0;
const default_1 = require("./default");
function makeOptions(options) {
    return Object.assign(Object.assign(Object.assign({}, default_1.DEFAULT_OPTIONS), options), { 
        // @ts-ignore
        template: Object.assign(Object.assign({}, default_1.DEFAULT_OPTIONS.template), options.template) });
}
exports.makeOptions = makeOptions;
