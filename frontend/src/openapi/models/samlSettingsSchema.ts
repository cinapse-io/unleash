/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { SamlSettingsSchemaDefaultRootRole } from './samlSettingsSchemaDefaultRootRole';

export interface SamlSettingsSchema {
    enabled?: boolean;
    entityId: string;
    signOnUrl: string;
    certificate: string;
    signOutUrl?: string;
    spCertificate?: string;
    autoCreate?: boolean;
    defaultRootRole?: SamlSettingsSchemaDefaultRootRole;
    emailDomains?: string;
}
