import { Oas30ValidationRule } from "./common.rule";
import { Oas30Example, Oas30ExampleDefinition } from "../../models/3.0/example.model";
import { Oas30Contact } from "../../models/3.0/contact.model";
import { Oas30XML } from "../../models/3.0/xml.model";
import { Oas30Info } from "../../models/3.0/info.model";
import { Oas30License } from "../../models/3.0/license.model";
import { Oas30Operation } from "../../models/3.0/operation.model";
import { Oas30ExternalDocumentation } from "../../models/3.0/external-documentation.model";
import { Oas30Parameter, Oas30ParameterDefinition } from "../../models/3.0/parameter.model";
import { Oas30Header, Oas30HeaderDefinition } from "../../models/3.0/header.model";
import { Oas30Tag } from "../../models/3.0/tag.model";
import { Oas30SecurityScheme } from "../../models/3.0/security-scheme.model";
import { Oas30Response, Oas30ResponseBase, Oas30ResponseDefinition } from "../../models/3.0/response.model";
import { Oas30AuthorizationCodeOAuthFlow, Oas30ClientCredentialsOAuthFlow, Oas30ImplicitOAuthFlow, Oas30OAuthFlow, Oas30PasswordOAuthFlow } from "../../models/3.0/oauth-flow.model";
import { Oas30PathItem } from "../../models/3.0/path-item.model";
import { Oas30RequestBody, Oas30RequestBodyDefinition } from "../../models/3.0/request-body.model";
import { Oas30Server } from "../../models/3.0/server.model";
import { Oas30ServerVariable } from "../../models/3.0/server-variable.model";
import { Oas30Link, Oas30LinkDefinition } from "../../models/3.0/link.model";
/**
 * Implements the Invalid Property Format validation rule.  This rule is responsible
 * for reporting whenever the value of a property fails to conform to the required
 * *format* for that property.
 */
export declare class Oas30InvalidPropertyFormatValidationRule extends Oas30ValidationRule {
    visitInfo(node: Oas30Info): void;
    protected visitResponseBase(node: Oas30ResponseBase): void;
    visitResponse(node: Oas30Response): void;
    visitResponseDefinition(node: Oas30ResponseDefinition): void;
    visitContact(node: Oas30Contact): void;
    visitExample(node: Oas30Example): void;
    visitExampleDefinition(node: Oas30ExampleDefinition): void;
    visitLink(node: Oas30Link): void;
    visitLinkDefinition(node: Oas30LinkDefinition): void;
    protected visitFlow(node: Oas30OAuthFlow): void;
    visitImplicitOAuthFlow(node: Oas30ImplicitOAuthFlow): void;
    visitPasswordOAuthFlow(node: Oas30PasswordOAuthFlow): void;
    visitClientCredentialsOAuthFlow(node: Oas30ClientCredentialsOAuthFlow): void;
    visitAuthorizationCodeOAuthFlow(node: Oas30AuthorizationCodeOAuthFlow): void;
    visitPathItem(node: Oas30PathItem): void;
    visitRequestBody(node: Oas30RequestBody): void;
    visitRequestBodyDefinition(node: Oas30RequestBodyDefinition): void;
    visitLicense(node: Oas30License): void;
    visitOperation(node: Oas30Operation): void;
    visitExternalDocumentation(node: Oas30ExternalDocumentation): void;
    visitParameter(node: Oas30Parameter): void;
    visitParameterDefinition(node: Oas30ParameterDefinition): void;
    visitHeader(node: Oas30Header): void;
    visitHeaderDefinition(node: Oas30HeaderDefinition): void;
    visitTag(node: Oas30Tag): void;
    visitSecurityScheme(node: Oas30SecurityScheme): void;
    visitServer(node: Oas30Server): void;
    visitServerVariable(node: Oas30ServerVariable): void;
    visitXML(node: Oas30XML): void;
}
