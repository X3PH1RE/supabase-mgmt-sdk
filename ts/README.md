# SupabaseMgmt TypeScript SDK



The TypeScript SDK for the SupabaseMgmt API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Action()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/supabase-mgmt-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/voxgig-sdk/supabase-mgmt-sdk
npm install ./supabase-mgmt-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { SupabaseMgmtSDK } from '@voxgig-sdk/supabase-mgmt-sdk'

const client = new SupabaseMgmtSDK({
  apikey: process.env.SUPABASE_MGMT_APIKEY,
})
```

### 3. Load an action

Action is nested under project, so provide the `project_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const action = await client.Action().load({
    project_id: 'example_project_id',
    id: 'example_id',
  })
  console.log(action)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Update
const updated = await client.Action().update({
  id: 'example_id',
  project_id: 'example_project_id',
  branch_id: 'example_branch_id',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const v1restorepoint = await client.V1RestorePoint().load({ project_id: "example" })
  console.log(v1restorepoint)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = SupabaseMgmtSDK.test()

const v1restorepoint = await client.V1RestorePoint().load({ project_id: 'example_project_id' })
// v1restorepoint is the entity, populated with mock response data
// — call v1restorepoint.data() for the record itself
console.log(v1restorepoint)
```

You can also use the instance method:

```ts
const client = new SupabaseMgmtSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.V1RestorePoint()

// First call runs the operation and stores its result
await entity.load({ project_id: 'example_project_id' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new SupabaseMgmtSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SUPABASE_MGMT_TEST_LIVE=TRUE
SUPABASE_MGMT_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### SupabaseMgmtSDK

#### Constructor

```ts
new SupabaseMgmtSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Action(data?)` | `ActionEntity` | Create an Action entity instance. |
| `Activate(data?)` | `ActivateEntity` | Create an Activate entity instance. |
| `Analytics(data?)` | `AnalyticsEntity` | Create an Analytics entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `Auth(data?)` | `AuthEntity` | Create an Auth entity instance. |
| `Billing(data?)` | `BillingEntity` | Create a Billing entity instance. |
| `Branch(data?)` | `BranchEntity` | Create a Branch entity instance. |
| `BranchUpdateResponseOutput(data?)` | `BranchUpdateResponseOutputEntity` | Create a BranchUpdateResponseOutput entity instance. |
| `BulkUpdateFunctionResponseOutput(data?)` | `BulkUpdateFunctionResponseOutputEntity` | Create a BulkUpdateFunctionResponseOutput entity instance. |
| `CreateProviderResponseOutput(data?)` | `CreateProviderResponseOutputEntity` | Create a CreateProviderResponseOutput entity instance. |
| `CreateRoleResponseOutput(data?)` | `CreateRoleResponseOutputEntity` | Create a CreateRoleResponseOutput entity instance. |
| `Database(data?)` | `DatabaseEntity` | Create a Database entity instance. |
| `DatabaseUpgradeStatusResponseOutput(data?)` | `DatabaseUpgradeStatusResponseOutputEntity` | Create a DatabaseUpgradeStatusResponseOutput entity instance. |
| `Deploy(data?)` | `DeployEntity` | Create a Deploy entity instance. |
| `Disk(data?)` | `DiskEntity` | Create a Disk entity instance. |
| `DiskAutoscaleConfigOutput(data?)` | `DiskAutoscaleConfigOutputEntity` | Create a DiskAutoscaleConfigOutput entity instance. |
| `DiskUtilMetricsResponseOutput(data?)` | `DiskUtilMetricsResponseOutputEntity` | Create a DiskUtilMetricsResponseOutput entity instance. |
| `Domain(data?)` | `DomainEntity` | Create a Domain entity instance. |
| `EdgeFunction(data?)` | `EdgeFunctionEntity` | Create an EdgeFunction entity instance. |
| `Environment(data?)` | `EnvironmentEntity` | Create an Environment entity instance. |
| `Function(data?)` | `FunctionEntity` | Create a Function entity instance. |
| `FunctionscombinedStat(data?)` | `FunctionscombinedStatEntity` | Create a FunctionscombinedStat entity instance. |
| `Invite(data?)` | `InviteEntity` | Create an Invite entity instance. |
| `Jit(data?)` | `JitEntity` | Create a Jit entity instance. |
| `JitAccessResponseOutput(data?)` | `JitAccessResponseOutputEntity` | Create a JitAccessResponseOutput entity instance. |
| `JitListAccessResponseOutput(data?)` | `JitListAccessResponseOutputEntity` | Create a JitListAccessResponseOutput entity instance. |
| `Legacy(data?)` | `LegacyEntity` | Create a Legacy entity instance. |
| `ListActionRunResponseOutput(data?)` | `ListActionRunResponseOutputEntity` | Create a ListActionRunResponseOutput entity instance. |
| `ListProjectAddonsResponseOutput(data?)` | `ListProjectAddonsResponseOutputEntity` | Create a ListProjectAddonsResponseOutput entity instance. |
| `ListProvidersResponseOutput(data?)` | `ListProvidersResponseOutputEntity` | Create a ListProvidersResponseOutput entity instance. |
| `Log(data?)` | `LogEntity` | Create a Log entity instance. |
| `NetworkBanResponseEnrichedOutput(data?)` | `NetworkBanResponseEnrichedOutputEntity` | Create a NetworkBanResponseEnrichedOutput entity instance. |
| `NetworkBanResponseOutput(data?)` | `NetworkBanResponseOutputEntity` | Create a NetworkBanResponseOutput entity instance. |
| `NetworkRestriction(data?)` | `NetworkRestrictionEntity` | Create a NetworkRestriction entity instance. |
| `NetworkRestrictionsResponseOutput(data?)` | `NetworkRestrictionsResponseOutputEntity` | Create a NetworkRestrictionsResponseOutput entity instance. |
| `OAuth(data?)` | `OAuthEntity` | Create an OAuth entity instance. |
| `OAuthTokenResponseOutput(data?)` | `OAuthTokenResponseOutputEntity` | Create an OAuthTokenResponseOutput entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `OrganizationProjectClaimResponseOutput(data?)` | `OrganizationProjectClaimResponseOutputEntity` | Create an OrganizationProjectClaimResponseOutput entity instance. |
| `OrganizationProjectsResponseOutput(data?)` | `OrganizationProjectsResponseOutputEntity` | Create an OrganizationProjectsResponseOutput entity instance. |
| `Performance(data?)` | `PerformanceEntity` | Create a Performance entity instance. |
| `Pgsodium(data?)` | `PgsodiumEntity` | Create a Pgsodium entity instance. |
| `Postgre(data?)` | `PostgreEntity` | Create a Postgre entity instance. |
| `Postgrest(data?)` | `PostgrestEntity` | Create a Postgrest entity instance. |
| `Project(data?)` | `ProjectEntity` | Create a Project entity instance. |
| `ProjectAvailableRestoreVersionsResponseOutput(data?)` | `ProjectAvailableRestoreVersionsResponseOutputEntity` | Create a ProjectAvailableRestoreVersionsResponseOutput entity instance. |
| `ProjectClaimTokenResponseOutput(data?)` | `ProjectClaimTokenResponseOutputEntity` | Create a ProjectClaimTokenResponseOutput entity instance. |
| `ProjectUpgradeEligibilityResponseOutput(data?)` | `ProjectUpgradeEligibilityResponseOutputEntity` | Create a ProjectUpgradeEligibilityResponseOutput entity instance. |
| `ProjectUpgradeInitiateResponseOutput(data?)` | `ProjectUpgradeInitiateResponseOutputEntity` | Create a ProjectUpgradeInitiateResponseOutput entity instance. |
| `Provider(data?)` | `ProviderEntity` | Create a Provider entity instance. |
| `ReadOnlyStatusResponseOutput(data?)` | `ReadOnlyStatusResponseOutputEntity` | Create a ReadOnlyStatusResponseOutput entity instance. |
| `Realtime(data?)` | `RealtimeEntity` | Create a Realtime entity instance. |
| `RegionsInfoOutput(data?)` | `RegionsInfoOutputEntity` | Create a RegionsInfoOutput entity instance. |
| `RolesResponseOutput(data?)` | `RolesResponseOutputEntity` | Create a RolesResponseOutput entity instance. |
| `Secret(data?)` | `SecretEntity` | Create a Secret entity instance. |
| `Security(data?)` | `SecurityEntity` | Create a Security entity instance. |
| `SigningKey(data?)` | `SigningKeyEntity` | Create a SigningKey entity instance. |
| `SigningKeyResponseOutput(data?)` | `SigningKeyResponseOutputEntity` | Create a SigningKeyResponseOutput entity instance. |
| `Snippet(data?)` | `SnippetEntity` | Create a Snippet entity instance. |
| `SslEnforcement(data?)` | `SslEnforcementEntity` | Create a SslEnforcement entity instance. |
| `Storage(data?)` | `StorageEntity` | Create a Storage entity instance. |
| `StreamableFile(data?)` | `StreamableFileEntity` | Create a StreamableFile entity instance. |
| `SubdomainAvailabilityResponseOutput(data?)` | `SubdomainAvailabilityResponseOutputEntity` | Create a SubdomainAvailabilityResponseOutput entity instance. |
| `SupavisorConfigResponseOutput(data?)` | `SupavisorConfigResponseOutputEntity` | Create a SupavisorConfigResponseOutput entity instance. |
| `ThirdPartyAuth(data?)` | `ThirdPartyAuthEntity` | Create a ThirdPartyAuth entity instance. |
| `Typescript(data?)` | `TypescriptEntity` | Create a Typescript entity instance. |
| `UpdateCustomHostnameResponseOutput(data?)` | `UpdateCustomHostnameResponseOutputEntity` | Create an UpdateCustomHostnameResponseOutput entity instance. |
| `UpdateProviderResponseOutput(data?)` | `UpdateProviderResponseOutputEntity` | Create an UpdateProviderResponseOutput entity instance. |
| `UpdateSupavisorConfigResponseOutput(data?)` | `UpdateSupavisorConfigResponseOutputEntity` | Create an UpdateSupavisorConfigResponseOutput entity instance. |
| `V1BackupScheduleResponseOutput(data?)` | `V1BackupScheduleResponseOutputEntity` | Create a V1BackupScheduleResponseOutput entity instance. |
| `V1BackupsResponseOutput(data?)` | `V1BackupsResponseOutputEntity` | Create a V1BackupsResponseOutput entity instance. |
| `V1GetMigrationResponseOutput(data?)` | `V1GetMigrationResponseOutputEntity` | Create a V1GetMigrationResponseOutput entity instance. |
| `V1GetUsageApiCountResponseOutput(data?)` | `V1GetUsageApiCountResponseOutputEntity` | Create a V1GetUsageApiCountResponseOutput entity instance. |
| `V1GetUsageApiRequestsCountResponseOutput(data?)` | `V1GetUsageApiRequestsCountResponseOutputEntity` | Create a V1GetUsageApiRequestsCountResponseOutput entity instance. |
| `V1ListEntitlementsResponseOutput(data?)` | `V1ListEntitlementsResponseOutputEntity` | Create a V1ListEntitlementsResponseOutput entity instance. |
| `V1ListMigrationsResponseOutput(data?)` | `V1ListMigrationsResponseOutputEntity` | Create a V1ListMigrationsResponseOutput entity instance. |
| `V1OrganizationMemberResponseOutput(data?)` | `V1OrganizationMemberResponseOutputEntity` | Create a V1OrganizationMemberResponseOutput entity instance. |
| `V1OrganizationSlugResponseOutput(data?)` | `V1OrganizationSlugResponseOutputEntity` | Create a V1OrganizationSlugResponseOutput entity instance. |
| `V1PgbouncerConfigResponseOutput(data?)` | `V1PgbouncerConfigResponseOutputEntity` | Create a V1PgbouncerConfigResponseOutput entity instance. |
| `V1ProfileResponseOutput(data?)` | `V1ProfileResponseOutputEntity` | Create a V1ProfileResponseOutput entity instance. |
| `V1ProjectRefResponseOutput(data?)` | `V1ProjectRefResponseOutputEntity` | Create a V1ProjectRefResponseOutput entity instance. |
| `V1ProjectWithDatabaseResponseOutput(data?)` | `V1ProjectWithDatabaseResponseOutputEntity` | Create a V1ProjectWithDatabaseResponseOutput entity instance. |
| `V1RestorePoint(data?)` | `V1RestorePointEntity` | Create a V1RestorePoint entity instance. |
| `V1ServiceHealthResponseOutput(data?)` | `V1ServiceHealthResponseOutputEntity` | Create a V1ServiceHealthResponseOutput entity instance. |
| `V1StorageBucketResponseOutput(data?)` | `V1StorageBucketResponseOutputEntity` | Create a V1StorageBucketResponseOutput entity instance. |
| `V1UpdatePasswordResponseOutput(data?)` | `V1UpdatePasswordResponseOutputEntity` | Create a V1UpdatePasswordResponseOutput entity instance. |
| `VanitySubdomain(data?)` | `VanitySubdomainEntity` | Create a VanitySubdomain entity instance. |
| `tester(testopts?, sdkopts?)` | `SupabaseMgmtSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `SupabaseMgmtSDK.test(testopts?, sdkopts?)` | `SupabaseMgmtSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): SupabaseMgmtSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Action

| Field | Description |
| --- | --- |
| `branch_id` |  |
| `check_run_id` |  |
| `created_at` |  |
| `git_config` |  |
| `id` |  |
| `run_steps` |  |
| `updated_at` |  |
| `workdir` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/actions/{run_id}`

#### Activate

| Field | Description |
| --- | --- |
| `vanity_subdomain` |  |

Operations: create.

API path: `/v1/projects/{ref}/vanity-subdomain/activate`

#### Analytics

| Field | Description |
| --- | --- |

Operations: load.

API path: `/v1/projects/{ref}/analytics/endpoints/logs.all`

#### ApiKey

| Field | Description |
| --- | --- |
| `api_key` |  |
| `description` |  |
| `hash` |  |
| `id` |  |
| `inserted_at` |  |
| `name` |  |
| `prefix` |  |
| `secret_jwt_template` |  |
| `type` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/v1/projects/{ref}/api-keys`

#### Auth

| Field | Description |
| --- | --- |
| `api_max_request_duration` |  |
| `custom_oauth_enabled` |  |
| `custom_oauth_max_providers` |  |
| `db_max_pool_size` |  |
| `db_max_pool_size_unit` |  |
| `disable_signup` |  |
| `external_anonymous_users_enabled` |  |
| `external_apple_additional_client_ids` |  |
| `external_apple_client_id` |  |
| `external_apple_email_optional` |  |
| `external_apple_enabled` |  |
| `external_apple_secret` |  |
| `external_azure_client_id` |  |
| `external_azure_email_optional` |  |
| `external_azure_enabled` |  |
| `external_azure_secret` |  |
| `external_azure_url` |  |
| `external_bitbucket_client_id` |  |
| `external_bitbucket_email_optional` |  |
| `external_bitbucket_enabled` |  |
| `external_bitbucket_secret` |  |
| `external_discord_client_id` |  |
| `external_discord_email_optional` |  |
| `external_discord_enabled` |  |
| `external_discord_secret` |  |
| `external_email_enabled` |  |
| `external_facebook_client_id` |  |
| `external_facebook_email_optional` |  |
| `external_facebook_enabled` |  |
| `external_facebook_secret` |  |
| `external_figma_client_id` |  |
| `external_figma_email_optional` |  |
| `external_figma_enabled` |  |
| `external_figma_secret` |  |
| `external_github_client_id` |  |
| `external_github_email_optional` |  |
| `external_github_enabled` |  |
| `external_github_secret` |  |
| `external_gitlab_client_id` |  |
| `external_gitlab_email_optional` |  |
| `external_gitlab_enabled` |  |
| `external_gitlab_secret` |  |
| `external_gitlab_url` |  |
| `external_google_additional_client_ids` |  |
| `external_google_client_id` |  |
| `external_google_email_optional` |  |
| `external_google_enabled` |  |
| `external_google_secret` |  |
| `external_google_skip_nonce_check` |  |
| `external_kakao_client_id` |  |
| `external_kakao_email_optional` |  |
| `external_kakao_enabled` |  |
| `external_kakao_secret` |  |
| `external_keycloak_client_id` |  |
| `external_keycloak_email_optional` |  |
| `external_keycloak_enabled` |  |
| `external_keycloak_secret` |  |
| `external_keycloak_url` |  |
| `external_linkedin_oidc_client_id` |  |
| `external_linkedin_oidc_email_optional` |  |
| `external_linkedin_oidc_enabled` |  |
| `external_linkedin_oidc_secret` |  |
| `external_notion_client_id` |  |
| `external_notion_email_optional` |  |
| `external_notion_enabled` |  |
| `external_notion_secret` |  |
| `external_phone_enabled` |  |
| `external_slack_client_id` |  |
| `external_slack_email_optional` |  |
| `external_slack_enabled` |  |
| `external_slack_oidc_client_id` |  |
| `external_slack_oidc_email_optional` |  |
| `external_slack_oidc_enabled` |  |
| `external_slack_oidc_secret` |  |
| `external_slack_secret` |  |
| `external_spotify_client_id` |  |
| `external_spotify_email_optional` |  |
| `external_spotify_enabled` |  |
| `external_spotify_secret` |  |
| `external_twitch_client_id` |  |
| `external_twitch_email_optional` |  |
| `external_twitch_enabled` |  |
| `external_twitch_secret` |  |
| `external_twitter_client_id` |  |
| `external_twitter_email_optional` |  |
| `external_twitter_enabled` |  |
| `external_twitter_secret` |  |
| `external_web3_ethereum_enabled` |  |
| `external_web3_solana_enabled` |  |
| `external_workos_client_id` |  |
| `external_workos_enabled` |  |
| `external_workos_secret` |  |
| `external_workos_url` |  |
| `external_x_client_id` |  |
| `external_x_email_optional` |  |
| `external_x_enabled` |  |
| `external_x_secret` |  |
| `external_zoom_client_id` |  |
| `external_zoom_email_optional` |  |
| `external_zoom_enabled` |  |
| `external_zoom_secret` |  |
| `hook_after_user_created_enabled` |  |
| `hook_after_user_created_secrets` |  |
| `hook_after_user_created_uri` |  |
| `hook_before_user_created_enabled` |  |
| `hook_before_user_created_secrets` |  |
| `hook_before_user_created_uri` |  |
| `hook_custom_access_token_enabled` |  |
| `hook_custom_access_token_secrets` |  |
| `hook_custom_access_token_uri` |  |
| `hook_mfa_verification_attempt_enabled` |  |
| `hook_mfa_verification_attempt_secrets` |  |
| `hook_mfa_verification_attempt_uri` |  |
| `hook_password_verification_attempt_enabled` |  |
| `hook_password_verification_attempt_secrets` |  |
| `hook_password_verification_attempt_uri` |  |
| `hook_send_email_enabled` |  |
| `hook_send_email_secrets` |  |
| `hook_send_email_uri` |  |
| `hook_send_sms_enabled` |  |
| `hook_send_sms_secrets` |  |
| `hook_send_sms_uri` |  |
| `jwt_exp` |  |
| `mailer_allow_unverified_email_sign_ins` |  |
| `mailer_autoconfirm` |  |
| `mailer_notifications_email_changed_enabled` |  |
| `mailer_notifications_identity_linked_enabled` |  |
| `mailer_notifications_identity_unlinked_enabled` |  |
| `mailer_notifications_mfa_factor_enrolled_enabled` |  |
| `mailer_notifications_mfa_factor_unenrolled_enabled` |  |
| `mailer_notifications_password_changed_enabled` |  |
| `mailer_notifications_phone_changed_enabled` |  |
| `mailer_otp_exp` |  |
| `mailer_otp_length` |  |
| `mailer_secure_email_change_enabled` |  |
| `mailer_subjects_confirmation` |  |
| `mailer_subjects_email_change` |  |
| `mailer_subjects_email_changed_notification` |  |
| `mailer_subjects_identity_linked_notification` |  |
| `mailer_subjects_identity_unlinked_notification` |  |
| `mailer_subjects_invite` |  |
| `mailer_subjects_magic_link` |  |
| `mailer_subjects_mfa_factor_enrolled_notification` |  |
| `mailer_subjects_mfa_factor_unenrolled_notification` |  |
| `mailer_subjects_password_changed_notification` |  |
| `mailer_subjects_phone_changed_notification` |  |
| `mailer_subjects_reauthentication` |  |
| `mailer_subjects_recovery` |  |
| `mailer_templates_confirmation_content` |  |
| `mailer_templates_email_change_content` |  |
| `mailer_templates_email_changed_notification_content` |  |
| `mailer_templates_identity_linked_notification_content` |  |
| `mailer_templates_identity_unlinked_notification_content` |  |
| `mailer_templates_invite_content` |  |
| `mailer_templates_magic_link_content` |  |
| `mailer_templates_mfa_factor_enrolled_notification_content` |  |
| `mailer_templates_mfa_factor_unenrolled_notification_content` |  |
| `mailer_templates_password_changed_notification_content` |  |
| `mailer_templates_phone_changed_notification_content` |  |
| `mailer_templates_reauthentication_content` |  |
| `mailer_templates_recovery_content` |  |
| `mfa_max_enrolled_factors` |  |
| `mfa_phone_enroll_enabled` |  |
| `mfa_phone_max_frequency` |  |
| `mfa_phone_otp_length` |  |
| `mfa_phone_template` |  |
| `mfa_phone_verify_enabled` |  |
| `mfa_totp_enroll_enabled` |  |
| `mfa_totp_verify_enabled` |  |
| `mfa_web_authn_enroll_enabled` |  |
| `mfa_web_authn_verify_enabled` |  |
| `nimbus_oauth_client_id` |  |
| `nimbus_oauth_client_secret` |  |
| `nimbus_oauth_email_optional` |  |
| `oauth_server_allow_dynamic_registration` |  |
| `oauth_server_authorization_path` |  |
| `oauth_server_enabled` |  |
| `passkey_enabled` |  |
| `password_hibp_enabled` |  |
| `password_min_length` |  |
| `password_required_characters` |  |
| `rate_limit_anonymous_users` |  |
| `rate_limit_email_sent` |  |
| `rate_limit_otp` |  |
| `rate_limit_sms_sent` |  |
| `rate_limit_token_refresh` |  |
| `rate_limit_verify` |  |
| `rate_limit_web3` |  |
| `refresh_token_rotation_enabled` |  |
| `saml_allow_encrypted_assertions` |  |
| `saml_enabled` |  |
| `saml_external_url` |  |
| `security_captcha_enabled` |  |
| `security_captcha_provider` |  |
| `security_captcha_secret` |  |
| `security_manual_linking_enabled` |  |
| `security_refresh_token_reuse_interval` | Refresh token reuse interval in seconds. |
| `security_sb_forwarded_for_enabled` |  |
| `security_update_password_require_current_password` | Require the user's current password when updating their password. |
| `security_update_password_require_reauthentication` |  |
| `sessions_inactivity_timeout` | Session inactivity timeout in hours. |
| `sessions_single_per_user` |  |
| `sessions_tags` |  |
| `sessions_timebox` | Session timebox in hours. |
| `site_url` |  |
| `sms_autoconfirm` |  |
| `sms_max_frequency` |  |
| `sms_messagebird_access_key` |  |
| `sms_messagebird_originator` |  |
| `sms_otp_exp` |  |
| `sms_otp_length` |  |
| `sms_provider` |  |
| `sms_template` |  |
| `sms_test_otp` |  |
| `sms_test_otp_valid_until` |  |
| `sms_textlocal_api_key` |  |
| `sms_textlocal_sender` |  |
| `sms_twilio_account_sid` |  |
| `sms_twilio_auth_token` |  |
| `sms_twilio_content_sid` |  |
| `sms_twilio_message_service_sid` |  |
| `sms_twilio_verify_account_sid` |  |
| `sms_twilio_verify_auth_token` |  |
| `sms_twilio_verify_message_service_sid` |  |
| `sms_vonage_api_key` |  |
| `sms_vonage_api_secret` |  |
| `sms_vonage_from` |  |
| `smtp_admin_email` |  |
| `smtp_host` |  |
| `smtp_max_frequency` |  |
| `smtp_pass` |  |
| `smtp_port` |  |
| `smtp_sender_name` |  |
| `smtp_user` |  |
| `uri_allow_list` |  |
| `webauthn_rp_display_name` |  |
| `webauthn_rp_id` |  |
| `webauthn_rp_origins` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/config/auth`

#### Billing

| Field | Description |
| --- | --- |

Operations: remove, update.

API path: `/v1/projects/{ref}/billing/addons/{addon_variant}`

#### Branch

| Field | Description |
| --- | --- |
| `branch_name` |  |
| `created_at` |  |
| `db_host` |  |
| `db_pass` |  |
| `db_port` |  |
| `db_user` |  |
| `deletion_scheduled_at` |  |
| `desired_instance_size` |  |
| `git_branch` |  |
| `id` |  |
| `is_default` |  |
| `jwt_secret` |  |
| `latest_check_run_id` | This field is deprecated and will not be populated. |
| `name` |  |
| `notify_url` | HTTP endpoint to receive branch status updates. |
| `parent_project_ref` |  |
| `persistent` |  |
| `postgres_engine` | Postgres engine version. |
| `postgres_version` |  |
| `pr_number` |  |
| `preview_project_status` |  |
| `project_ref` |  |
| `ref` |  |
| `region` |  |
| `release_channel` | Release channel. |
| `request_review` |  |
| `reset_on_push` | This field is deprecated and will be ignored. |
| `review_requested_at` |  |
| `secrets` |  |
| `status` | This field is deprecated. |
| `updated_at` |  |
| `with_data` |  |

Operations: create, list, load, remove, update.

API path: `/v1/branches/{branch_id_or_ref}/restore`

#### BranchUpdateResponseOutput

| Field | Description |
| --- | --- |
| `migration_version` |  |

Operations: create.

API path: `/v1/branches/{branch_id_or_ref}/merge`

#### BulkUpdateFunctionResponseOutput

| Field | Description |
| --- | --- |
| `functions` |  |

Operations: update.

API path: `/v1/projects/{ref}/functions`

#### CreateProviderResponseOutput

| Field | Description |
| --- | --- |
| `attribute_mapping` |  |
| `domains` |  |
| `metadata_url` |  |
| `metadata_xml` |  |
| `name_id_format` |  |
| `type` | What type of provider will be created |

Operations: create.

API path: `/v1/projects/{ref}/config/auth/sso/providers`

#### CreateRoleResponseOutput

| Field | Description |
| --- | --- |
| `read_only` |  |

Operations: create.

API path: `/v1/projects/{ref}/cli/login-role`

#### Database

| Field | Description |
| --- | --- |
| `database_identifier` |  |
| `id` |  |
| `name` |  |
| `parameters` |  |
| `query` |  |
| `read_replica_region` | Region you want your read replica to reside in |
| `recovery_time_target_unix` |  |
| `rollback` |  |

Operations: create, list, load, remove, update.

API path: `/v1/projects/{ref}/database/migrations`

#### DatabaseUpgradeStatusResponseOutput

| Field | Description |
| --- | --- |
| `error` |  |
| `initiated_at` |  |
| `latest_status_at` |  |
| `progress` |  |
| `status` |  |
| `target_version` |  |

Operations: load.

API path: `/v1/projects/{ref}/upgrade/status`

#### Deploy

| Field | Description |
| --- | --- |

Operations: create.

API path: `/v1/projects/{ref}/functions/deploy`

#### Disk

| Field | Description |
| --- | --- |
| `attributes` |  |
| `last_modified_at` |  |

Operations: load.

API path: `/v1/projects/{ref}/config/disk`

#### DiskAutoscaleConfigOutput

| Field | Description |
| --- | --- |
| `growth_percent` | Growth percentage for disk autoscaling |
| `max_size_gb` | Maximum limit the disk size will grow to in GB |
| `min_increment_gb` | Minimum increment size for disk autoscaling in GB |

Operations: load.

API path: `/v1/projects/{ref}/config/disk/autoscale`

#### DiskUtilMetricsResponseOutput

| Field | Description |
| --- | --- |
| `fs_avail_bytes` |  |
| `fs_size_bytes` |  |
| `fs_used_bytes` |  |

Operations: load.

API path: `/v1/projects/{ref}/config/disk/util`

#### Domain

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/v1/projects/{ref}/custom-hostname`

#### EdgeFunction

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/v1/projects/{ref}/functions/{function_slug}`

#### Environment

| Field | Description |
| --- | --- |

Operations: load, remove.

API path: `/v1/branches/{branch_id_or_ref}/diff`

#### Function

| Field | Description |
| --- | --- |
| `body` |  |
| `created_at` |  |
| `entrypoint_path` |  |
| `ezbr_sha256` |  |
| `id` |  |
| `import_map` |  |
| `import_map_path` |  |
| `name` |  |
| `slug` |  |
| `status` |  |
| `updated_at` |  |
| `verify_jwt` |  |
| `version` |  |

Operations: create, list, load, update.

API path: `/v1/projects/{ref}/functions`

#### FunctionscombinedStat

| Field | Description |
| --- | --- |
| `error` |  |
| `result` |  |

Operations: list.

API path: `/v1/projects/{ref}/analytics/endpoints/functions.combined-stats`

#### Invite

| Field | Description |
| --- | --- |
| `email` |  |
| `invite_id` |  |
| `roles` |  |
| `user_roles` |  |

Operations: create.

API path: `/v1/projects/{ref}/database/jit/invite`

#### Jit

| Field | Description |
| --- | --- |
| `act` |  |
| `allowed_networks` |  |
| `branches_only` |  |
| `expires_at` |  |
| `rhost` |  |
| `role` |  |
| `roles` |  |
| `user_id` |  |
| `user_role` |  |
| `user_roles` |  |

Operations: create, list, update.

API path: `/v1/projects/{ref}/database/jit`

#### JitAccessResponseOutput

| Field | Description |
| --- | --- |
| `email` |  |
| `token` |  |
| `user_id` |  |
| `user_roles` |  |

Operations: create.

API path: `/v1/projects/{ref}/database/jit/invite/accept`

#### JitListAccessResponseOutput

| Field | Description |
| --- | --- |
| `items` |  |

Operations: list.

API path: `/v1/projects/{ref}/database/jit/list`

#### Legacy

| Field | Description |
| --- | --- |
| `enabled` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/api-keys/legacy`

#### ListActionRunResponseOutput

| Field | Description |
| --- | --- |
| `branch_id` |  |
| `check_run_id` |  |
| `created_at` |  |
| `git_config` |  |
| `id` |  |
| `run_steps` |  |
| `updated_at` |  |
| `workdir` |  |

Operations: list.

API path: `/v1/projects/{ref}/actions`

#### ListProjectAddonsResponseOutput

| Field | Description |
| --- | --- |
| `available_addons` |  |
| `selected_addons` |  |

Operations: list.

API path: `/v1/projects/{ref}/billing/addons`

#### ListProvidersResponseOutput

| Field | Description |
| --- | --- |
| `created_at` |  |
| `domains` |  |
| `id` |  |
| `saml` |  |
| `updated_at` |  |

Operations: list.

API path: `/v1/projects/{ref}/config/auth/sso/providers`

#### Log

| Field | Description |
| --- | --- |
| `error` |  |
| `result` |  |

Operations: list.

API path: `/v1/projects/{ref}/analytics/endpoints/logs`

#### NetworkBanResponseEnrichedOutput

| Field | Description |
| --- | --- |

Operations: create.

API path: `/v1/projects/{ref}/network-bans/retrieve/enriched`

#### NetworkBanResponseOutput

| Field | Description |
| --- | --- |

Operations: create.

API path: `/v1/projects/{ref}/network-bans/retrieve`

#### NetworkRestriction

| Field | Description |
| --- | --- |
| `add` |  |
| `applied_at` |  |
| `config` | At any given point in time, this is the config that the user has requested be applied to their project. |
| `entitlement` |  |
| `old_config` | Populated when a new config has been received, but not registered as successfully applied to a project. |
| `remove` |  |
| `status` |  |
| `updated_at` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/network-restrictions`

#### NetworkRestrictionsResponseOutput

| Field | Description |
| --- | --- |
| `dbAllowedCidrs` |  |
| `dbAllowedCidrsV6` |  |

Operations: create.

API path: `/v1/projects/{ref}/network-restrictions/apply`

#### OAuth

| Field | Description |
| --- | --- |
| `client_id` |  |
| `client_secret` |  |
| `refresh_token` |  |

Operations: create, load.

API path: `/v1/oauth/revoke`

#### OAuthTokenResponseOutput

| Field | Description |
| --- | --- |
| `access_token` |  |
| `expires_in` |  |
| `refresh_token` | The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`. |
| `token_type` |  |

Operations: create.

API path: `/v1/oauth/token`

#### Organization

| Field | Description |
| --- | --- |

Operations: create.

API path: `/v1/organizations/{slug}/project-claim/{token}`

#### OrganizationProjectClaimResponseOutput

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `expires_at` |  |
| `preview` |  |
| `project` |  |

Operations: load.

API path: `/v1/organizations/{slug}/project-claim/{token}`

#### OrganizationProjectsResponseOutput

| Field | Description |
| --- | --- |
| `cloud_provider` |  |
| `databases` |  |
| `inserted_at` |  |
| `is_branch` |  |
| `name` |  |
| `ref` |  |
| `region` |  |
| `status` |  |

Operations: list.

API path: `/v1/organizations/{slug}/projects`

#### Performance

| Field | Description |
| --- | --- |
| `cache_key` |  |
| `categories` |  |
| `description` |  |
| `detail` |  |
| `facing` |  |
| `level` |  |
| `metadata` |  |
| `name` |  |
| `observed_at` |  |
| `remediation` |  |
| `title` |  |

Operations: list.

API path: `/v1/projects/{ref}/advisors/performance`

#### Pgsodium

| Field | Description |
| --- | --- |
| `root_key` | The pgsodium root key: 32 bytes, hex-encoded (64 characters). |

Operations: load, update.

API path: `/v1/projects/{ref}/pgsodium`

#### Postgre

| Field | Description |
| --- | --- |
| `checkpoint_timeout` | Default unit: s |
| `cron_log_statement` |  |
| `effective_cache_size` |  |
| `hot_standby_feedback` |  |
| `log_autovacuum_min_duration` | Default unit: ms |
| `log_checkpoints` |  |
| `log_connections` |  |
| `log_disconnections` |  |
| `log_duration` |  |
| `log_lock_waits` |  |
| `log_recovery_conflict_waits` |  |
| `log_replication_commands` |  |
| `log_startup_progress_interval` | Default unit: ms |
| `log_temp_files` |  |
| `logical_decoding_work_mem` |  |
| `maintenance_work_mem` |  |
| `max_connections` |  |
| `max_locks_per_transaction` |  |
| `max_logical_replication_workers` |  |
| `max_parallel_maintenance_workers` |  |
| `max_parallel_workers` |  |
| `max_parallel_workers_per_gather` |  |
| `max_replication_slots` |  |
| `max_slot_wal_keep_size` |  |
| `max_standby_archive_delay` |  |
| `max_standby_streaming_delay` |  |
| `max_sync_workers_per_subscription` |  |
| `max_wal_senders` |  |
| `max_wal_size` |  |
| `max_worker_processes` |  |
| `restart_database` |  |
| `session_replication_role` |  |
| `shared_buffers` |  |
| `statement_timeout` | Default unit: ms |
| `track_activity_query_size` |  |
| `track_commit_timestamp` |  |
| `wal_keep_size` |  |
| `wal_sender_timeout` | Default unit: ms |
| `work_mem` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/config/database/postgres`

#### Postgrest

| Field | Description |
| --- | --- |
| `db_extra_search_path` |  |
| `db_pool` | If `null`, the value is automatically configured based on compute size. |
| `db_pool_acquisition_timeout` | If `null`, the value is automatically configured to 10. |
| `db_schema` |  |
| `jwt_secret` |  |
| `max_rows` |  |

Operations: load.

API path: `/v1/projects/{ref}/postgrest`

#### Project

| Field | Description |
| --- | --- |

Operations: create, remove.

API path: `/v1/projects/{ref}/config/disk`

#### ProjectAvailableRestoreVersionsResponseOutput

| Field | Description |
| --- | --- |
| `postgres_engine` |  |
| `release_channel` |  |
| `version` |  |

Operations: list.

API path: `/v1/projects/{ref}/restore`

#### ProjectClaimTokenResponseOutput

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `expires_at` |  |
| `token_alias` |  |

Operations: load.

API path: `/v1/projects/{ref}/claim-token`

#### ProjectUpgradeEligibilityResponseOutput

| Field | Description |
| --- | --- |
| `app_version` |  |
| `postgres_version` |  |
| `release_channel` |  |

Operations: list.

API path: `/v1/projects/{ref}/upgrade/eligibility`

#### ProjectUpgradeInitiateResponseOutput

| Field | Description |
| --- | --- |
| `release_channel` |  |
| `target_version` |  |

Operations: create.

API path: `/v1/projects/{ref}/upgrade`

#### Provider

| Field | Description |
| --- | --- |
| `created_at` |  |
| `domains` |  |
| `id` |  |
| `saml` |  |
| `updated_at` |  |

Operations: load, remove.

API path: `/v1/projects/{ref}/config/auth/sso/providers/{provider_id}`

#### ReadOnlyStatusResponseOutput

| Field | Description |
| --- | --- |
| `enabled` |  |
| `override_active_until` |  |
| `override_enabled` |  |

Operations: load.

API path: `/v1/projects/{ref}/readonly`

#### Realtime

| Field | Description |
| --- | --- |
| `admin_suspended_at` | If set, the Realtime service has been suspended by an admin. |
| `connection_pool` | Sets connection pool size for Realtime Authorization |
| `max_bytes_per_second` | Sets maximum number of bytes per second rate per channel limit |
| `max_channels_per_client` | Sets maximum number of channels per client rate limit |
| `max_concurrent_users` | Sets maximum number of concurrent users rate limit |
| `max_events_per_second` | Sets maximum number of events per second rate per channel limit |
| `max_joins_per_second` | Sets maximum number of joins per second rate limit |
| `max_payload_size_in_kb` | Sets maximum number of payload size in KB rate limit |
| `max_presence_events_per_second` | Sets maximum number of presence events per second rate limit |
| `postgres_changes_pool` | Sets connection pool size used to create Postgres Changes subscriptions |
| `presence_enabled` | Whether to enable presence |
| `private_only` | Whether to only allow private channels |
| `suspend` | Disables the Realtime service for this project when true. |

Operations: create, load, update.

API path: `/v1/projects/{ref}/config/realtime/shutdown`

#### RegionsInfoOutput

| Field | Description |
| --- | --- |
| `all` |  |
| `recommendations` |  |

Operations: load.

API path: `/v1/projects/available-regions`

#### RolesResponseOutput

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/v1/projects/{ref}/cli/login-role`

#### Secret

| Field | Description |
| --- | --- |
| `name` |  |
| `updated_at` |  |
| `value` |  |

Operations: create, list, remove.

API path: `/v1/projects/{ref}/secrets`

#### Security

| Field | Description |
| --- | --- |
| `cache_key` |  |
| `categories` |  |
| `description` |  |
| `detail` |  |
| `facing` |  |
| `level` |  |
| `metadata` |  |
| `name` |  |
| `observed_at` |  |
| `remediation` |  |
| `title` |  |

Operations: list.

API path: `/v1/projects/{ref}/advisors/security`

#### SigningKey

| Field | Description |
| --- | --- |
| `algorithm` |  |
| `created_at` |  |
| `id` |  |
| `private_jwk` |  |
| `public_jwk` |  |
| `status` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

API path: `/v1/projects/{ref}/config/auth/signing-keys`

#### SigningKeyResponseOutput

| Field | Description |
| --- | --- |
| `algorithm` |  |
| `created_at` |  |
| `id` |  |
| `public_jwk` |  |
| `status` |  |
| `updated_at` |  |

Operations: create, load.

API path: `/v1/projects/{ref}/config/auth/signing-keys/legacy`

#### Snippet

| Field | Description |
| --- | --- |
| `content` |  |
| `description` |  |
| `favorite` |  |
| `id` |  |
| `inserted_at` |  |
| `name` |  |
| `owner` |  |
| `project` |  |
| `type` |  |
| `updated_at` |  |
| `updated_by` |  |
| `visibility` |  |

Operations: list, load.

API path: `/v1/snippets`

#### SslEnforcement

| Field | Description |
| --- | --- |
| `appliedSuccessfully` |  |
| `currentConfig` |  |
| `requestedConfig` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/ssl-enforcement`

#### Storage

| Field | Description |
| --- | --- |
| `capabilities` |  |
| `external` |  |
| `features` |  |
| `fileSizeLimit` |  |
| `migrationVersion` |  |

Operations: load, update.

API path: `/v1/projects/{ref}/config/storage`

#### StreamableFile

| Field | Description |
| --- | --- |

Operations: load.

API path: `/v1/projects/{ref}/functions/{function_slug}/body`

#### SubdomainAvailabilityResponseOutput

| Field | Description |
| --- | --- |
| `vanity_subdomain` |  |

Operations: create.

API path: `/v1/projects/{ref}/vanity-subdomain/check-availability`

#### SupavisorConfigResponseOutput

| Field | Description |
| --- | --- |
| `connectionString` | Use connection_string instead |
| `connection_string` |  |
| `database_type` |  |
| `db_host` |  |
| `db_name` |  |
| `db_port` |  |
| `db_user` |  |
| `default_pool_size` |  |
| `identifier` |  |
| `is_using_scram_auth` |  |
| `max_client_conn` |  |
| `pool_mode` |  |

Operations: list.

API path: `/v1/projects/{ref}/config/database/pooler`

#### ThirdPartyAuth

| Field | Description |
| --- | --- |
| `custom_jwks` |  |
| `id` |  |
| `inserted_at` |  |
| `jwks_url` |  |
| `oidc_issuer_url` |  |
| `resolved_at` |  |
| `resolved_jwks` |  |
| `type` |  |
| `updated_at` |  |

Operations: create, list, load, remove.

API path: `/v1/projects/{ref}/config/auth/third-party-auth`

#### Typescript

| Field | Description |
| --- | --- |
| `types` |  |

Operations: load.

API path: `/v1/projects/{ref}/types/typescript`

#### UpdateCustomHostnameResponseOutput

| Field | Description |
| --- | --- |
| `custom_hostname` |  |
| `data` |  |
| `status` |  |

Operations: create, load.

API path: `/v1/projects/{ref}/custom-hostname/activate`

#### UpdateProviderResponseOutput

| Field | Description |
| --- | --- |
| `attribute_mapping` |  |
| `created_at` |  |
| `domains` |  |
| `id` |  |
| `metadata_url` |  |
| `metadata_xml` |  |
| `name_id_format` |  |
| `saml` |  |
| `updated_at` |  |

Operations: update.

API path: `/v1/projects/{ref}/config/auth/sso/providers/{provider_id}`

#### UpdateSupavisorConfigResponseOutput

| Field | Description |
| --- | --- |
| `default_pool_size` |  |
| `pool_mode` | Dedicated pooler mode for the project |

Operations: update.

API path: `/v1/projects/{ref}/config/database/pooler`

#### V1BackupScheduleResponseOutput

| Field | Description |
| --- | --- |
| `schedule_for` | Time of day to schedule daily backups, in UTC. |
| `updated_at` | Timestamp of when the backup schedule was last updated. |

Operations: load, update.

API path: `/v1/projects/{ref}/database/backups/schedule`

#### V1BackupsResponseOutput

| Field | Description |
| --- | --- |
| `id` |  |
| `inserted_at` |  |
| `is_physical_backup` |  |
| `status` |  |

Operations: list.

API path: `/v1/projects/{ref}/database/backups`

#### V1GetMigrationResponseOutput

| Field | Description |
| --- | --- |
| `created_by` |  |
| `idempotency_key` |  |
| `name` |  |
| `rollback` |  |
| `statements` |  |
| `version` |  |

Operations: load.

API path: `/v1/projects/{ref}/database/migrations/{version}`

#### V1GetUsageApiCountResponseOutput

| Field | Description |
| --- | --- |
| `timestamp` |  |
| `total_auth_requests` |  |
| `total_realtime_requests` |  |
| `total_rest_requests` |  |
| `total_storage_requests` |  |

Operations: list.

API path: `/v1/projects/{ref}/analytics/endpoints/usage.api-counts`

#### V1GetUsageApiRequestsCountResponseOutput

| Field | Description |
| --- | --- |
| `count` |  |

Operations: list.

API path: `/v1/projects/{ref}/analytics/endpoints/usage.api-requests-count`

#### V1ListEntitlementsResponseOutput

| Field | Description |
| --- | --- |
| `config` |  |
| `feature` |  |
| `hasAccess` |  |
| `type` |  |

Operations: list.

API path: `/v1/organizations/{slug}/entitlements`

#### V1ListMigrationsResponseOutput

| Field | Description |
| --- | --- |
| `name` |  |
| `version` |  |

Operations: list.

API path: `/v1/projects/{ref}/database/migrations`

#### V1OrganizationMemberResponseOutput

| Field | Description |
| --- | --- |
| `avatar_url` |  |
| `email` |  |
| `mfa_enabled` |  |
| `role_name` |  |
| `user_id` |  |
| `user_name` |  |

Operations: list.

API path: `/v1/organizations/{slug}/members`

#### V1OrganizationSlugResponseOutput

| Field | Description |
| --- | --- |
| `allowed_release_channels` |  |
| `id` | Deprecated: Use `slug` instead. |
| `name` |  |
| `opt_in_tags` |  |
| `plan` |  |
| `slug` | Organization slug |

Operations: create, list, load.

API path: `/v1/organizations`

#### V1PgbouncerConfigResponseOutput

| Field | Description |
| --- | --- |
| `connection_string` |  |
| `default_pool_size` |  |
| `ignore_startup_parameters` |  |
| `max_client_conn` |  |
| `pool_mode` |  |
| `query_wait_timeout` |  |
| `reserve_pool_size` |  |
| `server_idle_timeout` |  |
| `server_lifetime` |  |

Operations: load.

API path: `/v1/projects/{ref}/config/database/pgbouncer`

#### V1ProfileResponseOutput

| Field | Description |
| --- | --- |
| `gotrue_id` |  |
| `primary_email` |  |
| `username` |  |

Operations: load.

API path: `/v1/profile`

#### V1ProjectRefResponseOutput

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `ref` |  |

Operations: remove, update.

API path: `/v1/projects/{ref}`

#### V1ProjectWithDatabaseResponseOutput

| Field | Description |
| --- | --- |
| `created_at` | Creation timestamp |
| `database` |  |
| `db_pass` | Database password |
| `desired_instance_size` | Desired instance size. |
| `high_availability` | [Experimental] Whether to enable high availability for the project. |
| `id` | Deprecated: Use `ref` instead. |
| `kps_enabled` | This field is deprecated and is ignored in this request |
| `name` | Name of your project |
| `organization_id` | Deprecated: Use `organization_slug` instead. |
| `organization_slug` | Organization slug |
| `plan` | Subscription Plan is now set on organization level and is ignored in this request |
| `postgres_engine` |  |
| `ref` | Project ref |
| `region` | Region of your project |
| `region_selection` | Region selection. |
| `release_channel` |  |
| `status` |  |
| `template_url` | Template URL used to create the project from the CLI. |

Operations: create, list, load, remove, update.

API path: `/v1/projects/{ref}/claim-token`

#### V1RestorePoint

| Field | Description |
| --- | --- |
| `completed_on` |  |
| `name` |  |
| `status` |  |

Operations: create, load.

API path: `/v1/projects/{ref}/database/backups/restore-point`

#### V1ServiceHealthResponseOutput

| Field | Description |
| --- | --- |
| `error` |  |
| `healthy` | Deprecated. |
| `info` |  |
| `name` |  |
| `status` |  |

Operations: list.

API path: `/v1/projects/{ref}/health`

#### V1StorageBucketResponseOutput

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `name` |  |
| `owner` |  |
| `public` |  |
| `updated_at` |  |

Operations: list.

API path: `/v1/projects/{ref}/storage/buckets`

#### V1UpdatePasswordResponseOutput

| Field | Description |
| --- | --- |
| `message` |  |
| `password` |  |

Operations: update.

API path: `/v1/projects/{ref}/database/password`

#### VanitySubdomain

| Field | Description |
| --- | --- |
| `custom_domain` |  |
| `status` |  |

Operations: load.

API path: `/v1/projects/{ref}/vanity-subdomain`



## Entities


### Action

Create an instance: `const action = client.Action()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` |  |
| `check_run_id` | `number` |  |
| `created_at` | `string` |  |
| `git_config` | `any` |  |
| `id` | `string` |  |
| `run_steps` | `any[]` |  |
| `updated_at` | `string` |  |
| `workdir` | `string` |  |

#### Example: Load

```ts
const action = await client.Action().load({ id: 'action_id', project_id: 'project_id' })
```


### Activate

Create an instance: `const activate = client.Activate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `vanity_subdomain` | `string` |  |

#### Example: Create

```ts
const activate = await client.Activate().create({
  project_id: 'example_project_id',
  vanity_subdomain: 'example_vanity_subdomain',
})
```


### Analytics

Create an instance: `const analytics = client.Analytics()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const analytics = await client.Analytics().load({ project_id: 'project_id' })
```


### ApiKey

Create an instance: `const api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_key` | `string` |  |
| `description` | `string` |  |
| `hash` | `string` |  |
| `id` | `string` |  |
| `inserted_at` | `string` |  |
| `name` | `string` |  |
| `prefix` | `string` |  |
| `secret_jwt_template` | `Record<string, any>` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const api_key = await client.ApiKey().load({ id: 'api_key_id', project_id: 'project_id' })
```

#### Example: List

```ts
const api_keys = await client.ApiKey().list({ ref: "example" })
```

#### Example: Create

```ts
const api_key = await client.ApiKey().create({
  ref: 'example_ref',
  name: 'example_name',
})
```


### Auth

Create an instance: `const auth = client.Auth()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_max_request_duration` | `number` |  |
| `custom_oauth_enabled` | `boolean` |  |
| `custom_oauth_max_providers` | `number` |  |
| `db_max_pool_size` | `number` |  |
| `db_max_pool_size_unit` | `string` |  |
| `disable_signup` | `boolean` |  |
| `external_anonymous_users_enabled` | `boolean` |  |
| `external_apple_additional_client_ids` | `string` |  |
| `external_apple_client_id` | `string` |  |
| `external_apple_email_optional` | `boolean` |  |
| `external_apple_enabled` | `boolean` |  |
| `external_apple_secret` | `string` |  |
| `external_azure_client_id` | `string` |  |
| `external_azure_email_optional` | `boolean` |  |
| `external_azure_enabled` | `boolean` |  |
| `external_azure_secret` | `string` |  |
| `external_azure_url` | `string` |  |
| `external_bitbucket_client_id` | `string` |  |
| `external_bitbucket_email_optional` | `boolean` |  |
| `external_bitbucket_enabled` | `boolean` |  |
| `external_bitbucket_secret` | `string` |  |
| `external_discord_client_id` | `string` |  |
| `external_discord_email_optional` | `boolean` |  |
| `external_discord_enabled` | `boolean` |  |
| `external_discord_secret` | `string` |  |
| `external_email_enabled` | `boolean` |  |
| `external_facebook_client_id` | `string` |  |
| `external_facebook_email_optional` | `boolean` |  |
| `external_facebook_enabled` | `boolean` |  |
| `external_facebook_secret` | `string` |  |
| `external_figma_client_id` | `string` |  |
| `external_figma_email_optional` | `boolean` |  |
| `external_figma_enabled` | `boolean` |  |
| `external_figma_secret` | `string` |  |
| `external_github_client_id` | `string` |  |
| `external_github_email_optional` | `boolean` |  |
| `external_github_enabled` | `boolean` |  |
| `external_github_secret` | `string` |  |
| `external_gitlab_client_id` | `string` |  |
| `external_gitlab_email_optional` | `boolean` |  |
| `external_gitlab_enabled` | `boolean` |  |
| `external_gitlab_secret` | `string` |  |
| `external_gitlab_url` | `string` |  |
| `external_google_additional_client_ids` | `string` |  |
| `external_google_client_id` | `string` |  |
| `external_google_email_optional` | `boolean` |  |
| `external_google_enabled` | `boolean` |  |
| `external_google_secret` | `string` |  |
| `external_google_skip_nonce_check` | `boolean` |  |
| `external_kakao_client_id` | `string` |  |
| `external_kakao_email_optional` | `boolean` |  |
| `external_kakao_enabled` | `boolean` |  |
| `external_kakao_secret` | `string` |  |
| `external_keycloak_client_id` | `string` |  |
| `external_keycloak_email_optional` | `boolean` |  |
| `external_keycloak_enabled` | `boolean` |  |
| `external_keycloak_secret` | `string` |  |
| `external_keycloak_url` | `string` |  |
| `external_linkedin_oidc_client_id` | `string` |  |
| `external_linkedin_oidc_email_optional` | `boolean` |  |
| `external_linkedin_oidc_enabled` | `boolean` |  |
| `external_linkedin_oidc_secret` | `string` |  |
| `external_notion_client_id` | `string` |  |
| `external_notion_email_optional` | `boolean` |  |
| `external_notion_enabled` | `boolean` |  |
| `external_notion_secret` | `string` |  |
| `external_phone_enabled` | `boolean` |  |
| `external_slack_client_id` | `string` |  |
| `external_slack_email_optional` | `boolean` |  |
| `external_slack_enabled` | `boolean` |  |
| `external_slack_oidc_client_id` | `string` |  |
| `external_slack_oidc_email_optional` | `boolean` |  |
| `external_slack_oidc_enabled` | `boolean` |  |
| `external_slack_oidc_secret` | `string` |  |
| `external_slack_secret` | `string` |  |
| `external_spotify_client_id` | `string` |  |
| `external_spotify_email_optional` | `boolean` |  |
| `external_spotify_enabled` | `boolean` |  |
| `external_spotify_secret` | `string` |  |
| `external_twitch_client_id` | `string` |  |
| `external_twitch_email_optional` | `boolean` |  |
| `external_twitch_enabled` | `boolean` |  |
| `external_twitch_secret` | `string` |  |
| `external_twitter_client_id` | `string` |  |
| `external_twitter_email_optional` | `boolean` |  |
| `external_twitter_enabled` | `boolean` |  |
| `external_twitter_secret` | `string` |  |
| `external_web3_ethereum_enabled` | `boolean` |  |
| `external_web3_solana_enabled` | `boolean` |  |
| `external_workos_client_id` | `string` |  |
| `external_workos_enabled` | `boolean` |  |
| `external_workos_secret` | `string` |  |
| `external_workos_url` | `string` |  |
| `external_x_client_id` | `string` |  |
| `external_x_email_optional` | `boolean` |  |
| `external_x_enabled` | `boolean` |  |
| `external_x_secret` | `string` |  |
| `external_zoom_client_id` | `string` |  |
| `external_zoom_email_optional` | `boolean` |  |
| `external_zoom_enabled` | `boolean` |  |
| `external_zoom_secret` | `string` |  |
| `hook_after_user_created_enabled` | `boolean` |  |
| `hook_after_user_created_secrets` | `string` |  |
| `hook_after_user_created_uri` | `string` |  |
| `hook_before_user_created_enabled` | `boolean` |  |
| `hook_before_user_created_secrets` | `string` |  |
| `hook_before_user_created_uri` | `string` |  |
| `hook_custom_access_token_enabled` | `boolean` |  |
| `hook_custom_access_token_secrets` | `string` |  |
| `hook_custom_access_token_uri` | `string` |  |
| `hook_mfa_verification_attempt_enabled` | `boolean` |  |
| `hook_mfa_verification_attempt_secrets` | `string` |  |
| `hook_mfa_verification_attempt_uri` | `string` |  |
| `hook_password_verification_attempt_enabled` | `boolean` |  |
| `hook_password_verification_attempt_secrets` | `string` |  |
| `hook_password_verification_attempt_uri` | `string` |  |
| `hook_send_email_enabled` | `boolean` |  |
| `hook_send_email_secrets` | `string` |  |
| `hook_send_email_uri` | `string` |  |
| `hook_send_sms_enabled` | `boolean` |  |
| `hook_send_sms_secrets` | `string` |  |
| `hook_send_sms_uri` | `string` |  |
| `jwt_exp` | `number` |  |
| `mailer_allow_unverified_email_sign_ins` | `boolean` |  |
| `mailer_autoconfirm` | `boolean` |  |
| `mailer_notifications_email_changed_enabled` | `boolean` |  |
| `mailer_notifications_identity_linked_enabled` | `boolean` |  |
| `mailer_notifications_identity_unlinked_enabled` | `boolean` |  |
| `mailer_notifications_mfa_factor_enrolled_enabled` | `boolean` |  |
| `mailer_notifications_mfa_factor_unenrolled_enabled` | `boolean` |  |
| `mailer_notifications_password_changed_enabled` | `boolean` |  |
| `mailer_notifications_phone_changed_enabled` | `boolean` |  |
| `mailer_otp_exp` | `number` |  |
| `mailer_otp_length` | `number` |  |
| `mailer_secure_email_change_enabled` | `boolean` |  |
| `mailer_subjects_confirmation` | `string` |  |
| `mailer_subjects_email_change` | `string` |  |
| `mailer_subjects_email_changed_notification` | `string` |  |
| `mailer_subjects_identity_linked_notification` | `string` |  |
| `mailer_subjects_identity_unlinked_notification` | `string` |  |
| `mailer_subjects_invite` | `string` |  |
| `mailer_subjects_magic_link` | `string` |  |
| `mailer_subjects_mfa_factor_enrolled_notification` | `string` |  |
| `mailer_subjects_mfa_factor_unenrolled_notification` | `string` |  |
| `mailer_subjects_password_changed_notification` | `string` |  |
| `mailer_subjects_phone_changed_notification` | `string` |  |
| `mailer_subjects_reauthentication` | `string` |  |
| `mailer_subjects_recovery` | `string` |  |
| `mailer_templates_confirmation_content` | `string` |  |
| `mailer_templates_email_change_content` | `string` |  |
| `mailer_templates_email_changed_notification_content` | `string` |  |
| `mailer_templates_identity_linked_notification_content` | `string` |  |
| `mailer_templates_identity_unlinked_notification_content` | `string` |  |
| `mailer_templates_invite_content` | `string` |  |
| `mailer_templates_magic_link_content` | `string` |  |
| `mailer_templates_mfa_factor_enrolled_notification_content` | `string` |  |
| `mailer_templates_mfa_factor_unenrolled_notification_content` | `string` |  |
| `mailer_templates_password_changed_notification_content` | `string` |  |
| `mailer_templates_phone_changed_notification_content` | `string` |  |
| `mailer_templates_reauthentication_content` | `string` |  |
| `mailer_templates_recovery_content` | `string` |  |
| `mfa_max_enrolled_factors` | `number` |  |
| `mfa_phone_enroll_enabled` | `boolean` |  |
| `mfa_phone_max_frequency` | `number` |  |
| `mfa_phone_otp_length` | `number` |  |
| `mfa_phone_template` | `string` |  |
| `mfa_phone_verify_enabled` | `boolean` |  |
| `mfa_totp_enroll_enabled` | `boolean` |  |
| `mfa_totp_verify_enabled` | `boolean` |  |
| `mfa_web_authn_enroll_enabled` | `boolean` |  |
| `mfa_web_authn_verify_enabled` | `boolean` |  |
| `nimbus_oauth_client_id` | `string` |  |
| `nimbus_oauth_client_secret` | `string` |  |
| `nimbus_oauth_email_optional` | `boolean` |  |
| `oauth_server_allow_dynamic_registration` | `boolean` |  |
| `oauth_server_authorization_path` | `string` |  |
| `oauth_server_enabled` | `boolean` |  |
| `passkey_enabled` | `boolean` |  |
| `password_hibp_enabled` | `boolean` |  |
| `password_min_length` | `number` |  |
| `password_required_characters` | `string` |  |
| `rate_limit_anonymous_users` | `number` |  |
| `rate_limit_email_sent` | `number` |  |
| `rate_limit_otp` | `number` |  |
| `rate_limit_sms_sent` | `number` |  |
| `rate_limit_token_refresh` | `number` |  |
| `rate_limit_verify` | `number` |  |
| `rate_limit_web3` | `number` |  |
| `refresh_token_rotation_enabled` | `boolean` |  |
| `saml_allow_encrypted_assertions` | `boolean` |  |
| `saml_enabled` | `boolean` |  |
| `saml_external_url` | `string` |  |
| `security_captcha_enabled` | `boolean` |  |
| `security_captcha_provider` | `string` |  |
| `security_captcha_secret` | `string` |  |
| `security_manual_linking_enabled` | `boolean` |  |
| `security_refresh_token_reuse_interval` | `number` | Refresh token reuse interval in seconds. |
| `security_sb_forwarded_for_enabled` | `boolean` |  |
| `security_update_password_require_current_password` | `boolean` | Require the user's current password when updating their password. |
| `security_update_password_require_reauthentication` | `boolean` |  |
| `sessions_inactivity_timeout` | `number` | Session inactivity timeout in hours. |
| `sessions_single_per_user` | `boolean` |  |
| `sessions_tags` | `string` |  |
| `sessions_timebox` | `number` | Session timebox in hours. |
| `site_url` | `string` |  |
| `sms_autoconfirm` | `boolean` |  |
| `sms_max_frequency` | `number` |  |
| `sms_messagebird_access_key` | `string` |  |
| `sms_messagebird_originator` | `string` |  |
| `sms_otp_exp` | `number` |  |
| `sms_otp_length` | `number` |  |
| `sms_provider` | `string` |  |
| `sms_template` | `string` |  |
| `sms_test_otp` | `string` |  |
| `sms_test_otp_valid_until` | `string` |  |
| `sms_textlocal_api_key` | `string` |  |
| `sms_textlocal_sender` | `string` |  |
| `sms_twilio_account_sid` | `string` |  |
| `sms_twilio_auth_token` | `string` |  |
| `sms_twilio_content_sid` | `string` |  |
| `sms_twilio_message_service_sid` | `string` |  |
| `sms_twilio_verify_account_sid` | `string` |  |
| `sms_twilio_verify_auth_token` | `string` |  |
| `sms_twilio_verify_message_service_sid` | `string` |  |
| `sms_vonage_api_key` | `string` |  |
| `sms_vonage_api_secret` | `string` |  |
| `sms_vonage_from` | `string` |  |
| `smtp_admin_email` | `string` |  |
| `smtp_host` | `string` |  |
| `smtp_max_frequency` | `number` |  |
| `smtp_pass` | `string` |  |
| `smtp_port` | `string` |  |
| `smtp_sender_name` | `string` |  |
| `smtp_user` | `string` |  |
| `uri_allow_list` | `string` |  |
| `webauthn_rp_display_name` | `string` |  |
| `webauthn_rp_id` | `string` |  |
| `webauthn_rp_origins` | `string` |  |

#### Example: Load

```ts
const auth = await client.Auth().load({ project_id: 'project_id' })
```


### Billing

Create an instance: `const billing = client.Billing()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |


### Branch

Create an instance: `const branch = client.Branch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_name` | `string` |  |
| `created_at` | `string` |  |
| `db_host` | `string` |  |
| `db_pass` | `string` |  |
| `db_port` | `number` |  |
| `db_user` | `string` |  |
| `deletion_scheduled_at` | `string` |  |
| `desired_instance_size` | `string` |  |
| `git_branch` | `string` |  |
| `id` | `string` |  |
| `is_default` | `boolean` |  |
| `jwt_secret` | `string` |  |
| `latest_check_run_id` | `number` | This field is deprecated and will not be populated. |
| `name` | `string` |  |
| `notify_url` | `string` | HTTP endpoint to receive branch status updates. |
| `parent_project_ref` | `string` |  |
| `persistent` | `boolean` |  |
| `postgres_engine` | `string` | Postgres engine version. |
| `postgres_version` | `string` |  |
| `pr_number` | `number` |  |
| `preview_project_status` | `string` |  |
| `project_ref` | `string` |  |
| `ref` | `string` |  |
| `region` | `string` |  |
| `release_channel` | `string` | Release channel. |
| `request_review` | `boolean` |  |
| `reset_on_push` | `boolean` | This field is deprecated and will be ignored. |
| `review_requested_at` | `string` |  |
| `secrets` | `Record<string, any>` |  |
| `status` | `string` | This field is deprecated. |
| `updated_at` | `string` |  |
| `with_data` | `boolean` |  |

#### Example: Load

```ts
const branch = await client.Branch().load({ id: 'branch_id' })
```

#### Example: List

```ts
const branchs = await client.Branch().list({ ref: "example" })
```

#### Example: Create

```ts
const branch = await client.Branch().create({
  ref: 'example_ref',
  branch_name: 'example_branch_name',
  created_at: 'example_created_at',
  db_host: 'example_db_host',
  db_port: 1,
  id: 'example_id',
  is_default: true,
  name: 'example_name',
  parent_project_ref: 'example_parent_project_ref',
  persistent: true,
  postgres_engine: 'example_postgres_engine',
  postgres_version: 'example_postgres_version',
  project_ref: 'example_project_ref',
  release_channel: 'example_release_channel',
  status: 'example_status',
  updated_at: 'example_updated_at',
  with_data: true,
})
```


### BranchUpdateResponseOutput

Create an instance: `const branch_update_response_output = client.BranchUpdateResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `migration_version` | `string` |  |

#### Example: Create

```ts
const branch_update_response_output = await client.BranchUpdateResponseOutput().create({
  branch_id_or_ref: 'example_branch_id_or_ref',
})
```


### BulkUpdateFunctionResponseOutput

Create an instance: `const bulk_update_function_response_output = client.BulkUpdateFunctionResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `functions` | `any[]` |  |


### CreateProviderResponseOutput

Create an instance: `const create_provider_response_output = client.CreateProviderResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute_mapping` | `Record<string, any>` |  |
| `domains` | `any[]` |  |
| `metadata_url` | `string` |  |
| `metadata_xml` | `string` |  |
| `name_id_format` | `string` |  |
| `type` | `string` | What type of provider will be created |

#### Example: Create

```ts
const create_provider_response_output = await client.CreateProviderResponseOutput().create({
  project_id: 'example_project_id',
  attribute_mapping: {},
  type: 'example_type',
})
```


### CreateRoleResponseOutput

Create an instance: `const create_role_response_output = client.CreateRoleResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `read_only` | `boolean` |  |

#### Example: Create

```ts
const create_role_response_output = await client.CreateRoleResponseOutput().create({
  project_id: 'example_project_id',
  read_only: true,
})
```


### Database

Create an instance: `const database = client.Database()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `database_identifier` | `string` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `parameters` | `any[]` |  |
| `query` | `string` |  |
| `read_replica_region` | `string` | Region you want your read replica to reside in |
| `recovery_time_target_unix` | `number` |  |
| `rollback` | `string` |  |

#### Example: Load

```ts
const database = await client.Database().load({ ref: 'ref' })
```

#### Example: List

```ts
const databases = await client.Database().list({ project_id: "example" })
```

#### Example: Create

```ts
const database = await client.Database().create({
  project_id: 'example_project_id',
  database_identifier: 'example_database_identifier',
  id: 1,
  name: 'example_name',
  query: 'example_query',
  read_replica_region: 'example_read_replica_region',
  recovery_time_target_unix: 1,
})
```


### DatabaseUpgradeStatusResponseOutput

Create an instance: `const database_upgrade_status_response_output = client.DatabaseUpgradeStatusResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `string` |  |
| `initiated_at` | `string` |  |
| `latest_status_at` | `string` |  |
| `progress` | `string` |  |
| `status` | `number` |  |
| `target_version` | `string` |  |

#### Example: Load

```ts
const database_upgrade_status_response_output = await client.DatabaseUpgradeStatusResponseOutput().load({ project_id: 'project_id' })
```


### Deploy

Create an instance: `const deploy = client.Deploy()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const deploy = await client.Deploy().create({
  project_id: 'example_project_id',
})
```


### Disk

Create an instance: `const disk = client.Disk()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `any` |  |
| `last_modified_at` | `string` |  |

#### Example: Load

```ts
const disk = await client.Disk().load({ project_id: 'project_id' })
```


### DiskAutoscaleConfigOutput

Create an instance: `const disk_autoscale_config_output = client.DiskAutoscaleConfigOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `growth_percent` | `number` | Growth percentage for disk autoscaling |
| `max_size_gb` | `number` | Maximum limit the disk size will grow to in GB |
| `min_increment_gb` | `number` | Minimum increment size for disk autoscaling in GB |

#### Example: Load

```ts
const disk_autoscale_config_output = await client.DiskAutoscaleConfigOutput().load({ project_id: 'project_id' })
```


### DiskUtilMetricsResponseOutput

Create an instance: `const disk_util_metrics_response_output = client.DiskUtilMetricsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fs_avail_bytes` | `number` |  |
| `fs_size_bytes` | `number` |  |
| `fs_used_bytes` | `number` |  |

#### Example: Load

```ts
const disk_util_metrics_response_output = await client.DiskUtilMetricsResponseOutput().load({ project_id: 'project_id' })
```


### Domain

Create an instance: `const domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### EdgeFunction

Create an instance: `const edge_function = client.EdgeFunction()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Environment

Create an instance: `const environment = client.Environment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Example: Load

```ts
const environment = await client.Environment().load({ branch_id_or_ref: 'branch_id_or_ref' })
```


### Function

Create an instance: `const function_ = client.Function()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `body` | `string` |  |
| `created_at` | `number` |  |
| `entrypoint_path` | `string` |  |
| `ezbr_sha256` | `string` |  |
| `id` | `string` |  |
| `import_map` | `boolean` |  |
| `import_map_path` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `number` |  |
| `verify_jwt` | `boolean` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const function_ = await client.Function().load({ id: 'function_id', project_id: 'project_id' })
```

#### Example: List

```ts
const function_s = await client.Function().list({ ref: "example" })
```

#### Example: Create

```ts
const function_ = await client.Function().create({
  ref: 'example_ref',
  body: 'example_body',
  created_at: 1,
  id: 'example_id',
  status: 'example_status',
  updated_at: 1,
  version: 1,
})
```


### FunctionscombinedStat

Create an instance: `const functionscombined_stat = client.FunctionscombinedStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `any` |  |
| `result` | `any[]` |  |

#### Example: List

```ts
const functionscombined_stats = await client.FunctionscombinedStat().list({ project_id: "example", function_id: "example", interval: "example" })
```


### Invite

Create an instance: `const invite = client.Invite()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `invite_id` | `string` |  |
| `roles` | `any[]` |  |
| `user_roles` | `any[]` |  |

#### Example: Create

```ts
const invite = await client.Invite().create({
  project_id: 'example_project_id',
  email: 'example_email',
  invite_id: 'example_invite_id',
  roles: [],
  user_roles: [],
})
```


### Jit

Create an instance: `const jit = client.Jit()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `act` | `string` |  |
| `allowed_networks` | `Record<string, any>` |  |
| `branches_only` | `boolean` |  |
| `expires_at` | `number` |  |
| `rhost` | `any` |  |
| `role` | `string` |  |
| `roles` | `any[]` |  |
| `user_id` | `string` |  |
| `user_role` | `Record<string, any>` |  |
| `user_roles` | `any[]` |  |

#### Example: List

```ts
const jits = await client.Jit().list({ project_id: "example" })
```

#### Example: Create

```ts
const jit = await client.Jit().create({
  project_id: 'example_project_id',
  rhost: 'example_rhost',
  role: 'example_role',
  roles: [],
  user_role: {},
  user_roles: [],
})
```


### JitAccessResponseOutput

Create an instance: `const jit_access_response_output = client.JitAccessResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `token` | `string` |  |
| `user_id` | `string` |  |
| `user_roles` | `any[]` |  |

#### Example: Create

```ts
const jit_access_response_output = await client.JitAccessResponseOutput().create({
  project_id: 'example_project_id',
  email: 'example_email',
  token: 'example_token',
  user_roles: [],
})
```


### JitListAccessResponseOutput

Create an instance: `const jit_list_access_response_output = client.JitListAccessResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `items` | `any[]` |  |

#### Example: List

```ts
const jit_list_access_response_outputs = await client.JitListAccessResponseOutput().list({ project_id: "example" })
```


### Legacy

Create an instance: `const legacy = client.Legacy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |

#### Example: Load

```ts
const legacy = await client.Legacy().load({ project_id: 'project_id' })
```


### ListActionRunResponseOutput

Create an instance: `const list_action_run_response_output = client.ListActionRunResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `branch_id` | `string` |  |
| `check_run_id` | `number` |  |
| `created_at` | `string` |  |
| `git_config` | `any` |  |
| `id` | `string` |  |
| `run_steps` | `any[]` |  |
| `updated_at` | `string` |  |
| `workdir` | `string` |  |

#### Example: List

```ts
const list_action_run_response_outputs = await client.ListActionRunResponseOutput().list({ ref: "example" })
```


### ListProjectAddonsResponseOutput

Create an instance: `const list_project_addons_response_output = client.ListProjectAddonsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_addons` | `any[]` |  |
| `selected_addons` | `any[]` |  |

#### Example: List

```ts
const list_project_addons_response_outputs = await client.ListProjectAddonsResponseOutput().list({ project_id: "example" })
```


### ListProvidersResponseOutput

Create an instance: `const list_providers_response_output = client.ListProvidersResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `domains` | `any[]` |  |
| `id` | `string` |  |
| `saml` | `Record<string, any>` |  |
| `updated_at` | `string` |  |

#### Example: List

```ts
const list_providers_response_outputs = await client.ListProvidersResponseOutput().list({ project_id: "example" })
```


### Log

Create an instance: `const log = client.Log()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `any` |  |
| `result` | `any[]` |  |

#### Example: List

```ts
const logs = await client.Log().list({ project_id: "example" })
```


### NetworkBanResponseEnrichedOutput

Create an instance: `const network_ban_response_enriched_output = client.NetworkBanResponseEnrichedOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const network_ban_response_enriched_output = await client.NetworkBanResponseEnrichedOutput().create({
  project_id: 'example_project_id',
})
```


### NetworkBanResponseOutput

Create an instance: `const network_ban_response_output = client.NetworkBanResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const network_ban_response_output = await client.NetworkBanResponseOutput().create({
  project_id: 'example_project_id',
})
```


### NetworkRestriction

Create an instance: `const network_restriction = client.NetworkRestriction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add` | `Record<string, any>` |  |
| `applied_at` | `string` |  |
| `config` | `Record<string, any>` | At any given point in time, this is the config that the user has requested be applied to their project. |
| `entitlement` | `string` |  |
| `old_config` | `Record<string, any>` | Populated when a new config has been received, but not registered as successfully applied to a project. |
| `remove` | `Record<string, any>` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const network_restriction = await client.NetworkRestriction().load({ ref: 'ref' })
```


### NetworkRestrictionsResponseOutput

Create an instance: `const network_restrictions_response_output = client.NetworkRestrictionsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dbAllowedCidrs` | `any[]` |  |
| `dbAllowedCidrsV6` | `any[]` |  |

#### Example: Create

```ts
const network_restrictions_response_output = await client.NetworkRestrictionsResponseOutput().create({
  project_id: 'example_project_id',
})
```


### OAuth

Create an instance: `const o_auth = client.OAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client_id` | `string` |  |
| `client_secret` | `string` |  |
| `refresh_token` | `string` |  |

#### Example: Load

```ts
const o_auth = await client.OAuth().load({ client_id: 'client_id', redirect_uri: 'redirect_uri', response_type: 'response_type' })
```

#### Example: Create

```ts
const o_auth = await client.OAuth().create({
  client_id: 'example_client_id',
  client_secret: 'example_client_secret',
  refresh_token: 'example_refresh_token',
})
```


### OAuthTokenResponseOutput

Create an instance: `const o_auth_token_response_output = client.OAuthTokenResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `access_token` | `string` |  |
| `expires_in` | `number` |  |
| `refresh_token` | `string` | The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`. |
| `token_type` | `string` |  |

#### Example: Create

```ts
const o_auth_token_response_output = await client.OAuthTokenResponseOutput().create({
  access_token: 'example_access_token',
  expires_in: 1,
  token_type: 'example_token_type',
})
```


### Organization

Create an instance: `const organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const organization = await client.Organization().create({
  organization_id: 'example_organization_id',
  token: 'example_token',
})
```


### OrganizationProjectClaimResponseOutput

Create an instance: `const organization_project_claim_response_output = client.OrganizationProjectClaimResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `expires_at` | `string` |  |
| `preview` | `Record<string, any>` |  |
| `project` | `Record<string, any>` |  |

#### Example: Load

```ts
const organization_project_claim_response_output = await client.OrganizationProjectClaimResponseOutput().load({ organization_id: 'organization_id', token: 'token' })
```


### OrganizationProjectsResponseOutput

Create an instance: `const organization_projects_response_output = client.OrganizationProjectsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cloud_provider` | `string` |  |
| `databases` | `any[]` |  |
| `inserted_at` | `string` |  |
| `is_branch` | `boolean` |  |
| `name` | `string` |  |
| `ref` | `string` |  |
| `region` | `string` |  |
| `status` | `string` |  |

#### Example: List

```ts
const organization_projects_response_outputs = await client.OrganizationProjectsResponseOutput().list({ slug: "example" })
```


### Performance

Create an instance: `const performance = client.Performance()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_key` | `string` |  |
| `categories` | `any[]` |  |
| `description` | `string` |  |
| `detail` | `string` |  |
| `facing` | `string` |  |
| `level` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` |  |
| `observed_at` | `string` |  |
| `remediation` | `string` |  |
| `title` | `string` |  |

#### Example: List

```ts
const performances = await client.Performance().list({ project_id: "example" })
```


### Pgsodium

Create an instance: `const pgsodium = client.Pgsodium()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `root_key` | `string` | The pgsodium root key: 32 bytes, hex-encoded (64 characters). |

#### Example: Load

```ts
const pgsodium = await client.Pgsodium().load({ ref: 'ref' })
```


### Postgre

Create an instance: `const postgre = client.Postgre()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `checkpoint_timeout` | `string` | Default unit: s |
| `cron_log_statement` | `boolean` |  |
| `effective_cache_size` | `string` |  |
| `hot_standby_feedback` | `boolean` |  |
| `log_autovacuum_min_duration` | `string` | Default unit: ms |
| `log_checkpoints` | `boolean` |  |
| `log_connections` | `boolean` |  |
| `log_disconnections` | `boolean` |  |
| `log_duration` | `boolean` |  |
| `log_lock_waits` | `boolean` |  |
| `log_recovery_conflict_waits` | `boolean` |  |
| `log_replication_commands` | `boolean` |  |
| `log_startup_progress_interval` | `string` | Default unit: ms |
| `log_temp_files` | `string` |  |
| `logical_decoding_work_mem` | `string` |  |
| `maintenance_work_mem` | `string` |  |
| `max_connections` | `number` |  |
| `max_locks_per_transaction` | `number` |  |
| `max_logical_replication_workers` | `number` |  |
| `max_parallel_maintenance_workers` | `number` |  |
| `max_parallel_workers` | `number` |  |
| `max_parallel_workers_per_gather` | `number` |  |
| `max_replication_slots` | `number` |  |
| `max_slot_wal_keep_size` | `string` |  |
| `max_standby_archive_delay` | `string` |  |
| `max_standby_streaming_delay` | `string` |  |
| `max_sync_workers_per_subscription` | `number` |  |
| `max_wal_senders` | `number` |  |
| `max_wal_size` | `string` |  |
| `max_worker_processes` | `number` |  |
| `restart_database` | `boolean` |  |
| `session_replication_role` | `string` |  |
| `shared_buffers` | `string` |  |
| `statement_timeout` | `string` | Default unit: ms |
| `track_activity_query_size` | `string` |  |
| `track_commit_timestamp` | `boolean` |  |
| `wal_keep_size` | `string` |  |
| `wal_sender_timeout` | `string` | Default unit: ms |
| `work_mem` | `string` |  |

#### Example: Load

```ts
const postgre = await client.Postgre().load({ project_id: 'project_id' })
```


### Postgrest

Create an instance: `const postgrest = client.Postgrest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `db_extra_search_path` | `string` |  |
| `db_pool` | `number` | If `null`, the value is automatically configured based on compute size. |
| `db_pool_acquisition_timeout` | `number` | If `null`, the value is automatically configured to 10. |
| `db_schema` | `string` |  |
| `jwt_secret` | `string` |  |
| `max_rows` | `number` |  |

#### Example: Load

```ts
const postgrest = await client.Postgrest().load({ ref: 'ref' })
```


### Project

Create an instance: `const project = client.Project()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Example: Create

```ts
const project = await client.Project().create({
  ref: 'example_ref',
})
```


### ProjectAvailableRestoreVersionsResponseOutput

Create an instance: `const project_available_restore_versions_response_output = client.ProjectAvailableRestoreVersionsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `postgres_engine` | `string` |  |
| `release_channel` | `string` |  |
| `version` | `string` |  |

#### Example: List

```ts
const project_available_restore_versions_response_outputs = await client.ProjectAvailableRestoreVersionsResponseOutput().list({ ref: "example" })
```


### ProjectClaimTokenResponseOutput

Create an instance: `const project_claim_token_response_output = client.ProjectClaimTokenResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `expires_at` | `string` |  |
| `token_alias` | `string` |  |

#### Example: Load

```ts
const project_claim_token_response_output = await client.ProjectClaimTokenResponseOutput().load({ ref: 'ref' })
```


### ProjectUpgradeEligibilityResponseOutput

Create an instance: `const project_upgrade_eligibility_response_output = client.ProjectUpgradeEligibilityResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app_version` | `string` |  |
| `postgres_version` | `string` |  |
| `release_channel` | `string` |  |

#### Example: List

```ts
const project_upgrade_eligibility_response_outputs = await client.ProjectUpgradeEligibilityResponseOutput().list({ project_id: "example" })
```


### ProjectUpgradeInitiateResponseOutput

Create an instance: `const project_upgrade_initiate_response_output = client.ProjectUpgradeInitiateResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `release_channel` | `string` |  |
| `target_version` | `string` |  |

#### Example: Create

```ts
const project_upgrade_initiate_response_output = await client.ProjectUpgradeInitiateResponseOutput().create({
  ref: 'example_ref',
  target_version: 'example_target_version',
})
```


### Provider

Create an instance: `const provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `domains` | `any[]` |  |
| `id` | `string` |  |
| `saml` | `Record<string, any>` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const provider = await client.Provider().load({ id: 'provider_id', project_id: 'project_id' })
```


### ReadOnlyStatusResponseOutput

Create an instance: `const read_only_status_response_output = client.ReadOnlyStatusResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `enabled` | `boolean` |  |
| `override_active_until` | `string` |  |
| `override_enabled` | `boolean` |  |

#### Example: Load

```ts
const read_only_status_response_output = await client.ReadOnlyStatusResponseOutput().load({ ref: 'ref' })
```


### Realtime

Create an instance: `const realtime = client.Realtime()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin_suspended_at` | `string` | If set, the Realtime service has been suspended by an admin. |
| `connection_pool` | `number` | Sets connection pool size for Realtime Authorization |
| `max_bytes_per_second` | `number` | Sets maximum number of bytes per second rate per channel limit |
| `max_channels_per_client` | `number` | Sets maximum number of channels per client rate limit |
| `max_concurrent_users` | `number` | Sets maximum number of concurrent users rate limit |
| `max_events_per_second` | `number` | Sets maximum number of events per second rate per channel limit |
| `max_joins_per_second` | `number` | Sets maximum number of joins per second rate limit |
| `max_payload_size_in_kb` | `number` | Sets maximum number of payload size in KB rate limit |
| `max_presence_events_per_second` | `number` | Sets maximum number of presence events per second rate limit |
| `postgres_changes_pool` | `number` | Sets connection pool size used to create Postgres Changes subscriptions |
| `presence_enabled` | `boolean` | Whether to enable presence |
| `private_only` | `boolean` | Whether to only allow private channels |
| `suspend` | `boolean` | Disables the Realtime service for this project when true. |

#### Example: Load

```ts
const realtime = await client.Realtime().load({ project_id: 'project_id' })
```

#### Example: Create

```ts
const realtime = await client.Realtime().create({
  project_id: 'example_project_id',
  admin_suspended_at: 'example_admin_suspended_at',
  connection_pool: 1,
  max_bytes_per_second: 1,
  max_channels_per_client: 1,
  max_concurrent_users: 1,
  max_events_per_second: 1,
  max_joins_per_second: 1,
  max_payload_size_in_kb: 1,
  max_presence_events_per_second: 1,
  postgres_changes_pool: 1,
  presence_enabled: true,
  private_only: true,
  suspend: true,
})
```


### RegionsInfoOutput

Create an instance: `const regions_info_output = client.RegionsInfoOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `all` | `Record<string, any>` |  |
| `recommendations` | `Record<string, any>` |  |

#### Example: Load

```ts
const regions_info_output = await client.RegionsInfoOutput().load({ organization_slug: 'organization_slug' })
```


### RolesResponseOutput

Create an instance: `const roles_response_output = client.RolesResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Secret

Create an instance: `const secret = client.Secret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `updated_at` | `string` |  |
| `value` | `string` |  |

#### Example: List

```ts
const secrets = await client.Secret().list({ ref: "example" })
```

#### Example: Create

```ts
const secret = await client.Secret().create({
  ref: 'example_ref',
  name: 'example_name',
  value: 'example_value',
})
```


### Security

Create an instance: `const security = client.Security()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cache_key` | `string` |  |
| `categories` | `any[]` |  |
| `description` | `string` |  |
| `detail` | `string` |  |
| `facing` | `string` |  |
| `level` | `string` |  |
| `metadata` | `Record<string, any>` |  |
| `name` | `string` |  |
| `observed_at` | `string` |  |
| `remediation` | `string` |  |
| `title` | `string` |  |

#### Example: List

```ts
const securitys = await client.Security().list({ project_id: "example" })
```


### SigningKey

Create an instance: `const signing_key = client.SigningKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `algorithm` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `private_jwk` | `any` |  |
| `public_jwk` | `any` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const signing_key = await client.SigningKey().load({ id: 'signing_key_id', project_id: 'project_id' })
```

#### Example: List

```ts
const signing_keys = await client.SigningKey().list({ project_id: "example" })
```

#### Example: Create

```ts
const signing_key = await client.SigningKey().create({
  project_id: 'example_project_id',
  algorithm: 'example_algorithm',
  created_at: 'example_created_at',
  id: 'example_id',
  public_jwk: 'example_public_jwk',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```


### SigningKeyResponseOutput

Create an instance: `const signing_key_response_output = client.SigningKeyResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `algorithm` | `string` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `public_jwk` | `any` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const signing_key_response_output = await client.SigningKeyResponseOutput().load({ project_id: 'project_id' })
```

#### Example: Create

```ts
const signing_key_response_output = await client.SigningKeyResponseOutput().create({
  project_id: 'example_project_id',
  algorithm: 'example_algorithm',
  created_at: 'example_created_at',
  id: 'example_id',
  public_jwk: 'example_public_jwk',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```


### Snippet

Create an instance: `const snippet = client.Snippet()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `Record<string, any>` |  |
| `description` | `string` |  |
| `favorite` | `boolean` |  |
| `id` | `string` |  |
| `inserted_at` | `string` |  |
| `name` | `string` |  |
| `owner` | `Record<string, any>` |  |
| `project` | `Record<string, any>` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |
| `updated_by` | `Record<string, any>` |  |
| `visibility` | `string` |  |

#### Example: Load

```ts
const snippet = await client.Snippet().load({ id: 'snippet_id' })
```

#### Example: List

```ts
const snippets = await client.Snippet().list()
```


### SslEnforcement

Create an instance: `const ssl_enforcement = client.SslEnforcement()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appliedSuccessfully` | `boolean` |  |
| `currentConfig` | `Record<string, any>` |  |
| `requestedConfig` | `Record<string, any>` |  |

#### Example: Load

```ts
const ssl_enforcement = await client.SslEnforcement().load({ ref: 'ref' })
```


### Storage

Create an instance: `const storage = client.Storage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `Record<string, any>` |  |
| `external` | `Record<string, any>` |  |
| `features` | `Record<string, any>` |  |
| `fileSizeLimit` | `number` |  |
| `migrationVersion` | `string` |  |

#### Example: Load

```ts
const storage = await client.Storage().load({ project_id: 'project_id' })
```


### StreamableFile

Create an instance: `const streamable_file = client.StreamableFile()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const streamable_file = await client.StreamableFile().load({ function_slug: 'function_slug', project_id: 'project_id' })
```


### SubdomainAvailabilityResponseOutput

Create an instance: `const subdomain_availability_response_output = client.SubdomainAvailabilityResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `vanity_subdomain` | `string` |  |

#### Example: Create

```ts
const subdomain_availability_response_output = await client.SubdomainAvailabilityResponseOutput().create({
  project_id: 'example_project_id',
  vanity_subdomain: 'example_vanity_subdomain',
})
```


### SupavisorConfigResponseOutput

Create an instance: `const supavisor_config_response_output = client.SupavisorConfigResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connectionString` | `string` | Use connection_string instead |
| `connection_string` | `string` |  |
| `database_type` | `string` |  |
| `db_host` | `string` |  |
| `db_name` | `string` |  |
| `db_port` | `number` |  |
| `db_user` | `string` |  |
| `default_pool_size` | `number` |  |
| `identifier` | `string` |  |
| `is_using_scram_auth` | `boolean` |  |
| `max_client_conn` | `number` |  |
| `pool_mode` | `string` |  |

#### Example: List

```ts
const supavisor_config_response_outputs = await client.SupavisorConfigResponseOutput().list({ project_id: "example" })
```


### ThirdPartyAuth

Create an instance: `const third_party_auth = client.ThirdPartyAuth()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_jwks` | `any` |  |
| `id` | `string` |  |
| `inserted_at` | `string` |  |
| `jwks_url` | `string` |  |
| `oidc_issuer_url` | `string` |  |
| `resolved_at` | `string` |  |
| `resolved_jwks` | `any` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const third_party_auth = await client.ThirdPartyAuth().load({ id: 'third_party_auth_id', project_id: 'project_id' })
```

#### Example: List

```ts
const third_party_auths = await client.ThirdPartyAuth().list({ project_id: "example" })
```

#### Example: Create

```ts
const third_party_auth = await client.ThirdPartyAuth().create({
  project_id: 'example_project_id',
  id: 'example_id',
  inserted_at: 'example_inserted_at',
  type: 'example_type',
  updated_at: 'example_updated_at',
})
```


### Typescript

Create an instance: `const typescript = client.Typescript()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `types` | `string` |  |

#### Example: Load

```ts
const typescript = await client.Typescript().load({ project_id: 'project_id' })
```


### UpdateCustomHostnameResponseOutput

Create an instance: `const update_custom_hostname_response_output = client.UpdateCustomHostnameResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_hostname` | `string` |  |
| `data` | `Record<string, any>` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const update_custom_hostname_response_output = await client.UpdateCustomHostnameResponseOutput().load({ ref: 'ref' })
```

#### Example: Create

```ts
const update_custom_hostname_response_output = await client.UpdateCustomHostnameResponseOutput().create({
  project_id: 'example_project_id',
  data: {},
  status: 'example_status',
})
```


### UpdateProviderResponseOutput

Create an instance: `const update_provider_response_output = client.UpdateProviderResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attribute_mapping` | `Record<string, any>` |  |
| `created_at` | `string` |  |
| `domains` | `any[]` |  |
| `id` | `string` |  |
| `metadata_url` | `string` |  |
| `metadata_xml` | `string` |  |
| `name_id_format` | `string` |  |
| `saml` | `Record<string, any>` |  |
| `updated_at` | `string` |  |


### UpdateSupavisorConfigResponseOutput

Create an instance: `const update_supavisor_config_response_output = client.UpdateSupavisorConfigResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `default_pool_size` | `number` |  |
| `pool_mode` | `string` | Dedicated pooler mode for the project |


### V1BackupScheduleResponseOutput

Create an instance: `const v1_backup_schedule_response_output = client.V1BackupScheduleResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `schedule_for` | `string` | Time of day to schedule daily backups, in UTC. |
| `updated_at` | `string` | Timestamp of when the backup schedule was last updated. |

#### Example: Load

```ts
const v1_backup_schedule_response_output = await client.V1BackupScheduleResponseOutput().load({ project_id: 'project_id' })
```


### V1BackupsResponseOutput

Create an instance: `const v1_backups_response_output = client.V1BackupsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `inserted_at` | `string` |  |
| `is_physical_backup` | `boolean` |  |
| `status` | `string` |  |

#### Example: List

```ts
const v1_backups_response_outputs = await client.V1BackupsResponseOutput().list({ project_id: "example" })
```


### V1GetMigrationResponseOutput

Create an instance: `const v1_get_migration_response_output = client.V1GetMigrationResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_by` | `string` |  |
| `idempotency_key` | `string` |  |
| `name` | `string` |  |
| `rollback` | `any[]` |  |
| `statements` | `any[]` |  |
| `version` | `string` |  |

#### Example: Load

```ts
const v1_get_migration_response_output = await client.V1GetMigrationResponseOutput().load({ project_id: 'project_id', version: 'version' })
```


### V1GetUsageApiCountResponseOutput

Create an instance: `const v1_get_usage_api_count_response_output = client.V1GetUsageApiCountResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `timestamp` | `string` |  |
| `total_auth_requests` | `number` |  |
| `total_realtime_requests` | `number` |  |
| `total_rest_requests` | `number` |  |
| `total_storage_requests` | `number` |  |

#### Example: List

```ts
const v1_get_usage_api_count_response_outputs = await client.V1GetUsageApiCountResponseOutput().list({ project_id: "example" })
```


### V1GetUsageApiRequestsCountResponseOutput

Create an instance: `const v1_get_usage_api_requests_count_response_output = client.V1GetUsageApiRequestsCountResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `count` | `number` |  |

#### Example: List

```ts
const v1_get_usage_api_requests_count_response_outputs = await client.V1GetUsageApiRequestsCountResponseOutput().list({ project_id: "example" })
```


### V1ListEntitlementsResponseOutput

Create an instance: `const v1_list_entitlements_response_output = client.V1ListEntitlementsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `config` | `any` |  |
| `feature` | `Record<string, any>` |  |
| `hasAccess` | `boolean` |  |
| `type` | `string` |  |

#### Example: List

```ts
const v1_list_entitlements_response_outputs = await client.V1ListEntitlementsResponseOutput().list({ slug: "example" })
```


### V1ListMigrationsResponseOutput

Create an instance: `const v1_list_migrations_response_output = client.V1ListMigrationsResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `version` | `string` |  |

#### Example: List

```ts
const v1_list_migrations_response_outputs = await client.V1ListMigrationsResponseOutput().list({ project_id: "example" })
```


### V1OrganizationMemberResponseOutput

Create an instance: `const v1_organization_member_response_output = client.V1OrganizationMemberResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `avatar_url` | `string` |  |
| `email` | `string` |  |
| `mfa_enabled` | `boolean` |  |
| `role_name` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |

#### Example: List

```ts
const v1_organization_member_response_outputs = await client.V1OrganizationMemberResponseOutput().list({ slug: "example" })
```


### V1OrganizationSlugResponseOutput

Create an instance: `const v1_organization_slug_response_output = client.V1OrganizationSlugResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_release_channels` | `any[]` |  |
| `id` | `string` | Deprecated: Use `slug` instead. |
| `name` | `string` |  |
| `opt_in_tags` | `any[]` |  |
| `plan` | `string` |  |
| `slug` | `string` | Organization slug |

#### Example: Load

```ts
const v1_organization_slug_response_output = await client.V1OrganizationSlugResponseOutput().load({ slug: 'slug' })
```

#### Example: List

```ts
const v1_organization_slug_response_outputs = await client.V1OrganizationSlugResponseOutput().list()
```

#### Example: Create

```ts
const v1_organization_slug_response_output = await client.V1OrganizationSlugResponseOutput().create({
  allowed_release_channels: [],
  id: 'example_id',
  name: 'example_name',
  opt_in_tags: [],
  slug: 'example_slug',
})
```


### V1PgbouncerConfigResponseOutput

Create an instance: `const v1_pgbouncer_config_response_output = client.V1PgbouncerConfigResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connection_string` | `string` |  |
| `default_pool_size` | `number` |  |
| `ignore_startup_parameters` | `string` |  |
| `max_client_conn` | `number` |  |
| `pool_mode` | `string` |  |
| `query_wait_timeout` | `number` |  |
| `reserve_pool_size` | `number` |  |
| `server_idle_timeout` | `number` |  |
| `server_lifetime` | `number` |  |

#### Example: Load

```ts
const v1_pgbouncer_config_response_output = await client.V1PgbouncerConfigResponseOutput().load({ project_id: 'project_id' })
```


### V1ProfileResponseOutput

Create an instance: `const v1_profile_response_output = client.V1ProfileResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `gotrue_id` | `string` |  |
| `primary_email` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const v1_profile_response_output = await client.V1ProfileResponseOutput().load()
```


### V1ProjectRefResponseOutput

Create an instance: `const v1_project_ref_response_output = client.V1ProjectRefResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `ref` | `string` |  |


### V1ProjectWithDatabaseResponseOutput

Create an instance: `const v1_project_with_database_response_output = client.V1ProjectWithDatabaseResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Creation timestamp |
| `database` | `Record<string, any>` |  |
| `db_pass` | `string` | Database password |
| `desired_instance_size` | `string` | Desired instance size. |
| `high_availability` | `boolean` | [Experimental] Whether to enable high availability for the project. |
| `id` | `string` | Deprecated: Use `ref` instead. |
| `kps_enabled` | `boolean` | This field is deprecated and is ignored in this request |
| `name` | `string` | Name of your project |
| `organization_id` | `string` | Deprecated: Use `organization_slug` instead. |
| `organization_slug` | `string` | Organization slug |
| `plan` | `string` | Subscription Plan is now set on organization level and is ignored in this request |
| `postgres_engine` | `null` |  |
| `ref` | `string` | Project ref |
| `region` | `string` | Region of your project |
| `region_selection` | `any` | Region selection. |
| `release_channel` | `null` |  |
| `status` | `string` |  |
| `template_url` | `string` | Template URL used to create the project from the CLI. |

#### Example: Load

```ts
const v1_project_with_database_response_output = await client.V1ProjectWithDatabaseResponseOutput().load({ ref: 'ref' })
```

#### Example: List

```ts
const v1_project_with_database_response_outputs = await client.V1ProjectWithDatabaseResponseOutput().list()
```

#### Example: Create

```ts
const v1_project_with_database_response_output = await client.V1ProjectWithDatabaseResponseOutput().create({
  created_at: 'example_created_at',
  database: {},
  db_pass: 'example_db_pass',
  id: 'example_id',
  name: 'example_name',
  organization_id: 'example_organization_id',
  organization_slug: 'example_organization_slug',
  ref: 'example_ref',
  region: 'example_region',
  status: 'example_status',
})
```


### V1RestorePoint

Create an instance: `const v1_restore_point = client.V1RestorePoint()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_on` | `string` |  |
| `name` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const v1_restore_point = await client.V1RestorePoint().load({ project_id: 'project_id' })
```

#### Example: Create

```ts
const v1_restore_point = await client.V1RestorePoint().create({
  project_id: 'example_project_id',
  completed_on: 'example_completed_on',
  name: 'example_name',
  status: 'example_status',
})
```


### V1ServiceHealthResponseOutput

Create an instance: `const v1_service_health_response_output = client.V1ServiceHealthResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `error` | `string` |  |
| `healthy` | `boolean` | Deprecated. |
| `info` | `any` |  |
| `name` | `string` |  |
| `status` | `string` |  |

#### Example: List

```ts
const v1_service_health_response_outputs = await client.V1ServiceHealthResponseOutput().list({ ref: "example", service: "example" })
```


### V1StorageBucketResponseOutput

Create an instance: `const v1_storage_bucket_response_output = client.V1StorageBucketResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `owner` | `string` |  |
| `public` | `boolean` |  |
| `updated_at` | `string` |  |

#### Example: List

```ts
const v1_storage_bucket_response_outputs = await client.V1StorageBucketResponseOutput().list({ project_id: "example" })
```


### V1UpdatePasswordResponseOutput

Create an instance: `const v1_update_password_response_output = client.V1UpdatePasswordResponseOutput()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` |  |
| `password` | `string` |  |


### VanitySubdomain

Create an instance: `const vanity_subdomain = client.VanitySubdomain()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_domain` | `string` |  |
| `status` | `string` |  |

#### Example: Load

```ts
const vanity_subdomain = await client.VanitySubdomain().load({ ref: 'ref' })
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

11 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `list_project_addons_response_output` | `available_addons` | 8 | 8 levels |
| `list_project_addons_response_output` | `selected_addons` | 8 | 7 levels |
| `create_provider_response_output` | `attribute_mapping` | 4 | 5 levels |
| `list_providers_response_output` | `saml` | 4 | 7 levels |
| `provider` | `saml` | 4 | 7 levels |
| `signing_key` | `private_jwk` | 4 | 0 levels |
| `update_provider_response_output` | `attribute_mapping` | 4 | 5 levels |
| `update_provider_response_output` | `saml` | 4 | 7 levels |
| `update_custom_hostname_response_output` | `data` | 3 | 5 levels |
| `v1_list_entitlements_response_output` | `config` | 3 | 0 levels |
| `v1_service_health_response_output` | `info` | 3 | 0 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
supabase-mgmt/
├── src/
│   ├── SupabaseMgmtSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { SupabaseMgmtSDK } from '@voxgig-sdk/supabase-mgmt-sdk'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const v1restorepoint = client.V1RestorePoint()
await v1restorepoint.load({ project_id: "example" })

// v1restorepoint.data() now returns the v1restorepoint data from the last `load`
// v1restorepoint.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
