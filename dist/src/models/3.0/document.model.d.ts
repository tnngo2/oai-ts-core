/**
 * @license
 * Copyright 2017 Red Hat
 *
 * Licensed under the Apache License, Version 3.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-3.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { OasDocument } from "../document.model";
import { Oas30Info } from "./info.model";
import { Oas30Server } from "./server.model";
import { Oas30SecurityRequirement } from "./security-requirement.model";
import { Oas30ExternalDocumentation } from "./external-documentation.model";
import { Oas30Tag } from "./tag.model";
import { Oas30Paths } from "./paths.model";
import { Oas30Components } from "./components.model";
/**
 * Models an OAS 3.0.x document.
 */
export declare class Oas30Document extends OasDocument {
    openapi: string;
    servers: Oas30Server[];
    components: Oas30Components;
    constructor();
    /**
     * Returns the spec version of this document.
     */
    getSpecVersion(): string;
    /**
     * Creates an OAS 3.0 info object.
     * @return {Oas30Info}
     */
    createInfo(): Oas30Info;
    /**
     * Creates an OAS 3.0 Server object.
     * @return {Oas30Server}
     */
    createServer(): Oas30Server;
    /**
     * Adds a server.
     * @param url
     * @param description
     * @return {Oas30Server}
     */
    addServer(url: string, description: string): Oas30Server;
    /**
     * Creates an OAS 3.0 Paths object.
     * @return {Oas30Paths}
     */
    createPaths(): Oas30Paths;
    /**
     * Creates an OAS 3.0 Security Requirement object.
     * @return {Oas30SecurityRequirement}
     */
    createSecurityRequirement(): Oas30SecurityRequirement;
    /**
     * Creates an OAS 3.0 Tag object.
     * @return {Oas30Tag}
     */
    createTag(): Oas30Tag;
    /**
     * Adds a tag.
     * @param name
     * @param description
     * @return {Oas30Tag}
     */
    addTag(name: string, description: string): Oas30Tag;
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
    /**
     * Creates an OAS 3.0 Components object.
     * @return {Oas30Components}
     */
    createComponents(): Oas30Components;
}
