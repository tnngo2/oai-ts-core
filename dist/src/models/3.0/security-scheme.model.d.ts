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
import { OasSecurityScheme } from "../common/security-scheme.model";
import { Oas30OAuthFlows } from "./oauth-flows.model";
/**
 * Models an OAS 3.0 Security Scheme object.  Example:
 *
 * {
 *   "type": "oauth2",
 *   "flows": {
 *     "implicit": {
 *       "authorizationUrl": "https://example.com/api/oauth/dialog",
 *       "scopes": {
 *         "write:pets": "modify pets in your account",
 *         "read:pets": "read your pets"
 *       }
 *     }
 *   }
 * }
 */
export declare class Oas30SecurityScheme extends OasSecurityScheme {
    $ref: string;
    scheme: string;
    bearerFormat: string;
    flows: Oas30OAuthFlows;
    openIdConnectUrl: string;
    /**
     * Must construct this with a name.
     * @param name
     */
    constructor(name: string);
    /**
     * Creates a OAuth Flows object.
     */
    createOAuthFlows(): Oas30OAuthFlows;
}
