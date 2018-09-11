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
import { OasNode } from "../node.model";
import { Oas20SchemaDefinition } from "./schema.model";
import { IOasIndexedNode } from "../inode.model";
/**
 * Models an OAS 2.0 Definitions object.  The Definitions object can have any number of child
 * definitions, where the field name is the name of the definition and the value is a schema.
 *
 * {
 *   "Category": {
 *     "type": "object",
 *     "properties": {
 *       "id": {
 *         "type": "integer",
 *         "format": "int64"
 *       },
 *       "name": {
 *         "type": "string"
 *       }
 *     }
 *   },
 *   "Tag": {
 *     "type": "object",
 *     "properties": {
 *       "id": {
 *         "type": "integer",
 *         "format": "int64"
 *       },
 *       "name": {
 *         "type": "string"
 *       }
 *     }
 *   }
 * }
 */
export declare class Oas20Definitions extends OasNode implements IOasIndexedNode<Oas20SchemaDefinition> {
    __instanceof_IOasIndexedNode: boolean;
    private _definitions;
    /**
     * Accepts the given OAS node visitor and calls the appropriate method on it to visit this node.
     * @param visitor
     */
    accept(visitor: IOasNodeVisitor): void;
    /**
     * Returns a single definition schema by name.
     * @param name
     * @return {Oas20SchemaDefinition}
     */
    definition(name: string): Oas20SchemaDefinition;
    /**
     * Returns an array of all the definitions.
     */
    definitions(): Oas20SchemaDefinition[];
    /**
     * Adds a definition.
     * @param name
     * @param schema
     */
    addDefinition(name: string, schema: Oas20SchemaDefinition): Oas20SchemaDefinition;
    /**
     * Removes a definition by name.
     * @param name
     */
    removeDefinition(name: string): Oas20SchemaDefinition;
    /**
     * Gets a list of all the definition names.
     */
    definitionNames(): string[];
    /**
     * Creates an OAS 2.0 Schema object.
     * @param name
     * @return {Oas20SchemaDefinition}
     */
    createSchemaDefinition(name: string): Oas20SchemaDefinition;
    getItem(name: string): Oas20SchemaDefinition;
    getItems(): Oas20SchemaDefinition[];
    getItemNames(): string[];
    addItem(name: string, item: Oas20SchemaDefinition): void;
    deleteItem(name: string): Oas20SchemaDefinition;
}
export declare class Oas20DefinitionItems {
    [key: string]: Oas20SchemaDefinition;
}
