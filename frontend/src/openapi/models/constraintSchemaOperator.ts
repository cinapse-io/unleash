/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */

/**
 * The operator to use when evaluating this constraint. For more information about the various operators, refer to [the strategy constraint operator documentation](https://docs.getunleash.io/reference/strategy-constraints#strategy-constraint-operators).
 */
export type ConstraintSchemaOperator =
    typeof ConstraintSchemaOperator[keyof typeof ConstraintSchemaOperator];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ConstraintSchemaOperator = {
    NOT_IN: 'NOT_IN',
    IN: 'IN',
    STR_ENDS_WITH: 'STR_ENDS_WITH',
    STR_STARTS_WITH: 'STR_STARTS_WITH',
    STR_CONTAINS: 'STR_CONTAINS',
    NUM_EQ: 'NUM_EQ',
    NUM_GT: 'NUM_GT',
    NUM_GTE: 'NUM_GTE',
    NUM_LT: 'NUM_LT',
    NUM_LTE: 'NUM_LTE',
    DATE_AFTER: 'DATE_AFTER',
    DATE_BEFORE: 'DATE_BEFORE',
    SEMVER_EQ: 'SEMVER_EQ',
    SEMVER_GT: 'SEMVER_GT',
    SEMVER_LT: 'SEMVER_LT',
} as const;
