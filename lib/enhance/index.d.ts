import { BeautifyOptions } from "./beautify";
export interface EnhanceOptions {
    formatCode: boolean;
    prettierOptions: BeautifyOptions;
}
export declare function enhanceCode(source: string, opts: EnhanceOptions): Promise<string>;
