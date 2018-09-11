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
import { IOas20Items, Oas20Items } from "./items.model";
import { OasHeader } from "../common/header.model";
/**
 * Models an OAS 2.0 Header object.  Example:
 *
 * {
 *   "description": "The number of allowed requests in the current period",
 *   "type": "integer"
 * }
 */
export declare class Oas20Header extends OasHeader implements IOas20Items {
    type: string;
    format: string;
    items: Oas20Items;
    collectionFormat: string;
    default: any;
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
    enum: any[];
    multipleOf: number;
    /**
     * Constructor.
     * @param headerName
     */
    constructor(headerName: string);
    /**
     * Creates a child items model.
     * @return {Oas20Items}
     */
    createItems(): Oas20Items;
}
