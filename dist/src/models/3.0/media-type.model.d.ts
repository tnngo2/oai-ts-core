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
import { Oas30Schema } from "./schema.model";
import { OasExtensibleNode } from "../enode.model";
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { Oas30Example, Oas30ExampleItems } from "./example.model";
import { Oas30Encoding } from "./encoding.model";
/**
 * Models an OAS 3.0 MediaType object.  Example:
 *
 * {
 *   "application/json": {
 *     "schema": {
 *          "$ref": "#/components/schemas/Pet"
 *     },
 *     "examples": {
 *       "cat" : {
 *         "summary": "An example of a cat",
 *         "value":
 *           {
 *             "name": "Fluffy",
 *             "petType": "Cat",
 *             "color": "White",
 *             "gender": "male",
 *             "breed": "Persian"
 *           }
 *       },
 *       "dog": {
 *         "summary": "An example of a dog with a cat's name",
 *         "value" :  {
 *           "name": "Puma",
 *           "petType": "Dog",
 *           "color": "Black",
 *           "gender": "Female",
 *           "breed": "Mixed"
 *         },
 *       "frog": {
 *           "$ref": "#/components/examples/frog-example"
 *         }
 *       }
 *     }
 *   }
 * }
 */
export declare class Oas30MediaType extends OasExtensibleNode {
    private _name;
    schema: Oas30Schema;
    example: any;
    examples: Oas30ExampleItems;
    encoding: Oas30EncodingItems;
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
    name(): string;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createSchema(): Oas30Schema;
    /**
     * Creates a encoding.
     * @param name
     * @return {Oas30Encoding}
     */
    createEncoding(name: string): Oas30Encoding;
    /**
     * Adds a encoding.
     * @param name
     * @param encoding
     */
    addEncoding(name: string, encoding: Oas30Encoding): void;
    /**
     * Gets a single encoding by name.
     * @param name
     * @return {Oas30Encoding}
     */
    getEncoding(name: string): Oas30Encoding;
    /**
     * Removes a single encoding and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30Encoding}
     */
    removeEncoding(name: string): Oas30Encoding;
    /**
     * Gets a list of all encodings.
     * @return {Oas30Encoding[]}
     */
    getEncodings(): Oas30Encoding[];
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
}
export declare class Oas30EncodingItems {
    [key: string]: Oas30Encoding;
}
