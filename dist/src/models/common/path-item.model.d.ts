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
import { OasOperation } from "./operation.model";
import { IOasParameterParent, OasParameterBase } from "./parameter.model";
/**
 * Models an OAS Path Item object.
 */
export declare abstract class OasPathItem extends OasExtensibleNode implements IOasParameterParent {
    private _path;
    $ref: string;
    get: OasOperation;
    put: OasOperation;
    post: OasOperation;
    delete: OasOperation;
    options: OasOperation;
    head: OasOperation;
    patch: OasOperation;
    parameters: OasParameterBase[];
    /**
     * Constructor.
     * @param path
     */
    constructor(path: string);
    /**
     * Returns the path this object is mapped to.
     * @return {string}
     */
    path(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates an OAS operation object.
     * @param method
     * @return {OasOperation}
     */
    abstract createOperation(method: string): OasOperation;
    /**
     * Creates a child parameter.
     * @return {OasParameter}
     */
    abstract createParameter(): OasParameterBase;
    /**
     * Adds a parameter.
     * @param param
     */
    addParameter(param: OasParameterBase): OasParameterBase;
    /**
     * Returns a list of parameters with a particular value of "in" (e.g. path, formData, body, etc...).
     * @param _in
     * @return {any}
     */
    getParameters(_in: string): OasParameterBase[];
    /**
     * Returns a single, unique parameter identified by "in" and "name" (which are the two
     * properties that uniquely identify a parameter).  Returns null if no parameter is found.
     * @param _in
     * @param name
     * @return {OasParameterBase}
     */
    parameter(_in: string, name: string): OasParameterBase;
}
