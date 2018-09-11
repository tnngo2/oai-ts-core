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
/**
 * Models an OAS 3.0 OAuth Flow object.
 */
export declare abstract class Oas30OAuthFlow extends OasExtensibleNode {
    authorizationUrl: string;
    tokenUrl: string;
    refreshUrl: string;
    scopes: any;
    addScope(scope: string, description: string): void;
    removeScope(scope: string): void;
    getScopes(): string[];
}
/**
 * Implicit OAuth flow.
 */
export declare class Oas30ImplicitOAuthFlow extends Oas30OAuthFlow {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Password OAuth flow.
 */
export declare class Oas30PasswordOAuthFlow extends Oas30OAuthFlow {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * ClientCredentials OAuth flow.
 */
export declare class Oas30ClientCredentialsOAuthFlow extends Oas30OAuthFlow {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * AuthorizationCode OAuth flow.
 */
export declare class Oas30AuthorizationCodeOAuthFlow extends Oas30OAuthFlow {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
