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
/**
 * Models an OAS 2.0 Example object.  Example:
 *
 * {
 *   "application/json": {
 *     "name": "Puma",
 *     "type": "Dog",
 *     "color": "Black",
 *     "gender": "Female",
 *     "breed": "Mixed"
 *   }
 * }
 */
export declare class Oas20Example extends OasNode {
    private _examples;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns an array of all the example content types.
     * @return {string[]}
     */
    exampleContentTypes(): string[];
    /**
     * Gets a single example.
     * @param contentType
     * @return {any}
     */
    example(contentType: any): any;
    /**
     * Adds an example.
     * @param contentType
     * @param example
     */
    addExample(contentType: any, example: any): void;
    /**
     * Removes a single example.
     * @param contentType
     */
    removeExample(contentType: any): any;
}
export declare class Oas20ExampleItems {
    [key: string]: any;
}
