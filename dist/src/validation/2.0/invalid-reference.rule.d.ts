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
import { Oas20Response } from "../../models/2.0/response.model";
import { Oas20AdditionalPropertiesSchema, Oas20AllOfSchema, Oas20ItemsSchema, Oas20PropertySchema, Oas20Schema } from "../../models/2.0/schema.model";
import { Oas20PathItem } from "../../models/2.0/path-item.model";
import { Oas20SecurityRequirement } from "../../models/2.0/security-requirement.model";
/**
 * Implements the Invalid Reference validation rule.  This rule is responsible
 * for reporting whenever a property references another node in the document
 * but that reference is missing or invalid.
 */
export declare class Oas20InvalidReferenceValidationRule extends Oas20ValidationRule {
    /**
     * Returns true if the security requirement name is valid.  It does this by looking up a declared
     * security scheme definition in the document.  If no security scheme definition exists with the
     * given name, then it is invalid.
     * @param securityReqName
     * @param doc
     */
    private isValidSecurityRequirementName(securityReqName, doc);
    visitParameter(node: Oas20Parameter): void;
    visitPathItem(node: Oas20PathItem): void;
    visitResponse(node: Oas20Response): void;
    visitSchema(node: Oas20Schema): void;
    visitPropertySchema(node: Oas20PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    visitSecurityRequirement(node: Oas20SecurityRequirement): void;
}
