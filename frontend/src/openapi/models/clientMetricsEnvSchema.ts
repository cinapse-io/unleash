/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { DateSchema } from './dateSchema';
import type { ClientMetricsEnvSchemaVariants } from './clientMetricsEnvSchemaVariants';

export interface ClientMetricsEnvSchema {
    featureName: string;
    appName: string;
    environment?: string;
    timestamp?: DateSchema;
    yes?: number;
    no?: number;
    variants?: ClientMetricsEnvSchemaVariants;
    [key: string]: any;
}
