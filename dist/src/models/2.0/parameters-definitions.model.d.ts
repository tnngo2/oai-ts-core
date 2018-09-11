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
import { Oas20ParameterDefinition } from "./parameter.model";
import { IOasIndexedNode } from "../inode.model";
/**
 * Models an OAS 2.0 Parameters Definitions object.  The Parameters Definitions object can have any
 * number of child parameters, where the field name is the name of the parameter and the value is a Parameter
 * object.  Example:
 *
 * {
 *   "skipParam": {
 *     "name": "skip",
 *     "in": "query",
 *     "description": "number of items to skip",
 *     "required": true,
 *     "type": "integer",
 *     "format": "int32"
 *   },
 *   "limitParam": {
 *     "name": "limit",
 *     "in": "query",
 *     "description": "max records to return",
 *     "required": true,
 *     "type": "integer",
 *     "format": "int32"
 *   }
 * }
 */
export declare class Oas20ParametersDefinitions extends OasNode implements IOasIndexedNode<Oas20ParameterDefinition> {
    __instanceof_IOasIndexedNode: boolean;
    private _parameters;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns a single parameter by name.
     * @param name
     * @return {Oas20ParameterDefinition}
     */
    parameter(name: string): Oas20ParameterDefinition;
    /**
     * Returns an array of all the parameters.
     */
    parameters(): Oas20ParameterDefinition[];
    /**
     * Adds a parameter.
     * @param name
     * @param parameter
     */
    addParameter(name: string, parameter: Oas20ParameterDefinition): Oas20ParameterDefinition;
    /**
     * Removes a parameter by name.
     * @param name
     */
    removeParameter(name: string): Oas20ParameterDefinition;
    /**
     * Gets a list of all the parameter names.
     */
    parameterNames(): string[];
    /**
     * Creates an OAS 2.0 Parameter object.
     * @param name
     * @return {Oas20ParameterDefinition}
     */
    createParameter(name: string): Oas20ParameterDefinition;
    getItem(name: string): Oas20ParameterDefinition;
    getItems(): Oas20ParameterDefinition[];
    getItemNames(): string[];
    addItem(name: string, item: Oas20ParameterDefinition): void;
    deleteItem(name: string): Oas20ParameterDefinition;
}
export declare class Oas20ParametersDefinitionsItems {
    [key: string]: Oas20ParameterDefinition;
}
