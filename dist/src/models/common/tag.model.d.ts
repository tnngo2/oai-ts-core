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
import { OasExternalDocumentation } from "./external-documentation.model";
/**
 * Models an OAS Tag object.
 */
export declare abstract class OasTag extends OasExtensibleNode {
    name: string;
    description: string;
    externalDocs: OasExternalDocumentation;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates an OAS External Documentation object.
     * @return {OasExternalDocumentation}
     */
    abstract createExternalDocumentation(): OasExternalDocumentation;
    /**
     * Sets the external documentation information.
     * @param description
     * @param url
     */
    abstract setExternalDocumentation(description: string, url: string): OasExternalDocumentation;
}
