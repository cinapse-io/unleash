/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.21.0-beta.1
 */
import type { AdminPermissionSchema } from './adminPermissionSchema';

export interface RoleWithPermissionsSchema {
    id: number;
    type: string;
    name: string;
    description?: string;
    permissions: AdminPermissionSchema[];
}
