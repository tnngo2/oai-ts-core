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
import { Oas20SchemaDefinition } from "../models/2.0/schema.model";
import { OasDocument } from "../models/document.model";
import { Oas30SchemaDefinition } from "../models/3.0/schema.model";
export declare class OasSchemaFactory {
    /**
     * Creates a new definition schema from a given example.  This method will analyze the example
     * object and create a new schema object that represents the example.  Note that this method
     * does not support arbitrarily complicated examples, and should be used as a starting point
     * for a schema, not a canonical one.
     * @param document
     * @param name
     * @param example
     * @return {Oas20SchemaDefinition}
     */
    createSchemaDefinitionFromExample(document: OasDocument, name: string, example: any): Oas20SchemaDefinition | Oas30SchemaDefinition;
}
