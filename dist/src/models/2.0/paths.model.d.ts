import { Oas20PathItem } from "./path-item.model";
import { OasPaths } from "../common/paths.model";
/**
 * Models an OAS 2.0 Paths object.  The Paths object can have any number of child
 * paths, where the field name begins with '/'.  Example:
 *
 * {
 *   "/pets": {
 *     "get": {
 *       "description": "Returns all pets from the system that the user has access to",
 *       "produces": [
 *         "application/json"
 *       ],
 *       "responses": {
 *         "200": {
 *           "description": "A list of pets.",
 *           "schema": {
 *             "type": "array",
 *             "items": {
 *               "$ref": "#/definitions/pet"
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 *
 */
export declare class Oas20Paths extends OasPaths {
    /**
     * Creates an OAS 2.0 path item object.
     * @param path
     * @return {Oas20PathItem}
     */
    createPathItem(path: string): Oas20PathItem;
}
