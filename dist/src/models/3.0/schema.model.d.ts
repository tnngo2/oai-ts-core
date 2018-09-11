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
import { Oas30XML } from "./xml.model";
import { OasSchema } from "../common/schema.model";
import { Oas30ExternalDocumentation } from "./external-documentation.model";
import { Oas30Discriminator } from "./discriminator.model";
/**
 * Models an OAS 3.0 Schema object.  Example:
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
export declare class Oas30Schema extends OasSchema {
    oneOf: OasSchema[];
    anyOf: OasSchema[];
    not: OasSchema;
    discriminator: Oas30Discriminator;
    nullable: boolean;
    writeOnly: boolean;
    deprecated: boolean;
    /**
     * Creates a child Discriminator model.
     * @return {Oas30Discriminator}
     */
    createDiscriminator(): Oas30Discriminator;
    /**
     * Creates a child external documentation model.
     * @return {Oas30ExternalDocumentation}
     */
    createExternalDocumentation(): Oas30ExternalDocumentation;
    /**
     * Creates a child XML model.
     * @return {Oas30XML}
     */
    createXML(): Oas30XML;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createAllOfSchema(): Oas30AllOfSchema;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createOneOfSchema(): Oas30OneOfSchema;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createAnyOfSchema(): Oas30AnyOfSchema;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createNotSchema(): Oas30NotSchema;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createItemsSchema(): Oas30ItemsSchema;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createAdditionalPropertiesSchema(): Oas30AdditionalPropertiesSchema;
    /**
     * Creates a child schema model.
     * @return {Oas30Schema}
     */
    createPropertySchema(propertyName: string): Oas30PropertySchema;
}
/**
 * Subclass of Schema to indicate that this is actually a Property schema (a schema
 * defined as a property of another schema).  References:
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.16
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 */
export declare class Oas30PropertySchema extends Oas30Schema {
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
export declare class Oas30AllOfSchema extends Oas30Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually an "Any Of" schema (a schema
 * included in the array of "anyOf" schemas, which is a property of any valid schema).
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.22
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 */
export declare class Oas30AnyOfSchema extends Oas30Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually an "One Of" schema (a schema
 * included in the array of "oneOf" schemas, which is a property of any valid schema).
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.22
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 */
export declare class Oas30OneOfSchema extends Oas30Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually a "Not" schema (a schema
 * set in the "not" property of a schema).
 *
 * http://json-schema.org/latest/json-schema-validation.html#rfc.section.5.22
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#schemaObject
 */
export declare class Oas30NotSchema extends Oas30Schema {
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
export declare class Oas30ItemsSchema extends Oas30Schema {
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
export declare class Oas30AdditionalPropertiesSchema extends Oas30Schema {
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
}
/**
 * Subclass of Schema to indicate that this is actually a Definition (a schema defined in
 * the "components" section of the OpenAPI document).
 */
export declare class Oas30SchemaDefinition extends Oas30Schema {
    private _name;
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
     * Gets the schema's property name.
     * @return {string}
     */
    name(): string;
}
