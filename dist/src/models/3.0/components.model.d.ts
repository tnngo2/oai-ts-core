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
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { OasExtensibleNode } from "../enode.model";
import { Oas30SchemaDefinition } from "./schema.model";
import { Oas30ResponseDefinition } from "./response.model";
import { Oas30ParameterDefinition } from "./parameter.model";
import { Oas30ExampleDefinition } from "./example.model";
import { Oas30RequestBodyDefinition } from "./request-body.model";
import { Oas30HeaderDefinition } from "./header.model";
import { Oas30SecurityScheme } from "./security-scheme.model";
import { Oas30LinkDefinition } from "./link.model";
import { Oas30CallbackDefinition } from "./callback.model";
/**
 * Models an OAS 3.0 Components object.  Example:
 *
 * {
 *   "schemas": {
 *       "Category": {
 *         "type": "object",
 *         "properties": {
 *           "id": {
 *             "type": "integer",
 *             "format": "int64"
 *           },
 *           "name": {
 *             "type": "string"
 *           }
 *         }
 *       },
 *       "Tag": {
 *         "type": "object",
 *         "properties": {
 *           "id": {
 *             "type": "integer",
 *             "format": "int64"
 *           },
 *           "name": {
 *             "type": "string"
 *           }
 *         }
 *       }
 *     }
 *   },
 *  "parameters": {
 *     "skipParam": {
 *       "name": "skip",
 *       "in": "query",
 *       "description": "number of items to skip",
 *       "required": true,
 *       "schema": {
 *         "type": "integer",
 *         "format": "int32"
 *       }
 *     },
 *     "limitParam": {
 *       "name": "limit",
 *       "in": "query",
 *       "description": "max records to return",
 *       "required": true,
 *       "schema" : {
 *         "type": "integer",
 *         "format": "int32"
 *       }
 *     }
 *   },
 *  "responses": {
 *     "NotFound": {
 *       "description": "Entity not found."
 *     },
 *     "IllegalInput": {
 *       "description": "Illegal input for operation."
 *     },
 *     "GeneralError": {
 *       "description": "General Error",
 *       "content": {
 *         "application/json": {
 *           "schema": {
 *             "$ref": "#/components/schemas/GeneralError"
 *           }
 *         }
 *       }
 *     }
 *   },
 *  "securitySchemes": {
 *     "api_key": {
 *       "type": "apiKey",
 *       "name": "api_key",
 *       "in": "header"
 *     },
 *     "petstore_auth": {
 *       "type": "oauth2",
 *       "flows": {
 *         "implicit": {
 *           "authorizationUrl": "http://example.org/api/oauth/dialog",
 *           "scopes": {
 *             "write:pets": "modify pets in your account",
 *             "read:pets": "read your pets"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export declare class Oas30Components extends OasExtensibleNode {
    schemas: Oas30SchemaComponents;
    responses: Oas30ResponseComponents;
    parameters: Oas30ParameterComponents;
    examples: Oas30ExampleComponents;
    requestBodies: Oas30RequestBodyComponents;
    headers: Oas30HeaderComponents;
    securitySchemes: Oas30SecuritySchemeComponents;
    links: Oas30LinkComponents;
    callbacks: Oas30CallbackComponents;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates a schema definition.
     * @param name
     * @return {Oas30SchemaDefinition}
     */
    createSchemaDefinition(name: string): Oas30SchemaDefinition;
    /**
     * Adds a schema definition.
     * @param name
     * @param schemaDefinition
     */
    addSchemaDefinition(name: string, schemaDefinition: Oas30SchemaDefinition): void;
    /**
     * Gets a single schema definition by name.
     * @param name
     * @return {Oas30SchemaDefinition}
     */
    getSchemaDefinition(name: string): Oas30SchemaDefinition;
    /**
     * Removes a single schema definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30SchemaDefinition}
     */
    removeSchemaDefinition(name: string): Oas30SchemaDefinition;
    /**
     * Gets a list of all schema definitions.
     * @return {Oas30SchemaDefinition[]}
     */
    getSchemaDefinitions(): Oas30SchemaDefinition[];
    /**
     * Creates a response definition.
     * @param name
     * @return {Oas30ResponseDefinition}
     */
    createResponseDefinition(name: string): Oas30ResponseDefinition;
    /**
     * Adds a response definition.
     * @param name
     * @param responseDefinition
     */
    addResponseDefinition(name: string, responseDefinition: Oas30ResponseDefinition): void;
    /**
     * Gets a single response definition by name.
     * @param name
     * @return {Oas30ResponseDefinition}
     */
    getResponseDefinition(name: string): Oas30ResponseDefinition;
    /**
     * Removes a single response definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30ResponseDefinition}
     */
    removeResponseDefinition(name: string): Oas30ResponseDefinition;
    /**
     * Gets a list of all response definitions.
     * @return {Oas30ResponseDefinition[]}
     */
    getResponseDefinitions(): Oas30ResponseDefinition[];
    /**
     * Creates a parameter definition.
     * @param name
     * @return {Oas30ParameterDefinition}
     */
    createParameterDefinition(name: string): Oas30ParameterDefinition;
    /**
     * Adds a parameter definition.
     * @param name
     * @param parameterDefinition
     */
    addParameterDefinition(name: string, parameterDefinition: Oas30ParameterDefinition): void;
    /**
     * Gets a single parameter definition by name.
     * @param name
     * @return {Oas30ParameterDefinition}
     */
    getParameterDefinition(name: string): Oas30ParameterDefinition;
    /**
     * Removes a single parameter definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30ParameterDefinition}
     */
    removeParameterDefinition(name: string): Oas30ParameterDefinition;
    /**
     * Gets a list of all parameter definitions.
     * @return {Oas30ParameterDefinition[]}
     */
    getParameterDefinitions(): Oas30ParameterDefinition[];
    /**
     * Creates a example definition.
     * @param name
     * @return {Oas30ExampleDefinition}
     */
    createExampleDefinition(name: string): Oas30ExampleDefinition;
    /**
     * Adds a example definition.
     * @param name
     * @param exampleDefinition
     */
    addExampleDefinition(name: string, exampleDefinition: Oas30ExampleDefinition): void;
    /**
     * Gets a single example definition by name.
     * @param name
     * @return {Oas30ExampleDefinition}
     */
    getExampleDefinition(name: string): Oas30ExampleDefinition;
    /**
     * Removes a single example definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30ExampleDefinition}
     */
    removeExampleDefinition(name: string): Oas30ExampleDefinition;
    /**
     * Gets a list of all example definitions.
     * @return {Oas30ExampleDefinition[]}
     */
    getExampleDefinitions(): Oas30ExampleDefinition[];
    /**
     * Creates a request body definition.
     * @param name
     * @return {Oas30RequestBodyDefinition}
     */
    createRequestBodyDefinition(name: string): Oas30RequestBodyDefinition;
    /**
     * Adds a request body definition.
     * @param name
     * @param requestBodyDefinition
     */
    addRequestBodyDefinition(name: string, requestBodyDefinition: Oas30RequestBodyDefinition): void;
    /**
     * Gets a single request body definition by name.
     * @param name
     * @return {Oas30RequestBodyDefinition}
     */
    getRequestBodyDefinition(name: string): Oas30RequestBodyDefinition;
    /**
     * Removes a single request body definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30RequestBodyDefinition}
     */
    removeRequestBodyDefinition(name: string): Oas30RequestBodyDefinition;
    /**
     * Gets a list of all request body definitions.
     * @return {Oas30RequestBodyDefinition[]}
     */
    getRequestBodyDefinitions(): Oas30RequestBodyDefinition[];
    /**
     * Creates a header definition.
     * @param name
     * @return {Oas30HeaderDefinition}
     */
    createHeaderDefinition(name: string): Oas30HeaderDefinition;
    /**
     * Adds a header definition.
     * @param name
     * @param headerDefinition
     */
    addHeaderDefinition(name: string, headerDefinition: Oas30HeaderDefinition): void;
    /**
     * Gets a single header definition by name.
     * @param name
     * @return {Oas30HeaderDefinition}
     */
    getHeaderDefinition(name: string): Oas30HeaderDefinition;
    /**
     * Removes a single header definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30HeaderDefinition}
     */
    removeHeaderDefinition(name: string): Oas30HeaderDefinition;
    /**
     * Gets a list of all header definitions.
     * @return {Oas30HeaderDefinition[]}
     */
    getHeaderDefinitions(): Oas30HeaderDefinition[];
    /**
     * Creates a security scheme definition.
     * @param name
     * @return {Oas30SecurityScheme}
     */
    createSecurityScheme(name: string): Oas30SecurityScheme;
    /**
     * Adds a security scheme definition.
     * @param name
     * @param securityScheme
     */
    addSecurityScheme(name: string, securityScheme: Oas30SecurityScheme): void;
    /**
     * Gets a single security scheme definition by name.
     * @param name
     * @return {Oas30SecurityScheme}
     */
    getSecurityScheme(name: string): Oas30SecurityScheme;
    /**
     * Removes a single security scheme definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30SecurityScheme}
     */
    removeSecurityScheme(name: string): Oas30SecurityScheme;
    /**
     * Gets a list of all security scheme definitions.
     * @return {Oas30SecurityScheme[]}
     */
    getSecuritySchemes(): Oas30SecurityScheme[];
    /**
     * Creates a link definition.
     * @param name
     * @return {Oas30LinkDefinition}
     */
    createLinkDefinition(name: string): Oas30LinkDefinition;
    /**
     * Adds a link definition.
     * @param name
     * @param linkDefinition
     */
    addLinkDefinition(name: string, linkDefinition: Oas30LinkDefinition): void;
    /**
     * Gets a single link definition by name.
     * @param name
     * @return {Oas30LinkDefinition}
     */
    getLinkDefinition(name: string): Oas30LinkDefinition;
    /**
     * Removes a single link definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30LinkDefinition}
     */
    removeLinkDefinition(name: string): Oas30LinkDefinition;
    /**
     * Gets a list of all link definitions.
     * @return {Oas30LinkDefinition[]}
     */
    getLinkDefinitions(): Oas30LinkDefinition[];
    /**
     * Creates a callback definition.
     * @param name
     * @return {Oas30CallbackDefinition}
     */
    createCallbackDefinition(name: string): Oas30CallbackDefinition;
    /**
     * Adds a callback definition.
     * @param name
     * @param callbackDefinition
     */
    addCallbackDefinition(name: string, callbackDefinition: Oas30CallbackDefinition): void;
    /**
     * Gets a single callback definition by name.
     * @param name
     * @return {Oas30CallbackDefinition}
     */
    getCallbackDefinition(name: string): Oas30CallbackDefinition;
    /**
     * Removes a single callback definition and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30CallbackDefinition}
     */
    removeCallbackDefinition(name: string): Oas30CallbackDefinition;
    /**
     * Gets a list of all callback definitions.
     * @return {Oas30CallbackDefinition[]}
     */
    getCallbackDefinitions(): Oas30CallbackDefinition[];
}
export declare class Oas30SchemaComponents {
    [key: string]: Oas30SchemaDefinition;
}
export declare class Oas30ResponseComponents {
    [key: string]: Oas30ResponseDefinition;
}
export declare class Oas30ParameterComponents {
    [key: string]: Oas30ParameterDefinition;
}
export declare class Oas30ExampleComponents {
    [key: string]: Oas30ExampleDefinition;
}
export declare class Oas30RequestBodyComponents {
    [key: string]: Oas30RequestBodyDefinition;
}
export declare class Oas30HeaderComponents {
    [key: string]: Oas30HeaderDefinition;
}
export declare class Oas30SecuritySchemeComponents {
    [key: string]: Oas30SecurityScheme;
}
export declare class Oas30LinkComponents {
    [key: string]: Oas30LinkDefinition;
}
export declare class Oas30CallbackComponents {
    [key: string]: Oas30CallbackDefinition;
}
