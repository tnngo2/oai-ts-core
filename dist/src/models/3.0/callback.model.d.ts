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
import { IOasIndexedNode } from "../inode.model";
import { Oas30CallbackPathItem } from "./path-item.model";
import { IOasReferenceNode } from "../reference.model";
/**
 * Models an OAS 3.0 Callback object.
 */
export declare class Oas30Callback extends OasExtensibleNode implements IOasIndexedNode<Oas30CallbackPathItem>, IOasReferenceNode {
    __instanceof_IOasIndexedNode: boolean;
    private _name;
    private _pathItems;
    $ref: string;
    /**
     * Constructor.
     * @param name
     */
    constructor(name: string);
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets the name of the callback.
     * @return {string}
     */
    name(): string;
    /**
     * Returns a single path item by name.
     * @param name
     * @return {Oas30CallbackPathItem}
     */
    pathItem(name: string): Oas30CallbackPathItem;
    /**
     * Returns an array of all the path items.
     */
    pathItems(): Oas30CallbackPathItem[];
    /**
     * Adds a path item.
     * @param name
     * @param pathItem
     */
    addPathItem(name: string, pathItem: Oas30CallbackPathItem): Oas30CallbackPathItem;
    /**
     * Gets a list of all the path names.
     */
    pathItemNames(): string[];
    /**
     * Removes a single path item child model by name.
     * @param path
     */
    removePathItem(path: string): Oas30CallbackPathItem;
    /**
     * Creates an OAS path item object.
     * @param path
     * @return {Oas30PathItem}
     */
    createPathItem(path: string): Oas30CallbackPathItem;
    getItem(name: string): Oas30CallbackPathItem;
    getItems(): Oas30CallbackPathItem[];
    getItemNames(): string[];
    addItem(name: string, item: Oas30CallbackPathItem): void;
    deleteItem(name: string): Oas30CallbackPathItem;
}
/**
 * Models a callback definition found in the components section of an OAS document.
 */
export declare class Oas30CallbackDefinition extends Oas30Callback {
    /**
     * Constructor.
     * @param name
     */
    constructor(name: string);
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
