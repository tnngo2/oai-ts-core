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
import { OasExtensibleNode } from "../enode.model";
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { Oas30Header } from "./header.model";
/**
 * Models an OAS 3.0 Encoding object.
 */
export declare class Oas30Encoding extends OasExtensibleNode {
    private _name;
    contentType: string;
    headers: Oas30EncodingHeaders;
    style: string;
    explode: boolean;
    allowReserved: boolean;
    /**
     * Constructor.
     * @param name
     */
    constructor(name: string);
    name(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates a header.
     * @param name
     * @return {Oas30Header}
     */
    createHeader(name: string): Oas30Header;
    /**
     * Adds a header.
     * @param name
     * @param header
     */
    addHeader(name: string, header: Oas30Header): void;
    /**
     * Gets a single header by name.
     * @param name
     * @return {Oas30Header}
     */
    getHeader(name: string): Oas30Header;
    /**
     * Removes a single header and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30Header}
     */
    removeHeader(name: string): Oas30Header;
    /**
     * Gets a list of all headers.
     * @return {Oas30Header[]}
     */
    getHeaders(): Oas30Header[];
}
export declare class Oas30EncodingHeaders {
    [key: string]: Oas30Header;
}
