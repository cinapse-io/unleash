/**
 * Generated by orval v6.11.0 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.22.0-beta.55
 */

export interface UserSchema {
    id: number;
    isAPI?: boolean;
    name?: string;
    email?: string;
    username?: string;
    imageUrl?: string;
    inviteLink?: string;
    loginAttempts?: number;
    emailSent?: boolean;
    rootRole?: number;
    seenAt?: string | null;
    createdAt?: string;
    accountType?: string;
}
