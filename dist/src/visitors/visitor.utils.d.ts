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
import { OasNode } from "../models/node.model";
import { IOasNodeVisitor } from "./visitor.iface";
import { OasNodePath } from "../models/node-path";
import { OasDocument } from "../models/document.model";
export declare enum OasTraverserDirection {
    up = 0,
    down = 1,
}
/**
 * Some static convenience methods for visiting an OAS node/tree.
 */
export declare class OasVisitorUtil {
    /**
     * Convenience method for visiting a single node.
     * @param node
     * @param visitor
     */
    static visitNode(node: OasNode, visitor: IOasNodeVisitor): void;
    /**
     * Convenience method for visiting an OAS tree.  This will traverse and visit
     * all nodes starting with the given one and traversing down.
     * @param node the node to traverse and visit
     * @param visitor the visitor to call for each node visited
     */
    static visitTree(node: OasNode, visitor: IOasNodeVisitor, direction?: OasTraverserDirection): void;
    /**
     * Convenience method for visiting all Nodes in a node path, relative to a given document.
     * @param {OasNodePath} path
     * @param {IOasNodeVisitor} visitor
     * @param {OasDocument} document
     */
    static visitPath(path: OasNodePath, visitor: IOasNodeVisitor, document: OasDocument): void;
}
