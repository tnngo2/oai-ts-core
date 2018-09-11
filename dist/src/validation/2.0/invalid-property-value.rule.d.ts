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
import { Oas20SecurityScheme } from "../../models/2.0/security-scheme.model";
import { Oas20SecurityRequirement } from "../../models/2.0/security-requirement.model";
import { Oas20Document } from "../../models/2.0/document.model";
import { Oas20Operation } from "../../models/2.0/operation.model";
import { Oas20Items } from "../../models/2.0/items.model";
import { Oas20Header } from "../../models/2.0/header.model";
import { Oas20XML } from "../../models/2.0/xml.model";
/**
 * Implements the Invalid Property Value validation rule.  This rule is responsible
 * for reporting whenever the **value** of a property fails to conform to requirements
 * outlined by the specification.  This is typically things like enums, where the
 * *format* of the value is fine (e.g. correct data-type) but the valid is somehow
 * invalid.
 */
export declare class Oas20InvalidPropertyValueValidationRule extends Oas20ValidationRule {
    /**
     * Returns true if the given value is a valid operationId.
     * @param id
     */
    private isValidOperationId(id);
    /**
     * Parses the given path template for segments.  For example, a path template might be
     *
     * /foo/{fooId}/resources/{resourceId}
     *
     * In this case, this method will return [ "fooId", "resourceId" ]
     *
     * @param pathTemplate
     * @return {Array}
     */
    private parsePathTemplate(pathTemplate);
    /**
     * Returns true if it's OK to use "wrapped" in the XML node.  It's only OK to do this if
     * the type being defined is an 'array' type.
     * @param xml
     * @return {boolean}
     */
    private isWrappedOK(xml);
    /**
     * Returns true if the given required scopes are all actually defined by the security definition.
     * @param requiredScopes
     * @param definedScopes
     */
    private isValidScopes(requiredScopes, definedScopes);
    visitDocument(node: Oas20Document): void;
    visitOperation(node: Oas20Operation): void;
    visitParameter(node: Oas20Parameter): void;
    visitItems(node: Oas20Items): void;
    visitHeader(node: Oas20Header): void;
    visitXML(node: Oas20XML): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    visitSecurityRequirement(node: Oas20SecurityRequirement): void;
}
