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
import { OasDocument } from "./document.model";
import { IOasNodeVisitor } from "../visitors/visitor.iface";
import { OasNodePath } from "./node-path";
import { OasValidationProblemSeverity } from "../validation/validation";
/**
 * Base class for all OAS nodes.  Contains common fields and methods across all
 * nodes of all versions of the OpenAPI Specification.
 */
export declare abstract class OasNode {
    _ownerDocument: OasDocument;
    _parent: OasNode;
    _modelId: number;
    _attributes: OasNodeAttributes;
    _validationProblems: any;
    /**
     * Gets the owner document.
     * @return {OasDocument}
     */
    ownerDocument(): OasDocument;
    /**
     * Gets the parent.
     * @return {OasNode}
     */
    parent(): OasNode;
    /**
     * Gets the model's unique ID.
     * @return {number}
     */
    modelId(): number;
    /**
     * Accept the given visitor (call back the appropriate visit() method).
     * @param visitor
     */
    abstract accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets or sets a node attribute.  When setting the attribute, the previous value
     * will be returned. Otherwise the current value is returned.
     * @param name
     * @param value
     * @return {any}
     */
    n_attribute(name: string, value?: any): any;
    validationProblems(): OasValidationProblem[];
    validationProblemsFor(propertyName: string): OasValidationProblem[];
    validationProblemCodes(): string[];
    validationProblem(code: string): OasValidationProblem;
    addValidationProblem(errorCode: string, nodePath: OasNodePath, property: string, message: string, severity: OasValidationProblemSeverity): OasValidationProblem;
    clearValidationProblems(): void;
}
/**
 * Represents a single validation ERROR.
 */
export declare class OasValidationProblem extends OasNode {
    errorCode: string;
    nodePath: OasNodePath;
    property: string;
    message: string;
    severity: OasValidationProblemSeverity;
    /**
     * Constructor.
     * @param errorCode
     * @param nodePath
     * @param property
     * @param message
     * @param severity
     */
    constructor(errorCode: string, nodePath: OasNodePath, property: string, message: string, severity: OasValidationProblemSeverity);
    accept(visitor: IOasNodeVisitor): void;
}
export declare class OasNodeAttributes {
    [key: string]: any;
}
