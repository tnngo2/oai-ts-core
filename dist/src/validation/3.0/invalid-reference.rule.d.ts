import { Oas30ValidationRule } from "./common.rule";
import { Oas30Callback, Oas30CallbackDefinition } from "../../models/3.0/callback.model";
import { Oas30Example, Oas30ExampleDefinition } from "../../models/3.0/example.model";
import { Oas30Header, Oas30HeaderDefinition } from "../../models/3.0/header.model";
import { Oas30Link, Oas30LinkDefinition } from "../../models/3.0/link.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../../models/3.0/parameter.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../../models/3.0/request-body.model";
import { Oas30Response, Oas30ResponseDefinition } from "../../models/3.0/response.model";
import { Oas30SecurityScheme } from "../../models/3.0/security-scheme.model";
import { Oas30AdditionalPropertiesSchema, Oas30AllOfSchema, Oas30AnyOfSchema, Oas30ItemsSchema, Oas30NotSchema, Oas30OneOfSchema, Oas30PropertySchema, Oas30Schema, Oas30SchemaDefinition } from "../../models/3.0/schema.model";
/**
 * Implements the Invalid Reference validation rule.  This rule is responsible
 * for reporting whenever a property references another node in the document
 * but that reference is missing or invalid.
 */
export declare class Oas30InvalidReferenceValidationRule extends Oas30ValidationRule {
    /**
     * Returns true if the security requirement name is valid.  It does this by looking up a declared
     * security scheme definition in the document.  If no security scheme definition exists with the
     * given name, then it is invalid.
     * @param securityReqName
     * @param doc
     */
    visitCallback(node: Oas30Callback): void;
    visitCallbackDefinition(node: Oas30CallbackDefinition): void;
    visitExample(node: Oas30Example): void;
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    visitHeader(node: Oas30Header): void;
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    visitLink(node: Oas30Link): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    private visitResponseBase(node);
    visitResponse(node: Oas30Response): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    visitSchema(node: Oas30Schema): void;
    visitAllOfSchema(node: Oas30AllOfSchema): void;
    visitAnyOfSchema(node: Oas30AnyOfSchema): void;
    visitOneOfSchema(node: Oas30OneOfSchema): void;
    visitNotSchema(node: Oas30NotSchema): void;
    visitPropertySchema(node: Oas30PropertySchema): void;
    visitItemsSchema(node: Oas30ItemsSchema): void;
    visitAdditionalPropertiesSchema(node: Oas30AdditionalPropertiesSchema): void;
    visitSchemaDefinition(node: Oas30SchemaDefinition): void;
}
