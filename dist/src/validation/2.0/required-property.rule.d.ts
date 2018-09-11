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
import { Oas20Document } from "../../models/2.0/document.model";
import { Oas20ValidationRule } from "./common.rule";
import { Oas20Info } from "../../models/2.0/info.model";
import { Oas20License } from "../../models/2.0/license.model";
import { Oas20Operation } from "../../models/2.0/operation.model";
import { Oas20ExternalDocumentation } from "../../models/2.0/external-documentation.model";
import { Oas20Parameter } from "../../models/2.0/parameter.model";
import { Oas20Items } from "../../models/2.0/items.model";
import { Oas20Response } from "../../models/2.0/response.model";
import { Oas20Header } from "../../models/2.0/header.model";
import { Oas20Tag } from "../../models/2.0/tag.model";
import { Oas20SecurityScheme } from "../../models/2.0/security-scheme.model";
/**
 * Implements the required property validation rule.  Various model properties are either
 * required or conditionally required.  For example, the "swagger" property MUST exist
 * on the root (document) node.  This rule checks for all required and conditionally
 * required properties on all model types.
 */
export declare class Oas20RequiredPropertyValidationRule extends Oas20ValidationRule {
    /**
     * Called when a required property is missing.
     * @param code
     * @param node
     * @param propertyName
     * @param message
     */
    private requireProperty(code, node, propertyName, message?);
    /**
     * Called when a conditionally required property is missing.
     * @param node
     * @param propertyName
     * @param dependentProperty
     * @param dependentValue
     * @param message
     */
    private requirePropertyWhen(code, node, propertyName, dependentProperty, dependentValue, message?);
    visitDocument(node: Oas20Document): void;
    visitInfo(node: Oas20Info): void;
    visitLicense(node: Oas20License): void;
    visitOperation(node: Oas20Operation): void;
    visitExternalDocumentation(node: Oas20ExternalDocumentation): void;
    visitParameter(node: Oas20Parameter): void;
    visitItems(node: Oas20Items): void;
    visitResponse(node: Oas20Response): void;
    visitHeader(node: Oas20Header): void;
    visitTag(node: Oas20Tag): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
}
