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
 * Models an OAS 3.0 Link Parameter Expression object.
 */
export declare class Oas30LinkParameterExpression extends OasNode {
    private _name;
    private _value;
    /**
     * Constructor.
     * @param name
     * @param value
     */
    constructor(name: string, value: string);
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets the name of the expression.
     * @return {string}
     */
    name(): string;
    /**
     * Get the expression value.
     * @return {string}
     */
    value(): string;
    /**
     * Returns true if the expression is a dynamic link parameter expression that must be evaluated.
     * @return {boolean}
     */
    isExpression(): boolean;
    /**
     * Returns true if the expression is just a constant value.
     * @return {boolean}
     */
    isConstant(): boolean;
}
