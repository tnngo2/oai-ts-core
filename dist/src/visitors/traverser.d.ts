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
import { Oas20PathItem } from "../models/2.0/path-item.model";
import { Oas20Operation } from "../models/2.0/operation.model";
import { Oas20Parameter, Oas20ParameterDefinition } from "../models/2.0/parameter.model";
import { Oas20Response, Oas20ResponseDefinition } from "../models/2.0/response.model";
import { Oas20AdditionalPropertiesSchema, Oas20AllOfSchema, Oas20ItemsSchema, Oas20PropertySchema, Oas20Schema, Oas20SchemaDefinition } from "../models/2.0/schema.model";
import { Oas20Header } from "../models/2.0/header.model";
import { Oas20Example } from "../models/2.0/example.model";
import { Oas20Items } from "../models/2.0/items.model";
import { OasNode, OasValidationProblem } from "../models/node.model";
import { OasExtensibleNode } from "../models/enode.model";
import { Oas20Scopes } from "../models/2.0/scopes.model";
import { Oas20SecurityDefinitions } from "../models/2.0/security-definitions.model";
import { Oas20SecurityScheme } from "../models/2.0/security-scheme.model";
import { Oas20Definitions } from "../models/2.0/definitions.model";
import { Oas20ParametersDefinitions } from "../models/2.0/parameters-definitions.model";
import { Oas20ResponsesDefinitions } from "../models/2.0/responses-definitions.model";
import { OasDocument } from "../models/document.model";
import { OasInfo } from "../models/common/info.model";
import { OasContact } from "../models/common/contact.model";
import { OasLicense } from "../models/common/license.model";
import { Oas30Document } from "../models/3.0/document.model";
import { Oas30ServerVariable } from "../models/3.0/server-variable.model";
import { Oas30LinkServer, Oas30Server } from "../models/3.0/server.model";
import { OasSecurityRequirement } from "../models/common/security-requirement.model";
import { OasExternalDocumentation } from "../models/common/external-documentation.model";
import { OasTag } from "../models/common/tag.model";
import { OasPaths } from "../models/common/paths.model";
import { OasPathItem } from "../models/common/path-item.model";
import { OasResponses } from "../models/common/responses.model";
import { OasHeader } from "../models/common/header.model";
import { OasOperation } from "../models/common/operation.model";
import { OasXML } from "../models/common/xml.model";
import { OasSchema } from "../models/common/schema.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../models/3.0/parameter.model";
import { Oas30Response, Oas30ResponseDefinition } from "../models/3.0/response.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../models/3.0/request-body.model";
import { Oas30AdditionalPropertiesSchema, Oas30AllOfSchema, Oas30AnyOfSchema, Oas30ItemsSchema, Oas30NotSchema, Oas30OneOfSchema, Oas30PropertySchema, Oas30Schema, Oas30SchemaDefinition } from "../models/3.0/schema.model";
import { Oas30CallbackPathItem, Oas30PathItem } from "../models/3.0/path-item.model";
import { Oas30Operation } from "../models/3.0/operation.model";
import { Oas30Header, Oas30HeaderDefinition } from "../models/3.0/header.model";
import { Oas30MediaType } from "../models/3.0/media-type.model";
import { Oas30Encoding } from "../models/3.0/encoding.model";
import { IOasIndexedNode } from "../models/inode.model";
import { Oas30Example, Oas30ExampleDefinition } from "../models/3.0/example.model";
import { Oas30Link, Oas30LinkDefinition } from "../models/3.0/link.model";
import { Oas30LinkParameterExpression } from "../models/3.0/link-parameter-expression.model";
import { Oas30Callback, Oas30CallbackDefinition } from "../models/3.0/callback.model";
import { Oas30Components } from "../models/3.0/components.model";
import { Oas30OAuthFlows } from "../models/3.0/oauth-flows.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30PasswordOAuthFlow } from "../models/3.0/oauth-flow.model";
import { OasSecurityScheme } from "../models/common/security-scheme.model";
import { Oas30SecurityScheme } from "../models/3.0/security-scheme.model";
import { Oas20Headers } from "../models/2.0/headers.model";
import { Oas30LinkRequestBodyExpression } from "../models/3.0/link-request-body-expression.model";
import { Oas30Discriminator } from "../models/3.0/discriminator.model";
/**
 * Interface implemented by all traversers.
 */
export interface IOasTraverser {
    traverse(node: OasNode): void;
}
/**
 * Used to traverse an OAS tree and call an included visitor for each node.
 */
export declare abstract class OasTraverser implements IOasNodeVisitor, IOasTraverser {
    protected visitor: IOasNodeVisitor;
    /**
     * Constructor.
     * @param visitor
     */
    constructor(visitor: IOasNodeVisitor);
    /**
     * Called to traverse an OAS 2.0 tree starting at the given node and traversing
     * down until this node and all child nodes have been visited.
     * @param node
     */
    traverse(node: OasNode): void;
    /**
     * Traverse into the given node, unless it's null.
     * @param node
     */
    protected traverseIfNotNull(node: OasNode): void;
    /**
     * Traverse the items of the given array.
     * @param items
     */
    protected traverseArray(items: OasNode[]): void;
    /**
     * Traverse the children of an indexed node.
     * @param indexedNode
     */
    protected traverseIndexedNode(indexedNode: IOasIndexedNode<OasNode>): void;
    /**
     * Traverse the extension nodes, if any are found.
     * @param node
     */
    protected traverseExtensions(node: OasExtensibleNode): void;
    /**
     * Traverse the validation problems, if any exist.  Validation problems would
     * only exist if validation has been performed on the data model.
     * @param {OasNode} node
     */
    protected traverseValidationProblems(node: OasNode): void;
    /**
     * Visit the document.
     * @param node
     */
    abstract visitDocument(node: OasDocument): void;
    /**
     * Visit the info object.
     * @param node
     */
    visitInfo(node: OasInfo): void;
    /**
     * Visit the contact object.
     * @param node
     */
    visitContact(node: OasContact): void;
    /**
     * Visit the license object.
     * @param node
     */
    visitLicense(node: OasLicense): void;
    /**
     * Visit the paths.
     * @param node
     */
    visitPaths(node: OasPaths): void;
    /**
     * Visit the path item.
     * @param node
     */
    abstract visitPathItem(node: OasPathItem): void;
    /**
     * Visit the operation.
     * @param node
     */
    abstract visitOperation(node: OasOperation): void;
    /**
     * Visit the header.
     * @param node
     */
    abstract visitHeader(node: OasHeader): void;
    /**
     * Visit the header.
     * @param node
     */
    abstract visitSchema(node: OasSchema): void;
    /**
 * Visit the responses.
 * @param node
 */
    visitResponses(node: OasResponses): void;
    /**
     * Visit the scopes.
     * @param node
     */
    visitXML(node: OasXML): void;
    /**
     * Visit the security requirement.
     * @param node
     */
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    /**
     * Visit the security scheme.
     * @param node
     */
    abstract visitSecurityScheme(node: OasSecurityScheme): void;
    /**
     * Visit the tag.
     * @param node
     */
    visitTag(node: OasTag): void;
    /**
     * Visit the external doc.
     * @param node
     */
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    /**
     * Visit the extension.
     * @param node
     */
    visitExtension(node: OasExtension): void;
    /**
     * Visit the validation problem.
     * @param {OasValidationProblem} node
     */
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * Used to traverse an OAS 2.0 tree and call an included visitor for each node.
 */
export declare class Oas20Traverser extends OasTraverser implements IOas20NodeVisitor {
    /**
     * Constructor.
     * @param visitor
     */
    constructor(visitor: IOas20NodeVisitor);
    /**
     * Visit the document.
     * @param node
     */
    visitDocument(node: Oas20Document): void;
    /**
     * Visit the path item.
     * @param node
     */
    visitPathItem(node: Oas20PathItem): void;
    /**
     * Visit the operation.
     * @param node
     */
    visitOperation(node: Oas20Operation): void;
    /**
     * Visit a parameter.
     * @param node
     */
    private visitParameterBase(node);
    /**
     * Visit the parameter.
     * @param node
     */
    visitParameter(node: Oas20Parameter): void;
    /**
     * Visit the parameter definition.
     * @param node
     */
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    private visitResponseBase(node);
    /**
     * Visit the response.
     * @param node
     */
    visitResponse(node: Oas20Response): void;
    /**
     * Visit the headers.
     * @param node
     */
    visitHeaders(node: Oas20Headers): void;
    /**
     * Visit the response definition.
     * @param node
     */
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    /**
     * Visit the schema.
     * @param node
     */
    visitSchema(node: Oas20Schema): void;
    /**
     * Visit the schema.
     * @param node
     */
    visitPropertySchema(node: Oas20PropertySchema): void;
    /**
     * Visit the schema.
     * @param node
     */
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    /**
     * Visit the schema.
     * @param node
     */
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    /**
     * Visit the schema.
     * @param node
     */
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    /**
     * Visit the schema.
     * @param node
     */
    visitItemsSchema(node: Oas20ItemsSchema): void;
    /**
     * Visit the header.
     * @param node
     */
    visitHeader(node: Oas20Header): void;
    /**
     * Visit the example.
     * @param node
     */
    visitExample(node: Oas20Example): void;
    /**
     * Visit the items.
     * @param node
     */
    visitItems(node: Oas20Items): void;
    /**
     * Visit the security definitions.
     * @param node
     */
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    /**
     * Visit the security scheme.
     * @param node
     */
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    /**
     * Visit the scopes.
     * @param node
     */
    visitScopes(node: Oas20Scopes): void;
    /**
     * Visit the definitions.
     * @param node
     */
    visitDefinitions(node: Oas20Definitions): void;
    /**
     * Visit the definitions.
     * @param node
     */
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    /**
     * Visit the responses.
     * @param node
     */
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
}
/**
 * Used to traverse an OAS 3.0 tree and call an included visitor for each node.
 */
export declare class Oas30Traverser extends OasTraverser implements IOas30NodeVisitor {
    /**
     * Constructor.
     * @param visitor
     */
    constructor(visitor: IOas30NodeVisitor);
    /**
     * Visit the document.
     * @param node
     */
    visitDocument(node: Oas30Document): void;
    /**
     * Visit the node.
     * @param node
     */
    visitPathItem(node: Oas30PathItem): void;
    /**
     * Visit the node.
     * @param node
     */
    visitOperation(node: Oas30Operation): void;
    /**
     * Visit the node.
     * @param node
     */
    visitHeader(node: Oas30Header): void;
    /**
     * Visit the node.
     * @param node
     */
    visitSchema(node: Oas30Schema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitDiscriminator(node: Oas30Discriminator): void;
    /**
     * Visit the node.
     * @param node
     */
    visitParameter(node: Oas30Parameter): void;
    /**
     * Visit the node.
     * @param node
     */
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    /**
     * Visit a parameter.
     * @param node
     */
    private visitParameterBase(node);
    /**
     * Visit the node.
     * @param node
     */
    visitResponse(node: Oas30Response): void;
    /**
     * Visit the node.
     * @param node
     */
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    /**
     * Visit a response.
     * @param node
     */
    private visitResponseBase(node);
    /**
     * Visit the node.
     * @param node
     */
    visitLink(node: Oas30Link): void;
    /**
     * Visit the node.
     * @param node
     */
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    /**
     * Visit the node.
     * @param node
     */
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    /**
     * Visit the node.
     * @param node
     */
    visitLinkServer(node: Oas30LinkServer): void;
    /**
     * Visit the node.
     * @param node
     */
    visitRequestBody(node: Oas30RequestBody): void;
    /**
     * Visit the node.
     * @param node
     */
    visitMediaType(node: Oas30MediaType): void;
    /**
     * Visit the node.
     * @param node
     */
    visitEncoding(node: Oas30Encoding): void;
    /**
     * Visit the node.
     * @param node
     */
    visitExample(node: Oas30Example): void;
    /**
     * Visit the node.
     * @param node
     */
    visitCallback(node: Oas30Callback): void;
    /**
     * Visit the node.
     * @param node
     */
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    /**
     * Visit the node.
     * @param node
     */
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitNotSchema(node: Oas30NotSchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitPropertySchema(node: Oas30PropertySchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitItemsSchema(node: Oas30ItemsSchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
    /**
     * Visit the node.
     * @param node
     */
    visitComponents(node: Oas30Components): void;
    /**
     * Visit the node.
     * @param node
     */
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    /**
     * Visit the node.
     * @param node
     */
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    /**
     * Visit the node.
     * @param node
     */
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    /**
     * Visit the node.
     * @param node
     */
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    /**
     * Visit the node.
     * @param node
     */
    visitOAuthFlows(node: Oas30OAuthFlows): void;
    /**
     * Visit the node.
     * @param node
     */
    visitImplicitOAuthFlow(node: Oas30ImplicitOAuthFlow): void;
    /**
     * Visit the node.
     * @param node
     */
    visitPasswordOAuthFlow(node: Oas30PasswordOAuthFlow): void;
    /**
     * Visit the node.
     * @param node
     */
    visitClientCredentialsOAuthFlow(node: Oas30ClientCredentialsOAuthFlow): void;
    /**
     * Visit the node.
     * @param node
     */
    visitAuthorizationCodeOAuthFlow(node: Oas30AuthorizationCodeOAuthFlow): void;
    /**
     * Visit the node.
     * @param node
     */
    private visitOAuthFlow(node);
    /**
     * Visit the node.
     * @param node
     */
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    /**
     * Visit the node.
     * @param node
     */
    visitCallbackDefinition(node: Oas30CallbackDefinition): void;
    /**
     * Visit the node.
     * @param node
     */
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
    /**
     * Visit the node.
     * @param node
     */
    visitServer(node: Oas30Server): void;
    /**
     * Visit the node.
     * @param node
     */
    visitServerVariable(node: Oas30ServerVariable): void;
}
/**
 * Used to traverse up an OAS tree and call an included visitor for each node.
 */
export declare abstract class OasReverseTraverser implements IOasNodeVisitor, IOasTraverser {
    protected visitor: IOasNodeVisitor;
    /**
     * Constructor.
     * @param visitor
     */
    constructor(visitor: IOasNodeVisitor);
    /**
     * Traverse the given node.
     * @param node
     */
    traverse(node: OasNode): void;
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
 * Used to traverse up an OAS 2.0 tree and call an included visitor for each node.
 */
export declare class Oas20ReverseTraverser extends OasReverseTraverser implements IOas20NodeVisitor, IOasTraverser {
    /**
     * Constructor.
     * @param visitor
     */
    constructor(visitor: IOas20NodeVisitor);
    visitParameter(node: Oas20Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    visitResponse(node: Oas20Response): void;
    visitHeaders(node: Oas20Headers): void;
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
}
/**
 * Used to traverse up an OAS 3.0 tree and call an included visitor for each node.
 */
export declare class Oas30ReverseTraverser extends OasReverseTraverser implements IOas30NodeVisitor, IOasTraverser {
    /**
     * Constructor.
     * @param visitor
     */
    constructor(visitor: IOas30NodeVisitor);
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
    visitEncoding(node: Oas30Encoding): void;
    visitExample(node: Oas30Example): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
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
