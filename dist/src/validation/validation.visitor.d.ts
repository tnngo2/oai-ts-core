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
import { Oas20CompositeVisitor, Oas30CompositeVisitor, OasAllNodeVisitor } from "../visitors/visitor.base";
import { IOasValidationProblemReporter, IOasValidationSeverityRegistry } from "./validation";
import { OasNode, OasValidationProblem } from "../models/node.model";
/**
 * Visitor used to clear validation problems.  This is typically done just before
 * validation is run so that the data model is clean.  Validation would then add new
 * problem nodes to the model.
 */
export declare class OasResetValidationProblemsVisitor extends OasAllNodeVisitor {
    protected doVisitNode(node: OasNode): void;
}
/**
 * Visitor used to validate a OpenAPI document (or a subsection of the document).  The result
 * of the validation will be a list of validation errors.  In addition, the validator will
 * add the validation errors directly to the offending model nodes as attributes.
 */
export declare class Oas20ValidationVisitor extends Oas20CompositeVisitor implements IOasValidationProblemReporter {
    private errors;
    private severityRegistry;
    constructor();
    /**
     * Sets the severity registry.
     * @param {IOasValidationSeverityRegistry} severityRegistry
     */
    setSeverityRegistry(severityRegistry: IOasValidationSeverityRegistry): void;
    /**
     * Returns the array of validation errors found by the visitor.
     * @return {OasValidationProblem[]}
     */
    getValidationErrors(): OasValidationProblem[];
    /**
     * Called by validation rules when an error is detected.
     * @param code
     * @param node
     * @param property
     * @param message
     */
    report(code: string, node: OasNode, property: string, message: string): void;
    private lookupSeverity(code);
}
/**
 * Visitor used to validate a OpenAPI document (or a subsection of the document).  The result
 * of the validation will be a list of validation errors.  In addition, the validator will
 * add the validation errors directly to the offending model nodes as attributes.
 */
export declare class Oas30ValidationVisitor extends Oas30CompositeVisitor implements IOasValidationProblemReporter {
    private errors;
    private severityRegistry;
    constructor();
    /**
     * Sets the severity registry.
     * @param {IOasValidationSeverityRegistry} severityRegistry
     */
    setSeverityRegistry(severityRegistry: IOasValidationSeverityRegistry): void;
    /**
     * Returns the array of validation errors found by the visitor.
     * @return {OasValidationProblem[]}
     */
    getValidationErrors(): OasValidationProblem[];
    /**
     * Called by validation rules when an error is detected.
     * @param code
     * @param node
     * @param property
     * @param message
     */
    report(code: string, node: OasNode, property: string, message: string): void;
    private lookupSeverity(code);
}
