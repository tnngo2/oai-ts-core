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
import { OasNode } from "../models/node.model";
import { Oas20Schema } from "../models/2.0/schema.model";
import { Oas20Items } from "../models/2.0/items.model";
import { Oas30Schema } from "../models/3.0/schema.model";
export declare enum OasValidationProblemSeverity {
    ignore = 0,
    low = 1,
    medium = 2,
    high = 3,
}
/**
 * Interface used by validation rules to report errors.
 */
export interface IOasValidationProblemReporter {
    report(code: string, node: OasNode, property: string, message: string): void;
}
export interface IOasValidationSeverityRegistry {
    lookupSeverity(ruleCode: string): OasValidationProblemSeverity;
}
export declare class DefaultValidationSeverityRegistry implements IOasValidationSeverityRegistry {
    lookupSeverity(ruleCode: string): OasValidationProblemSeverity;
}
/**
 * Base class for all validation rules.
 */
export declare class OasValidationRuleUtil {
    /**
     * List of valid HTTP response status codes from:  https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
     */
    private static HTTP_STATUS_CODES;
    /**
     * Check if a property was defined.
     * @param propertyValue
     * @return {boolean}
     */
    static isDefined(propertyValue: any): boolean;
    /**
     * Check if the property value exists (is not undefined and is not null).
     * @param propertyValue
     * @return {boolean}
     */
    static hasValue(propertyValue: any): boolean;
    /**
     * Returns true only if the given value is a valid URL.
     * @param propertyValue
     * @return {boolean}
     */
    static isValidUrl(propertyValue: string): boolean;
    /**
     * Returns true only if the given value is a valid URL template.
     * @param {string} propertyValue
     * @return {boolean}
     */
    static isValidUrlTemplate(propertyValue: string): boolean;
    /**
     * Returns true only if the given value is valid GFM style markup.
     * @param propertyValue
     * @return {boolean}
     */
    static isValidGFM(propertyValue: string): boolean;
    /**
     * Returns true only if the given value is valid CommonMark style markup.
     * @param propertyValue
     * @return {boolean}
     */
    static isValidCommonMark(propertyValue: string): boolean;
    /**
     * Returns true only if the given value is a valid email address.
     * @param propertyValue
     * @return {boolean}
     */
    static isValidEmailAddress(propertyValue: string): boolean;
    /**
     * Returns true only if the given value is a valid mime-type.
     * @param propertyValue
     * @return {boolean}
     */
    static isValidMimeType(propertyValue: string[]): boolean;
    /**
     * Returns true if the given value is an item in the enum list.
     * @param value
     * @param items
     */
    static isValidEnumItem(value: string, items: string[]): boolean;
    /**
     * Resolves a reference from a relative position in the data model.
     * @param $ref
     * @param from
     */
    static resolveRef($ref: string, from: OasNode): OasNode;
    /**
     * Returns true only if the given reference can be resolved relative to the given document.  Examples
     * of $ref values include:
     *
     * #/definitions/ExampleDefinition
     * #/parameters/fooId
     * #/responses/NotFoundResponse
     *
     * @param $ref
     * @param oasDocument
     */
    static canResolveRef($ref: string, from: OasNode): boolean;
    /**
     * Returns true only if the given value is a valid host.
     * @param propertyValue
     * @return {boolean}
     */
    static isValidHost(propertyValue: string): boolean;
    /**
     * Returns true if the given value is valid according to the schema provided.
     * @param value
     * @param node
     */
    static isValidForType(value: any, node: Oas20Items | Oas20Schema | Oas30Schema): boolean;
    /**
     * Returns true if the given status code is a valid HTTP response code.
     * @param statusCode
     * @return {boolean}
     */
    static isValidHttpCode(statusCode: string): boolean;
}
