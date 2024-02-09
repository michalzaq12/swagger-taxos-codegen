import { Options } from "prettier";
export type BeautifyOptions = Options;
export declare function beautifyCode(formatCode: boolean, source: string, options?: BeautifyOptions): Promise<string>;
