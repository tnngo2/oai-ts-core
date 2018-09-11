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
/**
 * Models an OAS 3.0 Server Variable object.
 */
export declare class Oas30ServerVariable extends OasExtensibleNode {
    _name: string;
    enum: string[];
    default: string;
    description: string;
    constructor(name: string);
    /**
     * Gets the server variable's name.
     * @return {string}
     */
    name(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
