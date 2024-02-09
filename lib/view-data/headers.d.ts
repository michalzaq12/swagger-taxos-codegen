import { HttpOperation, Swagger } from "../swagger/Swagger";
export interface Header {
}
export declare function getHeadersForMethod(op: HttpOperation, swagger: Swagger): Header[];
