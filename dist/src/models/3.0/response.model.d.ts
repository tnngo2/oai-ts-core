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
import { IOasReferenceNode } from "../reference.model";
import { OasResponse } from "../common/response.model";
import { Oas30MediaType } from "./media-type.model";
import { Oas30Header } from "./header.model";
import { Oas30Link } from "./link.model";
/**
 * Models an OAS 3.0 Response object.  Example:
 *
 * {
 *   "description": "A complex object array response",
 *   "schema": {
 *     "type": "array",
 *     "items": {
 *       "$ref": "#/definitions/VeryComplexType"
 *     }
 *   }
 * }
 */
export declare abstract class Oas30ResponseBase extends OasResponse {
    $ref: string;
    headers: Oas30ResponseHeaders;
    content: Oas30ResponseContent;
    links: Oas30Links;
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
    /**
     * Creates a media type.
     * @param name
     * @return {Oas30MediaType}
     */
    createMediaType(name: string): Oas30MediaType;
    /**
     * Adds a media type.
     * @param name
     * @param mediaType
     */
    addMediaType(name: string, mediaType: Oas30MediaType): void;
    /**
     * Gets a single media type by name.
     * @param name
     * @return {Oas30MediaType}
     */
    getMediaType(name: string): Oas30MediaType;
    /**
     * Removes a single media type and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30MediaType}
     */
    removeMediaType(name: string): Oas30MediaType;
    /**
     * Gets a list of all media types.
     * @return {Oas30MediaType[]}
     */
    getMediaTypes(): Oas30MediaType[];
    /**
     * Creates a link.
     * @param name
     * @return {Oas30Link}
     */
    createLink(name: string): Oas30Link;
    /**
     * Adds a link.
     * @param name
     * @param link
     */
    addLink(name: string, link: Oas30Link): void;
    /**
     * Gets a single link by name.
     * @param name
     * @return {Oas30Link}
     */
    getLink(name: string): Oas30Link;
    /**
     * Removes a single link and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30Link}
     */
    removeLink(name: string): Oas30Link;
    /**
     * Gets a list of all links.
     * @return {Oas30Link[]}
     */
    getLinks(): Oas30Link[];
}
/**
 * Extends the base Response class in order to also support references and to
 * track the status code the response is mapped to.  This class is used when a
 * response appears as part of a path/operation.
 */
export declare class Oas30Response extends Oas30ResponseBase implements IOasReferenceNode {
    private _statusCode;
    /**
     * Constructor.
     * @param statusCode
     */
    constructor(statusCode: string);
    /**
     * Gets the status code.
     * @return {string}
     */
    statusCode(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Extends the base Response class in order to track the name of the response.  This class
 * is used when the response is a globally defined, named response.
 */
export declare class Oas30ResponseDefinition extends Oas30ResponseBase {
    private _name;
    /**
     * Constructor.
     * @param name
     */
    constructor(name: string);
    /**
     * Gets the response name.
     * @return {string}
     */
    name(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
export declare class Oas30ResponseHeaders {
    [key: string]: Oas30Header;
}
export declare class Oas30ResponseContent {
    [key: string]: Oas30MediaType;
}
export declare class Oas30Links {
    [key: string]: Oas30Link;
}
