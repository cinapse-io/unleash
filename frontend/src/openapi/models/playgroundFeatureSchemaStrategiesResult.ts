/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */

/**
 * The cumulative results of all the feature's strategies. Can be `true`,
                                  `false`, or `unknown`.
                                  This property will only be `unknown`
                                  if one or more of the strategies can't be fully evaluated and the rest of the strategies
                                  all resolve to `false`.
 */
export type PlaygroundFeatureSchemaStrategiesResult = boolean | 'unknown';
