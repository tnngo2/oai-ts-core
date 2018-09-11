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
import { OasDocument } from "../document.model";
import { Oas20Info } from "./info.model";
import { Oas20Tag } from "./tag.model";
import { Oas20ExternalDocumentation } from "./external-documentation.model";
import { Oas20SecurityRequirement } from "./security-requirement.model";
import { Oas20SecurityDefinitions } from "./security-definitions.model";
import { Oas20Paths } from "./paths.model";
import { Oas20Definitions } from "./definitions.model";
import { Oas20ParametersDefinitions } from "./parameters-definitions.model";
import { Oas20ResponsesDefinitions } from "./responses-definitions.model";
/**
 * Models an OAS 2.0 document.
 */
export declare class Oas20Document extends OasDocument {
    readonly swagger: string;
    host: string;
    basePath: string;
    schemes: string[];
    consumes: string[];
    produces: string[];
    definitions: Oas20Definitions;
    parameters: Oas20ParametersDefinitions;
    responses: Oas20ResponsesDefinitions;
    securityDefinitions: Oas20SecurityDefinitions;
    constructor();
    /**
     * Returns the spec version of this document.
     */
    getSpecVersion(): string;
    /**
     * Creates an OAS 2.0 info object.
     * @return {Oas20Info}
     */
    createInfo(): Oas20Info;
    /**
     * Creates an OAS 2.0 Definitions object.
     * @return {Oas20Info}
     */
    createDefinitions(): Oas20Definitions;
    /**
     * Creates an OAS 2.0 Tag object.
     * @return {Oas20Info}
     */
    createTag(): Oas20Tag;
    /**
     * Adds a tag.
     * @param name
     * @param description
     * @return {Oas20Tag}
     */
    addTag(name: string, description: string): Oas20Tag;
    /**
     * Creates an OAS 2.0 Security Definition object.
     * @return {Oas20SecurityDefinition}
     */
    createSecurityDefinitions(): Oas20SecurityDefinitions;
    /**
     * Creates an OAS 2.0 Security Requirement object.
     * @return {Oas20SecurityRequirement}
     */
    createSecurityRequirement(): Oas20SecurityRequirement;
    /**
     * Creates an OAS 2.0 External Documentation object.
     * @return {Oas20ExternalDocumentation}
     */
    createExternalDocumentation(): Oas20ExternalDocumentation;
    /**
     * Sets the external documentation information.
     * @param description
     * @param url
     */
    setExternalDocumentation(description: string, url: string): Oas20ExternalDocumentation;
    /**
     * Creates an OAS 2.0 Paths object.
     * @return {Oas20Paths}
     */
    createPaths(): Oas20Paths;
    /**
     * Creates an OAS 2.0 Responses Definitions object.
     * @return {Oas20ResponsesDefinitions}
     */
    createResponsesDefinitions(): Oas20ResponsesDefinitions;
    /**
     * Creates an OAS 2.0 Responses Definitions object.
     * @return {Oas20ParametersDefinitions}
     */
    createParametersDefinitions(): Oas20ParametersDefinitions;
}
