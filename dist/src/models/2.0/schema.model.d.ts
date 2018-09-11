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
import { Oas20ExternalDocumentation } from "./external-documentation.model";
import { Oas20XML } from "./xml.model";
import { OasSchema } from "../common/schema.model";
/**
 * Models an OAS 2.0 Schema object.  Example:
 *
 * {
 *   "type": "object",
 *   "required": [
 *     "name"
 *   ],
 *   "properties": {
 *     "name": {
 *       "type": "string"
 *     },
 *     "address": {
 *       "$ref": "#/definitions/Address"
 *     },
 *     "age": {
 *       "type": "integer",
 *       "format": "int32",
 *       "minimum": 0
 *     }
 *   }
 */
export declare class Oas20Schema extends OasSchema {
    discriminator: string;
    /**
     * Creates a child external documentation model.
     * @return {Oas20ExternalDocumentation}
     */
    createExternalDocumentation(): Oas20ExternalDocumentation;
    /**
     * Creates a child XML model.
     * @return {Oas20XML}
     */
    createXML(): Oas20XML;
    /**
     * Creates a child schema model.
     * @return {Oas20Schema}
     */
    createAllOfSchema(): Oas20AllOfSchema;
    /**
     * Creates a child schema model.
     * @return {Oas20Schema}
     */
    createItemsSchema(): Oas20ItemsSchema;
    /**
     * Creates a child schema model.
     * @return {Oas20Schema}
     */
    createAdditionalPropertiesSchema(): Oas20AdditionalPropertiesSchema;
    /**
     * Creates a child schema model.
     * @return {Oas20Schema}
     */
    createPropertySchema(propertyName: string): Oas20PropertySchema;
}
/**
 * Subclass of Schema to indicate that this is actually a Property schema (a schema
 * defined as a property of another schema).  References:
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.16
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 */
export declare class Oas20PropertySchema extends Oas20Schema {
    private _propertyName;
    /**
     * Constructor.
     * @param propertyName
     */
    constructor(propertyName: string);
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets the schema's property name.
     * @return {string}
     */
    propertyName(): string;
}
/**
 * Subclass of Schema to indicate that this is actually an "All Of" schema (a schema
 * included in the array of "allOf" schemas, which is a property of any valid schema).
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.22
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 *
 * Example:
 *
 * {
 *   "allOf": [
 *     { "type": "string" },
 *     { "maxLength": 5 }
 *   ]
 * }
 */
export declare class Oas20AllOfSchema extends Oas20Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually an "items" schema (a schema
 * that is assigned to the 'items' property).
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.9
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 *
 * Example:
 *
 * {
 *   "items": [
 *     { "type": "string" },
 *     { "maxLength": 5 }
 *   ]
 * }
 */
export declare class Oas20ItemsSchema extends Oas20Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually an Additional Properties schema (a schema
 * defined as a property of another schema).  References:
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.18
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 */
export declare class Oas20AdditionalPropertiesSchema extends Oas20Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually a Definition schema (a schema defined in
 * the "definitions" section of the OpenAPI document).  References:
 *
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#definitionsObject
 */
export declare class Oas20SchemaDefinition extends Oas20Schema {
    private _definitionName;
    /**
     * Constructor.
     * @param definitionName
     */
    constructor(definitionName: string);
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Gets the schema's property name.
     * @return {string}
     */
    definitionName(): string;
}
