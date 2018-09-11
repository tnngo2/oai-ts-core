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
import { Oas20Header } from "../../models/2.0/header.model";
import { Oas20Tag } from "../../models/2.0/tag.model";
import { Oas20SecurityScheme } from "../../models/2.0/security-scheme.model";
import { Oas20Contact } from "../../models/2.0/contact.model";
import { Oas20XML } from "../../models/2.0/xml.model";
/**
 * Implements the Invalid Property Format validation rule.  This rule is responsible
 * for reporting whenever the value of a property fails to conform to the required
 * *format* for that property.
 */
export declare class Oas20InvalidPropertyFormatValidationRule extends Oas20ValidationRule {
    visitDocument(node: Oas20Document): void;
    visitInfo(node: Oas20Info): void;
    visitContact(node: Oas20Contact): void;
    visitLicense(node: Oas20License): void;
    visitOperation(node: Oas20Operation): void;
    visitExternalDocumentation(node: Oas20ExternalDocumentation): void;
    visitParameter(node: Oas20Parameter): void;
    visitItems(node: Oas20Items): void;
    visitHeader(node: Oas20Header): void;
    visitTag(node: Oas20Tag): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    visitXML(node: Oas20XML): void;
}
