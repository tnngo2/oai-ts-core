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
import { OasDocument } from "./models/document.model";
import { OasNode, OasValidationProblem } from "./models/node.model";
import { OasNodePath } from "./models/node-path";
import { IOasValidationSeverityRegistry } from "./validation/validation";
/**
 * Represents the global OAS library entry point.  This is used, for example, when
 * using the library in a simple browser environment.  This object exposes the functions
 * and classes
 */
export declare class OasLibraryUtils {
    /**
     * Creates a document from a source.  The source parameter can be any of the following:
     *
     * -- string: if the string starts with a { then the source is assumed to be a properly
     *            formatted OpenAPI document as a JSON string
     * -- string: if the string is a valid OpenAPI version number (e.g. "2.0") then a new
     *            empty document instance will be returned (of the appropriate version)
     * -- object: an already-parsed OpenAPI document as a javascript object
     *
     * @param source
     */
    createDocument(source: any): OasDocument;
    /**
     * Reads a partial model from the given source.  The caller must specify what type of
     * node is represented by the source (it is impossible to determine that automatically).
     * The source may either be a JSON string or an object.
     * @param source
     * @param node
     */
    readNode(source: any, node: OasNode): OasNode;
    /**
     * Converts the given OAS model into a standard JS object.  Any OAS node can be
     * passed here.
     * @param node
     */
    writeNode(node: OasNode): any;
    /**
     * Validates the given OAS model.
     * @param node
     * @param recursive
     * @param severityRegistry
     * @return {any}
     */
    validate(node: OasNode, recursive?: boolean, severityRegistry?: IOasValidationSeverityRegistry): OasValidationProblem[];
    /**
     * Creates a node path for a given data model node.
     * @param node
     * @return {OasNodePath}
     */
    createNodePath(node: OasNode): OasNodePath;
}
