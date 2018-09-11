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
import { Oas20ValidationRule } from "./common.rule";
import { Oas20Parameter } from "../../models/2.0/parameter.model";
import { Oas20Operation } from "../../models/2.0/operation.model";
import { Oas20Tag } from "../../models/2.0/tag.model";
/**
 * Implements the Uniqueness validation rule.  This rule is responsible
 * for reporting whenever properties whose values are required to be unique,
 * fail that test.  Examples are scopes, tags, and operationId.
 */
export declare class Oas20UniquenessValidationRule extends Oas20ValidationRule {
    private indexedOperations;
    visitTag(node: Oas20Tag): void;
    visitOperation(node: Oas20Operation): void;
    visitParameter(node: Oas20Parameter): void;
}
