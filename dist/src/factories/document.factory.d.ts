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
import { OasDocument } from "../models/document.model";
/**
 * The main factory for creating new OAS Documents.  This can be used to create a new, empty
 * document.  It can also be used to parse
 */
export declare class OasDocumentFactory {
    /**
     * Creates a new, empty instance of an OAS document.
     * @param oasVersion
     * @return {OasDocument}
     */
    createEmpty(oasVersion: string): OasDocument;
    /**
     * Reads the given object and creates a valid OAS document model.
     * @param oasObject
     * @return {Oas20Document}
     */
    createFromObject(oasObject: any): OasDocument;
    /**
     * Parses the given OAS definition source, parses it into an appropriate data model, and
     * returns it.  The factory will figure out what version of the data model to create based
     * on the content of the source.
     *
     * @param oasDefinitionSource
     * @return {null}
     */
    createFromJson(oasDefinition: string): OasDocument;
}
