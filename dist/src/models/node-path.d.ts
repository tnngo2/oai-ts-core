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
import { OasNode } from "./node.model";
import { OasDocument } from "./document.model";
import { IOasNodeVisitor } from "../visitors/visitor.iface";
/**
 * Represents a canonical path to a node within a OAS document model.  The node path
 * can be used to identify and locate a single model in the document tree.
 */
export declare class OasNodePath {
    private _segments;
    constructor(path?: string);
    /**
     * Adds a segment to the beginning of the path.
     * @param value
     * @param index
     */
    prependSegment(value: string | number, index?: boolean): void;
    /**
     * Adds a segment to the end of the path.
     * @param value
     * @param index
     */
    appendSegment(value: string | number, index?: boolean): void;
    /**
     * Resolves a path to its target node within the document model.  This basically
     * walks the tree according to the path segments until it reaches the node being
     * referenced.  If the path does not point to a valid node, then this method
     * returns undefined.
     * @param document the document to resolve the path relative to
     * @param visitor an optional visitor to invoke for each node in the path
     * @return {OasNode}
     */
    resolve(document: OasDocument, visitor?: IOasNodeVisitor): OasNode;
    /**
     * Returns true if this path "contains" the given node.  The path is said to contain
     * a node if the node is visited while resolving it.  In other words, if one of the
     * segments of the path represents the node, then this will return true, otherwise it
     * will return false.
     * @param {OasNode} node
     * @return {boolean}
     */
    contains(node: OasNode): boolean;
    /**
     * Converts the path to a string.
     */
    toString(): string;
}
/**
 * Represents a single segment in a model node path.
 */
export declare class OasNodePathSegment {
    private _value;
    private _index;
    constructor(value: string | number, index?: boolean);
    value(): string | number;
    isIndex(): boolean;
    resolve(node: OasNode): OasNode;
    /**
     * Creates a new segment from a string.
     * @param segment
     * @return {OasNodePathSegment}
     */
    static fromString(segment: string): OasNodePathSegment;
}
