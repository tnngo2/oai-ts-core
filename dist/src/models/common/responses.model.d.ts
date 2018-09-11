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
import { OasResponse } from "./response.model";
/**
 * Models an OAS Responses object.  The Responses object can have any number of child
 * responses, where the field names are either 'default' or an HTTP status code.
 */
export declare abstract class OasResponses extends OasExtensibleNode implements IOasIndexedNode<OasResponse> {
    __instanceof_IOasIndexedNode: boolean;
    default: OasResponse;
    private _responses;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns a single response by status code.
     * @param statusCode
     * @return {OasResponse}
     */
    response(statusCode: string): OasResponse;
    /**
     * Returns an array of all the responses.
     */
    responses(): OasResponse[];
    /**
     * Adds a response.
     * @param name
     * @param response
     */
    addResponse(statusCode: string, response: OasResponse): OasResponse;
    /**
     * Removes a single response child model.
     * @param statusCode
     */
    removeResponse(statusCode: string): OasResponse;
    /**
     * Gets a list of all the response status codes.
     */
    responseStatusCodes(): string[];
    /**
     * Creates an OAS Response object.
     * @param statusCode
     * @return {OasResponse}
     */
    abstract createResponse(statusCode?: string): OasResponse;
    getItem(name: string): OasResponse;
    getItems(): OasResponse[];
    getItemNames(): string[];
    addItem(name: string, item: OasResponse): void;
    deleteItem(name: string): OasResponse;
}
export declare class OasResponseItems {
    [key: string]: OasResponse;
}
