/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { FeatureSchema } from './featureSchema';
import type { FeatureStrategySchema } from './featureStrategySchema';
import type { FeatureEnvironmentSchema } from './featureEnvironmentSchema';
import type { ContextFieldSchema } from './contextFieldSchema';
import type { FeatureTagSchema } from './featureTagSchema';
import type { SegmentSchema } from './segmentSchema';

export interface ExportResultSchema {
    features: FeatureSchema[];
    featureStrategies: FeatureStrategySchema[];
    featureEnvironments?: FeatureEnvironmentSchema[];
    contextFields?: ContextFieldSchema[];
    featureTags?: FeatureTagSchema[];
    segments?: SegmentSchema[];
}
