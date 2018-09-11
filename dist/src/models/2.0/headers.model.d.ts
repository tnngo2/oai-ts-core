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
import { Oas20Header } from "./header.model";
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { OasNode } from "../node.model";
import { IOasIndexedNode } from "../inode.model";
/**
 * Models an OAS 2.0 Headers object.  Example:
 *
 * {
 *     "X-Rate-Limit-Limit": {
 *         "description": "The number of allowed requests in the current period",
 *         "type": "integer"
 *     },
 *     "X-Rate-Limit-Remaining": {
 *         "description": "The number of remaining requests in the current period",
 *         "type": "integer"
 *     },
 *     "X-Rate-Limit-Reset": {
 *         "description": "The number of seconds left in the current period",
 *         "type": "integer"
 *     }
 * }
 */
export declare class Oas20Headers extends OasNode implements IOasIndexedNode<Oas20Header> {
    __instanceof_IOasIndexedNode: boolean;
    private _headers;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates a header model.
     * @param headerName
     * @return {Oas20Header}
     */
    createHeader(headerName: string): Oas20Header;
    /**
     * Gets a single header by name.
     * @param headerName
     * @return {OasHeader}
     */
    header(headerName: string): Oas20Header;
    /**
     * Returns an array of all the headers.
     */
    headers(): Oas20Header[];
    /**
     * Returns all the header names.
     * @return {string[]}
     */
    headerNames(): string[];
    /**
     * Removes a single header.
     * @param headerName
     */
    removeHeader(headerName: string): Oas20Header;
    /**
     * Adds a header.
     * @param headerName
     * @param header
     */
    addHeader(headerName: string, header: Oas20Header): Oas20Header;
    getItem(name: string): Oas20Header;
    getItems(): Oas20Header[];
    getItemNames(): string[];
    addItem(name: string, item: Oas20Header): void;
    deleteItem(name: string): Oas20Header;
}
export declare class OasHeaderItems {
    [key: string]: Oas20Header;
}
