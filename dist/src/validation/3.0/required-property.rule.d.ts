import { Oas30ValidationRule } from "./common.rule";
import { Oas30Discriminator } from "../../models/3.0/discriminator.model";
import { Oas30ExternalDocumentation } from "../../models/3.0/external-documentation.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30PasswordOAuthFlow } from "../../models/3.0/oauth-flow.model";
import { Oas30Info } from "../../models/3.0/info.model";
import { Oas30License } from "../../models/3.0/license.model";
import { Oas30Operation } from "../../models/3.0/operation.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../../models/3.0/parameter.model";
import { Oas30Document } from "../../models/3.0/document.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../../models/3.0/request-body.model";
import { Oas30Server } from "../../models/3.0/server.model";
import { Oas30Tag } from "../../models/3.0/tag.model";
import { Oas30SecurityScheme } from "../../models/3.0/security-scheme.model";
import { Oas30ServerVariable } from "../../models/3.0/server-variable.model";
/**
 * Implements the required property validation rule.  Various model properties are either
 * required or conditionally required.  For example, the "swagger" property MUST exist
 * on the root (document) node.  This rule checks for all required and conditionally
 * required properties on all model types.
 */
export declare class Oas30RequiredPropertyValidationRule extends Oas30ValidationRule {
    /**
     * Called when a required property is missing.
     * @param code
     * @param node
     * @param propertyName
     * @param message
     */
    private requireProperty(code, node, propertyName, message?);
    /**
     * Called when a conditionally required property is missing.
     * @param node
     * @param propertyName
     * @param dependentProperty
     * @param dependentValue
     * @param message
     */
    private requirePropertyWhen(code, node, propertyName, dependentProperty, dependentValue, message?);
    visitDiscriminator(node: Oas30Discriminator): void;
    visitExternalDocumentation(node: Oas30ExternalDocumentation): void;
    private visitOAuthFlow(node);
    visitImplicitOAuthFlow(node: Oas30ImplicitOAuthFlow): void;
    visitPasswordOAuthFlow(node: Oas30PasswordOAuthFlow): void;
    visitClientCredentialsOAuthFlow(node: Oas30ClientCredentialsOAuthFlow): void;
    visitAuthorizationCodeOAuthFlow(node: Oas30AuthorizationCodeOAuthFlow): void;
    visitInfo(node: Oas30Info): void;
    visitLicense(node: Oas30License): void;
    visitOperation(node: Oas30Operation): void;
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitDocument(node: Oas30Document): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    visitServer(node: Oas30Server): void;
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitTag(node: Oas30Tag): void;
}
