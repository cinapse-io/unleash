/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */
import type { PatchSchemaOp } from './patchSchemaOp';

export interface PatchSchema {
    path: string;
    op: PatchSchemaOp;
    from?: string;
    value?: unknown;
}
