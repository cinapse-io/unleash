/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { StrategySchemaParametersItem } from './strategySchemaParametersItem';

export interface StrategySchema {
    name: string;
    displayName: string | null;
    description: string;
    editable: boolean;
    deprecated: boolean;
    parameters: StrategySchemaParametersItem[];
}
