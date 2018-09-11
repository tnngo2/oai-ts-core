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
import { IOasReferenceNode } from "../reference.model";
import { Oas30MediaType } from "./media-type.model";
/**
 * Models an OAS 3.0 RequestBody object.  Example:
 *
 * {
 *  "description": "user to add to the system",
 *  "content": {
 *    "application/json": {
 *      "schema": {
 *        "$ref": "#/components/schemas/User"
 *      },
 *      "examples": {
 *          "user" : {
 *            "summary": "User Example",
 *            "externalValue": "http://foo.bar/examples/user-example.json"
 *          }
 *        }
 *    },
 *    "application/xml": {
 *      "schema": {
 *        "$ref": "#/components/schemas/User"
 *      },
 *      "examples": {
 *          "user" : {
 *            "summary": "User example in XML",
 *            "externalValue": "http://foo.bar/examples/user-example.xml"
 *          }
 *        }
 *    },
 *    "text/plain": {
 *      "examples": {
 *        "user" : {
 *            "summary": "User example in Plain text",
 *            "externalValue": "http://foo.bar/examples/user-example.txt"
 *        }
 *      }
 *    },
 *    "text/*": {
 *      "examples": {
 *        "user" : {
 *            "summary": "User example in other format",
 *            "externalValue": "http://foo.bar/examples/user-example.whatever"
 *        }
 *      }
 *    }
 *  }
 *}
 *
 */
export declare class Oas30RequestBody extends OasExtensibleNode implements IOasReferenceNode {
    $ref: string;
    description: string;
    content: Oas30RequestBodyContent;
    required: boolean;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
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
 * Models a request body definition found in the components section of an OAS document.
 */
export declare class Oas30RequestBodyDefinition extends Oas30RequestBody {
    private _name;
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
export declare class Oas30RequestBodyContent {
    [key: string]: Oas30MediaType;
}
