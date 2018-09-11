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
import { OasExtensibleNode } from "../enode.model";
import { IOasNodeVisitor } from "../../visitors/visitor.iface";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30PasswordOAuthFlow } from "./oauth-flow.model";
/**
 * Models an OAS 3.0 OAuth Flows object.
 */
export declare class Oas30OAuthFlows extends OasExtensibleNode {
    implicit: Oas30ImplicitOAuthFlow;
    password: Oas30PasswordOAuthFlow;
    clientCredentials: Oas30ClientCredentialsOAuthFlow;
    authorizationCode: Oas30AuthorizationCodeOAuthFlow;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates an OAuth Flow object.
     * @return {Oas30ImplicitOAuthFlow}
     */
    createImplicitOAuthFlow(): Oas30ImplicitOAuthFlow;
    /**
     * Creates an OAuth Flow object.
     * @return {Oas30PasswordOAuthFlow}
     */
    createPasswordOAuthFlow(): Oas30PasswordOAuthFlow;
    /**
     * Creates an OAuth Flow object.
     * @return {Oas30ClientCredentialsOAuthFlow}
     */
    createClientCredentialsOAuthFlow(): Oas30ClientCredentialsOAuthFlow;
    /**
     * Creates an OAuth Flow object.
     * @return {Oas30AuthorizationCodeOAuthFlow}
     */
    createAuthorizationCodeOAuthFlow(): Oas30AuthorizationCodeOAuthFlow;
}
