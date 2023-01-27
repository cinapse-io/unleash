/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { TagTypeSchema } from './tagTypeSchema';
import type { AddonParameterSchema } from './addonParameterSchema';

export interface AddonTypeSchema {
    name: string;
    displayName: string;
    documentationUrl: string;
    description: string;
    tagTypes?: TagTypeSchema[];
    parameters?: AddonParameterSchema[];
    events?: string[];
}
