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
import { Oas30LinkDefinition } from "../../models/3.0/link.model";
import { Oas30CallbackDefinition } from "../../models/3.0/callback.model";
import { Oas30ExampleDefinition } from "../../models/3.0/example.model";
import { Oas30RequestBodyDefinition } from "../../models/3.0/request-body.model";
import { Oas30HeaderDefinition } from "../../models/3.0/header.model";
import { Oas30SecurityRequirement } from "../../models/3.0/security-requirement.model";
import { Oas30PathItem } from "../../models/3.0/path-item.model";
import { Oas30Response, Oas30ResponseDefinition } from "../../models/3.0/response.model";
import { Oas30SecurityScheme } from "../../models/3.0/security-scheme.model";
import { Oas30SchemaDefinition } from "../../models/3.0/schema.model";
import { Oas30ParameterDefinition } from "../../models/3.0/parameter.model";
import { Oas30Encoding } from "../../models/3.0/encoding.model";
/**
 * Implements the Invalid Property Name validation rule.  This rule is responsible
 * for reporting whenever the **name** of a property fails to conform to the required
 * format defined by the specification.
 */
export declare class Oas30InvalidPropertyNameValidationRule extends Oas30ValidationRule {
    /**
     * Returns true if the definition name is valid.
     * @param name
     * @return {boolean}
     */
    private static isValidDefinitionName(name);
    /**
     * Returns true if the given schema has a property defined with the given name.
     * @param {Oas30Schema} schema
     * @param {string} propertyName
     * @return {boolean}
     */
    private isValidSchemaProperty(schema, propertyName);
    visitPathItem(node: Oas30PathItem): void;
    visitResponse(node: Oas30Response): void;
    visitSecurityRequirement(node: Oas30SecurityRequirement): void;
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    visitCallbackDefinition(node: Oas30CallbackDefinition): void;
    visitEncoding(node: Oas30Encoding): void;
}
