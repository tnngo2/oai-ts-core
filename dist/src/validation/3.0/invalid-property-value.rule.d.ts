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
import { Oas30XML } from "../../models/3.0/xml.model";
import { Oas30Encoding } from "../../models/3.0/encoding.model";
import { Oas30MediaType } from "../../models/3.0/media-type.model";
import { Oas30Header, Oas30HeaderDefinition } from "../../models/3.0/header.model";
import { Oas30Link, Oas30LinkDefinition } from "../../models/3.0/link.model";
import { Oas30NodeVisitorAdapter } from "../../visitors/visitor.base";
import { Oas30Operation } from "../../models/3.0/operation.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../../models/3.0/parameter.model";
import { Oas30SecurityScheme } from "../../models/3.0/security-scheme.model";
import { Oas30Responses } from "../../models/3.0/responses.model";
import { Oas30SecurityRequirement } from "../../models/3.0/security-requirement.model";
import { Oas30Discriminator } from "../../models/3.0/discriminator.model";
import { Oas30ServerVariable } from "../../models/3.0/server-variable.model";
/**
 * Used to find an operation with a given operation id.
 */
export declare class Oas30OperationFinder extends Oas30NodeVisitorAdapter {
    private operationId;
    private foundOp;
    constructor(operationId: string);
    visitOperation(node: Oas30Operation): void;
    isFound(): boolean;
}
/**
 * Implements the Invalid Property Value validation rule.  This rule is responsible
 * for reporting whenever the **value** of a property fails to conform to requirements
 * outlined by the specification.  This is typically things like enums, where the
 * *format* of the value is fine (e.g. correct data-type) but the valid is somehow
 * invalid.
 */
export declare class Oas30InvalidPropertyValueValidationRule extends Oas30ValidationRule {
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
     * Parses the given server template for variable names.  For example, a server template might be
     *
     * https://{username}.gigantic-server.com:{port}/{basePath}
     *
     * In this case, this method will return [ "username", "port", "basePath" ]
     *
     * @param serverTemplate
     * @return {Array}
     */
    private parseServerTemplate(serverTemplate);
    /**
     * Returns true if it's OK to use "wrapped" in the XML node.  It's only OK to do this if
     * the type being defined is an 'array' type.
     * @param xml
     * @return {boolean}
     */
    private isWrappedOK(xml);
    /**
     * Returns true if the given media type name is multipart/* or application/x-www-form-urlencoded
     * @param {string} typeName
     * @return {boolean}
     */
    private isValidMultipartType(typeName);
    /**
     * Returns true if the given operation is one of:  POST, PUT, OPTIONS
     * @param {Oas30Operation} operation
     * @return {boolean}
     */
    private isValidRequestBodyOperation(operation);
    visitEncoding(node: Oas30Encoding): void;
    visitHeader(node: Oas30Header): void;
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    visitLink(node: Oas30Link): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    visitMediaType(node: Oas30MediaType): void;
    visitOperation(node: Oas30Operation): void;
    visitResponses(node: Oas30Responses): void;
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitXML(node: Oas30XML): void;
    visitDiscriminator(node: Oas30Discriminator): void;
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    visitSecurityRequirement(node: Oas30SecurityRequirement): void;
    visitServerVariable(node: Oas30ServerVariable): void;
}
