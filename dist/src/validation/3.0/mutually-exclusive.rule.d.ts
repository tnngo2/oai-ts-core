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
import { Oas30Example, Oas30ExampleDefinition } from "../../models/3.0/example.model";
import { Oas30Header, Oas30HeaderDefinition } from "../../models/3.0/header.model";
import { Oas30Link, Oas30LinkDefinition } from "../../models/3.0/link.model";
import { Oas30MediaType } from "../../models/3.0/media-type.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../../models/3.0/parameter.model";
/**
 * Implements the Mutually Exclusive validation rule.  This rule is responsible
 * for reporting whenever properties are used together when that is not allowed.
 * In various places in the specification, some properties are mutually exclusive
 * with each other.
 */
export declare class Oas30MutuallyExclusiveValidationRule extends Oas30ValidationRule {
    private hasContent(contentParent);
    visitExample(node: Oas30Example): void;
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    visitHeader(node: Oas30Header): void;
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    visitLink(node: Oas30Link): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    visitMediaType(node: Oas30MediaType): void;
    private visitParameterBase(node);
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
}
