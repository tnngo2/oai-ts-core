/**
 * @license
 * Copyright 17 Red Hat
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
import { OasExternalDocumentation } from "./external-documentation.model";
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { OasSecurityRequirement } from "./security-requirement.model";
import { OasResponses } from "./responses.model";
import { IOasParameterParent, OasParameterBase } from "./parameter.model";
/**
 * Models an OAS Operation object.
 */
export declare abstract class OasOperation extends OasExtensibleNode implements IOasParameterParent {
    private _method;
    tags: string[];
    summary: string;
    description: string;
    externalDocs: OasExternalDocumentation;
    operationId: string;
    parameters: OasParameterBase[];
    responses: OasResponses;
    deprecated: boolean;
    security: OasSecurityRequirement[];
    /**
     * Constructor.
     * @param method
     */
    constructor(method: string);
    /**
     * Gets the method for this operation (get, put, post, etc).
     * @return {string}
     */
    method(): string;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates a child external documentation model.
     * @return {OasExternalDocumentation}
     */
    abstract createExternalDocumentation(): OasExternalDocumentation;
    /**
     * Creates a child parameter model.
     * @return {OasParameter}
     */
    abstract createParameter(): OasParameterBase;
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
    /**
     * Adds a parameter.
     * @param parameter
     */
    addParameter(parameter: OasParameterBase): OasParameterBase;
    /**
     * Creates a child responses model.
     * @return {OasResponses}
     */
    abstract createResponses(): OasResponses;
    /**
     * Creates a child security requirement model.
     * @return {OasSecurityRequirement}
     */
    abstract createSecurityRequirement(): OasSecurityRequirement;
    /**
     * Adds a security requirement child.
     * @param securityRequirement
     */
    addSecurityRequirement(securityRequirement: OasSecurityRequirement): OasSecurityRequirement;
}
