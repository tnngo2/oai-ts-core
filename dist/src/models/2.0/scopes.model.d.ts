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
/**
 * Models an OAS 2.0 OAuth Scopes object.  Example:
 *
 * {
 *   "write:pets": "modify pets in your account",
 *   "read:pets": "read your pets"
 * }
 */
export declare class Oas20Scopes extends OasExtensibleNode {
    private _items;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns all the scopes.
     * @return {string[]}
     */
    scopes(): string[];
    /**
     * Gets a scope description.
     * @param scope
     * @return {string}
     */
    getScopeDescription(scope: string): string;
    /**
     * Adds a scope to the map.
     * @param scope
     * @param description
     */
    addScope(scope: string, description: string): void;
    /**
     * Removes a scope.
     * @param scope
     */
    removeScope(scope: string): string;
}
export declare class Oas20ScopeItems {
    [key: string]: string;
}
