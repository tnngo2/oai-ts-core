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
import { OasNode } from "../node.model";
import { Oas20SecurityScheme } from "./security-scheme.model";
import { IOasIndexedNode } from "../inode.model";
/**
 * Models an OAS 2.0 Security Definitions object.  Example:
 *
 * {
 *   "api_key": {
 *     "type": "apiKey",
 *     "name": "api_key",
 *     "in": "header"
 *   },
 *   "petstore_auth": {
 *     "type": "oauth2",
 *     "authorizationUrl": "http://swagger.io/api/oauth/dialog",
 *     "flow": "implicit",
 *     "scopes": {
 *       "write:pets": "modify pets in your account",
 *       "read:pets": "read your pets"
 *     }
 *   }
 * }
 */
export declare class Oas20SecurityDefinitions extends OasNode implements IOasIndexedNode<Oas20SecurityScheme> {
    __instanceof_IOasIndexedNode: boolean;
    private _items;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets a list of all the security scheme names.
     */
    securitySchemeNames(): string[];
    /**
     * Returns a single security scheme by name.
     * @param name
     * @return {Oas20SecurityScheme}
     */
    securityScheme(name: string): Oas20SecurityScheme;
    /**
     * Returns an array of all the security schemes.
     */
    securitySchemes(): Oas20SecurityScheme[];
    /**
     * Adds a security scheme child node.
     * @param name
     * @param scheme
     */
    addSecurityScheme(name: string, scheme: Oas20SecurityScheme): void;
    /**
     * Removes a single security scheme by name.
     * @param name
     */
    removeSecurityScheme(name: string): Oas20SecurityScheme;
    /**
     * Creates a child security scheme object and adds it to the list.
     * @param name
     * @return {Oas20SecurityScheme}
     */
    createSecurityScheme(name: string): Oas20SecurityScheme;
    getItem(name: string): Oas20SecurityScheme;
    getItems(): Oas20SecurityScheme[];
    getItemNames(): string[];
    addItem(name: string, item: Oas20SecurityScheme): void;
    deleteItem(name: string): Oas20SecurityScheme;
}
export declare class Oas20SecuritySchemeItems {
    [key: string]: Oas20SecurityScheme;
}
