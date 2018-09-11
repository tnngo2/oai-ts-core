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
import { OasXML } from "./xml.model";
/**
 * Models an OAS Schema object.
 */
export declare abstract class OasSchema extends OasExtensibleNode {
    $ref: string;
    format: string;
    title: string;
    description: string;
    default: any;
    multipleOf: number;
    maximum: number;
    exclusiveMaximum: boolean;
    minimum: number;
    exclusiveMinimum: boolean;
    maxLength: number;
    minLength: number;
    pattern: string;
    maxItems: number;
    minItems: number;
    uniqueItems: boolean;
    maxProperties: number;
    minProperties: number;
    required: string[];
    enum: any[];
    type: string;
    items: (OasSchema | OasSchema[]);
    allOf: OasSchema[];
    properties: OasSchemaProperties;
    additionalProperties: (boolean | OasSchema);
    readOnly: boolean;
    xml: OasXML;
    externalDocs: OasExternalDocumentation;
    example: any;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Creates a child external documentation model.
     * @return {OasExternalDocumentation}
     */
    abstract createExternalDocumentation(): OasExternalDocumentation;
    /**
     * Creates a child XML model.
     * @return {OasXML}
     */
    abstract createXML(): OasXML;
    /**
     * Creates a child schema model.
     * @return {OasSchema}
     */
    abstract createAllOfSchema(): OasSchema;
    /**
     * Creates a child schema model.
     * @return {OasSchema}
     */
    abstract createItemsSchema(): OasSchema;
    /**
     * Creates a child schema model.
     * @return {OasSchema}
     */
    abstract createAdditionalPropertiesSchema(): OasSchema;
    /**
     * Creates a child schema model.
     * @return {OasSchema}
     */
    abstract createPropertySchema(propertyName: string): OasSchema;
    /**
     * Gets a list of all property names.
     * @return {string[]}
     */
    propertyNames(): string[];
    /**
     * Gets a list of all the properties.
     * @return {OasPropertySchema[]}
     */
    getProperties(): OasSchema[];
    /**
     * Add a property.
     * @param propertyName
     * @param schema
     */
    addProperty(propertyName: string, schema: OasSchema): OasSchema;
    /**
     * Removes a property by name.
     * @param propertyName
     */
    removeProperty(propertyName: string): OasSchema;
    /**
     * Gets a single property.
     * @param propertyName
     * @return {null}
     */
    property(propertyName: string): OasSchema;
}
export declare class OasSchemaProperties {
    [key: string]: OasSchema;
}
