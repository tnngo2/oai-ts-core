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
import { OasHeader } from "../common/header.model";
import { Oas30Schema } from "./schema.model";
import { Oas30Example, Oas30ExampleItems } from "./example.model";
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { Oas30ParameterContent } from "./parameter.model";
import { Oas30MediaType } from "./media-type.model";
/**
 * Models an OAS 3.0 Header object.  Example:
 *
 * {
 *   "description": "The number of allowed requests in the current period",
 *   "required": true,
 *   "schema": {
 *     "type": "string"
 *   }
 * }
 */
export declare class Oas30Header extends OasHeader {
    $ref: string;
    required: boolean;
    deprecated: boolean;
    allowEmptyValue: boolean;
    style: string;
    explode: boolean;
    allowReserved: boolean;
    schema: Oas30Schema;
    example: any;
    examples: Oas30ExampleItems;
    content: Oas30ParameterContent;
    /**
     * Constructor.
     * @param headerName
     */
    constructor(headerName: string);
    /**
     * Creates a child items model.
     * @return {Oas30Schema}
     */
    createSchema(): Oas30Schema;
    /**
     * Creates a child Example model.
     * @return {Oas30Example}
     */
    createExample(name: string): Oas30Example;
    /**
     * Adds the Example to the map of examples.
     * @param example
     */
    addExample(example: Oas30Example): void;
    /**
     * Removes an Example and returns it.
     * @param name
     * @return {Oas30Example}
     */
    removeExample(name: string): Oas30Example;
    /**
     * Gets a single example by name.
     * @param name
     * @return {any}
     */
    getExample(name: string): Oas30Example;
    /**
     * Gets all examples.
     * @return {Oas30Example[]}
     */
    getExamples(): Oas30Example[];
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
}
/**
 * Models a header definition found in the components section of an OAS document.
 */
export declare class Oas30HeaderDefinition extends Oas30Header {
    /**
     * Constructor.
     * @param name
     */
    constructor(name: string);
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets the schema's property name.
     * @return {string}
     */
    name(): string;
}
