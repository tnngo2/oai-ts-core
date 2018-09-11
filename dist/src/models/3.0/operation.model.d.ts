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
import { OasOperation } from "../common/operation.model";
import { Oas30Server } from "./server.model";
import { Oas30RequestBody } from "./request-body.model";
import { Oas30ExternalDocumentation } from "./external-documentation.model";
import { Oas30Responses } from "./responses.model";
import { Oas30SecurityRequirement } from "./security-requirement.model";
import { Oas30Parameter } from "./parameter.model";
import { IOasParameterParent } from "../common/parameter.model";
import { Oas30Callback } from "./callback.model";
/**
 * Models an OAS 3.0 Operation object.  Example:
 *
 * {
 *  "tags": [
 *    "pet"
 *  ],
 *  "summary": "Updates a pet in the store with form data",
 *  "operationId": "updatePetWithForm",
 *  "parameters": [
 *    {
 *      "name": "petId",
 *      "in": "path",
 *      "description": "ID of pet that needs to be updated",
 *      "required": true,
 *      "type": "string"
 *    }
 *  ],
 *  "requestBody": {
 *    "content": {
 *      "application/x-www-form-urlencoded": {
 *        "schema": {
 *          "type": "object",
 *           "properties": {
 *              "name": {
 *                "description": "Updated name of the pet",
 *                "type": "string"
 *              },
 *              "status": {
 *                "description": "Updated status of the pet",
 *                "type": "string"
 *             }
 *           },
 *        "required": ["status"]
 *        }
 *      }
 *    }
 *  },
 *  "responses": {
 *    "200": {
 *      "description": "Pet updated.",
 *      "content": {
 *        "application/json": {},
 *        "application/xml": {}
 *      }
 *    },
 *    "405": {
 *      "description": "Invalid input",
 *      "content": {
 *        "application/json": {},
 *        "application/xml": {}
 *      }
 *    }
 *  },
 *  "security": [
 *    {
 *      "petstore_auth": [
 *        "write:pets",
 *        "read:pets"
 *      ]
 *    }
 *  ]
 * }
 */
export declare class Oas30Operation extends OasOperation implements IOasParameterParent {
    requestBody: Oas30RequestBody;
    callbacks: Oas30Callbacks;
    servers: Oas30Server[];
    /**
     * Constructor.
     * @param method
     */
    constructor(method: string);
    /**
     * Creates a child external documentation model.
     * @return {Oas30ExternalDocumentation}
     */
    createExternalDocumentation(): Oas30ExternalDocumentation;
    /**
     * Creates a child parameter model.
     * @return {Oas30Parameter}
     */
    createParameter(): Oas30Parameter;
    /**
     * Creates a child responses model.
     * @return {Oas30Responses}
     */
    createResponses(): Oas30Responses;
    /**
     * Creates a child security requirement model.
     * @return {Oas30SecurityRequirement}
     */
    createSecurityRequirement(): Oas30SecurityRequirement;
    /**
     * Creates a callback.
     * @param name
     * @return {Oas30Callback}
     */
    createCallback(name: string): Oas30Callback;
    /**
     * Adds a callback.
     * @param name
     * @param callback
     */
    addCallback(name: string, callback: Oas30Callback): void;
    /**
     * Gets a single callback by name.
     * @param name
     * @return {Oas30Callback}
     */
    getCallback(name: string): Oas30Callback;
    /**
     * Removes a single callback and returns it.  This may return null or undefined if none found.
     * @param name
     * @return {Oas30Callback}
     */
    removeCallback(name: string): Oas30Callback;
    /**
     * Gets a list of all callbacks.
     * @return {Oas30Callback[]}
     */
    getCallbacks(): Oas30Callback[];
    /**
     * Creates a child RequestBody model.
     * @return {Oas30Callbacks}
     */
    createRequestBody(): Oas30RequestBody;
    /**
     * Creates an OAS 3.0 Server object.
     * @return {Oas30Info}
     */
    createServer(): Oas30Server;
}
export declare class Oas30Callbacks {
    [key: string]: Oas30Callback;
}
