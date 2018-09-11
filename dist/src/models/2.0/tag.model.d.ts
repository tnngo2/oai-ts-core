import { Oas20ExternalDocumentation } from "./external-documentation.model";
import { OasTag } from "../common/tag.model";
/**
 * Models an OAS 2.0 Tag object.  Example:
 *
 * {
 *     "name": "pet",
 *     "description": "Pets operations"
 * }
 */
export declare class Oas20Tag extends OasTag {
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
}
