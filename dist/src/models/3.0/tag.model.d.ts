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
import { Oas30ExternalDocumentation } from "./external-documentation.model";
import { OasTag } from "../common/tag.model";
/**
 * Models an OAS 3.0 Tag object.  Example:
 *
 * {
 *     "name": "pet",
 *     "description": "Pets operations"
 * }
 */
export declare class Oas30Tag extends OasTag {
    /**
     * Creates an OAS 3.0 External Documentation object.
     * @return {Oas30ExternalDocumentation}
     */
    createExternalDocumentation(): Oas30ExternalDocumentation;
    /**
     * Sets the external documentation information.
     * @param description
     * @param url
     */
    setExternalDocumentation(description: string, url: string): Oas30ExternalDocumentation;
}
