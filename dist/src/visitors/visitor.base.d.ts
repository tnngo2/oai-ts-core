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
import { OasDocument } from "../models/document.model";
import { OasExtension } from "../models/extension.model";
import { Oas20Parameter, Oas20ParameterDefinition } from "../models/2.0/parameter.model";
import { Oas20Response, Oas20ResponseDefinition } from "../models/2.0/response.model";
import { Oas20AdditionalPropertiesSchema, Oas20AllOfSchema, Oas20ItemsSchema, Oas20PropertySchema, Oas20SchemaDefinition } from "../models/2.0/schema.model";
import { Oas20Example } from "../models/2.0/example.model";
import { Oas20Items } from "../models/2.0/items.model";
import { IOas20NodeVisitor, IOas30NodeVisitor, IOasNodeVisitor } from "./visitor.iface";
import { Oas20SecurityDefinitions } from "../models/2.0/security-definitions.model";
import { Oas20SecurityScheme } from "../models/2.0/security-scheme.model";
import { Oas20Scopes } from "../models/2.0/scopes.model";
import { Oas20Definitions } from "../models/2.0/definitions.model";
import { Oas20ParametersDefinitions } from "../models/2.0/parameters-definitions.model";
import { Oas20ResponsesDefinitions } from "../models/2.0/responses-definitions.model";
import { OasNode, OasValidationProblem } from "../models/node.model";
import { OasInfo } from "../models/common/info.model";
import { OasContact } from "../models/common/contact.model";
import { OasLicense } from "../models/common/license.model";
import { Oas30ServerVariable } from "../models/3.0/server-variable.model";
import { Oas30LinkServer, Oas30Server } from "../models/3.0/server.model";
import { OasTag } from "../models/common/tag.model";
import { OasSecurityRequirement } from "../models/common/security-requirement.model";
import { OasExternalDocumentation } from "../models/common/external-documentation.model";
import { OasPaths } from "../models/common/paths.model";
import { OasPathItem } from "../models/common/path-item.model";
import { OasOperation } from "../models/common/operation.model";
import { OasResponses } from "../models/common/responses.model";
import { OasSchema } from "../models/common/schema.model";
import { OasHeader } from "../models/common/header.model";
import { OasXML } from "../models/common/xml.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../models/3.0/parameter.model";
import { Oas30Response, Oas30ResponseDefinition } from "../models/3.0/response.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../models/3.0/request-body.model";
import { Oas30AdditionalPropertiesSchema, Oas30AllOfSchema, Oas30AnyOfSchema, Oas30ItemsSchema, Oas30NotSchema, Oas30OneOfSchema, Oas30PropertySchema, Oas30SchemaDefinition } from "../models/3.0/schema.model";
import { Oas30MediaType } from "../models/3.0/media-type.model";
import { Oas30Encoding } from "../models/3.0/encoding.model";
import { Oas30Example, Oas30ExampleDefinition } from "../models/3.0/example.model";
import { Oas30Link, Oas30LinkDefinition } from "../models/3.0/link.model";
import { Oas30LinkParameterExpression } from "../models/3.0/link-parameter-expression.model";
import { Oas30Callback, Oas30CallbackDefinition } from "../models/3.0/callback.model";
import { Oas30CallbackPathItem } from "../models/3.0/path-item.model";
import { Oas30Components } from "../models/3.0/components.model";
import { Oas30HeaderDefinition } from "../models/3.0/header.model";
import { Oas30OAuthFlows } from "../models/3.0/oauth-flows.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30PasswordOAuthFlow } from "../models/3.0/oauth-flow.model";
import { OasSecurityScheme } from "../models/common/security-scheme.model";
import { Oas20Headers } from "../models/2.0/headers.model";
import { Oas30LinkRequestBodyExpression } from "../models/3.0/link-request-body-expression.model";
import { Oas30Discriminator } from "../models/3.0/discriminator.model";
/**
 * Base class for node visitors that are only interested in a subset of the node types
 * that might be visited.  Extending this class means that subclasses can only override
 * the subset of methods desired.
 */
export declare abstract class OasNodeVisitorAdapter implements IOasNodeVisitor {
    visitDocument(node: OasDocument): void;
    visitInfo(node: OasInfo): void;
    visitContact(node: OasContact): void;
    visitLicense(node: OasLicense): void;
    visitPaths(node: OasPaths): void;
    visitPathItem(node: OasPathItem): void;
    visitResponses(node: OasResponses): void;
    visitSchema(node: OasSchema): void;
    visitHeader(node: OasHeader): void;
    visitOperation(node: OasOperation): void;
    visitXML(node: OasXML): void;
    visitSecurityScheme(node: OasSecurityScheme): void;
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    visitTag(node: OasTag): void;
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    visitExtension(node: OasExtension): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * Base class for OAS 2.0 node visitors that are only interested in a subset of the node types
 * that might be visited.  Extending this class means that subclasses can only override
 * the subset of methods desired.
 */
export declare class Oas20NodeVisitorAdapter extends OasNodeVisitorAdapter implements IOas20NodeVisitor {
    visitParameter(node: Oas20Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    visitResponse(node: Oas20Response): void;
    visitHeaders(node: Oas20Headers): void;
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    visitExample(node: Oas20Example): void;
    visitItems(node: Oas20Items): void;
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    visitScopes(node: Oas20Scopes): void;
    visitPropertySchema(node: Oas20PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    visitDefinitions(node: Oas20Definitions): void;
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
}
/**
 * Base class for OAS 3.0 node visitors that are only interested in a subset of the node types
 * that might be visited.  Extending this class means that subclasses can only override
 * the subset of methods desired.
 */
export declare class Oas30NodeVisitorAdapter extends OasNodeVisitorAdapter implements IOas30NodeVisitor {
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitResponse(node: Oas30Response): void;
    visitLink(node: Oas30Link): void;
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    visitLinkServer(node: Oas30LinkServer): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitMediaType(node: Oas30MediaType): void;
    visitExample(node: Oas30Example): void;
    visitEncoding(node: Oas30Encoding): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitPropertySchema(node: Oas30PropertySchema): void;
    visitItemsSchema(node: Oas30ItemsSchema): void;
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
    visitComponents(node: Oas30Components): void;
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
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitDiscriminator(node: Oas30Discriminator): void;
}
/**
 * A composite visitor - this class makes it easy to apply multiple visitors to
 * a node at the same time.  It's basically just an array of visitors.
 */
export declare abstract class OasCompositeVisitor implements IOasNodeVisitor {
    private _visitors;
    /**
     * Constructor.
     * @param visitors
     */
    constructor(visitors: IOasNodeVisitor[]);
    /**
     * Adds a single visitor to the list.
     * @param visitor
     */
    addVisitor(visitor: IOasNodeVisitor): void;
    /**
     * Adds multiple visitors to the list.
     * @param visitors
     */
    addVisitors(visitors: IOasNodeVisitor[]): void;
    /**
     * Called to accept all of the visitors contained by this composite.  This basically
     * iterates through all the visitors and calls node.accept(visitor) on each.
     * @param node
     * @private
     */
    protected _acceptAll(node: OasNode): void;
    visitDocument(node: OasDocument): void;
    visitInfo(node: OasInfo): void;
    visitContact(node: OasContact): void;
    visitLicense(node: OasLicense): void;
    visitPaths(node: OasPaths): void;
    visitPathItem(node: OasPathItem): void;
    visitOperation(node: OasOperation): void;
    visitResponses(node: OasResponses): void;
    visitSchema(node: OasSchema): void;
    visitHeader(node: OasHeader): void;
    visitXML(node: OasXML): void;
    visitSecurityScheme(node: OasSecurityScheme): void;
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    visitTag(node: OasTag): void;
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    visitExtension(node: OasExtension): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * A composite visitor - this class makes it easy to apply multiple visitors to
 * a node at the same time.  It's basically just an array of visitors.
 */
export declare class Oas20CompositeVisitor extends OasCompositeVisitor implements IOas20NodeVisitor {
    /**
     * Constructor.
     * @param visitors
     */
    constructor(...visitors: IOas20NodeVisitor[]);
    visitParameter(node: Oas20Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    visitResponse(node: Oas20Response): void;
    visitHeaders(node: Oas20Headers): void;
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    visitExample(node: Oas20Example): void;
    visitItems(node: Oas20Items): void;
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    visitScopes(node: Oas20Scopes): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    visitPropertySchema(node: Oas20PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema): void;
    visitDefinitions(node: Oas20Definitions): void;
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
}
/**
 * A composite visitor - this class makes it easy to apply multiple visitors to
 * a node at the same time.  It's basically just an array of visitors.
 */
export declare class Oas30CompositeVisitor extends OasCompositeVisitor implements IOas30NodeVisitor {
    /**
     * Constructor.
     * @param visitors
     */
    constructor(...visitors: IOas30NodeVisitor[]);
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitResponse(node: Oas30Response): void;
    visitLink(node: Oas30Link): void;
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    visitLinkServer(node: Oas30LinkServer): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    visitMediaType(node: Oas30MediaType): void;
    visitExample(node: Oas30Example): void;
    visitEncoding(node: Oas30Encoding): void;
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitPropertySchema(node: Oas30PropertySchema): void;
    visitItemsSchema(node: Oas30ItemsSchema): void;
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
    visitDiscriminator(node: Oas30Discriminator): void;
    visitComponents(node: Oas30Components): void;
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
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
}
export declare class OasCombinedVisitorAdapter implements IOas20NodeVisitor, IOas30NodeVisitor {
    visitDocument(node: OasDocument): void;
    visitInfo(node: OasInfo): void;
    visitContact(node: OasContact): void;
    visitLicense(node: OasLicense): void;
    visitPaths(node: OasPaths): void;
    visitPathItem(node: OasPathItem): void;
    visitOperation(node: OasOperation): void;
    visitParameter(node: Oas20Parameter | Oas30Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition | Oas30ParameterDefinition): void;
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    visitResponses(node: OasResponses): void;
    visitResponse(node: Oas20Response | Oas30Response): void;
    visitResponseDefinition(node: Oas20ResponseDefinition | Oas30ResponseDefinition): void;
    visitSchema(node: OasSchema): void;
    visitHeaders(node: Oas20Headers): void;
    visitHeader(node: OasHeader): void;
    visitExample(node: Oas20Example | Oas30Example): void;
    visitItems(node: Oas20Items): void;
    visitTag(node: OasTag): void;
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    visitSecurityScheme(node: OasSecurityScheme): void;
    visitScopes(node: Oas20Scopes): void;
    visitXML(node: OasXML): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition | Oas30SchemaDefinition): void;
    visitPropertySchema(node: Oas20PropertySchema | Oas30PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema | Oas30AdditionalPropertiesSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema | Oas30AllOfSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema | Oas30ItemsSchema): void;
    visitDefinitions(node: Oas20Definitions): void;
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
    visitExtension(node: OasExtension): void;
    visitMediaType(node: Oas30MediaType): void;
    visitEncoding(node: Oas30Encoding): void;
    visitLink(node: Oas30Link): void;
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    visitLinkServer(node: Oas30LinkServer): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitComponents(node: Oas30Components): void;
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
    visitDiscriminator(node: Oas30Discriminator): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * Base class for visitors that simply want to get called for *every* node
 * in the model.
 */
export declare abstract class OasAllNodeVisitor extends OasCombinedVisitorAdapter {
    protected abstract doVisitNode(node: OasNode): void;
    visitDocument(node: OasDocument): void;
    visitInfo(node: OasInfo): void;
    visitContact(node: OasContact): void;
    visitLicense(node: OasLicense): void;
    visitPaths(node: OasPaths): void;
    visitPathItem(node: OasPathItem): void;
    visitOperation(node: OasOperation): void;
    visitParameter(node: Oas20Parameter | Oas30Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition | Oas30ParameterDefinition): void;
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    visitResponses(node: OasResponses): void;
    visitResponse(node: Oas20Response | Oas30Response): void;
    visitResponseDefinition(node: Oas20ResponseDefinition | Oas30ResponseDefinition): void;
    visitSchema(node: OasSchema): void;
    visitHeaders(node: Oas20Headers): void;
    visitHeader(node: OasHeader): void;
    visitExample(node: Oas20Example | Oas30Example): void;
    visitItems(node: Oas20Items): void;
    visitTag(node: OasTag): void;
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    visitSecurityScheme(node: OasSecurityScheme): void;
    visitScopes(node: Oas20Scopes): void;
    visitXML(node: OasXML): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition | Oas30SchemaDefinition): void;
    visitPropertySchema(node: Oas20PropertySchema | Oas30PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema | Oas30AdditionalPropertiesSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema | Oas30AllOfSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema | Oas30ItemsSchema): void;
    visitDefinitions(node: Oas20Definitions): void;
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
    visitExtension(node: OasExtension): void;
    visitValidationProblem(node: OasValidationProblem): void;
    visitMediaType(node: Oas30MediaType): void;
    visitEncoding(node: Oas30Encoding): void;
    visitLink(node: Oas30Link): void;
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    visitLinkServer(node: Oas30LinkServer): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitComponents(node: Oas30Components): void;
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
    visitDiscriminator(node: Oas30Discriminator): void;
}
