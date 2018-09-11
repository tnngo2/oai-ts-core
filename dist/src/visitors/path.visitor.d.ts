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
import { IOas20NodeVisitor, IOas30NodeVisitor, IOasNodeVisitor } from "./visitor.iface";
import { Oas20Document } from "../models/2.0/document.model";
import { OasExtension } from "../models/extension.model";
import { Oas20Parameter, Oas20ParameterDefinition } from "../models/2.0/parameter.model";
import { Oas20Response, Oas20ResponseDefinition } from "../models/2.0/response.model";
import { Oas20AdditionalPropertiesSchema, Oas20AllOfSchema, Oas20ItemsSchema, Oas20PropertySchema, Oas20SchemaDefinition } from "../models/2.0/schema.model";
import { Oas20Example } from "../models/2.0/example.model";
import { Oas20Items } from "../models/2.0/items.model";
import { Oas20SecurityDefinitions } from "../models/2.0/security-definitions.model";
import { Oas20Scopes } from "../models/2.0/scopes.model";
import { Oas20Definitions } from "../models/2.0/definitions.model";
import { Oas20ParametersDefinitions } from "../models/2.0/parameters-definitions.model";
import { Oas20ResponsesDefinitions } from "../models/2.0/responses-definitions.model";
import { OasNodePath } from "../models/node-path";
import { OasDocument } from "../models/document.model";
import { OasInfo } from "../models/common/info.model";
import { OasContact } from "../models/common/contact.model";
import { OasLicense } from "../models/common/license.model";
import { OasPaths } from "../models/common/paths.model";
import { OasPathItem } from "../models/common/path-item.model";
import { OasOperation } from "../models/common/operation.model";
import { OasExternalDocumentation } from "../models/common/external-documentation.model";
import { OasSecurityRequirement } from "../models/common/security-requirement.model";
import { OasResponses } from "../models/common/responses.model";
import { OasSchema } from "../models/common/schema.model";
import { OasHeader } from "../models/common/header.model";
import { OasTag } from "../models/common/tag.model";
import { OasSecurityScheme } from "../models/common/security-scheme.model";
import { OasXML } from "../models/common/xml.model";
import { Oas30AdditionalPropertiesSchema, Oas30AllOfSchema, Oas30AnyOfSchema, Oas30ItemsSchema, Oas30NotSchema, Oas30OneOfSchema, Oas30PropertySchema, Oas30SchemaDefinition } from "../models/3.0/schema.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../models/3.0/parameter.model";
import { Oas30Link, Oas30LinkDefinition } from "../models/3.0/link.model";
import { Oas30Callback, Oas30CallbackDefinition } from "../models/3.0/callback.model";
import { Oas30Example, Oas30ExampleDefinition } from "../models/3.0/example.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../models/3.0/request-body.model";
import { Oas30Header, Oas30HeaderDefinition } from "../models/3.0/header.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30PasswordOAuthFlow } from "../models/3.0/oauth-flow.model";
import { Oas30OAuthFlows } from "../models/3.0/oauth-flows.model";
import { Oas30Components } from "../models/3.0/components.model";
import { Oas30CallbackPathItem } from "../models/3.0/path-item.model";
import { Oas30Response, Oas30ResponseDefinition } from "../models/3.0/response.model";
import { Oas30MediaType } from "../models/3.0/media-type.model";
import { Oas30Encoding } from "../models/3.0/encoding.model";
import { Oas30LinkParameterExpression } from "../models/3.0/link-parameter-expression.model";
import { Oas30LinkServer, Oas30Server } from "../models/3.0/server.model";
import { Oas30ServerVariable } from "../models/3.0/server-variable.model";
import { Oas20Headers } from "../models/2.0/headers.model";
import { Oas30LinkRequestBodyExpression } from "../models/3.0/link-request-body-expression.model";
import { Oas30Discriminator } from "../models/3.0/discriminator.model";
import { OasValidationProblem } from "../models/node.model";
/**
 * Base class for Node Path visitors for all versions of OpenAPI.
 */
export declare abstract class OasNodePathVisitor implements IOasNodeVisitor {
    protected _path: OasNodePath;
    path(): OasNodePath;
    visitDocument(node: OasDocument): void;
    visitInfo(node: OasInfo): void;
    visitContact(node: OasContact): void;
    visitLicense(node: OasLicense): void;
    visitPaths(node: OasPaths): void;
    visitPathItem(node: OasPathItem): void;
    visitOperation(node: OasOperation): void;
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    visitResponses(node: OasResponses): void;
    visitSchema(node: OasSchema): void;
    visitHeader(node: OasHeader): void;
    visitTag(node: OasTag): void;
    visitSecurityScheme(node: OasSecurityScheme): void;
    visitXML(node: OasXML): void;
    visitExtension(node: OasExtension): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * A visitor used to create a node path for any given node.  Here are some examples
 * of node paths:
 *
 * - The root document:
 *   /
 *
 * - An 'Info' object
 *   /info
 *
 * - A GET operation from pet-store:
 *   /paths[/pet/findByStatus]/get
 *
 * - External Documentation for a tag:
 *   /tags[2]/externalDocs
 *
 */
export declare class Oas20NodePathVisitor extends OasNodePathVisitor implements IOas20NodeVisitor {
    visitDocument(node: Oas20Document): void;
    visitParameter(node: Oas20Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    visitExample(node: Oas20Example): void;
    visitItems(node: Oas20Items): void;
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    visitScopes(node: Oas20Scopes): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    visitPropertySchema(node: Oas20PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema): void;
    visitDefinitions(node: Oas20Definitions): void;
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
    visitResponse(node: Oas20Response): void;
    visitHeaders(node: Oas20Headers): void;
}
/**
 * The 3.0 version of a node path visitor (creates a node path from a node).
 */
export declare class Oas30NodePathVisitor extends OasNodePathVisitor implements IOas30NodeVisitor {
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitResponse(node: Oas30Response): void;
    visitMediaType(node: Oas30MediaType): void;
    visitEncoding(node: Oas30Encoding): void;
    visitExample(node: Oas30Example): void;
    visitLink(node: Oas30Link): void;
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    visitLinkServer(node: Oas30LinkServer): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitHeader(node: Oas30Header): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitPropertySchema(node: Oas30PropertySchema): void;
    visitItemsSchema(node: Oas30ItemsSchema): void;
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
    visitDiscriminator(node: Oas30Discriminator): void;
    visitComponents(node: Oas30Components): void;
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    visitOAuthFlows(node: Oas30OAuthFlows): void;
    visitImplicitOAuthFlow(node: Oas30ImplicitOAuthFlow): void;
    visitPasswordOAuthFlow(node: Oas30PasswordOAuthFlow): void;
    visitClientCredentialsOAuthFlow(node: Oas30ClientCredentialsOAuthFlow): void;
    visitAuthorizationCodeOAuthFlow(node: Oas30AuthorizationCodeOAuthFlow): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    visitCallbackDefinition(node: Oas30CallbackDefinition): void;
    visitSecurityScheme(node: OasSecurityScheme): void;
}
