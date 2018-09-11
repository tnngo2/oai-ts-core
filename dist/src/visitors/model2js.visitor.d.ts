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
import { Oas20AdditionalPropertiesSchema, Oas20AllOfSchema, Oas20SchemaDefinition, Oas20ItemsSchema, Oas20PropertySchema, Oas20Schema } from "../models/2.0/schema.model";
import { Oas20Header } from "../models/2.0/header.model";
import { Oas20Example } from "../models/2.0/example.model";
import { Oas20Items } from "../models/2.0/items.model";
import { OasNode, OasValidationProblem } from "../models/node.model";
import { Oas20SecurityDefinitions } from "../models/2.0/security-definitions.model";
import { Oas20SecurityScheme } from "../models/2.0/security-scheme.model";
import { Oas20Scopes } from "../models/2.0/scopes.model";
import { Oas20Definitions } from "../models/2.0/definitions.model";
import { Oas20ParametersDefinitions } from "../models/2.0/parameters-definitions.model";
import { Oas20ResponsesDefinitions } from "../models/2.0/responses-definitions.model";
import { OasDocument } from "../models/document.model";
import { OasInfo } from "../models/common/info.model";
import { OasContact } from "../models/common/contact.model";
import { OasLicense } from "../models/common/license.model";
import { Oas30Document } from "../models/3.0/document.model";
import { Oas30LinkServer, Oas30Server } from "../models/3.0/server.model";
import { Oas30ServerVariable } from "../models/3.0/server-variable.model";
import { OasSecurityRequirement } from "../models/common/security-requirement.model";
import { OasTag } from "../models/common/tag.model";
import { OasExternalDocumentation } from "../models/common/external-documentation.model";
import { OasPaths } from "../models/common/paths.model";
import { Oas30CallbackPathItem, Oas30PathItem } from "../models/3.0/path-item.model";
import { Oas30Operation } from "../models/3.0/operation.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../models/3.0/parameter.model";
import { OasResponses } from "../models/common/responses.model";
import { Oas30Response, Oas30ResponseDefinition } from "../models/3.0/response.model";
import { Oas30AdditionalPropertiesSchema, Oas30AllOfSchema, Oas30AnyOfSchema, Oas30SchemaDefinition, Oas30ItemsSchema, Oas30NotSchema, Oas30OneOfSchema, Oas30PropertySchema, Oas30Schema } from "../models/3.0/schema.model";
import { OasXML } from "../models/common/xml.model";
import { Oas30Header, Oas30HeaderDefinition } from "../models/3.0/header.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../models/3.0/request-body.model";
import { OasPathItem } from "../models/common/path-item.model";
import { OasOperation } from "../models/common/operation.model";
import { OasHeader } from "../models/common/header.model";
import { OasSchema } from "../models/common/schema.model";
import { Oas30Encoding } from "../models/3.0/encoding.model";
import { Oas30MediaType } from "../models/3.0/media-type.model";
import { Oas30Example, Oas30ExampleDefinition } from "../models/3.0/example.model";
import { Oas30Link, Oas30LinkDefinition } from "../models/3.0/link.model";
import { Oas30LinkParameterExpression } from "../models/3.0/link-parameter-expression.model";
import { Oas30Callback, Oas30CallbackDefinition } from "../models/3.0/callback.model";
import { Oas30Components } from "../models/3.0/components.model";
import { Oas30SecurityScheme } from "../models/3.0/security-scheme.model";
import { Oas30OAuthFlows } from "../models/3.0/oauth-flows.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30PasswordOAuthFlow } from "../models/3.0/oauth-flow.model";
import { OasSecurityScheme } from "../models/common/security-scheme.model";
import { Oas20Headers } from "../models/2.0/headers.model";
import { Oas30LinkRequestBodyExpression } from "../models/3.0/link-request-body-expression.model";
import { Oas30Discriminator } from "../models/3.0/discriminator.model";
/**
 * Visitor used to convert from a Model into a JavaScript object.
 */
export declare abstract class OasModelToJSVisitor implements IOasNodeVisitor {
    private _result;
    private _modelIdToJS;
    /**
     * Constructor.
     */
    constructor();
    /**
     * Resets the visitor for a new run.
     */
    reset(): void;
    /**
     * Returns the result that was built up during the visit of the model.
     * @return {any}
     */
    getResult(): any;
    /**
     * Removes any property with a null value from the js object.  This is done recursively.
     * @param object
     */
    private removeNullProperties(object);
    /**
     * Indexes the javascript object by the ModelId of the model it was created from.  This allows
     * quick lookup (mapping) from the model to the JS object.
     * @param node
     * @param jsObject
     */
    protected updateIndex(node: OasNode, jsObject: any): void;
    /**
     * Lookup a JS object from the ID of the model it came from.
     * @param modelId
     * @return {any}
     */
    protected lookup(modelId: number): any;
    /**
     * Lookup a JS object using the model ID of the node's parent.
     * @param node
     * @return {any}
     */
    protected lookupParentJS(node: OasNode): any;
    /**
     * Returns true if the given thing is defined.
     * @param thing
     * @return {boolean}
     */
    protected isDefined(thing: any): boolean;
    /**
     * Merges multiple objects into a single object.  This is done by iterating through
     * all properties of all objects and assigning them as properties of a new object.  The
     * result is a new object with all the properties of all objects passed to the method.
     * @param objects
     */
    protected merge(...objects: any[]): any;
    abstract visitDocument(node: OasDocument): void;
    /**
     * Visits a node.
     * @param node
     */
    visitInfo(node: OasInfo): void;
    /**
     * Visits a node.
     * @param node
     */
    visitContact(node: OasContact): void;
    /**
     * Visits a node.
     * @param node
     */
    visitLicense(node: OasLicense): void;
    /**
     * Visits a node.
     * @param node
     */
    visitPaths(node: OasPaths): void;
    /**
     * Visits a node.
     * @param node
     */
    visitResponses(node: OasResponses): void;
    /**
     * Visits a node.
     * @param node
     */
    visitXML(node: OasXML): void;
    /**
     * Visits a node.
     * @param node
     */
    abstract visitSecurityScheme(node: OasSecurityScheme): void;
    /**
 * Visits a node.
 * @param node
 */
    visitSecurityRequirement(node: OasSecurityRequirement): void;
    /**
     * Visits a node.
     * @param node
     */
    visitTag(node: OasTag): void;
    /**
     * Visits a node.
     * @param node
     */
    visitExternalDocumentation(node: OasExternalDocumentation): void;
    /**
     * Visits a node.
     * @param node
     */
    visitExtension(node: OasExtension): void;
    abstract visitPathItem(node: OasPathItem): void;
    abstract visitOperation(node: OasOperation): void;
    abstract visitHeader(node: OasHeader): void;
    abstract visitSchema(node: OasSchema): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * Visitor used to convert from a Model into a JavaScript object that conforms
 * to the OAS 2.0 specification.  The resulting JS object can be stringified and
 * should be a valid OAS 2.0 document.
 */
export declare class Oas20ModelToJSVisitor extends OasModelToJSVisitor implements IOas20NodeVisitor {
    /**
     * Constructor.
     */
    constructor();
    /**
     * Visits a node.
     * @param node
     */
    visitDocument(node: Oas20Document): void;
    /**
     * Visits a node.
     * @param node
     */
    visitPathItem(node: Oas20PathItem): void;
    /**
     * Visits a node.
     * @param node
     */
    visitOperation(node: Oas20Operation): void;
    /**
     * Creates a JS object for a Parameter base object.
     * @param node
     */
    private createParameterObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitParameter(node: Oas20Parameter): void;
    /**
     * Visits a node.
     * @param node
     */
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    /**
     * Creates a JS object for a response base instance.
     * @param node
     */
    private createResponseObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitHeaders(node: Oas20Headers): void;
    /**
     * Visits a node.
     * @param node
     */
    visitResponse(node: Oas20Response): void;
    /**
     * Visits a node.
     * @param node
     */
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitSchema(node: Oas20Schema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitPropertySchema(node: Oas20PropertySchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitItemsSchema(node: Oas20ItemsSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitHeader(node: Oas20Header): void;
    /**
     * Visits a node.
     * @param node
     */
    visitExample(node: Oas20Example): void;
    /**
     * Visits a node.
     * @param node
     */
    visitItems(node: Oas20Items): void;
    /**
     * Visits a node.
     * @param node
     */
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    /**
     * Visits a node.
     * @param node
     */
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    /**
     * Visits a node.
     * @param node
     */
    visitScopes(node: Oas20Scopes): void;
    /**
     * Visits a node.
     * @param node
     */
    visitDefinitions(node: Oas20Definitions): void;
    /**
     * Visits a node.
     * @param node
     */
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    /**
     * Visits a node.
     * @param node
     */
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
    /**
     * Creates an OAS 2.0 Items javascript object.
     * @param node
     */
    private createItemsObject(node);
    /**
     * Shared method used to create a schema JS object.
     * @param node
     * @return {any}
     */
    private createSchemaObject(node);
}
/**
 * Visitor used to convert from a Model into a JavaScript object that conforms
 * to the OAS 3.0 specification.  The resulting JS object can be stringified and
 * should be a valid OAS 3.0 document.
 */
export declare class Oas30ModelToJSVisitor extends OasModelToJSVisitor implements IOas30NodeVisitor {
    /**
     * Visits a node.
     * @param node
     */
    visitDocument(node: Oas30Document): void;
    /**
     * Visits a node.
     * @param node
     */
    visitPathItem(node: Oas30PathItem): void;
    /**
     * Visits a node.
     * @param node
     */
    visitOperation(node: Oas30Operation): void;
    /**
     * Visits a node.
     * @param node
     */
    visitHeader(node: Oas30Header): void;
    /**
     * Creates a header object.
     * @param node
     */
    private createHeaderObject(node);
    /**
     * Creates a JS object for a Parameter base object.
     * @param node
     */
    private createParameterObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitParameter(node: Oas30Parameter): void;
    /**
     * Creates a JS object for a response base instance.
     * @param node
     */
    private createResponseObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitResponse(node: Oas30Response): void;
    /**
     * Visits a node.
     * @param node
     */
    visitLink(node: Oas30Link): void;
    /**
     * Creates a link object.
     * @param node
     * @return {any}
     */
    private createLinkObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitLinkServer(node: Oas30LinkServer): void;
    /**
     * Visits a node.
     * @param node
     */
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    /**
     * Visits a node.
     * @param node
     */
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    /**
     * Visits a node.
     * @param node
     */
    visitSchema(node: Oas30Schema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitDiscriminator(node: Oas30Discriminator): void;
    /**
     * Visits a node.
     * @param node
     */
    visitPropertySchema(node: Oas30PropertySchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitNotSchema(node: Oas30NotSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitItemsSchema(node: Oas30ItemsSchema): void;
    /**
     * Visits a node.
     * @param node
     */
    visitRequestBody(node: Oas30RequestBody): void;
    /**
     * Creates a request body object.
     * @param node
     * @return {any}
     */
    private createRequestBodyObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitMediaType(node: Oas30MediaType): void;
    /**
     * Visits a node.
     * @param node
     */
    visitEncoding(node: Oas30Encoding): void;
    /**
     * Visits a node.
     * @param node
     */
    visitExample(node: Oas30Example): void;
    /**
     * Creates an example.
     * @param node
     */
    private createExampleObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitCallback(node: Oas30Callback): void;
    /**
     * Visits a node.
     * @param node
     */
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    /**
     * Visits a node.
     * @param node
     */
    visitComponents(node: Oas30Components): void;
    /**
     * Visits a node.
     * @param node
     */
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitOAuthFlows(node: Oas30OAuthFlows): void;
    /**
     * Visits a node.
     * @param node
     */
    visitImplicitOAuthFlow(node: Oas30ImplicitOAuthFlow): void;
    /**
     * Visits a node.
     * @param node
     */
    visitPasswordOAuthFlow(node: Oas30PasswordOAuthFlow): void;
    /**
     * Visits a node.
     * @param node
     */
    visitClientCredentialsOAuthFlow(node: Oas30ClientCredentialsOAuthFlow): void;
    /**
     * Visits a node.
     * @param node
     */
    visitAuthorizationCodeOAuthFlow(node: Oas30AuthorizationCodeOAuthFlow): void;
    /**
     * Creates an OAuth Flow js object.
     * @param node
     * @return {any}
     */
    private createOAuthFlowObject(node);
    /**
     * Visits a node.
     * @param node
     */
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    /**
     * Visits a node.
     * @param node
     */
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitCallbackDefinition(node: Oas30CallbackDefinition): void;
    /**
     * Visits a node.
     * @param node
     */
    visitServer(node: Oas30Server): void;
    /**
     * Visits a node.
     * @param node
     */
    visitServerVariable(node: Oas30ServerVariable): void;
    /**
     * Shared method used to create a schema JS object.
     * @param node
     * @return {any}
     */
    private createSchemaObject(node);
}
