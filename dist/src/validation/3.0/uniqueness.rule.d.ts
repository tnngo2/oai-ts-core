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
import { Oas30ValidationRule } from "./common.rule";
import { Oas30Tag } from "../../models/3.0/tag.model";
import { Oas30Operation } from "../../models/3.0/operation.model";
import { Oas30Parameter } from "../../models/3.0/parameter.model";
/**
 * Implements the Uniqueness validation rule.  This rule is responsible
 * for reporting whenever properties whose values are required to be unique,
 * fail that test.  Examples are scopes, tags, and operationId.
 */
export declare class Oas30UniquenessValidationRule extends Oas30ValidationRule {
    private indexedOperations;
    visitTag(node: Oas30Tag): void;
    visitOperation(node: Oas30Operation): void;
    visitParameter(node: Oas30Parameter): void;
}
