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
import { Oas30NodeVisitorAdapter } from "../../visitors/visitor.base";
import { OasNode } from "../../models/node.model";
import { IOasValidationProblemReporter } from "../validation";
/**
 * Base class for all 3.0 validation rules.
 */
export declare abstract class Oas30ValidationRule extends Oas30NodeVisitorAdapter {
    private _reporter;
    constructor(reporter: IOasValidationProblemReporter);
    /**
     * Reports a validation error if the property is not valid.
     * @param code
     * @param condition
     * @param node
     * @param property
     * @param message
     */
    protected reportIf(code: string, condition: boolean, node: OasNode, property: string, message: string): void;
    /**
     * Reports a validation error if the property is not valid.
     * @param code
     * @param isValid
     * @param node
     * @param property
     * @param message
     */
    protected reportIfInvalid(code: string, isValid: boolean, node: OasNode, property: string, message: string): void;
    /**
     * Check if a property was defined.
     * @param propertyValue
     * @return {boolean}
     */
    protected isDefined(propertyValue: any): boolean;
    /**
     * Check if a value is either null or undefined.
     * @param value
     * @return {boolean}
     */
    protected isNullOrUndefined(value: any): boolean;
    /**
     * Check if the property value exists (is not undefined and is not null).
     * @param propertyValue
     * @return {boolean}
     */
    protected hasValue(propertyValue: any): boolean;
    /**
     * Called by validation rules to report an error.
     * @param code
     * @param node
     * @param property
     * @param message
     */
    report(code: string, node: OasNode, property: string, message: string): void;
}
