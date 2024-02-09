import { TemplateLocations } from "../options/options";
export type Templates = Record<keyof TemplateLocations, string>;
export declare function transformToCodeWithMustache<T, C extends {}>(data: T, templates: TemplateLocations, additionalViewOptions?: Partial<C>): string;
