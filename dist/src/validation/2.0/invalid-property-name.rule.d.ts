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
import { Oas20ParameterDefinition } from "../../models/2.0/parameter.model";
import { Oas20Response, Oas20ResponseDefinition } from "../../models/2.0/response.model";
import { Oas20SecurityScheme } from "../../models/2.0/security-scheme.model";
import { Oas20SchemaDefinition } from "../../models/2.0/schema.model";
import { Oas20PathItem } from "../../models/2.0/path-item.model";
import { Oas20Example } from "../../models/2.0/example.model";
import { Oas20Scopes } from "../../models/2.0/scopes.model";
/**
 * Implements the Invalid Property Name validation rule.  This rule is responsible
 * for reporting whenever the **name** of a property fails to conform to the required
 * format defined by the specification.
 */
export declare class Oas20InvalidPropertyNameValidationRule extends Oas20ValidationRule {
    /**
     * Returns true if the definition name is valid.
     * @param name
     * @return {boolean}
     */
    private isValidDefinitionName(name);
    /**
     * Returns true if the scope name is valid.
     * @param scope
     */
    private isValidScopeName(scope);
    visitPathItem(node: Oas20PathItem): void;
    visitResponse(node: Oas20Response): void;
    visitExample(node: Oas20Example): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    visitScopes(node: Oas20Scopes): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
}
