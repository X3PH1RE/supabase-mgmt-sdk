# Supabase API (v1)

Supabase API generated from the OpenAPI specification. Visit [https://supabase.com/docs](https://supabase.com/docs) for a complete documentation.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 87 entities and 169 HTTP routes. No SDK targets are selected.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Action

SDK operations: `load`, `update`.

### Activate

SDK operations: `create`.

### Analytics

Results: Prometheus / OpenMetrics text exposition.

SDK operations: `load`.

### ApiKey

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### Auth

SDK operations: `load`, `update`.

Key fields to recognise:

- `security_refresh_token_reuse_interval`: Refresh token reuse interval in seconds.
- `security_update_password_require_current_password`: Require the user&#39;s current password when updating their password.
- `sessions_inactivity_timeout`: Session inactivity timeout in hours.
- `sessions_timebox`: Session timebox in hours.

### Billing

SDK operations: `remove`, `update`.

### Branch

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `latest_check_run_id`: This field is deprecated and will not be populated.
- `notify_url`: HTTP endpoint to receive branch status updates.
- `postgres_engine`: Postgres engine version.
- `release_channel`: Release channel.
- `reset_on_push`: This field is deprecated and will be ignored.

### BranchUpdateResponseOutput

SDK operations: `create`.

### BulkUpdateFunctionResponseOutput

SDK operations: `update`.

### CreateProviderResponseOutput

SDK operations: `create`.

Key fields to recognise:

- `type`: What type of provider will be created

### CreateRoleResponseOutput

SDK operations: `create`.

### Database

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `read_replica_region`: Region you want your read replica to reside in

### DatabaseUpgradeStatusResponseOutput

SDK operations: `load`.

### Deploy

SDK operations: `create`.

### Disk

SDK operations: `load`.

### DiskAutoscaleConfigOutput

SDK operations: `load`.

Key fields to recognise:

- `growth_percent`: Growth percentage for disk autoscaling
- `max_size_gb`: Maximum limit the disk size will grow to in GB
- `min_increment_gb`: Minimum increment size for disk autoscaling in GB

### DiskUtilMetricsResponseOutput

SDK operations: `load`.

### Domain

SDK operations: `remove`.

### EdgeFunction

SDK operations: `remove`.

### Environment

SDK operations: `load`, `remove`.

### Function

SDK operations: `create`, `list`, `load`, `update`.

### FunctionscombinedStat

SDK operations: `list`.

### Invite

SDK operations: `create`.

### Jit

SDK operations: `create`, `list`, `update`.

### JitAccessResponseOutput

SDK operations: `create`.

### JitListAccessResponseOutput

SDK operations: `list`.

### Legacy

SDK operations: `load`, `update`.

### ListActionRunResponseOutput

SDK operations: `list`.

### ListProjectAddonsResponseOutput

SDK operations: `list`.

### ListProvidersResponseOutput

SDK operations: `list`.

### Log

SDK operations: `list`.

### NetworkBanResponseEnrichedOutput

SDK operations: `create`.

### NetworkBanResponseOutput

SDK operations: `create`.

### NetworkRestriction

SDK operations: `load`, `update`.

Key fields to recognise:

- `config`: At any given point in time, this is the config that the user has requested be applied to their project. The `status` field indicates if it has been applied to the project, or is pending. When an updated config is received, the applied config is moved to `old_config`.
- `old_config`: Populated when a new config has been received, but not registered as successfully applied to a project.

### NetworkRestrictionsResponseOutput

SDK operations: `create`.

### OAuth

SDK operations: `create`, `load`.

### OAuthTokenResponseOutput

SDK operations: `create`.

Key fields to recognise:

- `refresh_token`: The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`.

### Organization

SDK operations: `create`.

### OrganizationProjectClaimResponseOutput

SDK operations: `load`.

### OrganizationProjectsResponseOutput

SDK operations: `list`.

### Performance

SDK operations: `list`.

### Pgsodium

SDK operations: `load`, `update`.

Key fields to recognise:

- `root_key`: The pgsodium root key: 32 bytes, hex-encoded (64 characters).

### Postgre

SDK operations: `load`, `update`.

Key fields to recognise:

- `checkpoint_timeout`: Default unit: s
- `log_autovacuum_min_duration`: Default unit: ms
- `log_startup_progress_interval`: Default unit: ms
- `statement_timeout`: Default unit: ms
- `wal_sender_timeout`: Default unit: ms

### Postgrest

SDK operations: `load`.

Key fields to recognise:

- `db_pool`: If `null`, the value is automatically configured based on compute size.
- `db_pool_acquisition_timeout`: If `null`, the value is automatically configured to 10.

### Project

SDK operations: `create`, `remove`.

### ProjectAvailableRestoreVersionsResponseOutput

SDK operations: `list`.

### ProjectClaimTokenResponseOutput

SDK operations: `load`.

### ProjectUpgradeEligibilityResponseOutput

SDK operations: `list`.

### ProjectUpgradeInitiateResponseOutput

SDK operations: `create`.

### Provider

SDK operations: `load`, `remove`.

### ReadOnlyStatusResponseOutput

SDK operations: `load`.

### Realtime

Results: Realtime connections shutdown successfully; Gets project&#39;s realtime configuration.

SDK operations: `create`, `load`, `update`.

Key fields to recognise:

- `admin_suspended_at`: If set, the Realtime service has been suspended by an admin.
- `connection_pool`: Sets connection pool size for Realtime Authorization
- `max_bytes_per_second`: Sets maximum number of bytes per second rate per channel limit
- `max_channels_per_client`: Sets maximum number of channels per client rate limit
- `max_concurrent_users`: Sets maximum number of concurrent users rate limit

### RegionsInfoOutput

SDK operations: `load`.

### RolesResponseOutput

SDK operations: `remove`.

### Secret

SDK operations: `create`, `list`, `remove`.

### Security

SDK operations: `list`.

### SigningKey

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### SigningKeyResponseOutput

SDK operations: `create`, `load`.

### Snippet

SDK operations: `list`, `load`.

Key fields to recognise:

- `favorite`: Deprecated: Rely on root-level favorite property instead.

### SslEnforcement

SDK operations: `load`, `update`.

### Storage

SDK operations: `load`, `update`.

### StreamableFile

SDK operations: `load`.

### SubdomainAvailabilityResponseOutput

SDK operations: `create`.

### SupavisorConfigResponseOutput

SDK operations: `list`.

Key fields to recognise:

- `connectionString`: Use `connection_string` instead

### ThirdPartyAuth

SDK operations: `create`, `list`, `load`, `remove`.

### Typescript

SDK operations: `load`.

### UpdateCustomHostnameResponseOutput

SDK operations: `create`, `load`.

### UpdateProviderResponseOutput

SDK operations: `update`.

### UpdateSupavisorConfigResponseOutput

SDK operations: `update`.

Key fields to recognise:

- `pool_mode`: Dedicated pooler mode for the project

### V1BackupScheduleResponseOutput

SDK operations: `load`, `update`.

Key fields to recognise:

- `schedule_for`: Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.
- `updated_at`: Timestamp of when the backup schedule was last updated.

### V1BackupsResponseOutput

SDK operations: `list`.

### V1GetMigrationResponseOutput

SDK operations: `load`.

### V1GetUsageApiCountResponseOutput

SDK operations: `list`.

### V1GetUsageApiRequestsCountResponseOutput

SDK operations: `list`.

### V1ListEntitlementsResponseOutput

SDK operations: `list`.

### V1ListMigrationsResponseOutput

SDK operations: `list`.

### V1OrganizationMemberResponseOutput

SDK operations: `list`.

### V1OrganizationSlugResponseOutput

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `id`: Deprecated: Use `slug` instead.
- `slug`: Organization slug

### V1PgbouncerConfigResponseOutput

SDK operations: `load`.

### V1ProfileResponseOutput

SDK operations: `load`.

### V1ProjectRefResponseOutput

SDK operations: `remove`, `update`.

### V1ProjectWithDatabaseResponseOutput

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: Creation timestamp
- `db_pass`: Database password
- `desired_instance_size`: Desired instance size.
- `high_availability`: [Experimental] Whether to enable high availability for the project.
- `id`: Deprecated: Use `ref` instead.

### V1RestorePoint

SDK operations: `create`, `load`.

### V1ServiceHealthResponseOutput

SDK operations: `list`.

Key fields to recognise:

- `healthy`: Deprecated. Use `status` instead.

### V1StorageBucketResponseOutput

SDK operations: `list`.

### V1UpdatePasswordResponseOutput

SDK operations: `update`.

### VanitySubdomain

SDK operations: `load`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Action | `load` | `GET /v1/projects/{ref}/actions/{run_id}` | Required |
| Action | `update` | `PATCH /v1/projects/{ref}/actions/{run_id}/status` | Required |
| Activate | `create` | `POST /v1/projects/{ref}/vanity-subdomain/activate` | Required |
| Analytics | `load` | `GET /v1/projects/{ref}/analytics/endpoints/logs.all` | Required |
| Analytics | `load` | `GET /v1/projects/{ref}/analytics/endpoints/metrics` | Required |
| ApiKey | `create` | `POST /v1/projects/{ref}/api-keys` | Required |
| ApiKey | `list` | `GET /v1/projects/{ref}/api-keys` | Required |
| ApiKey | `load` | `GET /v1/projects/{ref}/api-keys/{id}` | Required |
| ApiKey | `remove` | `DELETE /v1/projects/{ref}/api-keys/{id}` | Required |
| ApiKey | `update` | `PATCH /v1/projects/{ref}/api-keys/{id}` | Required |
| Auth | `load` | `GET /v1/projects/{ref}/config/auth` | Required |
| Auth | `update` | `PATCH /v1/projects/{ref}/config/auth` | Required |
| Billing | `remove` | `DELETE /v1/projects/{ref}/billing/addons/{addon_variant}` | Required |
| Billing | `update` | `PATCH /v1/projects/{ref}/billing/addons` | Required |
| Branch | `create` | `POST /v1/branches/{branch_id_or_ref}/restore` | Required |
| Branch | `create` | `POST /v1/projects/{ref}/branches` | Required |
| Branch | `list` | `GET /v1/projects/{ref}/branches` | Required |
| Branch | `load` | `GET /v1/projects/{ref}/branches/{name}` | Required |
| Branch | `load` | `GET /v1/branches/{branch_id_or_ref}` | Required |
| Branch | `remove` | `DELETE /v1/branches/{branch_id_or_ref}` | Required |
| Branch | `update` | `PATCH /v1/branches/{branch_id_or_ref}` | Required |
| BranchUpdateResponseOutput | `create` | `POST /v1/branches/{branch_id_or_ref}/merge` | Required |
| BranchUpdateResponseOutput | `create` | `POST /v1/branches/{branch_id_or_ref}/push` | Required |
| BranchUpdateResponseOutput | `create` | `POST /v1/branches/{branch_id_or_ref}/reset` | Required |
| BulkUpdateFunctionResponseOutput | `update` | `PUT /v1/projects/{ref}/functions` | Required |
| CreateProviderResponseOutput | `create` | `POST /v1/projects/{ref}/config/auth/sso/providers` | Required |
| CreateRoleResponseOutput | `create` | `POST /v1/projects/{ref}/cli/login-role` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/migrations` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/backups/restore` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/backups/restore-pitr` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/backups/undo` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/query` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/query/read-only` | Required |
| Database | `create` | `POST /v1/projects/{ref}/database/webhooks/enable` | Required |
| Database | `create` | `POST /v1/projects/{ref}/read-replicas/remove` | Required |
| Database | `create` | `POST /v1/projects/{ref}/read-replicas/setup` | Required |
| Database | `create` | `POST /v1/projects/{ref}/readonly/temporary-disable` | Required |
| Database | `list` | `GET /v1/projects/{ref}/database/context` | Required |
| Database | `load` | `GET /v1/projects/{ref}/database/openapi` | Required |
| Database | `load` | `GET /v1/projects/{ref}/jit-access` | Required |
| Database | `remove` | `DELETE /v1/projects/{ref}/database/migrations` | Required |
| Database | `remove` | `DELETE /v1/projects/{ref}/database/jit/invite/{invite_id}` | Required |
| Database | `remove` | `DELETE /v1/projects/{ref}/database/jit/{user_id}` | Required |
| Database | `update` | `PUT /v1/projects/{ref}/database/migrations` | Required |
| Database | `update` | `PATCH /v1/projects/{ref}/database/migrations/{version}` | Required |
| DatabaseUpgradeStatusResponseOutput | `load` | `GET /v1/projects/{ref}/upgrade/status` | Required |
| Deploy | `create` | `POST /v1/projects/{ref}/functions/deploy` | Required |
| Disk | `load` | `GET /v1/projects/{ref}/config/disk` | Required |
| DiskAutoscaleConfigOutput | `load` | `GET /v1/projects/{ref}/config/disk/autoscale` | Required |
| DiskUtilMetricsResponseOutput | `load` | `GET /v1/projects/{ref}/config/disk/util` | Required |
| Domain | `remove` | `DELETE /v1/projects/{ref}/custom-hostname` | Required |
| Domain | `remove` | `DELETE /v1/projects/{ref}/vanity-subdomain` | Required |
| EdgeFunction | `remove` | `DELETE /v1/projects/{ref}/functions/{function_slug}` | Required |
| Environment | `load` | `GET /v1/branches/{branch_id_or_ref}/diff` | Required |
| Environment | `load` | `GET /v1/projects/{ref}/actions/{run_id}/logs` | Required |
| Environment | `remove` | `DELETE /v1/projects/{ref}/branches` | Required |
| Function | `create` | `POST /v1/projects/{ref}/functions` | Required |
| Function | `list` | `GET /v1/projects/{ref}/functions` | Required |
| Function | `load` | `GET /v1/projects/{ref}/functions/{function_slug}` | Required |
| Function | `update` | `PATCH /v1/projects/{ref}/functions/{function_slug}` | Required |
| FunctionscombinedStat | `list` | `GET /v1/projects/{ref}/analytics/endpoints/functions.combined-stats` | Required |
| Invite | `create` | `POST /v1/projects/{ref}/database/jit/invite` | Required |
| Jit | `create` | `POST /v1/projects/{ref}/database/jit` | Required |
| Jit | `list` | `GET /v1/projects/{ref}/database/jit` | Required |
| Jit | `update` | `PUT /v1/projects/{ref}/database/jit` | Required |
| JitAccessResponseOutput | `create` | `POST /v1/projects/{ref}/database/jit/invite/accept` | Required |
| JitListAccessResponseOutput | `list` | `GET /v1/projects/{ref}/database/jit/list` | Required |
| Legacy | `load` | `GET /v1/projects/{ref}/api-keys/legacy` | Required |
| Legacy | `update` | `PUT /v1/projects/{ref}/api-keys/legacy` | Required |
| ListActionRunResponseOutput | `list` | `GET /v1/projects/{ref}/actions` | Required |
| ListProjectAddonsResponseOutput | `list` | `GET /v1/projects/{ref}/billing/addons` | Required |
| ListProvidersResponseOutput | `list` | `GET /v1/projects/{ref}/config/auth/sso/providers` | Required |
| Log | `list` | `GET /v1/projects/{ref}/analytics/endpoints/logs` | Required |
| NetworkBanResponseEnrichedOutput | `create` | `POST /v1/projects/{ref}/network-bans/retrieve/enriched` | Required |
| NetworkBanResponseOutput | `create` | `POST /v1/projects/{ref}/network-bans/retrieve` | Required |
| NetworkRestriction | `load` | `GET /v1/projects/{ref}/network-restrictions` | Required |
| NetworkRestriction | `update` | `PATCH /v1/projects/{ref}/network-restrictions` | Required |
| NetworkRestrictionsResponseOutput | `create` | `POST /v1/projects/{ref}/network-restrictions/apply` | Required |
| OAuth | `create` | `POST /v1/oauth/revoke` | See reference |
| OAuth | `load` | `GET /v1/oauth/authorize` | See reference |
| OAuth | `load` | `GET /v1/oauth/authorize/project-claim` | Required |
| OAuthTokenResponseOutput | `create` | `POST /v1/oauth/token` | See reference |
| Organization | `create` | `POST /v1/organizations/{slug}/project-claim/{token}` | Required |
| OrganizationProjectClaimResponseOutput | `load` | `GET /v1/organizations/{slug}/project-claim/{token}` | Required |
| OrganizationProjectsResponseOutput | `list` | `GET /v1/organizations/{slug}/projects` | Required |
| Performance | `list` | `GET /v1/projects/{ref}/advisors/performance` | Required |
| Pgsodium | `load` | `GET /v1/projects/{ref}/pgsodium` | Required |
| Pgsodium | `update` | `PUT /v1/projects/{ref}/pgsodium` | Required |
| Postgre | `load` | `GET /v1/projects/{ref}/config/database/postgres` | Required |
| Postgre | `update` | `PUT /v1/projects/{ref}/config/database/postgres` | Required |
| Postgrest | `load` | `GET /v1/projects/{ref}/postgrest` | Required |
| Project | `create` | `POST /v1/projects/{ref}/config/disk` | Required |
| Project | `create` | `POST /v1/projects/{ref}/restore` | Required |
| Project | `create` | `POST /v1/projects/{ref}/restore/cancel` | Required |
| Project | `remove` | `DELETE /v1/projects/{ref}/network-bans` | Required |
| ProjectAvailableRestoreVersionsResponseOutput | `list` | `GET /v1/projects/{ref}/restore` | Required |
| ProjectClaimTokenResponseOutput | `load` | `GET /v1/projects/{ref}/claim-token` | Required |
| ProjectUpgradeEligibilityResponseOutput | `list` | `GET /v1/projects/{ref}/upgrade/eligibility` | Required |
| ProjectUpgradeInitiateResponseOutput | `create` | `POST /v1/projects/{ref}/upgrade` | Required |
| Provider | `load` | `GET /v1/projects/{ref}/config/auth/sso/providers/{provider_id}` | Required |
| Provider | `remove` | `DELETE /v1/projects/{ref}/config/auth/sso/providers/{provider_id}` | Required |
| ReadOnlyStatusResponseOutput | `load` | `GET /v1/projects/{ref}/readonly` | Required |
| Realtime | `create` | `POST /v1/projects/{ref}/config/realtime/shutdown` | Required |
| Realtime | `load` | `GET /v1/projects/{ref}/config/realtime` | Required |
| Realtime | `update` | `PATCH /v1/projects/{ref}/config/realtime` | Required |
| RegionsInfoOutput | `load` | `GET /v1/projects/available-regions` | Required |
| RolesResponseOutput | `remove` | `DELETE /v1/projects/{ref}/cli/login-role` | Required |
| Secret | `create` | `POST /v1/projects/{ref}/secrets` | Required |
| Secret | `list` | `GET /v1/projects/{ref}/secrets` | Required |
| Secret | `remove` | `DELETE /v1/projects/{ref}/secrets` | Required |
| Security | `list` | `GET /v1/projects/{ref}/advisors/security` | Required |
| SigningKey | `create` | `POST /v1/projects/{ref}/config/auth/signing-keys` | Required |
| SigningKey | `list` | `GET /v1/projects/{ref}/config/auth/signing-keys` | Required |
| SigningKey | `load` | `GET /v1/projects/{ref}/config/auth/signing-keys/{id}` | Required |
| SigningKey | `remove` | `DELETE /v1/projects/{ref}/config/auth/signing-keys/{id}` | Required |
| SigningKey | `update` | `PATCH /v1/projects/{ref}/config/auth/signing-keys/{id}` | Required |
| SigningKeyResponseOutput | `create` | `POST /v1/projects/{ref}/config/auth/signing-keys/legacy` | Required |
| SigningKeyResponseOutput | `load` | `GET /v1/projects/{ref}/config/auth/signing-keys/legacy` | Required |
| Snippet | `list` | `GET /v1/snippets` | Required |
| Snippet | `load` | `GET /v1/snippets/{id}` | Required |
| SslEnforcement | `load` | `GET /v1/projects/{ref}/ssl-enforcement` | Required |
| SslEnforcement | `update` | `PUT /v1/projects/{ref}/ssl-enforcement` | Required |
| Storage | `load` | `GET /v1/projects/{ref}/config/storage` | Required |
| Storage | `update` | `PATCH /v1/projects/{ref}/config/storage` | Required |
| StreamableFile | `load` | `GET /v1/projects/{ref}/functions/{function_slug}/body` | Required |
| SubdomainAvailabilityResponseOutput | `create` | `POST /v1/projects/{ref}/vanity-subdomain/check-availability` | Required |
| SupavisorConfigResponseOutput | `list` | `GET /v1/projects/{ref}/config/database/pooler` | Required |
| ThirdPartyAuth | `create` | `POST /v1/projects/{ref}/config/auth/third-party-auth` | Required |
| ThirdPartyAuth | `list` | `GET /v1/projects/{ref}/config/auth/third-party-auth` | Required |
| ThirdPartyAuth | `load` | `GET /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}` | Required |
| ThirdPartyAuth | `remove` | `DELETE /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}` | Required |
| Typescript | `load` | `GET /v1/projects/{ref}/types/typescript` | Required |
| UpdateCustomHostnameResponseOutput | `create` | `POST /v1/projects/{ref}/custom-hostname/activate` | Required |
| UpdateCustomHostnameResponseOutput | `create` | `POST /v1/projects/{ref}/custom-hostname/initialize` | Required |
| UpdateCustomHostnameResponseOutput | `create` | `POST /v1/projects/{ref}/custom-hostname/reverify` | Required |
| UpdateCustomHostnameResponseOutput | `load` | `GET /v1/projects/{ref}/custom-hostname` | Required |
| UpdateProviderResponseOutput | `update` | `PUT /v1/projects/{ref}/config/auth/sso/providers/{provider_id}` | Required |
| UpdateSupavisorConfigResponseOutput | `update` | `PATCH /v1/projects/{ref}/config/database/pooler` | Required |
| V1BackupScheduleResponseOutput | `load` | `GET /v1/projects/{ref}/database/backups/schedule` | Required |
| V1BackupScheduleResponseOutput | `update` | `PATCH /v1/projects/{ref}/database/backups/schedule` | Required |
| V1BackupsResponseOutput | `list` | `GET /v1/projects/{ref}/database/backups` | Required |
| V1GetMigrationResponseOutput | `load` | `GET /v1/projects/{ref}/database/migrations/{version}` | Required |
| V1GetUsageApiCountResponseOutput | `list` | `GET /v1/projects/{ref}/analytics/endpoints/usage.api-counts` | Required |
| V1GetUsageApiRequestsCountResponseOutput | `list` | `GET /v1/projects/{ref}/analytics/endpoints/usage.api-requests-count` | Required |
| V1ListEntitlementsResponseOutput | `list` | `GET /v1/organizations/{slug}/entitlements` | Required |
| V1ListMigrationsResponseOutput | `list` | `GET /v1/projects/{ref}/database/migrations` | Required |
| V1OrganizationMemberResponseOutput | `list` | `GET /v1/organizations/{slug}/members` | Required |
| V1OrganizationSlugResponseOutput | `create` | `POST /v1/organizations` | Required |
| V1OrganizationSlugResponseOutput | `list` | `GET /v1/organizations` | Required |
| V1OrganizationSlugResponseOutput | `load` | `GET /v1/organizations/{slug}` | Required |
| V1PgbouncerConfigResponseOutput | `load` | `GET /v1/projects/{ref}/config/database/pgbouncer` | See reference |
| V1ProfileResponseOutput | `load` | `GET /v1/profile` | Required |
| V1ProjectRefResponseOutput | `remove` | `DELETE /v1/projects/{ref}` | Required |
| V1ProjectRefResponseOutput | `update` | `PATCH /v1/projects/{ref}` | Required |
| V1ProjectWithDatabaseResponseOutput | `create` | `POST /v1/projects/{ref}/claim-token` | Required |
| V1ProjectWithDatabaseResponseOutput | `create` | `POST /v1/projects/{ref}/pause` | Required |
| V1ProjectWithDatabaseResponseOutput | `create` | `POST /v1/projects/{ref}/restart` | Required |
| V1ProjectWithDatabaseResponseOutput | `create` | `POST /v1/projects` | Required |
| V1ProjectWithDatabaseResponseOutput | `list` | `GET /v1/projects` | Required |
| V1ProjectWithDatabaseResponseOutput | `load` | `GET /v1/projects/{ref}` | Required |
| V1ProjectWithDatabaseResponseOutput | `remove` | `DELETE /v1/projects/{ref}/claim-token` | Required |
| V1ProjectWithDatabaseResponseOutput | `update` | `PUT /v1/projects/{ref}/jit-access` | Required |
| V1ProjectWithDatabaseResponseOutput | `update` | `PATCH /v1/projects/{ref}/postgrest` | Required |
| V1RestorePoint | `create` | `POST /v1/projects/{ref}/database/backups/restore-point` | Required |
| V1RestorePoint | `load` | `GET /v1/projects/{ref}/database/backups/restore-point` | Required |
| V1ServiceHealthResponseOutput | `list` | `GET /v1/projects/{ref}/health` | Required |
| V1StorageBucketResponseOutput | `list` | `GET /v1/projects/{ref}/storage/buckets` | Required |
| V1UpdatePasswordResponseOutput | `update` | `PATCH /v1/projects/{ref}/database/password` | Required |
| VanitySubdomain | `load` | `GET /v1/projects/{ref}/vanity-subdomain` | Required |

## Connect to the API

- API server: `https://api.supabase.com`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

OAuth 2.0 authorization code flow for Supabase OAuth apps. Tokens carry the scopes approved for the app by the organization.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

