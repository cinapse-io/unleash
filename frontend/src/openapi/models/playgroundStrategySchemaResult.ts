/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { PlaygroundStrategySchemaResultAnyOf } from './playgroundStrategySchemaResultAnyOf';
import type { PlaygroundStrategySchemaResultAnyOfFour } from './playgroundStrategySchemaResultAnyOfFour';

/**
 * The strategy's evaluation result. If the strategy is a custom strategy that Unleash can't evaluate, `evaluationStatus` will be `unknown`. Otherwise, it will be `true` or `false`
 */
export type PlaygroundStrategySchemaResult =
    | PlaygroundStrategySchemaResultAnyOf
    | PlaygroundStrategySchemaResultAnyOfFour;
