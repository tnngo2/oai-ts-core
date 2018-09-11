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
import { Oas20Parameter } from "./parameter.model";
import { Oas20ExternalDocumentation } from "./external-documentation.model";
import { Oas20SecurityRequirement } from "./security-requirement.model";
import { Oas20Responses } from "./responses.model";
import { OasOperation } from "../common/operation.model";
import { IOasParameterParent } from "../common/parameter.model";
/**
 * Models an OAS 2.0 Operation object.  Example:
 *
 * {
 *   "tags": [
 *     "pet"
 *   ],
 *   "summary": "Updates a pet in the store with form data",
 *   "description": "",
 *   "operationId": "updatePetWithForm",
 *   "consumes": [
 *     "application/x-www-form-urlencoded"
 *   ],
 *   "produces": [
 *     "application/json",
 *     "application/xml"
 *   ],
 *   "parameters": [
 *     {
 *       "name": "petId",
 *       "in": "path",
 *       "description": "ID of pet that needs to be updated",
 *       "required": true,
 *       "type": "string"
 *     },
 *     {
 *       "name": "name",
 *       "in": "formData",
 *       "description": "Updated name of the pet",
 *       "required": false,
 *       "type": "string"
 *     },
 *     {
 *       "name": "status",
 *       "in": "formData",
 *       "description": "Updated status of the pet",
 *       "required": false,
 *       "type": "string"
 *     }
 *   ],
 *   "responses": {
 *     "200": {
 *       "description": "Pet updated."
 *     },
 *     "405": {
 *       "description": "Invalid input"
 *     }
 *   },
 *   "security": [
 *     {
 *       "petstore_auth": [
 *         "write:pets",
 *         "read:pets"
 *       ]
 *     }
 *   ]
 * }
 */
export declare class Oas20Operation extends OasOperation implements IOasParameterParent {
    consumes: string[];
    produces: string[];
    schemes: string[];
    /**
     * Constructor.
     * @param method
     */
    constructor(method: string);
    /**
     * Creates a child external documentation model.
     * @return {Oas20ExternalDocumentation}
     */
    createExternalDocumentation(): Oas20ExternalDocumentation;
    /**
     * Creates a child parameter model.
     * @return {Oas20Parameter}
     */
    createParameter(): Oas20Parameter;
    /**
     * Creates a child responses model.
     * @return {Oas20Responses}
     */
    createResponses(): Oas20Responses;
    /**
     * Creates a child security requirement model.
     * @return {Oas20SecurityRequirement}
     */
    createSecurityRequirement(): Oas20SecurityRequirement;
}
