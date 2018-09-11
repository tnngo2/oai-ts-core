/**
 * @license
 * Copyright 2017 Red Hat
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { OasNode } from "../node.model";
import { Oas20ResponseDefinition } from "./response.model";
import { IOasIndexedNode } from "../inode.model";
/**
 * Models an OAS 2.0 Responses Definitions object.  The Responses Definitions object can have any
 * number of child responses, where the field name is the name of the response and the value is a Response
 * object.  Example:
 *
 * {
 *   "NotFound": {
 *     "description": "Entity not found."
 *   },
 *   "IllegalInput": {
 *     "description": "Illegal input for operation."
 *   },
 *   "GeneralError": {
 *     "description": "General Error",
 *     "schema": {
 *         "$ref": "#/definitions/GeneralError"
 *     }
 *   }
 * }
 */
export declare class Oas20ResponsesDefinitions extends OasNode implements IOasIndexedNode<Oas20ResponseDefinition> {
    __instanceof_IOasIndexedNode: boolean;
    private _responses;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns a single response by name.
     * @param name
     * @return {Oas20ResponseDefinition}
     */
    response(name: string): Oas20ResponseDefinition;
    /**
     * Returns an array of all the responses.
     */
    responses(): Oas20ResponseDefinition[];
    /**
     * Adds a response.
     * @param name
     * @param response
     */
    addResponse(name: string, response: Oas20ResponseDefinition): Oas20ResponseDefinition;
    /**
     * Removes a response by name.
     * @param name
     */
    removeResponse(name: string): Oas20ResponseDefinition;
    /**
     * Gets a list of all the response names.
     */
    responseNames(): string[];
    /**
     * Creates an OAS 2.0 Response object.
     * @param name
     * @return {Oas20ResponseDefinition}
     */
    createResponse(name: string): Oas20ResponseDefinition;
    getItem(name: string): Oas20ResponseDefinition;
    getItems(): Oas20ResponseDefinition[];
    getItemNames(): string[];
    addItem(name: string, item: Oas20ResponseDefinition): void;
    deleteItem(name: string): Oas20ResponseDefinition;
}
export declare class Oas20ResponsesDefinitionsItems {
    [key: string]: Oas20ResponseDefinition;
}
