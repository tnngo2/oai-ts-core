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
import { OasExtensibleNode } from "../enode.model";
export interface IOas20Items {
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
    createItems(): Oas20Items;
}
/**
 * Models an OAS 2.0 Items object.  Example:
 */
export declare class Oas20Items extends OasExtensibleNode implements IOas20Items {
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
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates a child items model.
     * @return {Oas20Items}
     */
    createItems(): Oas20Items;
}
