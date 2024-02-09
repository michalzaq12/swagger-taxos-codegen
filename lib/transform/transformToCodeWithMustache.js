"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformToCodeWithMustache = void 0;
const fs_1 = require("fs");
const Handlebars = require("handlebars");
const lodash_1 = require("lodash");
const hbsHelper = require("handlebars-helpers");
const path_1 = require("path");
const default_1 = require("../options/default");
hbsHelper(["comparison", "collection", "array"]);
Handlebars.registerHelper("times", function (n, block) {
    let accum = "";
    for (let i = 0; i < n; ++i) {
        block.data.index = i;
        block.data.first = i === 0;
        block.data.last = i === n - 1;
        // @ts-ignore
        accum += block.fn(this);
    }
    return accum;
});
Handlebars.registerHelper("concat", (...args) => args.slice(0, -1).join(""));
function transformToCodeWithMustache(data, templates, additionalViewOptions = {}) {
    const loadedTemplates = loadTemplates(templates);
    const compiledMainTemplate = Handlebars.compile(loadedTemplates.main, {
        noEscape: true
    });
    for (const [partialName, template] of Object.entries(loadedTemplates)) {
        if (partialName === "main")
            continue;
        Handlebars.registerPartial(partialName, template);
    }
    return compiledMainTemplate((0, lodash_1.assign)(data, additionalViewOptions));
}
exports.transformToCodeWithMustache = transformToCodeWithMustache;
function loadTemplates(templateLocations) {
    const customTemplates = {};
    for (const templateName in templateLocations) {
        if (default_1.PREDEFINED_TEMPLATES.indexOf(templateName) > -1)
            continue;
        customTemplates[templateName] = loadTemplate(templateLocations[templateName]);
    }
    return Object.assign({ main: loadTemplate(templateLocations.main), method: loadTemplate(templateLocations.method), methodSignature: loadTemplate(templateLocations.methodSignature), parameter: loadTemplate(templateLocations.parameter), type: loadTemplate(templateLocations.type), interface: loadTemplate(templateLocations.interface) }, customTemplates);
}
function loadTemplate(path) {
    if (!(0, path_1.isAbsolute)(path))
        throw new Error("Template path must be absolute");
    return (0, fs_1.readFileSync)(path, "utf-8");
}
