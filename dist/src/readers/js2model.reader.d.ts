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
import { Oas20Document } from "../models/2.0/document.model";
import { Oas20Info } from "../models/2.0/info.model";
import { Oas20Contact } from "../models/2.0/contact.model";
import { Oas20License } from "../models/2.0/license.model";
import { OasExtensibleNode } from "../models/enode.model";
import { Oas20Tag } from "../models/2.0/tag.model";
import { Oas20ExternalDocumentation } from "../models/2.0/external-documentation.model";
import { Oas20SecurityRequirement } from "../models/2.0/security-requirement.model";
import { Oas20SecurityDefinitions } from "../models/2.0/security-definitions.model";
import { Oas20SecurityScheme } from "../models/2.0/security-scheme.model";
import { Oas20Scopes } from "../models/2.0/scopes.model";
import { Oas20PathItem } from "../models/2.0/path-item.model";
import { Oas20Paths } from "../models/2.0/paths.model";
import { Oas20Operation } from "../models/2.0/operation.model";
import { Oas20Parameter, Oas20ParameterDefinition } from "../models/2.0/parameter.model";
import { Oas20AdditionalPropertiesSchema, Oas20AllOfSchema, Oas20ItemsSchema, Oas20PropertySchema, Oas20Schema, Oas20SchemaDefinition } from "../models/2.0/schema.model";
import { Oas20Items } from "../models/2.0/items.model";
import { Oas20Responses } from "../models/2.0/responses.model";
import { Oas20Response, Oas20ResponseDefinition } from "../models/2.0/response.model";
import { Oas20Headers } from "../models/2.0/headers.model";
import { Oas20Example } from "../models/2.0/example.model";
import { Oas20Header } from "../models/2.0/header.model";
import { Oas20XML } from "../models/2.0/xml.model";
import { Oas20Definitions } from "../models/2.0/definitions.model";
import { Oas20ParametersDefinitions } from "../models/2.0/parameters-definitions.model";
import { Oas20ResponsesDefinitions } from "../models/2.0/responses-definitions.model";
import { IOas20NodeVisitor, IOas30NodeVisitor } from "../visitors/visitor.iface";
import { OasExtension } from "../models/extension.model";
import { OasInfo } from "../models/common/info.model";
import { OasContact } from "../models/common/contact.model";
import { OasLicense } from "../models/common/license.model";
import { Oas30Info } from "../models/3.0/info.model";
import { Oas30Document } from "../models/3.0/document.model";
import { Oas30LinkServer, Oas30Server } from "../models/3.0/server.model";
import { Oas30ServerVariable } from "../models/3.0/server-variable.model";
import { OasExternalDocumentation } from "../models/common/external-documentation.model";
import { Oas30SecurityRequirement } from "../models/3.0/security-requirement.model";
import { Oas30ExternalDocumentation } from "../models/3.0/external-documentation.model";
import { OasTag } from "../models/common/tag.model";
import { Oas30Tag } from "../models/3.0/tag.model";
import { OasXML } from "../models/common/xml.model";
import { OasSecurityRequirement } from "../models/common/security-requirement.model";
import { OasOperation } from "../models/common/operation.model";
import { OasParameterBase } from "../models/common/parameter.model";
import { OasResponses } from "../models/common/responses.model";
import { OasResponse } from "../models/common/response.model";
import { OasSchema } from "../models/common/schema.model";
import { OasPaths } from "../models/common/paths.model";
import { OasPathItem } from "../models/common/path-item.model";
import { Oas30Paths } from "../models/3.0/paths.model";
import { Oas30CallbackPathItem, Oas30PathItem } from "../models/3.0/path-item.model";
import { Oas30Operation } from "../models/3.0/operation.model";
import { Oas30Parameter, Oas30ParameterBase, Oas30ParameterDefinition } from "../models/3.0/parameter.model";
import { Oas30AdditionalPropertiesSchema, Oas30AllOfSchema, Oas30AnyOfSchema, Oas30ItemsSchema, Oas30NotSchema, Oas30OneOfSchema, Oas30PropertySchema, Oas30Schema, Oas30SchemaDefinition } from "../models/3.0/schema.model";
import { Oas30Response, Oas30ResponseBase, Oas30ResponseDefinition } from "../models/3.0/response.model";
import { Oas30Header, Oas30HeaderDefinition } from "../models/3.0/header.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../models/3.0/request-body.model";
import { Oas30MediaType } from "../models/3.0/media-type.model";
import { Oas30Encoding } from "../models/3.0/encoding.model";
import { Oas30Example, Oas30ExampleDefinition } from "../models/3.0/example.model";
import { Oas30Link, Oas30LinkDefinition } from "../models/3.0/link.model";
import { Oas30LinkParameterExpression } from "../models/3.0/link-parameter-expression.model";
import { Oas30Callback, Oas30CallbackDefinition } from "../models/3.0/callback.model";
import { OasDocument } from "../models/document.model";
import { Oas30Components } from "../models/3.0/components.model";
import { Oas30SecurityScheme } from "../models/3.0/security-scheme.model";
import { OasSecurityScheme } from "../models/common/security-scheme.model";
import { Oas30OAuthFlows } from "../models/3.0/oauth-flows.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30OAuthFlow, Oas30PasswordOAuthFlow } from "../models/3.0/oauth-flow.model";
import { Oas30Contact } from "../models/3.0/contact.model";
import { Oas30License } from "../models/3.0/license.model";
import { Oas30Responses } from "../models/3.0/responses.model";
import { Oas30XML } from "../models/3.0/xml.model";
import { Oas30LinkRequestBodyExpression } from "../models/3.0/link-request-body-expression.model";
import { Oas30Discriminator } from "../models/3.0/discriminator.model";
import { OasValidationProblem } from "../models/node.model";
/**
 * This class reads a javascript object and turns it into a OAS model.
 */
export declare abstract class OasJS2ModelReader {
    /**
     * Returns true if the given thing is defined.
     * @param thing
     * @return {boolean}
     */
    protected isDefined(thing: any): boolean;
    /**
     * Reads an OAS Document object from the given javascript data.
     * @param document
     * @param documentModel
     */
    readDocument(document: any, documentModel: OasDocument): void;
    /**
     * Reads a OAS Info object from the given javascript data.
     * @param info
     * @param infoModel
     */
    readInfo(info: any, infoModel: OasInfo): void;
    /**
     * Reads a OAS Contact object from the given javascript data.
     * @param contact
     * @param contactModel
     */
    readContact(contact: any, contactModel: OasContact): void;
    /**
     * Reads a OAS License object from the given javascript data.
     * @param license
     * @param licenseModel
     */
    readLicense(license: any, licenseModel: OasLicense): void;
    /**
     * Reads an OAS Paths object from the given JS data.
     * @param paths
     * @param pathsModel
     */
    readPaths(paths: any, pathsModel: OasPaths): void;
    /**
     * Reads an OAS PathItem object from the given JS data.
     * @param pathItem
     * @param pathItemModel
     */
    readPathItem(pathItem: any, pathItemModel: OasPathItem): void;
    /**
     * Reads an OAS Operation object from the given JS data.
     * @param operation
     * @param operationModel
     */
    readOperation(operation: any, operationModel: OasOperation): void;
    /**
     * Reads an OAS Parameter object from the given JS data.
     * @param parameter
     * @param paramModel
     */
    abstract readParameter(parameter: any, paramModel: OasParameterBase): void;
    /**
     * Reads an OAS Responses object from the given JS data.
     * @param responses
     * @param responsesModel
     */
    readResponses(responses: any, responsesModel: OasResponses): void;
    /**
     * Reads an OAS Response from the given JS data.
     * @param response
     * @param responseModel
     */
    abstract readResponse(response: any, responseModel: OasResponse): void;
    /**
     * Reads an OAS Schema object from the given JS data.
     * @param schema
     * @param schemaModel
     */
    readSchema(schema: any, schemaModel: OasSchema): void;
    /**
     * Reads an OAS XML object from the given JS data.
     * @param xml
     * @param xmlModel
     */
    readXML(xml: any, xmlModel: OasXML): void;
    /**
     * Reads an OAS 2.0 Security Schema object from the given javascript data.
     * @param scheme
     * @param schemeModel
     */
    readSecurityScheme(scheme: any, schemeModel: OasSecurityScheme): void;
    /**
     * Reads an OAS Security Requirement object from the given javascript data.
     * @param sec
     * @param secModel
     */
    readSecurityRequirement(sec: any, secModel: OasSecurityRequirement): void;
    /**
     * Reads a OAS Tag object from the given javascript data.
     * @param tag
     * @param tagModel
     */
    readTag(tag: any, tagModel: OasTag): void;
    /**
     * Reads an OAS External Documentation object from the given javascript data.
     * @param externalDocs
     * @param externalDocsModel
     */
    readExternalDocumentation(externalDocs: any, externalDocsModel: OasExternalDocumentation): void;
    /**
     * Reads all of the extension nodes.  An extension node is characterized by a property
     * that begins with "x-".
     * @param jsData
     * @param model
     */
    readExtensions(jsData: any, model: OasExtensibleNode): void;
}
/**
 * This class reads a javascript object and turns it into a OAS 2.0 model.  It is obviously
 * assumed that the javascript data actually does represent an OAS 2.0 document.
 */
export declare class Oas20JS2ModelReader extends OasJS2ModelReader {
    /**
     * Reads the given javascript data and returns an OAS 2.0 document.  Throws an error if
     * the root 'swagger' property is not found or if its value is not "2.0".
     * @param jsData
     */
    read(jsData: any): Oas20Document;
    /**
     * Reads an OAS 2.0 Document object from the given javascript data.
     * @param document
     * @param documentModel
     */
    readDocument(document: any, documentModel: Oas20Document): void;
    /**
     * Reads an OAS 2.0 Schema object from the given javascript data.
     * @param schema
     * @param schemaModel
     */
    readSchema(schema: any, schemaModel: Oas20Schema): void;
    /**
     * Reads an OAS 2.0 Security Definitions object from the given javascript data.
     * @param securityDefinitions
     * @param securityDefinitionsModel
     */
    readSecurityDefinitions(securityDefinitions: any[], securityDefinitionsModel: Oas20SecurityDefinitions): void;
    /**
     * Reads an OAS 2.0 Security Schema object from the given javascript data.
     * @param scheme
     * @param schemeModel
     */
    readSecurityScheme(scheme: any, schemeModel: Oas20SecurityScheme): void;
    /**
     * Reads an OAS 2.0 Scopes object from the given javascript data.
     * @param scopes
     * @param scopesModel
     */
    readScopes(scopes: any, scopesModel: Oas20Scopes): void;
    /**
     * Reads an OAS 2.0 Operation object from the given JS data.
     * @param operation
     * @param operationModel
     */
    readOperation(operation: any, operationModel: Oas20Operation): void;
    /**
     * Reads an OAS 2.0 Parameter object from the given JS data.
     * @param parameter
     * @param paramModel
     */
    readParameter(parameter: any, paramModel: Oas20Parameter): void;
    /**
     * Reads an OAS 2.0 Parameter Definition from the given JS data.
     * @param parameterDef
     * @param paramDefModel
     */
    readParameterDefinition(parameterDef: any, paramDefModel: Oas20ParameterDefinition): void;
    /**
     * Reads an OAS 2.0 Parameter object from the given JS data.
     * @param parameter
     * @param paramModel
     */
    private readParameterBase(parameter, paramModel);
    /**
     * Reads an OAS 2.0 Items object from the given JS data.
     * @param items
     * @param itemsModel
     */
    readItems(items: any, itemsModel: Oas20Items): void;
    /**
     * Reads an OAS 2.0 Response object from the given JS data.
     * @param response
     * @param responseModel
     */
    readResponse(response: any, responseModel: Oas20Response): void;
    /**
     * Reads an OAS 2.0 Response Definition object from the given JS data.
     * @param response
     * @param responseDefModel
     */
    readResponseDefinition(response: any, responseDefModel: Oas20ResponseDefinition): void;
    /**
     * Reads an OAS 2.0 Response object from the given JS data.
     * @param response
     * @param responseModel
     */
    private readResponseBase(response, responseModel);
    /**
     * Reads an OAS 2.0 Example object from the given JS data.
     * @param examples
     * @param exampleModel
     */
    readExample(examples: any, exampleModel: Oas20Example): void;
    /**
     * Reads an OAS Headers object from the given JS data.
     * @param headers
     * @param headersModel
     */
    readHeaders(headers: any, headersModel: Oas20Headers): void;
    /**
     * Reads an OAS 2.0 Header object from the given JS data.
     * @param header
     * @param headerModel
     */
    readHeader(header: any, headerModel: Oas20Header): void;
    /**
     * Reads an OAS 2.0 Definitions object from the given JS data.
     * @param definitions
     * @param definitionsModel
     */
    readDefinitions(definitions: any, definitionsModel: Oas20Definitions): void;
    /**
     * Reads an OAS 2.0 Parameters Definitions object from the given JS data.
     * @param parameters
     * @param parametersDefinitionsModel
     */
    readParametersDefinitions(parameters: any, parametersDefinitionsModel: Oas20ParametersDefinitions): void;
    /**
     * Reads an OAS 2.0 Responses Definitions object from the given JS data.
     * @param responses
     * @param responsesDefinitionsModel
     */
    readResponsesDefinitions(responses: any, responsesDefinitionsModel: Oas20ResponsesDefinitions): void;
}
/**
 * A visitor used to invoke the appropriate readXYZ() method on the Oas20JS2ModelReader
 * class.  This is useful when reading a partial (non root) model from a JS object.  The
 * caller still needs to first construct the appropriate model prior to reading into it.
 */
export declare class Oas20JS2ModelReaderVisitor implements IOas20NodeVisitor {
    private reader;
    private jsData;
    /**
     * Constructor.
     * @param reader
     * @param jsData
     */
    constructor(reader: Oas20JS2ModelReader, jsData: any);
    visitDocument(node: Oas20Document): void;
    visitInfo(node: Oas20Info): void;
    visitContact(node: Oas20Contact): void;
    visitLicense(node: Oas20License): void;
    visitPaths(node: Oas20Paths): void;
    visitPathItem(node: Oas20PathItem): void;
    visitOperation(node: Oas20Operation): void;
    visitParameter(node: Oas20Parameter): void;
    visitParameterDefinition(node: Oas20ParameterDefinition): void;
    visitExternalDocumentation(node: Oas20ExternalDocumentation): void;
    visitSecurityRequirement(node: Oas20SecurityRequirement): void;
    visitResponses(node: Oas20Responses): void;
    visitResponse(node: Oas20Response): void;
    visitResponseDefinition(node: Oas20ResponseDefinition): void;
    visitSchema(node: Oas20Schema): void;
    visitHeaders(node: Oas20Headers): void;
    visitHeader(node: Oas20Header): void;
    visitExample(node: Oas20Example): void;
    visitItems(node: Oas20Items): void;
    visitTag(node: Oas20Tag): void;
    visitSecurityDefinitions(node: Oas20SecurityDefinitions): void;
    visitSecurityScheme(node: Oas20SecurityScheme): void;
    visitScopes(node: Oas20Scopes): void;
    visitXML(node: Oas20XML): void;
    visitSchemaDefinition(node: Oas20SchemaDefinition): void;
    visitPropertySchema(node: Oas20PropertySchema): void;
    visitAdditionalPropertiesSchema(node: Oas20AdditionalPropertiesSchema): void;
    visitAllOfSchema(node: Oas20AllOfSchema): void;
    visitItemsSchema(node: Oas20ItemsSchema): void;
    visitDefinitions(node: Oas20Definitions): void;
    visitParametersDefinitions(node: Oas20ParametersDefinitions): void;
    visitResponsesDefinitions(node: Oas20ResponsesDefinitions): void;
    visitExtension(node: OasExtension): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * A visitor used to invoke the appropriate readXYZ() method on the Oas20JS2ModelReader
 * class.  This is useful when reading a partial (non root) model from a JS object.  The
 * caller still needs to first construct the appropriate model prior to reading into it.
 */
export declare class Oas30JS2ModelReaderVisitor implements IOas30NodeVisitor {
    private reader;
    private jsData;
    /**
     * Constructor.
     * @param reader
     * @param jsData
     */
    constructor(reader: Oas30JS2ModelReader, jsData: any);
    visitDocument(node: Oas30Document): void;
    visitInfo(node: Oas30Info): void;
    visitContact(node: Oas30Contact): void;
    visitLicense(node: Oas30License): void;
    visitPaths(node: Oas30Paths): void;
    visitPathItem(node: Oas30PathItem): void;
    visitOperation(node: Oas30Operation): void;
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitResponses(node: Oas30Responses): void;
    visitResponse(node: Oas30Response): void;
    visitMediaType(node: Oas30MediaType): void;
    visitEncoding(node: Oas30Encoding): void;
    visitExample(node: Oas30Example): void;
    visitLink(node: Oas30Link): void;
    visitLinkParameterExpression(node: Oas30LinkParameterExpression): void;
    visitLinkRequestBodyExpression(node: Oas30LinkRequestBodyExpression): void;
    visitLinkServer(node: Oas30LinkServer): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitSchema(node: Oas30Schema): void;
    visitDiscriminator(node: Oas30Discriminator): void;
    visitXML(node: Oas30XML): void;
    visitHeader(node: Oas30Header): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitCallback(node: Oas30Callback): void;
    visitCallbackPathItem(node: Oas30CallbackPathItem): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitSecurityRequirement(node: Oas30SecurityRequirement): void;
    visitTag(node: Oas30Tag): void;
    visitExternalDocumentation(node: Oas30ExternalDocumentation): void;
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitPropertySchema(node: Oas30PropertySchema): void;
    visitItemsSchema(node: Oas30ItemsSchema): void;
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
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
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    visitCallbackDefinition(node: Oas30CallbackDefinition): void;
    visitExtension(node: OasExtension): void;
    visitValidationProblem(node: OasValidationProblem): void;
}
/**
 * This class reads a javascript object and turns it into a OAS 3.0 model.  It is obviously
 * assumed that the javascript data actually does represent an OAS 3.0 document.
 */
export declare class Oas30JS2ModelReader extends OasJS2ModelReader {
    /**
     * Reads the given javascript data and returns an OAS 3.0 document.  Throws an error if
     * the root 'openapi' property is not found or if its value is not "3.0.x".
     * @param jsData
     */
    read(jsData: any): Oas30Document;
    /**
     * Reads an OAS 3.0 Document object from the given JS data.
     * @param document
     * @param documentModel
     */
    readDocument(document: any, documentModel: Oas30Document): void;
    /**
     * Reads an OAS 3.0 Components object from the given JS data.
     * @param components
     * @param componentsModel
     */
    readComponents(components: any, componentsModel: Oas30Components): void;
    /**
     * Reads an OAS 3.0 Security Scheme object from the given JS data.
     * @param securityScheme
     * @param securitySchemeModel
     */
    readSecurityScheme(securityScheme: any, securitySchemeModel: Oas30SecurityScheme): void;
    /**
     * Reads an OAS 3.0 OAuth Flows object from the given JS data.
     * @param flows
     * @param flowsModel
     */
    readOAuthFlows(flows: any, flowsModel: Oas30OAuthFlows): void;
    /**
     * Reads an OAS 3.0 OAuth Flow object from the given JS data.
     * @param flow
     * @param flowModel
     */
    readOAuthFlow(flow: any, flowModel: Oas30OAuthFlow): void;
    /**
     * Reads an OAS 3.0 PathItem object from the given JS data.
     * @param pathItem
     * @param pathItemModel
     */
    readPathItem(pathItem: any, pathItemModel: Oas30PathItem): void;
    /**
     * Reads an OAS 3.0 Header object from the given js data.
     * @param header
     * @param headerModel
     */
    readHeader(header: any, headerModel: Oas30Header): void;
    /**
     * Reads an OAS 3.0 Parameter object from the given JS data.
     * @param parameter
     * @param paramModel
     */
    readParameterBase(parameter: any, paramModel: Oas30ParameterBase): void;
    /**
     * Reads an OAS 3.0 Parameter object from the given js data.
     * @param parameter
     * @param paramModel
     */
    readParameter(parameter: any, paramModel: Oas30Parameter): void;
    /**
     * Reads an OAS 3.0 Operation object from the given JS data.
     * @param operation
     * @param operationModel
     */
    readOperation(operation: any, operationModel: Oas30Operation): void;
    /**
     * Reads an OAS 3.0 Callback object from the given JS data.
     * @param callback
     * @param callbackModel
     */
    readCallback(callback: any, callbackModel: Oas30Callback): void;
    /**
     * Reads an OAS 3.0 Request Body object from the given JS data.
     * @param requestBody
     * @param requestBodyModel
     */
    readRequestBody(requestBody: any, requestBodyModel: Oas30RequestBody): void;
    /**
     * Reads an OAS 3.0 Media Type from the given js data.
     * @param mediaType
     * @param mediaTypeModel
     */
    readMediaType(mediaType: any, mediaTypeModel: Oas30MediaType): void;
    /**
     * Reads an OAS 3.0 Example from the given js data.
     * @param example
     * @param exampleModel
     */
    readExample(example: any, exampleModel: Oas30Example): void;
    /**
     * Reads an OAS 3.0 Encoding from the given js data.
     * @param encodingProperty
     * @param encodingModel
     */
    readEncoding(encodingProperty: any, encodingModel: Oas30Encoding): void;
    /**
     * Reads an OAS 3.0 Response object from the given js data.
     * @param response
     * @param responseModel
     */
    readResponse(response: any, responseModel: Oas30Response): void;
    /**
     * Reads an OAS 3.0 Response object from the given JS data.
     * @param response
     * @param responseModel
     */
    readResponseBase(response: any, responseModel: Oas30ResponseBase): void;
    /**
     * Reads an OAS 3.0 Link object from the given js data.
     * @param link
     * @param linkModel
     */
    readLink(link: any, linkModel: Oas30Link): void;
    /**
     * Reads an OAS 3.0 Schema object from the given js data.
     * @param schema
     * @param schemaModel
     */
    readSchema(schema: any, schemaModel: Oas30Schema): void;
    /**
     * Reads a OAS 3.0 Server object from the given javascript data.
     * @param server
     * @param serverModel
     */
    readServer(server: any, serverModel: Oas30Server): void;
    /**
     * Reads an OAS 3.0 Server Variable object from the given JS data.
     * @param serverVariable
     * @param serverVariableModel
     */
    readServerVariable(serverVariable: any, serverVariableModel: Oas30ServerVariable): void;
    /**
     * Reads an OAS 3.0 Discriminator object from the given JS data.
     * @param discriminator
     * @param discriminatorModel
     */
    readDiscriminator(discriminator: any, discriminatorModel: Oas30Discriminator): void;
}
