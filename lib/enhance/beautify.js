"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.beautifyCode = void 0;
const lodash_1 = require("lodash");
const prettier_1 = require("prettier");
const DEFAULT_PRETTIER_OPTIONS = {
    parser: "typescript",
    tabWidth: 4,
    useTabs: false,
    singleQuote: true
};
function beautifyCode(formatCode, source, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (formatCode) {
            return (0, prettier_1.format)(source, (0, lodash_1.defaults)(options, DEFAULT_PRETTIER_OPTIONS));
        }
        return source;
    });
}
exports.beautifyCode = beautifyCode;
