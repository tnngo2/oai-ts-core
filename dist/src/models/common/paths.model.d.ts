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
import { OasPathItem } from "./path-item.model";
import { IOasIndexedNode } from "../inode.model";
/**
 * Models an OAS Paths object.  The Paths object can have any number of child
 * paths, where the field name begins with '/'.
 */
export declare abstract class OasPaths extends OasExtensibleNode implements IOasIndexedNode<OasPathItem> {
    __instanceof_IOasIndexedNode: boolean;
    private _pathItems;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns a single path item by name.
     * @param name
     * @return {OasPathItem}
     */
    pathItem(name: string): OasPathItem;
    /**
     * Returns an array of all the path items.
     */
    pathItems(): OasPathItem[];
    /**
     * Adds a path item.
     * @param name
     * @param pathItem
     */
    addPathItem(name: string, pathItem: OasPathItem): OasPathItem;
    /**
     * Gets a list of all the path names.
     */
    pathItemNames(): string[];
    /**
     * Removes a single path item child model by name.
     * @param path
     */
    removePathItem(path: string): OasPathItem;
    /**
     * Creates an OAS path item object.
     * @param path
     * @return {OasPathItem}
     */
    abstract createPathItem(path: string): OasPathItem;
    getItem(name: string): OasPathItem;
    getItems(): OasPathItem[];
    getItemNames(): string[];
    addItem(name: string, item: OasPathItem): void;
    deleteItem(name: string): OasPathItem;
}
export declare class OasPathItems {
    [key: string]: OasPathItem;
}
