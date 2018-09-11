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
import { Oas20Schema } from "./schema.model";
import { IOas20Items, Oas20Items } from "./items.model";
import { IOasReferenceNode } from "../reference.model";
import { OasParameterBase } from "../common/parameter.model";
/**
 * Models an OAS 2.0 Parameter object.  Example:
 *
 * {
 *   "name": "user",
 *   "in": "body",
 *   "description": "user to add to the system",
 *   "required": true,
 *   "schema": {
 *     "$ref": "#/definitions/User"
 *   }
 * }
 */
export declare abstract class Oas20ParameterBase extends OasParameterBase implements IOas20Items {
    type: string;
    format: string;
    items: Oas20Items;
    collectionFormat: string;
    default: any;
    maximum: number;
    exclusiveMaximum: boolean;
    minimum: number;
    exclusiveMinimum: boolean;
    maxLength: number;
    minLength: number;
    pattern: string;
    maxItems: number;
    minItems: number;
    uniqueItems: boolean;
    enum: any[];
    multipleOf: number;
    /**
     * Creates a child schema model.
     * @return {Oas20Schema}
     */
    createSchema(): Oas20Schema;
    /**
     * Creates a child items model.
     * @return {Oas20Items}
     */
    createItems(): Oas20Items;
}
/**
 * Extends the base parameter to model a parameter that is a child of the OAS 2.0 Parameters Definitions
 * object.
 */
export declare class Oas20ParameterDefinition extends Oas20ParameterBase {
    private _parameterName;
    /**
     * Constructor.
     * @param parameterName
     */
    constructor(parameterName: string);
    /**
     * Gets the parameter name.
     * @return {string}
     */
    parameterName(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Extends the base parameter to add support for references.
 */
export declare class Oas20Parameter extends Oas20ParameterBase implements IOasReferenceNode {
    $ref: string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
