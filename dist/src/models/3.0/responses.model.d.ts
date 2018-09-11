import { OasResponses } from "../common/responses.model";
import { Oas30Response } from "./response.model";
/**
 * Models an OAS 2.0 Responses object.  The Responses object can have any number of child
 * responses, where the field names are either 'default' or an HTTP status code.  Example:
 *
 * {
 *   "200": {
 *     "description": "a pet to be returned",
 *     "content": {
 *       "application/json": {
 *         "schema": {
 *           "$ref": "#/components/schemas/Pet"
 *         }
 *       }
 *     }
 *   },
 *   "default": {
 *     "description": "Unexpected error",
 *     "content": {
 *       "application/json": {
 *         "schema": {
 *           "$ref": "#/components/schemas/ErrorModel"
 *         }
 *       }
 *     }
 *   }
 * }
 */
export declare class Oas30Responses extends OasResponses {
    /**
     * Creates an OAS 3.0 Response object.
     * @param statusCode
     * @return {Oas30Response}
     */
    createResponse(statusCode?: string): Oas30Response;
}
