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
import { Oas30LinkServer } from "./server.model";
import { Oas30LinkParameterExpression } from "./link-parameter-expression.model";
import { Oas30LinkRequestBodyExpression } from "./link-request-body-expression.model";
/**
 * Models an OAS 3.0 Link object.
 */
export declare class Oas30Link extends OasExtensibleNode {
    private _name;
    $ref: string;
    operationRef: string;
    operationId: string;
    parameters: Oas30LinkParameters;
    requestBody: Oas30LinkRequestBodyExpression;
    description: string;
    server: Oas30LinkServer;
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
     * Gets the name of the link.
     * @return {string}
     */
    name(): string;
    /**
     * Creates a link parameter expression.
     * @param name
     * @param value
     * @return {Oas30LinkParameterExpression}
     */
    createLinkParameterExpression(name: string, value: any): Oas30LinkParameterExpression;
    /**
     * Adds a link parameter expression.
     * @param name
     * @param expression
     */
    addLinkParameterExpression(name: string, expression: Oas30LinkParameterExpression): void;
    /**
     * Adds a link parameter expression.
     * @param name
     * @param expression
     * @return {Oas30LinkParameterExpression}
     */
    addLinkParameter(name: string, expression: string): Oas30LinkParameterExpression;
    /**
     * Gets a single link parameter expression by name.
     * @param name
     * @return {Oas30LinkParameterExpression}
     */
    getLinkParameterExpression(name: string): Oas30LinkParameterExpression;
    /**
     * Removes a single link parameter expression and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30LinkParameterExpression}
     */
    removeLinkParameterExpression(name: string): Oas30LinkParameterExpression;
    /**
     * Gets a list of all link parameter expressions.
     * @return {Oas30LinkParameterExpression[]}
     */
    getLinkParameterExpressions(): Oas30LinkParameterExpression[];
    /**
     * Creates a link request body expression.
     * @param name
     * @param value
     * @return {Oas30LinkRequestBodyExpression}
     */
    createLinkRequestBodyExpression(value: any): Oas30LinkRequestBodyExpression;
    /**
     * Creates an OAS 3.0 Server object.
     * @return {Oas30LinkServer}
     */
    createServer(): Oas30LinkServer;
}
/**
 * Models a link definition found in the components section of an OAS document.
 */
export declare class Oas30LinkDefinition extends Oas30Link {
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
}
export declare class Oas30LinkParameters {
    [key: string]: Oas30LinkParameterExpression;
}
