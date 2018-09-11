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
import { Oas20Headers } from "./headers.model";
import { Oas20Example } from "./example.model";
import { IOasReferenceNode } from "../reference.model";
import { OasResponse } from "../common/response.model";
/**
 * Models an OAS 2.0 Response object.  Example:
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
export declare abstract class Oas20ResponseBase extends OasResponse {
    headers: Oas20Headers;
    schema: Oas20Schema;
    examples: Oas20Example;
    /**
     * Creates an OAS 2.0 schema object.
     * @return {Oas20Schema}
     */
    createSchema(): Oas20Schema;
    /**
     * Creates an OAS 2.0 headers object.
     * @return {Oas20Operation}
     */
    createHeaders(): Oas20Headers;
    /**
     * Creates an OAS 2.0 schema object.
     * @return {Oas20Operation}
     */
    createExample(): Oas20Example;
}
/**
 * Extends the base Response class in order to also support references and to
 * track the status code the response is mapped to.  This class is used when a
 * response appears as part of a path/operation.
 */
export declare class Oas20Response extends Oas20ResponseBase implements IOasReferenceNode {
    private _statusCode;
    $ref: string;
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
export declare class Oas20ResponseDefinition extends Oas20ResponseBase {
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
