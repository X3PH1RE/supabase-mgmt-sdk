# SupabaseMgmt TypeScript SDK Reference

Complete API reference for the SupabaseMgmt TypeScript SDK.


## SupabaseMgmtSDK

### Constructor

```ts
new SupabaseMgmtSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SupabaseMgmtSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = SupabaseMgmtSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `SupabaseMgmtSDK` instance in test mode.


### Instance Methods

#### `Action(data?: object)`

Create a new `Action` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionEntity` instance.

#### `Activate(data?: object)`

Create a new `Activate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActivateEntity` instance.

#### `Analytics(data?: object)`

Create a new `Analytics` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnalyticsEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `Auth(data?: object)`

Create a new `Auth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AuthEntity` instance.

#### `Billing(data?: object)`

Create a new `Billing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BillingEntity` instance.

#### `Branch(data?: object)`

Create a new `Branch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchEntity` instance.

#### `BranchUpdateResponseOutput(data?: object)`

Create a new `BranchUpdateResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BranchUpdateResponseOutputEntity` instance.

#### `BulkUpdateFunctionResponseOutput(data?: object)`

Create a new `BulkUpdateFunctionResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkUpdateFunctionResponseOutputEntity` instance.

#### `CreateProviderResponseOutput(data?: object)`

Create a new `CreateProviderResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateProviderResponseOutputEntity` instance.

#### `CreateRoleResponseOutput(data?: object)`

Create a new `CreateRoleResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateRoleResponseOutputEntity` instance.

#### `Database(data?: object)`

Create a new `Database` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseEntity` instance.

#### `DatabaseUpgradeStatusResponseOutput(data?: object)`

Create a new `DatabaseUpgradeStatusResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DatabaseUpgradeStatusResponseOutputEntity` instance.

#### `Deploy(data?: object)`

Create a new `Deploy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DeployEntity` instance.

#### `Disk(data?: object)`

Create a new `Disk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiskEntity` instance.

#### `DiskAutoscaleConfigOutput(data?: object)`

Create a new `DiskAutoscaleConfigOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiskAutoscaleConfigOutputEntity` instance.

#### `DiskUtilMetricsResponseOutput(data?: object)`

Create a new `DiskUtilMetricsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DiskUtilMetricsResponseOutputEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `EdgeFunction(data?: object)`

Create a new `EdgeFunction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EdgeFunctionEntity` instance.

#### `Environment(data?: object)`

Create a new `Environment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnvironmentEntity` instance.

#### `Function(data?: object)`

Create a new `Function` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FunctionEntity` instance.

#### `FunctionscombinedStat(data?: object)`

Create a new `FunctionscombinedStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FunctionscombinedStatEntity` instance.

#### `Invite(data?: object)`

Create a new `Invite` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `InviteEntity` instance.

#### `Jit(data?: object)`

Create a new `Jit` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JitEntity` instance.

#### `JitAccessResponseOutput(data?: object)`

Create a new `JitAccessResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JitAccessResponseOutputEntity` instance.

#### `JitListAccessResponseOutput(data?: object)`

Create a new `JitListAccessResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `JitListAccessResponseOutputEntity` instance.

#### `Legacy(data?: object)`

Create a new `Legacy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LegacyEntity` instance.

#### `ListActionRunResponseOutput(data?: object)`

Create a new `ListActionRunResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListActionRunResponseOutputEntity` instance.

#### `ListProjectAddonsResponseOutput(data?: object)`

Create a new `ListProjectAddonsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListProjectAddonsResponseOutputEntity` instance.

#### `ListProvidersResponseOutput(data?: object)`

Create a new `ListProvidersResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListProvidersResponseOutputEntity` instance.

#### `Log(data?: object)`

Create a new `Log` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogEntity` instance.

#### `NetworkBanResponseEnrichedOutput(data?: object)`

Create a new `NetworkBanResponseEnrichedOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkBanResponseEnrichedOutputEntity` instance.

#### `NetworkBanResponseOutput(data?: object)`

Create a new `NetworkBanResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkBanResponseOutputEntity` instance.

#### `NetworkRestriction(data?: object)`

Create a new `NetworkRestriction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkRestrictionEntity` instance.

#### `NetworkRestrictionsResponseOutput(data?: object)`

Create a new `NetworkRestrictionsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NetworkRestrictionsResponseOutputEntity` instance.

#### `OAuth(data?: object)`

Create a new `OAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OAuthEntity` instance.

#### `OAuthTokenResponseOutput(data?: object)`

Create a new `OAuthTokenResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OAuthTokenResponseOutputEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `OrganizationProjectClaimResponseOutput(data?: object)`

Create a new `OrganizationProjectClaimResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationProjectClaimResponseOutputEntity` instance.

#### `OrganizationProjectsResponseOutput(data?: object)`

Create a new `OrganizationProjectsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationProjectsResponseOutputEntity` instance.

#### `Performance(data?: object)`

Create a new `Performance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PerformanceEntity` instance.

#### `Pgsodium(data?: object)`

Create a new `Pgsodium` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PgsodiumEntity` instance.

#### `Postgre(data?: object)`

Create a new `Postgre` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostgreEntity` instance.

#### `Postgrest(data?: object)`

Create a new `Postgrest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostgrestEntity` instance.

#### `Project(data?: object)`

Create a new `Project` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectEntity` instance.

#### `ProjectAvailableRestoreVersionsResponseOutput(data?: object)`

Create a new `ProjectAvailableRestoreVersionsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectAvailableRestoreVersionsResponseOutputEntity` instance.

#### `ProjectClaimTokenResponseOutput(data?: object)`

Create a new `ProjectClaimTokenResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectClaimTokenResponseOutputEntity` instance.

#### `ProjectUpgradeEligibilityResponseOutput(data?: object)`

Create a new `ProjectUpgradeEligibilityResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectUpgradeEligibilityResponseOutputEntity` instance.

#### `ProjectUpgradeInitiateResponseOutput(data?: object)`

Create a new `ProjectUpgradeInitiateResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProjectUpgradeInitiateResponseOutputEntity` instance.

#### `Provider(data?: object)`

Create a new `Provider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderEntity` instance.

#### `ReadOnlyStatusResponseOutput(data?: object)`

Create a new `ReadOnlyStatusResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReadOnlyStatusResponseOutputEntity` instance.

#### `Realtime(data?: object)`

Create a new `Realtime` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RealtimeEntity` instance.

#### `RegionsInfoOutput(data?: object)`

Create a new `RegionsInfoOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionsInfoOutputEntity` instance.

#### `RolesResponseOutput(data?: object)`

Create a new `RolesResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RolesResponseOutputEntity` instance.

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `Security(data?: object)`

Create a new `Security` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecurityEntity` instance.

#### `SigningKey(data?: object)`

Create a new `SigningKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SigningKeyEntity` instance.

#### `SigningKeyResponseOutput(data?: object)`

Create a new `SigningKeyResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SigningKeyResponseOutputEntity` instance.

#### `Snippet(data?: object)`

Create a new `Snippet` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SnippetEntity` instance.

#### `SslEnforcement(data?: object)`

Create a new `SslEnforcement` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SslEnforcementEntity` instance.

#### `Storage(data?: object)`

Create a new `Storage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StorageEntity` instance.

#### `StreamableFile(data?: object)`

Create a new `StreamableFile` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StreamableFileEntity` instance.

#### `SubdomainAvailabilityResponseOutput(data?: object)`

Create a new `SubdomainAvailabilityResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SubdomainAvailabilityResponseOutputEntity` instance.

#### `SupavisorConfigResponseOutput(data?: object)`

Create a new `SupavisorConfigResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SupavisorConfigResponseOutputEntity` instance.

#### `ThirdPartyAuth(data?: object)`

Create a new `ThirdPartyAuth` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ThirdPartyAuthEntity` instance.

#### `Typescript(data?: object)`

Create a new `Typescript` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TypescriptEntity` instance.

#### `UpdateCustomHostnameResponseOutput(data?: object)`

Create a new `UpdateCustomHostnameResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateCustomHostnameResponseOutputEntity` instance.

#### `UpdateProviderResponseOutput(data?: object)`

Create a new `UpdateProviderResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateProviderResponseOutputEntity` instance.

#### `UpdateSupavisorConfigResponseOutput(data?: object)`

Create a new `UpdateSupavisorConfigResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateSupavisorConfigResponseOutputEntity` instance.

#### `V1BackupScheduleResponseOutput(data?: object)`

Create a new `V1BackupScheduleResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1BackupScheduleResponseOutputEntity` instance.

#### `V1BackupsResponseOutput(data?: object)`

Create a new `V1BackupsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1BackupsResponseOutputEntity` instance.

#### `V1GetMigrationResponseOutput(data?: object)`

Create a new `V1GetMigrationResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1GetMigrationResponseOutputEntity` instance.

#### `V1GetUsageApiCountResponseOutput(data?: object)`

Create a new `V1GetUsageApiCountResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1GetUsageApiCountResponseOutputEntity` instance.

#### `V1GetUsageApiRequestsCountResponseOutput(data?: object)`

Create a new `V1GetUsageApiRequestsCountResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1GetUsageApiRequestsCountResponseOutputEntity` instance.

#### `V1ListEntitlementsResponseOutput(data?: object)`

Create a new `V1ListEntitlementsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1ListEntitlementsResponseOutputEntity` instance.

#### `V1ListMigrationsResponseOutput(data?: object)`

Create a new `V1ListMigrationsResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1ListMigrationsResponseOutputEntity` instance.

#### `V1OrganizationMemberResponseOutput(data?: object)`

Create a new `V1OrganizationMemberResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1OrganizationMemberResponseOutputEntity` instance.

#### `V1OrganizationSlugResponseOutput(data?: object)`

Create a new `V1OrganizationSlugResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1OrganizationSlugResponseOutputEntity` instance.

#### `V1PgbouncerConfigResponseOutput(data?: object)`

Create a new `V1PgbouncerConfigResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1PgbouncerConfigResponseOutputEntity` instance.

#### `V1ProfileResponseOutput(data?: object)`

Create a new `V1ProfileResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1ProfileResponseOutputEntity` instance.

#### `V1ProjectRefResponseOutput(data?: object)`

Create a new `V1ProjectRefResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1ProjectRefResponseOutputEntity` instance.

#### `V1ProjectWithDatabaseResponseOutput(data?: object)`

Create a new `V1ProjectWithDatabaseResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1ProjectWithDatabaseResponseOutputEntity` instance.

#### `V1RestorePoint(data?: object)`

Create a new `V1RestorePoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1RestorePointEntity` instance.

#### `V1ServiceHealthResponseOutput(data?: object)`

Create a new `V1ServiceHealthResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1ServiceHealthResponseOutputEntity` instance.

#### `V1StorageBucketResponseOutput(data?: object)`

Create a new `V1StorageBucketResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1StorageBucketResponseOutputEntity` instance.

#### `V1UpdatePasswordResponseOutput(data?: object)`

Create a new `V1UpdatePasswordResponseOutput` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `V1UpdatePasswordResponseOutputEntity` instance.

#### `VanitySubdomain(data?: object)`

Create a new `VanitySubdomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VanitySubdomainEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `SupabaseMgmtSDK.test()`.

**Returns:** `SupabaseMgmtSDK` instance in test mode.


---

## ActionEntity

```ts
const action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes |  |
| `check_run_id` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `git_config` | `any` | No |  |
| `id` | `string` | Yes |  |
| `run_steps` | `any[]` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workdir` | `string` | Yes |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `status` | `/v1/projects/{ref}/actions/{run_id}/status` | `client.Action().update({ $action: 'status', ... })` |

An action returns that action's OWN response, which is not necessarily a
Action record — check the API definition for its shape.

```ts
const result = await client.Action().update({
  $action: 'status',
  /* ...the action's own arguments */
})
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Action().load({ id: 'action_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Action().update({
  id: 'action_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActivateEntity

```ts
const activate = client.Activate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `vanity_subdomain` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Activate().create({
  project_id: 'example_project_id',
  vanity_subdomain: 'example_vanity_subdomain',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActivateEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnalyticsEntity

```ts
const analytics = client.Analytics()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Analytics().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnalyticsEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_key` | `string` | No |  |
| `description` | `string` | No |  |
| `hash` | `string` | No |  |
| `id` | `string` | No |  |
| `inserted_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `prefix` | `string` | No |  |
| `secret_jwt_template` | `Record<string, any>` | No |  |
| `type` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `api_key` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `hash` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `inserted_at` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `prefix` | - | - | - | - | - |
| `secret_jwt_template` | - | - | - | - | - |
| `type` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
  ref: 'example_ref',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiKey().list({ ref: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiKey().load({ id: 'api_key_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiKey().remove({ id: 'api_key_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiKey().update({
  id: 'api_key_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AuthEntity

```ts
const auth = client.Auth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_max_request_duration` | `number` | Yes |  |
| `custom_oauth_enabled` | `boolean` | Yes |  |
| `custom_oauth_max_providers` | `number` | Yes |  |
| `db_max_pool_size` | `number` | Yes |  |
| `db_max_pool_size_unit` | `string` | Yes |  |
| `disable_signup` | `boolean` | Yes |  |
| `external_anonymous_users_enabled` | `boolean` | Yes |  |
| `external_apple_additional_client_ids` | `string` | Yes |  |
| `external_apple_client_id` | `string` | Yes |  |
| `external_apple_email_optional` | `boolean` | Yes |  |
| `external_apple_enabled` | `boolean` | Yes |  |
| `external_apple_secret` | `string` | Yes |  |
| `external_azure_client_id` | `string` | Yes |  |
| `external_azure_email_optional` | `boolean` | Yes |  |
| `external_azure_enabled` | `boolean` | Yes |  |
| `external_azure_secret` | `string` | Yes |  |
| `external_azure_url` | `string` | Yes |  |
| `external_bitbucket_client_id` | `string` | Yes |  |
| `external_bitbucket_email_optional` | `boolean` | Yes |  |
| `external_bitbucket_enabled` | `boolean` | Yes |  |
| `external_bitbucket_secret` | `string` | Yes |  |
| `external_discord_client_id` | `string` | Yes |  |
| `external_discord_email_optional` | `boolean` | Yes |  |
| `external_discord_enabled` | `boolean` | Yes |  |
| `external_discord_secret` | `string` | Yes |  |
| `external_email_enabled` | `boolean` | Yes |  |
| `external_facebook_client_id` | `string` | Yes |  |
| `external_facebook_email_optional` | `boolean` | Yes |  |
| `external_facebook_enabled` | `boolean` | Yes |  |
| `external_facebook_secret` | `string` | Yes |  |
| `external_figma_client_id` | `string` | Yes |  |
| `external_figma_email_optional` | `boolean` | Yes |  |
| `external_figma_enabled` | `boolean` | Yes |  |
| `external_figma_secret` | `string` | Yes |  |
| `external_github_client_id` | `string` | Yes |  |
| `external_github_email_optional` | `boolean` | Yes |  |
| `external_github_enabled` | `boolean` | Yes |  |
| `external_github_secret` | `string` | Yes |  |
| `external_gitlab_client_id` | `string` | Yes |  |
| `external_gitlab_email_optional` | `boolean` | Yes |  |
| `external_gitlab_enabled` | `boolean` | Yes |  |
| `external_gitlab_secret` | `string` | Yes |  |
| `external_gitlab_url` | `string` | Yes |  |
| `external_google_additional_client_ids` | `string` | Yes |  |
| `external_google_client_id` | `string` | Yes |  |
| `external_google_email_optional` | `boolean` | Yes |  |
| `external_google_enabled` | `boolean` | Yes |  |
| `external_google_secret` | `string` | Yes |  |
| `external_google_skip_nonce_check` | `boolean` | Yes |  |
| `external_kakao_client_id` | `string` | Yes |  |
| `external_kakao_email_optional` | `boolean` | Yes |  |
| `external_kakao_enabled` | `boolean` | Yes |  |
| `external_kakao_secret` | `string` | Yes |  |
| `external_keycloak_client_id` | `string` | Yes |  |
| `external_keycloak_email_optional` | `boolean` | Yes |  |
| `external_keycloak_enabled` | `boolean` | Yes |  |
| `external_keycloak_secret` | `string` | Yes |  |
| `external_keycloak_url` | `string` | Yes |  |
| `external_linkedin_oidc_client_id` | `string` | Yes |  |
| `external_linkedin_oidc_email_optional` | `boolean` | Yes |  |
| `external_linkedin_oidc_enabled` | `boolean` | Yes |  |
| `external_linkedin_oidc_secret` | `string` | Yes |  |
| `external_notion_client_id` | `string` | Yes |  |
| `external_notion_email_optional` | `boolean` | Yes |  |
| `external_notion_enabled` | `boolean` | Yes |  |
| `external_notion_secret` | `string` | Yes |  |
| `external_phone_enabled` | `boolean` | Yes |  |
| `external_slack_client_id` | `string` | Yes |  |
| `external_slack_email_optional` | `boolean` | Yes |  |
| `external_slack_enabled` | `boolean` | Yes |  |
| `external_slack_oidc_client_id` | `string` | Yes |  |
| `external_slack_oidc_email_optional` | `boolean` | Yes |  |
| `external_slack_oidc_enabled` | `boolean` | Yes |  |
| `external_slack_oidc_secret` | `string` | Yes |  |
| `external_slack_secret` | `string` | Yes |  |
| `external_spotify_client_id` | `string` | Yes |  |
| `external_spotify_email_optional` | `boolean` | Yes |  |
| `external_spotify_enabled` | `boolean` | Yes |  |
| `external_spotify_secret` | `string` | Yes |  |
| `external_twitch_client_id` | `string` | Yes |  |
| `external_twitch_email_optional` | `boolean` | Yes |  |
| `external_twitch_enabled` | `boolean` | Yes |  |
| `external_twitch_secret` | `string` | Yes |  |
| `external_twitter_client_id` | `string` | Yes |  |
| `external_twitter_email_optional` | `boolean` | Yes |  |
| `external_twitter_enabled` | `boolean` | Yes |  |
| `external_twitter_secret` | `string` | Yes |  |
| `external_web3_ethereum_enabled` | `boolean` | Yes |  |
| `external_web3_solana_enabled` | `boolean` | Yes |  |
| `external_workos_client_id` | `string` | Yes |  |
| `external_workos_enabled` | `boolean` | Yes |  |
| `external_workos_secret` | `string` | Yes |  |
| `external_workos_url` | `string` | Yes |  |
| `external_x_client_id` | `string` | Yes |  |
| `external_x_email_optional` | `boolean` | Yes |  |
| `external_x_enabled` | `boolean` | Yes |  |
| `external_x_secret` | `string` | Yes |  |
| `external_zoom_client_id` | `string` | Yes |  |
| `external_zoom_email_optional` | `boolean` | Yes |  |
| `external_zoom_enabled` | `boolean` | Yes |  |
| `external_zoom_secret` | `string` | Yes |  |
| `hook_after_user_created_enabled` | `boolean` | Yes |  |
| `hook_after_user_created_secrets` | `string` | Yes |  |
| `hook_after_user_created_uri` | `string` | Yes |  |
| `hook_before_user_created_enabled` | `boolean` | Yes |  |
| `hook_before_user_created_secrets` | `string` | Yes |  |
| `hook_before_user_created_uri` | `string` | Yes |  |
| `hook_custom_access_token_enabled` | `boolean` | Yes |  |
| `hook_custom_access_token_secrets` | `string` | Yes |  |
| `hook_custom_access_token_uri` | `string` | Yes |  |
| `hook_mfa_verification_attempt_enabled` | `boolean` | Yes |  |
| `hook_mfa_verification_attempt_secrets` | `string` | Yes |  |
| `hook_mfa_verification_attempt_uri` | `string` | Yes |  |
| `hook_password_verification_attempt_enabled` | `boolean` | Yes |  |
| `hook_password_verification_attempt_secrets` | `string` | Yes |  |
| `hook_password_verification_attempt_uri` | `string` | Yes |  |
| `hook_send_email_enabled` | `boolean` | Yes |  |
| `hook_send_email_secrets` | `string` | Yes |  |
| `hook_send_email_uri` | `string` | Yes |  |
| `hook_send_sms_enabled` | `boolean` | Yes |  |
| `hook_send_sms_secrets` | `string` | Yes |  |
| `hook_send_sms_uri` | `string` | Yes |  |
| `jwt_exp` | `number` | Yes |  |
| `mailer_allow_unverified_email_sign_ins` | `boolean` | Yes |  |
| `mailer_autoconfirm` | `boolean` | Yes |  |
| `mailer_notifications_email_changed_enabled` | `boolean` | Yes |  |
| `mailer_notifications_identity_linked_enabled` | `boolean` | Yes |  |
| `mailer_notifications_identity_unlinked_enabled` | `boolean` | Yes |  |
| `mailer_notifications_mfa_factor_enrolled_enabled` | `boolean` | Yes |  |
| `mailer_notifications_mfa_factor_unenrolled_enabled` | `boolean` | Yes |  |
| `mailer_notifications_password_changed_enabled` | `boolean` | Yes |  |
| `mailer_notifications_phone_changed_enabled` | `boolean` | Yes |  |
| `mailer_otp_exp` | `number` | Yes |  |
| `mailer_otp_length` | `number` | Yes |  |
| `mailer_secure_email_change_enabled` | `boolean` | Yes |  |
| `mailer_subjects_confirmation` | `string` | Yes |  |
| `mailer_subjects_email_change` | `string` | Yes |  |
| `mailer_subjects_email_changed_notification` | `string` | Yes |  |
| `mailer_subjects_identity_linked_notification` | `string` | Yes |  |
| `mailer_subjects_identity_unlinked_notification` | `string` | Yes |  |
| `mailer_subjects_invite` | `string` | Yes |  |
| `mailer_subjects_magic_link` | `string` | Yes |  |
| `mailer_subjects_mfa_factor_enrolled_notification` | `string` | Yes |  |
| `mailer_subjects_mfa_factor_unenrolled_notification` | `string` | Yes |  |
| `mailer_subjects_password_changed_notification` | `string` | Yes |  |
| `mailer_subjects_phone_changed_notification` | `string` | Yes |  |
| `mailer_subjects_reauthentication` | `string` | Yes |  |
| `mailer_subjects_recovery` | `string` | Yes |  |
| `mailer_templates_confirmation_content` | `string` | Yes |  |
| `mailer_templates_email_change_content` | `string` | Yes |  |
| `mailer_templates_email_changed_notification_content` | `string` | Yes |  |
| `mailer_templates_identity_linked_notification_content` | `string` | Yes |  |
| `mailer_templates_identity_unlinked_notification_content` | `string` | Yes |  |
| `mailer_templates_invite_content` | `string` | Yes |  |
| `mailer_templates_magic_link_content` | `string` | Yes |  |
| `mailer_templates_mfa_factor_enrolled_notification_content` | `string` | Yes |  |
| `mailer_templates_mfa_factor_unenrolled_notification_content` | `string` | Yes |  |
| `mailer_templates_password_changed_notification_content` | `string` | Yes |  |
| `mailer_templates_phone_changed_notification_content` | `string` | Yes |  |
| `mailer_templates_reauthentication_content` | `string` | Yes |  |
| `mailer_templates_recovery_content` | `string` | Yes |  |
| `mfa_max_enrolled_factors` | `number` | Yes |  |
| `mfa_phone_enroll_enabled` | `boolean` | Yes |  |
| `mfa_phone_max_frequency` | `number` | Yes |  |
| `mfa_phone_otp_length` | `number` | Yes |  |
| `mfa_phone_template` | `string` | Yes |  |
| `mfa_phone_verify_enabled` | `boolean` | Yes |  |
| `mfa_totp_enroll_enabled` | `boolean` | Yes |  |
| `mfa_totp_verify_enabled` | `boolean` | Yes |  |
| `mfa_web_authn_enroll_enabled` | `boolean` | Yes |  |
| `mfa_web_authn_verify_enabled` | `boolean` | Yes |  |
| `nimbus_oauth_client_id` | `string` | Yes |  |
| `nimbus_oauth_client_secret` | `string` | Yes |  |
| `nimbus_oauth_email_optional` | `boolean` | Yes |  |
| `oauth_server_allow_dynamic_registration` | `boolean` | Yes |  |
| `oauth_server_authorization_path` | `string` | Yes |  |
| `oauth_server_enabled` | `boolean` | Yes |  |
| `passkey_enabled` | `boolean` | Yes |  |
| `password_hibp_enabled` | `boolean` | Yes |  |
| `password_min_length` | `number` | Yes |  |
| `password_required_characters` | `string` | Yes |  |
| `rate_limit_anonymous_users` | `number` | Yes |  |
| `rate_limit_email_sent` | `number` | Yes |  |
| `rate_limit_otp` | `number` | Yes |  |
| `rate_limit_sms_sent` | `number` | Yes |  |
| `rate_limit_token_refresh` | `number` | Yes |  |
| `rate_limit_verify` | `number` | Yes |  |
| `rate_limit_web3` | `number` | Yes |  |
| `refresh_token_rotation_enabled` | `boolean` | Yes |  |
| `saml_allow_encrypted_assertions` | `boolean` | Yes |  |
| `saml_enabled` | `boolean` | Yes |  |
| `saml_external_url` | `string` | Yes |  |
| `security_captcha_enabled` | `boolean` | Yes |  |
| `security_captcha_provider` | `string` | Yes |  |
| `security_captcha_secret` | `string` | Yes |  |
| `security_manual_linking_enabled` | `boolean` | Yes |  |
| `security_refresh_token_reuse_interval` | `number` | Yes | Refresh token reuse interval in seconds. |
| `security_sb_forwarded_for_enabled` | `boolean` | Yes |  |
| `security_update_password_require_current_password` | `boolean` | Yes | Require the user's current password when updating their password. |
| `security_update_password_require_reauthentication` | `boolean` | Yes |  |
| `sessions_inactivity_timeout` | `number` | Yes | Session inactivity timeout in hours. |
| `sessions_single_per_user` | `boolean` | Yes |  |
| `sessions_tags` | `string` | Yes |  |
| `sessions_timebox` | `number` | Yes | Session timebox in hours. |
| `site_url` | `string` | Yes |  |
| `sms_autoconfirm` | `boolean` | Yes |  |
| `sms_max_frequency` | `number` | Yes |  |
| `sms_messagebird_access_key` | `string` | Yes |  |
| `sms_messagebird_originator` | `string` | Yes |  |
| `sms_otp_exp` | `number` | Yes |  |
| `sms_otp_length` | `number` | Yes |  |
| `sms_provider` | `string` | Yes |  |
| `sms_template` | `string` | Yes |  |
| `sms_test_otp` | `string` | Yes |  |
| `sms_test_otp_valid_until` | `string` | Yes |  |
| `sms_textlocal_api_key` | `string` | Yes |  |
| `sms_textlocal_sender` | `string` | Yes |  |
| `sms_twilio_account_sid` | `string` | Yes |  |
| `sms_twilio_auth_token` | `string` | Yes |  |
| `sms_twilio_content_sid` | `string` | Yes |  |
| `sms_twilio_message_service_sid` | `string` | Yes |  |
| `sms_twilio_verify_account_sid` | `string` | Yes |  |
| `sms_twilio_verify_auth_token` | `string` | Yes |  |
| `sms_twilio_verify_message_service_sid` | `string` | Yes |  |
| `sms_vonage_api_key` | `string` | Yes |  |
| `sms_vonage_api_secret` | `string` | Yes |  |
| `sms_vonage_from` | `string` | Yes |  |
| `smtp_admin_email` | `string` | Yes |  |
| `smtp_host` | `string` | Yes |  |
| `smtp_max_frequency` | `number` | Yes |  |
| `smtp_pass` | `string` | Yes |  |
| `smtp_port` | `string` | Yes |  |
| `smtp_sender_name` | `string` | Yes |  |
| `smtp_user` | `string` | Yes |  |
| `uri_allow_list` | `string` | Yes |  |
| `webauthn_rp_display_name` | `string` | Yes |  |
| `webauthn_rp_id` | `string` | Yes |  |
| `webauthn_rp_origins` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `api_max_request_duration` | - | Yes |
| `custom_oauth_enabled` | - | Yes |
| `custom_oauth_max_providers` | - | - |
| `db_max_pool_size` | - | Yes |
| `db_max_pool_size_unit` | - | Yes |
| `disable_signup` | - | Yes |
| `external_anonymous_users_enabled` | - | Yes |
| `external_apple_additional_client_ids` | - | Yes |
| `external_apple_client_id` | - | Yes |
| `external_apple_email_optional` | - | Yes |
| `external_apple_enabled` | - | Yes |
| `external_apple_secret` | - | Yes |
| `external_azure_client_id` | - | Yes |
| `external_azure_email_optional` | - | Yes |
| `external_azure_enabled` | - | Yes |
| `external_azure_secret` | - | Yes |
| `external_azure_url` | - | Yes |
| `external_bitbucket_client_id` | - | Yes |
| `external_bitbucket_email_optional` | - | Yes |
| `external_bitbucket_enabled` | - | Yes |
| `external_bitbucket_secret` | - | Yes |
| `external_discord_client_id` | - | Yes |
| `external_discord_email_optional` | - | Yes |
| `external_discord_enabled` | - | Yes |
| `external_discord_secret` | - | Yes |
| `external_email_enabled` | - | Yes |
| `external_facebook_client_id` | - | Yes |
| `external_facebook_email_optional` | - | Yes |
| `external_facebook_enabled` | - | Yes |
| `external_facebook_secret` | - | Yes |
| `external_figma_client_id` | - | Yes |
| `external_figma_email_optional` | - | Yes |
| `external_figma_enabled` | - | Yes |
| `external_figma_secret` | - | Yes |
| `external_github_client_id` | - | Yes |
| `external_github_email_optional` | - | Yes |
| `external_github_enabled` | - | Yes |
| `external_github_secret` | - | Yes |
| `external_gitlab_client_id` | - | Yes |
| `external_gitlab_email_optional` | - | Yes |
| `external_gitlab_enabled` | - | Yes |
| `external_gitlab_secret` | - | Yes |
| `external_gitlab_url` | - | Yes |
| `external_google_additional_client_ids` | - | Yes |
| `external_google_client_id` | - | Yes |
| `external_google_email_optional` | - | Yes |
| `external_google_enabled` | - | Yes |
| `external_google_secret` | - | Yes |
| `external_google_skip_nonce_check` | - | Yes |
| `external_kakao_client_id` | - | Yes |
| `external_kakao_email_optional` | - | Yes |
| `external_kakao_enabled` | - | Yes |
| `external_kakao_secret` | - | Yes |
| `external_keycloak_client_id` | - | Yes |
| `external_keycloak_email_optional` | - | Yes |
| `external_keycloak_enabled` | - | Yes |
| `external_keycloak_secret` | - | Yes |
| `external_keycloak_url` | - | Yes |
| `external_linkedin_oidc_client_id` | - | Yes |
| `external_linkedin_oidc_email_optional` | - | Yes |
| `external_linkedin_oidc_enabled` | - | Yes |
| `external_linkedin_oidc_secret` | - | Yes |
| `external_notion_client_id` | - | Yes |
| `external_notion_email_optional` | - | Yes |
| `external_notion_enabled` | - | Yes |
| `external_notion_secret` | - | Yes |
| `external_phone_enabled` | - | Yes |
| `external_slack_client_id` | - | Yes |
| `external_slack_email_optional` | - | Yes |
| `external_slack_enabled` | - | Yes |
| `external_slack_oidc_client_id` | - | Yes |
| `external_slack_oidc_email_optional` | - | Yes |
| `external_slack_oidc_enabled` | - | Yes |
| `external_slack_oidc_secret` | - | Yes |
| `external_slack_secret` | - | Yes |
| `external_spotify_client_id` | - | Yes |
| `external_spotify_email_optional` | - | Yes |
| `external_spotify_enabled` | - | Yes |
| `external_spotify_secret` | - | Yes |
| `external_twitch_client_id` | - | Yes |
| `external_twitch_email_optional` | - | Yes |
| `external_twitch_enabled` | - | Yes |
| `external_twitch_secret` | - | Yes |
| `external_twitter_client_id` | - | Yes |
| `external_twitter_email_optional` | - | Yes |
| `external_twitter_enabled` | - | Yes |
| `external_twitter_secret` | - | Yes |
| `external_web3_ethereum_enabled` | - | Yes |
| `external_web3_solana_enabled` | - | Yes |
| `external_workos_client_id` | - | Yes |
| `external_workos_enabled` | - | Yes |
| `external_workos_secret` | - | Yes |
| `external_workos_url` | - | Yes |
| `external_x_client_id` | - | Yes |
| `external_x_email_optional` | - | Yes |
| `external_x_enabled` | - | Yes |
| `external_x_secret` | - | Yes |
| `external_zoom_client_id` | - | Yes |
| `external_zoom_email_optional` | - | Yes |
| `external_zoom_enabled` | - | Yes |
| `external_zoom_secret` | - | Yes |
| `hook_after_user_created_enabled` | - | Yes |
| `hook_after_user_created_secrets` | - | Yes |
| `hook_after_user_created_uri` | - | Yes |
| `hook_before_user_created_enabled` | - | Yes |
| `hook_before_user_created_secrets` | - | Yes |
| `hook_before_user_created_uri` | - | Yes |
| `hook_custom_access_token_enabled` | - | Yes |
| `hook_custom_access_token_secrets` | - | Yes |
| `hook_custom_access_token_uri` | - | Yes |
| `hook_mfa_verification_attempt_enabled` | - | Yes |
| `hook_mfa_verification_attempt_secrets` | - | Yes |
| `hook_mfa_verification_attempt_uri` | - | Yes |
| `hook_password_verification_attempt_enabled` | - | Yes |
| `hook_password_verification_attempt_secrets` | - | Yes |
| `hook_password_verification_attempt_uri` | - | Yes |
| `hook_send_email_enabled` | - | Yes |
| `hook_send_email_secrets` | - | Yes |
| `hook_send_email_uri` | - | Yes |
| `hook_send_sms_enabled` | - | Yes |
| `hook_send_sms_secrets` | - | Yes |
| `hook_send_sms_uri` | - | Yes |
| `jwt_exp` | - | Yes |
| `mailer_allow_unverified_email_sign_ins` | - | Yes |
| `mailer_autoconfirm` | - | Yes |
| `mailer_notifications_email_changed_enabled` | - | Yes |
| `mailer_notifications_identity_linked_enabled` | - | Yes |
| `mailer_notifications_identity_unlinked_enabled` | - | Yes |
| `mailer_notifications_mfa_factor_enrolled_enabled` | - | Yes |
| `mailer_notifications_mfa_factor_unenrolled_enabled` | - | Yes |
| `mailer_notifications_password_changed_enabled` | - | Yes |
| `mailer_notifications_phone_changed_enabled` | - | Yes |
| `mailer_otp_exp` | - | Yes |
| `mailer_otp_length` | - | Yes |
| `mailer_secure_email_change_enabled` | - | Yes |
| `mailer_subjects_confirmation` | - | Yes |
| `mailer_subjects_email_change` | - | Yes |
| `mailer_subjects_email_changed_notification` | - | Yes |
| `mailer_subjects_identity_linked_notification` | - | Yes |
| `mailer_subjects_identity_unlinked_notification` | - | Yes |
| `mailer_subjects_invite` | - | Yes |
| `mailer_subjects_magic_link` | - | Yes |
| `mailer_subjects_mfa_factor_enrolled_notification` | - | Yes |
| `mailer_subjects_mfa_factor_unenrolled_notification` | - | Yes |
| `mailer_subjects_password_changed_notification` | - | Yes |
| `mailer_subjects_phone_changed_notification` | - | Yes |
| `mailer_subjects_reauthentication` | - | Yes |
| `mailer_subjects_recovery` | - | Yes |
| `mailer_templates_confirmation_content` | - | Yes |
| `mailer_templates_email_change_content` | - | Yes |
| `mailer_templates_email_changed_notification_content` | - | Yes |
| `mailer_templates_identity_linked_notification_content` | - | Yes |
| `mailer_templates_identity_unlinked_notification_content` | - | Yes |
| `mailer_templates_invite_content` | - | Yes |
| `mailer_templates_magic_link_content` | - | Yes |
| `mailer_templates_mfa_factor_enrolled_notification_content` | - | Yes |
| `mailer_templates_mfa_factor_unenrolled_notification_content` | - | Yes |
| `mailer_templates_password_changed_notification_content` | - | Yes |
| `mailer_templates_phone_changed_notification_content` | - | Yes |
| `mailer_templates_reauthentication_content` | - | Yes |
| `mailer_templates_recovery_content` | - | Yes |
| `mfa_max_enrolled_factors` | - | Yes |
| `mfa_phone_enroll_enabled` | - | Yes |
| `mfa_phone_max_frequency` | - | Yes |
| `mfa_phone_otp_length` | - | Yes |
| `mfa_phone_template` | - | Yes |
| `mfa_phone_verify_enabled` | - | Yes |
| `mfa_totp_enroll_enabled` | - | Yes |
| `mfa_totp_verify_enabled` | - | Yes |
| `mfa_web_authn_enroll_enabled` | - | Yes |
| `mfa_web_authn_verify_enabled` | - | Yes |
| `nimbus_oauth_client_id` | - | Yes |
| `nimbus_oauth_client_secret` | - | Yes |
| `nimbus_oauth_email_optional` | - | - |
| `oauth_server_allow_dynamic_registration` | - | Yes |
| `oauth_server_authorization_path` | - | Yes |
| `oauth_server_enabled` | - | Yes |
| `passkey_enabled` | - | Yes |
| `password_hibp_enabled` | - | Yes |
| `password_min_length` | - | Yes |
| `password_required_characters` | - | Yes |
| `rate_limit_anonymous_users` | - | Yes |
| `rate_limit_email_sent` | - | Yes |
| `rate_limit_otp` | - | Yes |
| `rate_limit_sms_sent` | - | Yes |
| `rate_limit_token_refresh` | - | Yes |
| `rate_limit_verify` | - | Yes |
| `rate_limit_web3` | - | Yes |
| `refresh_token_rotation_enabled` | - | Yes |
| `saml_allow_encrypted_assertions` | - | - |
| `saml_enabled` | - | Yes |
| `saml_external_url` | - | Yes |
| `security_captcha_enabled` | - | Yes |
| `security_captcha_provider` | - | Yes |
| `security_captcha_secret` | - | Yes |
| `security_manual_linking_enabled` | - | Yes |
| `security_refresh_token_reuse_interval` | - | Yes |
| `security_sb_forwarded_for_enabled` | - | Yes |
| `security_update_password_require_current_password` | - | Yes |
| `security_update_password_require_reauthentication` | - | Yes |
| `sessions_inactivity_timeout` | - | Yes |
| `sessions_single_per_user` | - | Yes |
| `sessions_tags` | - | Yes |
| `sessions_timebox` | - | Yes |
| `site_url` | - | Yes |
| `sms_autoconfirm` | - | Yes |
| `sms_max_frequency` | - | Yes |
| `sms_messagebird_access_key` | - | Yes |
| `sms_messagebird_originator` | - | Yes |
| `sms_otp_exp` | - | Yes |
| `sms_otp_length` | - | Yes |
| `sms_provider` | - | Yes |
| `sms_template` | - | Yes |
| `sms_test_otp` | - | Yes |
| `sms_test_otp_valid_until` | - | Yes |
| `sms_textlocal_api_key` | - | Yes |
| `sms_textlocal_sender` | - | Yes |
| `sms_twilio_account_sid` | - | Yes |
| `sms_twilio_auth_token` | - | Yes |
| `sms_twilio_content_sid` | - | Yes |
| `sms_twilio_message_service_sid` | - | Yes |
| `sms_twilio_verify_account_sid` | - | Yes |
| `sms_twilio_verify_auth_token` | - | Yes |
| `sms_twilio_verify_message_service_sid` | - | Yes |
| `sms_vonage_api_key` | - | Yes |
| `sms_vonage_api_secret` | - | Yes |
| `sms_vonage_from` | - | Yes |
| `smtp_admin_email` | - | Yes |
| `smtp_host` | - | Yes |
| `smtp_max_frequency` | - | Yes |
| `smtp_pass` | - | Yes |
| `smtp_port` | - | Yes |
| `smtp_sender_name` | - | Yes |
| `smtp_user` | - | Yes |
| `uri_allow_list` | - | Yes |
| `webauthn_rp_display_name` | - | Yes |
| `webauthn_rp_id` | - | Yes |
| `webauthn_rp_origins` | - | Yes |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Auth().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Auth().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BillingEntity

```ts
const billing = client.Billing()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `addon` | `/v1/projects/{ref}/billing/addons` | `client.Billing().update({ $action: 'addon', ... })` |

An action returns that action's OWN response, which is not necessarily a
Billing record — check the API definition for its shape.

```ts
const result = await client.Billing().update({
  $action: 'addon',
  /* ...the action's own arguments */
})
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Billing().remove({ addon_variant: 'addon_variant', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Billing().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BillingEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchEntity

```ts
const branch = client.Branch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_name` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `db_host` | `string` | Yes |  |
| `db_pass` | `string` | No |  |
| `db_port` | `number` | Yes |  |
| `db_user` | `string` | No |  |
| `deletion_scheduled_at` | `string` | No |  |
| `desired_instance_size` | `string` | No |  |
| `git_branch` | `string` | No |  |
| `id` | `string` | Yes |  |
| `is_default` | `boolean` | Yes |  |
| `jwt_secret` | `string` | No |  |
| `latest_check_run_id` | `number` | No | This field is deprecated and will not be populated. |
| `name` | `string` | Yes |  |
| `notify_url` | `string` | No | HTTP endpoint to receive branch status updates. |
| `parent_project_ref` | `string` | Yes |  |
| `persistent` | `boolean` | Yes |  |
| `postgres_engine` | `string` | Yes | Postgres engine version. |
| `postgres_version` | `string` | Yes |  |
| `pr_number` | `number` | No |  |
| `preview_project_status` | `string` | No |  |
| `project_ref` | `string` | Yes |  |
| `ref` | `string` | Yes |  |
| `region` | `string` | No |  |
| `release_channel` | `string` | Yes | Release channel. |
| `request_review` | `boolean` | No |  |
| `reset_on_push` | `boolean` | No | This field is deprecated and will be ignored. |
| `review_requested_at` | `string` | No |  |
| `secrets` | `Record<string, any>` | No |  |
| `status` | `string` | Yes | This field is deprecated. |
| `updated_at` | `string` | Yes |  |
| `with_data` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `branch_name` | - | - | - | Yes | - |
| `created_at` | - | - | - | - | - |
| `db_host` | - | - | - | - | - |
| `db_pass` | - | - | - | - | - |
| `db_port` | - | - | - | - | - |
| `db_user` | - | - | - | - | - |
| `deletion_scheduled_at` | - | - | - | - | - |
| `desired_instance_size` | - | - | - | - | - |
| `git_branch` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `is_default` | - | - | Yes | - | - |
| `jwt_secret` | - | - | - | - | - |
| `latest_check_run_id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notify_url` | - | - | - | - | - |
| `parent_project_ref` | - | - | - | - | - |
| `persistent` | - | - | Yes | Yes | - |
| `postgres_engine` | - | - | Yes | - | - |
| `postgres_version` | - | - | - | - | - |
| `pr_number` | - | - | - | - | - |
| `preview_project_status` | - | - | - | - | - |
| `project_ref` | - | - | - | - | - |
| `ref` | - | - | - | - | - |
| `region` | - | - | - | - | - |
| `release_channel` | - | - | Yes | - | - |
| `request_review` | - | - | - | - | - |
| `reset_on_push` | - | - | - | - | - |
| `review_requested_at` | - | - | - | - | - |
| `secrets` | - | - | - | - | - |
| `status` | - | - | - | Yes | - |
| `updated_at` | - | - | - | - | - |
| `with_data` | - | - | Yes | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `restore` | `/v1/branches/{branch_id_or_ref}/restore` | `client.Branch().create({ $action: 'restore', ... })` |

An action returns that action's OWN response, which is not necessarily a
Branch record — check the API definition for its shape.

```ts
const result = await client.Branch().create({
  $action: 'restore',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Branch().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Branch().list({ ref: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Branch().load({ id: 'branch_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Branch().remove({ id: 'branch_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Branch().update({
  id: 'branch_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BranchUpdateResponseOutputEntity

```ts
const branch_update_response_output = client.BranchUpdateResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `migration_version` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BranchUpdateResponseOutput().create({
  branch_id_or_ref: 'example_branch_id_or_ref',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BranchUpdateResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkUpdateFunctionResponseOutputEntity

```ts
const bulk_update_function_response_output = client.BulkUpdateFunctionResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `functions` | `any[]` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BulkUpdateFunctionResponseOutput().update({
  ref: 'ref',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkUpdateFunctionResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateProviderResponseOutputEntity

```ts
const create_provider_response_output = client.CreateProviderResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_mapping` | `Record<string, any>` | Yes |  |
| `domains` | `any[]` | No |  |
| `metadata_url` | `string` | No |  |
| `metadata_xml` | `string` | No |  |
| `name_id_format` | `string` | No |  |
| `type` | `string` | Yes | What type of provider will be created |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateProviderResponseOutput().create({
  project_id: 'example_project_id',
  attribute_mapping: {},
  type: 'example_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateProviderResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateRoleResponseOutputEntity

```ts
const create_role_response_output = client.CreateRoleResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `read_only` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateRoleResponseOutput().create({
  project_id: 'example_project_id',
  read_only: true,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateRoleResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseEntity

```ts
const database = client.Database()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `database_identifier` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `parameters` | `any[]` | No |  |
| `query` | `string` | Yes |  |
| `read_replica_region` | `string` | Yes | Region you want your read replica to reside in |
| `recovery_time_target_unix` | `number` | Yes |  |
| `rollback` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `database_identifier` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | Yes | - |
| `parameters` | - | - | - | - | - |
| `query` | - | - | - | - | - |
| `read_replica_region` | - | - | - | - | - |
| `recovery_time_target_unix` | - | - | - | - | - |
| `rollback` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `migration` | `/v1/projects/{ref}/database/migrations` | `client.Database().create({ $action: 'migration', ... })` |
| `query` | `/v1/projects/{ref}/database/query` | `client.Database().create({ $action: 'query', ... })` |
| `context` | `/v1/projects/{ref}/database/context` | `client.Database().list({ $action: 'context', ... })` |
| `openapi` | `/v1/projects/{ref}/database/openapi` | `client.Database().load({ $action: 'openapi', ... })` |
| `migration` | `/v1/projects/{ref}/database/migrations` | `client.Database().remove({ $action: 'migration', ... })` |
| `migration` | `/v1/projects/{ref}/database/migrations` | `client.Database().update({ $action: 'migration', ... })` |

An action returns that action's OWN response, which is not necessarily a
Database record — check the API definition for its shape.

```ts
const result = await client.Database().create({
  $action: 'migration',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Database().create({
  project_id: 'example_project_id',
  database_identifier: 'example_database_identifier',
  id: 1,
  name: 'example_name',
  query: 'example_query',
  read_replica_region: 'example_read_replica_region',
  recovery_time_target_unix: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Database().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Database().load({ ref: 'ref' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Database().remove({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Database().update({
  project_id: 'project_id',
  version: 'version',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DatabaseUpgradeStatusResponseOutputEntity

```ts
const database_upgrade_status_response_output = client.DatabaseUpgradeStatusResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | No |  |
| `initiated_at` | `string` | Yes |  |
| `latest_status_at` | `string` | Yes |  |
| `progress` | `string` | No |  |
| `status` | `number` | Yes |  |
| `target_version` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DatabaseUpgradeStatusResponseOutput().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DatabaseUpgradeStatusResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DeployEntity

```ts
const deploy = client.Deploy()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Deploy().create({
  project_id: 'example_project_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DeployEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiskEntity

```ts
const disk = client.Disk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `any` | Yes |  |
| `last_modified_at` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Disk().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiskEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiskAutoscaleConfigOutputEntity

```ts
const disk_autoscale_config_output = client.DiskAutoscaleConfigOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `growth_percent` | `number` | Yes | Growth percentage for disk autoscaling |
| `max_size_gb` | `number` | Yes | Maximum limit the disk size will grow to in GB |
| `min_increment_gb` | `number` | Yes | Minimum increment size for disk autoscaling in GB |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DiskAutoscaleConfigOutput().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiskAutoscaleConfigOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DiskUtilMetricsResponseOutputEntity

```ts
const disk_util_metrics_response_output = client.DiskUtilMetricsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fs_avail_bytes` | `number` | Yes |  |
| `fs_size_bytes` | `number` | Yes |  |
| `fs_used_bytes` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DiskUtilMetricsResponseOutput().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DiskUtilMetricsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Domain().remove({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EdgeFunctionEntity

```ts
const edge_function = client.EdgeFunction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.EdgeFunction().remove({ id: 'id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EdgeFunctionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnvironmentEntity

```ts
const environment = client.Environment()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Environment().load({ branch_id_or_ref: 'branch_id_or_ref' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Environment().remove({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnvironmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FunctionEntity

```ts
const function_ = client.Function()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | Yes |  |
| `created_at` | `number` | Yes |  |
| `entrypoint_path` | `string` | No |  |
| `ezbr_sha256` | `string` | No |  |
| `id` | `string` | Yes |  |
| `import_map` | `boolean` | No |  |
| `import_map_path` | `string` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `number` | Yes |  |
| `verify_jwt` | `boolean` | No |  |
| `version` | `number` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `body` | - | - | - | Yes |
| `created_at` | - | - | - | - |
| `entrypoint_path` | - | - | - | - |
| `ezbr_sha256` | - | - | - | - |
| `id` | - | - | - | - |
| `import_map` | - | - | - | - |
| `import_map_path` | - | - | - | - |
| `name` | - | - | - | Yes |
| `slug` | - | - | - | - |
| `status` | - | - | - | - |
| `updated_at` | - | - | - | - |
| `verify_jwt` | - | - | - | - |
| `version` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Function().create({
  ref: 'example_ref',
  body: 'example_body',
  created_at: 1,
  id: 'example_id',
  status: 'example_status',
  updated_at: 1,
  version: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Function().list({ ref: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Function().load({ id: 'function_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Function().update({
  id: 'function_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FunctionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FunctionscombinedStatEntity

```ts
const functionscombined_stat = client.FunctionscombinedStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `any` | No |  |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FunctionscombinedStat().list({ project_id: "example", function_id: "example", interval: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FunctionscombinedStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## InviteEntity

```ts
const invite = client.Invite()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `invite_id` | `string` | Yes |  |
| `roles` | `any[]` | Yes |  |
| `user_roles` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Invite().create({
  project_id: 'example_project_id',
  email: 'example_email',
  invite_id: 'example_invite_id',
  roles: [],
  user_roles: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `InviteEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JitEntity

```ts
const jit = client.Jit()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `act` | `string` | No |  |
| `allowed_networks` | `Record<string, any>` | No |  |
| `branches_only` | `boolean` | No |  |
| `expires_at` | `number` | No |  |
| `rhost` | `any` | Yes |  |
| `role` | `string` | Yes |  |
| `roles` | `any[]` | Yes |  |
| `user_id` | `string` | No |  |
| `user_role` | `Record<string, any>` | Yes |  |
| `user_roles` | `any[]` | Yes |  |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `act` | - | - | - |
| `allowed_networks` | - | - | - |
| `branches_only` | - | - | - |
| `expires_at` | - | - | - |
| `rhost` | - | - | - |
| `role` | - | - | - |
| `roles` | - | - | - |
| `user_id` | - | - | Yes |
| `user_role` | - | - | - |
| `user_roles` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Jit().create({
  project_id: 'example_project_id',
  rhost: 'example_rhost',
  role: 'example_role',
  roles: [],
  user_role: {},
  user_roles: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Jit().list({ project_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Jit().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JitEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JitAccessResponseOutputEntity

```ts
const jit_access_response_output = client.JitAccessResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | Yes |  |
| `token` | `string` | Yes |  |
| `user_id` | `string` | No |  |
| `user_roles` | `any[]` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.JitAccessResponseOutput().create({
  project_id: 'example_project_id',
  email: 'example_email',
  token: 'example_token',
  user_roles: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JitAccessResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## JitListAccessResponseOutputEntity

```ts
const jit_list_access_response_output = client.JitListAccessResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `items` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.JitListAccessResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `JitListAccessResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LegacyEntity

```ts
const legacy = client.Legacy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Legacy().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Legacy().update({
  project_id: 'project_id',
  enabled: true,
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LegacyEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListActionRunResponseOutputEntity

```ts
const list_action_run_response_output = client.ListActionRunResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `branch_id` | `string` | Yes |  |
| `check_run_id` | `number` | Yes |  |
| `created_at` | `string` | Yes |  |
| `git_config` | `any` | No |  |
| `id` | `string` | Yes |  |
| `run_steps` | `any[]` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workdir` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListActionRunResponseOutput().list({ ref: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListActionRunResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListProjectAddonsResponseOutputEntity

```ts
const list_project_addons_response_output = client.ListProjectAddonsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_addons` | `any[]` | Yes |  |
| `selected_addons` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListProjectAddonsResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListProjectAddonsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListProvidersResponseOutputEntity

```ts
const list_providers_response_output = client.ListProvidersResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `domains` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `saml` | `Record<string, any>` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListProvidersResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListProvidersResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogEntity

```ts
const log = client.Log()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `any` | No |  |
| `result` | `any[]` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Log().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkBanResponseEnrichedOutputEntity

```ts
const network_ban_response_enriched_output = client.NetworkBanResponseEnrichedOutput()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NetworkBanResponseEnrichedOutput().create({
  project_id: 'example_project_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkBanResponseEnrichedOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkBanResponseOutputEntity

```ts
const network_ban_response_output = client.NetworkBanResponseOutput()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NetworkBanResponseOutput().create({
  project_id: 'example_project_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkBanResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkRestrictionEntity

```ts
const network_restriction = client.NetworkRestriction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add` | `Record<string, any>` | No |  |
| `applied_at` | `string` | No |  |
| `config` | `Record<string, any>` | Yes | At any given point in time, this is the config that the user has requested be applied to their project. |
| `entitlement` | `string` | Yes |  |
| `old_config` | `Record<string, any>` | No | Populated when a new config has been received, but not registered as successfully applied to a project. |
| `remove` | `Record<string, any>` | No |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NetworkRestriction().load({ ref: 'ref' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NetworkRestriction().update({
  ref: 'ref',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkRestrictionEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NetworkRestrictionsResponseOutputEntity

```ts
const network_restrictions_response_output = client.NetworkRestrictionsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dbAllowedCidrs` | `any[]` | No |  |
| `dbAllowedCidrsV6` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.NetworkRestrictionsResponseOutput().create({
  project_id: 'example_project_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NetworkRestrictionsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OAuthEntity

```ts
const o_auth = client.OAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client_id` | `string` | Yes |  |
| `client_secret` | `string` | Yes |  |
| `refresh_token` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OAuth().create({
  client_id: 'example_client_id',
  client_secret: 'example_client_secret',
  refresh_token: 'example_refresh_token',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OAuth().load({ client_id: 'client_id', redirect_uri: 'redirect_uri', response_type: 'response_type' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OAuthTokenResponseOutputEntity

```ts
const o_auth_token_response_output = client.OAuthTokenResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `access_token` | `string` | Yes |  |
| `expires_in` | `number` | Yes |  |
| `refresh_token` | `string` | No | The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`. |
| `token_type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.OAuthTokenResponseOutput().create({
  access_token: 'example_access_token',
  expires_in: 1,
  token_type: 'example_token_type',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OAuthTokenResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Organization().create({
  organization_id: 'example_organization_id',
  token: 'example_token',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationProjectClaimResponseOutputEntity

```ts
const organization_project_claim_response_output = client.OrganizationProjectClaimResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `preview` | `Record<string, any>` | Yes |  |
| `project` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.OrganizationProjectClaimResponseOutput().load({ organization_id: 'organization_id', token: 'token' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationProjectClaimResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationProjectsResponseOutputEntity

```ts
const organization_projects_response_output = client.OrganizationProjectsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cloud_provider` | `string` | Yes |  |
| `databases` | `any[]` | Yes |  |
| `inserted_at` | `string` | Yes |  |
| `is_branch` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `ref` | `string` | Yes |  |
| `region` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OrganizationProjectsResponseOutput().list({ slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationProjectsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PerformanceEntity

```ts
const performance = client.Performance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_key` | `string` | Yes |  |
| `categories` | `any[]` | Yes |  |
| `description` | `string` | Yes |  |
| `detail` | `string` | Yes |  |
| `facing` | `string` | Yes |  |
| `level` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | Yes |  |
| `observed_at` | `string` | No |  |
| `remediation` | `string` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Performance().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PerformanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PgsodiumEntity

```ts
const pgsodium = client.Pgsodium()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `root_key` | `string` | Yes | The pgsodium root key: 32 bytes, hex-encoded (64 characters). |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Pgsodium().load({ ref: 'ref' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Pgsodium().update({
  ref: 'ref',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PgsodiumEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostgreEntity

```ts
const postgre = client.Postgre()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `checkpoint_timeout` | `string` | No | Default unit: s |
| `cron_log_statement` | `boolean` | No |  |
| `effective_cache_size` | `string` | No |  |
| `hot_standby_feedback` | `boolean` | No |  |
| `log_autovacuum_min_duration` | `string` | No | Default unit: ms |
| `log_checkpoints` | `boolean` | No |  |
| `log_connections` | `boolean` | No |  |
| `log_disconnections` | `boolean` | No |  |
| `log_duration` | `boolean` | No |  |
| `log_lock_waits` | `boolean` | No |  |
| `log_recovery_conflict_waits` | `boolean` | No |  |
| `log_replication_commands` | `boolean` | No |  |
| `log_startup_progress_interval` | `string` | No | Default unit: ms |
| `log_temp_files` | `string` | No |  |
| `logical_decoding_work_mem` | `string` | No |  |
| `maintenance_work_mem` | `string` | No |  |
| `max_connections` | `number` | No |  |
| `max_locks_per_transaction` | `number` | No |  |
| `max_logical_replication_workers` | `number` | No |  |
| `max_parallel_maintenance_workers` | `number` | No |  |
| `max_parallel_workers` | `number` | No |  |
| `max_parallel_workers_per_gather` | `number` | No |  |
| `max_replication_slots` | `number` | No |  |
| `max_slot_wal_keep_size` | `string` | No |  |
| `max_standby_archive_delay` | `string` | No |  |
| `max_standby_streaming_delay` | `string` | No |  |
| `max_sync_workers_per_subscription` | `number` | No |  |
| `max_wal_senders` | `number` | No |  |
| `max_wal_size` | `string` | No |  |
| `max_worker_processes` | `number` | No |  |
| `restart_database` | `boolean` | No |  |
| `session_replication_role` | `string` | No |  |
| `shared_buffers` | `string` | No |  |
| `statement_timeout` | `string` | No | Default unit: ms |
| `track_activity_query_size` | `string` | No |  |
| `track_commit_timestamp` | `boolean` | No |  |
| `wal_keep_size` | `string` | No |  |
| `wal_sender_timeout` | `string` | No | Default unit: ms |
| `work_mem` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Postgre().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Postgre().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostgreEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostgrestEntity

```ts
const postgrest = client.Postgrest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `db_extra_search_path` | `string` | Yes |  |
| `db_pool` | `number` | Yes | If `null`, the value is automatically configured based on compute size. |
| `db_pool_acquisition_timeout` | `number` | Yes | If `null`, the value is automatically configured to 10. |
| `db_schema` | `string` | Yes |  |
| `jwt_secret` | `string` | No |  |
| `max_rows` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Postgrest().load({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostgrestEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectEntity

```ts
const project = client.Project()
```

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `config_disk` | `/v1/projects/{ref}/config/disk` | `client.Project().create({ $action: 'config_disk', ... })` |
| `restore` | `/v1/projects/{ref}/restore` | `client.Project().create({ $action: 'restore', ... })` |
| `restore_cancel` | `/v1/projects/{ref}/restore/cancel` | `client.Project().create({ $action: 'restore_cancel', ... })` |
| `network_ban` | `/v1/projects/{ref}/network-bans` | `client.Project().remove({ $action: 'network_ban', ... })` |

An action returns that action's OWN response, which is not necessarily a
Project record — check the API definition for its shape.

```ts
const result = await client.Project().create({
  $action: 'config_disk',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Project().create({
  ref: 'example_ref',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Project().remove({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectAvailableRestoreVersionsResponseOutputEntity

```ts
const project_available_restore_versions_response_output = client.ProjectAvailableRestoreVersionsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `postgres_engine` | `string` | Yes |  |
| `release_channel` | `string` | Yes |  |
| `version` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectAvailableRestoreVersionsResponseOutput().list({ ref: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectAvailableRestoreVersionsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectClaimTokenResponseOutputEntity

```ts
const project_claim_token_response_output = client.ProjectClaimTokenResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `created_by` | `string` | Yes |  |
| `expires_at` | `string` | Yes |  |
| `token_alias` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ProjectClaimTokenResponseOutput().load({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectClaimTokenResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectUpgradeEligibilityResponseOutputEntity

```ts
const project_upgrade_eligibility_response_output = client.ProjectUpgradeEligibilityResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app_version` | `string` | Yes |  |
| `postgres_version` | `string` | Yes |  |
| `release_channel` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ProjectUpgradeEligibilityResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectUpgradeEligibilityResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProjectUpgradeInitiateResponseOutputEntity

```ts
const project_upgrade_initiate_response_output = client.ProjectUpgradeInitiateResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `release_channel` | `string` | No |  |
| `target_version` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ProjectUpgradeInitiateResponseOutput().create({
  ref: 'example_ref',
  target_version: 'example_target_version',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProjectUpgradeInitiateResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderEntity

```ts
const provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `domains` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `saml` | `Record<string, any>` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Provider().load({ id: 'provider_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Provider().remove({ id: 'provider_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReadOnlyStatusResponseOutputEntity

```ts
const read_only_status_response_output = client.ReadOnlyStatusResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes |  |
| `override_active_until` | `string` | Yes |  |
| `override_enabled` | `boolean` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReadOnlyStatusResponseOutput().load({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReadOnlyStatusResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RealtimeEntity

```ts
const realtime = client.Realtime()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin_suspended_at` | `string` | Yes | If set, the Realtime service has been suspended by an admin. |
| `connection_pool` | `number` | Yes | Sets connection pool size for Realtime Authorization |
| `max_bytes_per_second` | `number` | Yes | Sets maximum number of bytes per second rate per channel limit |
| `max_channels_per_client` | `number` | Yes | Sets maximum number of channels per client rate limit |
| `max_concurrent_users` | `number` | Yes | Sets maximum number of concurrent users rate limit |
| `max_events_per_second` | `number` | Yes | Sets maximum number of events per second rate per channel limit |
| `max_joins_per_second` | `number` | Yes | Sets maximum number of joins per second rate limit |
| `max_payload_size_in_kb` | `number` | Yes | Sets maximum number of payload size in KB rate limit |
| `max_presence_events_per_second` | `number` | Yes | Sets maximum number of presence events per second rate limit |
| `postgres_changes_pool` | `number` | Yes | Sets connection pool size used to create Postgres Changes subscriptions |
| `presence_enabled` | `boolean` | Yes | Whether to enable presence |
| `private_only` | `boolean` | Yes | Whether to only allow private channels |
| `suspend` | `boolean` | Yes | Disables the Realtime service for this project when true. |

### Field Usage by Operation

| Field | load | create | update |
| --- | --- | --- | --- |
| `admin_suspended_at` | - | - | - |
| `connection_pool` | - | - | Yes |
| `max_bytes_per_second` | - | - | Yes |
| `max_channels_per_client` | - | - | Yes |
| `max_concurrent_users` | - | - | Yes |
| `max_events_per_second` | - | - | Yes |
| `max_joins_per_second` | - | - | Yes |
| `max_payload_size_in_kb` | - | - | Yes |
| `max_presence_events_per_second` | - | - | Yes |
| `postgres_changes_pool` | - | - | Yes |
| `presence_enabled` | - | - | Yes |
| `private_only` | - | - | Yes |
| `suspend` | - | - | Yes |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `shutdown` | `/v1/projects/{ref}/config/realtime/shutdown` | `client.Realtime().create({ $action: 'shutdown', ... })` |

An action returns that action's OWN response, which is not necessarily a
Realtime record — check the API definition for its shape.

```ts
const result = await client.Realtime().create({
  $action: 'shutdown',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Realtime().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Realtime().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Realtime().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RealtimeEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionsInfoOutputEntity

```ts
const regions_info_output = client.RegionsInfoOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `Record<string, any>` | Yes |  |
| `recommendations` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RegionsInfoOutput().load({ organization_slug: 'organization_slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionsInfoOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RolesResponseOutputEntity

```ts
const roles_response_output = client.RolesResponseOutput()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RolesResponseOutput().remove({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RolesResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretEntity

```ts
const secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes |  |
| `updated_at` | `string` | No |  |
| `value` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Secret().create({
  ref: 'example_ref',
  name: 'example_name',
  value: 'example_value',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Secret().list({ ref: "example" })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Secret().remove({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecurityEntity

```ts
const security = client.Security()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cache_key` | `string` | Yes |  |
| `categories` | `any[]` | Yes |  |
| `description` | `string` | Yes |  |
| `detail` | `string` | Yes |  |
| `facing` | `string` | Yes |  |
| `level` | `string` | Yes |  |
| `metadata` | `Record<string, any>` | No |  |
| `name` | `string` | Yes |  |
| `observed_at` | `string` | No |  |
| `remediation` | `string` | Yes |  |
| `title` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Security().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecurityEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SigningKeyEntity

```ts
const signing_key = client.SigningKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `algorithm` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `private_jwk` | `any` | No |  |
| `public_jwk` | `any` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `algorithm` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `private_jwk` | - | - | - | - | - |
| `public_jwk` | - | - | - | - | - |
| `status` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SigningKey().create({
  project_id: 'example_project_id',
  algorithm: 'example_algorithm',
  created_at: 'example_created_at',
  id: 'example_id',
  public_jwk: 'example_public_jwk',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SigningKey().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SigningKey().load({ id: 'signing_key_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SigningKey().remove({ id: 'signing_key_id', project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SigningKey().update({
  id: 'signing_key_id',
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SigningKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SigningKeyResponseOutputEntity

```ts
const signing_key_response_output = client.SigningKeyResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `algorithm` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `public_jwk` | `any` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SigningKeyResponseOutput().create({
  project_id: 'example_project_id',
  algorithm: 'example_algorithm',
  created_at: 'example_created_at',
  id: 'example_id',
  public_jwk: 'example_public_jwk',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SigningKeyResponseOutput().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SigningKeyResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SnippetEntity

```ts
const snippet = client.Snippet()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Record<string, any>` | Yes |  |
| `description` | `string` | Yes |  |
| `favorite` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `inserted_at` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `owner` | `Record<string, any>` | Yes |  |
| `project` | `Record<string, any>` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `updated_by` | `Record<string, any>` | Yes |  |
| `visibility` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Snippet().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Snippet().load({ id: 'snippet_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SnippetEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SslEnforcementEntity

```ts
const ssl_enforcement = client.SslEnforcement()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appliedSuccessfully` | `boolean` | Yes |  |
| `currentConfig` | `Record<string, any>` | Yes |  |
| `requestedConfig` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SslEnforcement().load({ ref: 'ref' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SslEnforcement().update({
  ref: 'ref',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SslEnforcementEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StorageEntity

```ts
const storage = client.Storage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `Record<string, any>` | Yes |  |
| `external` | `Record<string, any>` | Yes |  |
| `features` | `Record<string, any>` | Yes |  |
| `fileSizeLimit` | `number` | Yes |  |
| `migrationVersion` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | update |
| --- | --- | --- |
| `capabilities` | - | - |
| `external` | - | - |
| `features` | - | Yes |
| `fileSizeLimit` | - | Yes |
| `migrationVersion` | - | - |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Storage().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Storage().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StorageEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StreamableFileEntity

```ts
const streamable_file = client.StreamableFile()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StreamableFile().load({ function_slug: 'function_slug', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StreamableFileEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SubdomainAvailabilityResponseOutputEntity

```ts
const subdomain_availability_response_output = client.SubdomainAvailabilityResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `vanity_subdomain` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SubdomainAvailabilityResponseOutput().create({
  project_id: 'example_project_id',
  vanity_subdomain: 'example_vanity_subdomain',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SubdomainAvailabilityResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SupavisorConfigResponseOutputEntity

```ts
const supavisor_config_response_output = client.SupavisorConfigResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connectionString` | `string` | Yes | Use connection_string instead |
| `connection_string` | `string` | Yes |  |
| `database_type` | `string` | Yes |  |
| `db_host` | `string` | Yes |  |
| `db_name` | `string` | Yes |  |
| `db_port` | `number` | Yes |  |
| `db_user` | `string` | Yes |  |
| `default_pool_size` | `number` | Yes |  |
| `identifier` | `string` | Yes |  |
| `is_using_scram_auth` | `boolean` | Yes |  |
| `max_client_conn` | `number` | Yes |  |
| `pool_mode` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SupavisorConfigResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SupavisorConfigResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ThirdPartyAuthEntity

```ts
const third_party_auth = client.ThirdPartyAuth()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_jwks` | `any` | No |  |
| `id` | `string` | Yes |  |
| `inserted_at` | `string` | Yes |  |
| `jwks_url` | `string` | No |  |
| `oidc_issuer_url` | `string` | No |  |
| `resolved_at` | `string` | No |  |
| `resolved_jwks` | `any` | No |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ThirdPartyAuth().create({
  project_id: 'example_project_id',
  id: 'example_id',
  inserted_at: 'example_inserted_at',
  type: 'example_type',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ThirdPartyAuth().list({ project_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ThirdPartyAuth().load({ id: 'third_party_auth_id', project_id: 'project_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ThirdPartyAuth().remove({ id: 'third_party_auth_id', project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ThirdPartyAuthEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TypescriptEntity

```ts
const typescript = client.Typescript()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `types` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Typescript().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TypescriptEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateCustomHostnameResponseOutputEntity

```ts
const update_custom_hostname_response_output = client.UpdateCustomHostnameResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_hostname` | `string` | No |  |
| `data` | `Record<string, any>` | Yes |  |
| `status` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `custom_hostname` | - | Yes |
| `data` | - | - |
| `status` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateCustomHostnameResponseOutput().create({
  project_id: 'example_project_id',
  data: {},
  status: 'example_status',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.UpdateCustomHostnameResponseOutput().load({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateCustomHostnameResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateProviderResponseOutputEntity

```ts
const update_provider_response_output = client.UpdateProviderResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attribute_mapping` | `Record<string, any>` | Yes |  |
| `created_at` | `string` | No |  |
| `domains` | `any[]` | No |  |
| `id` | `string` | Yes |  |
| `metadata_url` | `string` | No |  |
| `metadata_xml` | `string` | No |  |
| `name_id_format` | `string` | No |  |
| `saml` | `Record<string, any>` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateProviderResponseOutput().update({
  project_id: 'project_id',
  provider_id: 'provider_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateProviderResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateSupavisorConfigResponseOutputEntity

```ts
const update_supavisor_config_response_output = client.UpdateSupavisorConfigResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `default_pool_size` | `number` | Yes |  |
| `pool_mode` | `string` | Yes | Dedicated pooler mode for the project |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `default_pool_size` | Yes |
| `pool_mode` | Yes |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateSupavisorConfigResponseOutput().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateSupavisorConfigResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1BackupScheduleResponseOutputEntity

```ts
const v1_backup_schedule_response_output = client.V1BackupScheduleResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schedule_for` | `string` | Yes | Time of day to schedule daily backups, in UTC. |
| `updated_at` | `string` | Yes | Timestamp of when the backup schedule was last updated. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1BackupScheduleResponseOutput().load({ project_id: 'project_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.V1BackupScheduleResponseOutput().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1BackupScheduleResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1BackupsResponseOutputEntity

```ts
const v1_backups_response_output = client.V1BackupsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `inserted_at` | `string` | Yes |  |
| `is_physical_backup` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1BackupsResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1BackupsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1GetMigrationResponseOutputEntity

```ts
const v1_get_migration_response_output = client.V1GetMigrationResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_by` | `string` | No |  |
| `idempotency_key` | `string` | No |  |
| `name` | `string` | No |  |
| `rollback` | `any[]` | No |  |
| `statements` | `any[]` | No |  |
| `version` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1GetMigrationResponseOutput().load({ project_id: 'project_id', version: 'version' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1GetMigrationResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1GetUsageApiCountResponseOutputEntity

```ts
const v1_get_usage_api_count_response_output = client.V1GetUsageApiCountResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `timestamp` | `string` | Yes |  |
| `total_auth_requests` | `number` | Yes |  |
| `total_realtime_requests` | `number` | Yes |  |
| `total_rest_requests` | `number` | Yes |  |
| `total_storage_requests` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1GetUsageApiCountResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1GetUsageApiCountResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1GetUsageApiRequestsCountResponseOutputEntity

```ts
const v1_get_usage_api_requests_count_response_output = client.V1GetUsageApiRequestsCountResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `count` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1GetUsageApiRequestsCountResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1GetUsageApiRequestsCountResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1ListEntitlementsResponseOutputEntity

```ts
const v1_list_entitlements_response_output = client.V1ListEntitlementsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `config` | `any` | Yes |  |
| `feature` | `Record<string, any>` | Yes |  |
| `hasAccess` | `boolean` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1ListEntitlementsResponseOutput().list({ slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1ListEntitlementsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1ListMigrationsResponseOutputEntity

```ts
const v1_list_migrations_response_output = client.V1ListMigrationsResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `version` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1ListMigrationsResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1ListMigrationsResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1OrganizationMemberResponseOutputEntity

```ts
const v1_organization_member_response_output = client.V1OrganizationMemberResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `avatar_url` | `string` | Yes |  |
| `email` | `string` | No |  |
| `mfa_enabled` | `boolean` | Yes |  |
| `role_name` | `string` | No |  |
| `user_id` | `string` | Yes |  |
| `user_name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1OrganizationMemberResponseOutput().list({ slug: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1OrganizationMemberResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1OrganizationSlugResponseOutputEntity

```ts
const v1_organization_slug_response_output = client.V1OrganizationSlugResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_release_channels` | `any[]` | Yes |  |
| `id` | `string` | Yes | Deprecated: Use `slug` instead. |
| `name` | `string` | Yes |  |
| `opt_in_tags` | `any[]` | Yes |  |
| `plan` | `string` | No |  |
| `slug` | `string` | Yes | Organization slug |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.V1OrganizationSlugResponseOutput().create({
  allowed_release_channels: [],
  id: 'example_id',
  name: 'example_name',
  opt_in_tags: [],
  slug: 'example_slug',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1OrganizationSlugResponseOutput().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1OrganizationSlugResponseOutput().load({ slug: 'slug' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1OrganizationSlugResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1PgbouncerConfigResponseOutputEntity

```ts
const v1_pgbouncer_config_response_output = client.V1PgbouncerConfigResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connection_string` | `string` | No |  |
| `default_pool_size` | `number` | No |  |
| `ignore_startup_parameters` | `string` | No |  |
| `max_client_conn` | `number` | No |  |
| `pool_mode` | `string` | No |  |
| `query_wait_timeout` | `number` | No |  |
| `reserve_pool_size` | `number` | No |  |
| `server_idle_timeout` | `number` | No |  |
| `server_lifetime` | `number` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1PgbouncerConfigResponseOutput().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1PgbouncerConfigResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1ProfileResponseOutputEntity

```ts
const v1_profile_response_output = client.V1ProfileResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `gotrue_id` | `string` | Yes |  |
| `primary_email` | `string` | Yes |  |
| `username` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1ProfileResponseOutput().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1ProfileResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1ProjectRefResponseOutputEntity

```ts
const v1_project_ref_response_output = client.V1ProjectRefResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `ref` | `string` | Yes |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.V1ProjectRefResponseOutput().remove({ ref: 'ref' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.V1ProjectRefResponseOutput().update({
  ref: 'ref',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1ProjectRefResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1ProjectWithDatabaseResponseOutputEntity

```ts
const v1_project_with_database_response_output = client.V1ProjectWithDatabaseResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Creation timestamp |
| `database` | `Record<string, any>` | Yes |  |
| `db_pass` | `string` | Yes | Database password |
| `desired_instance_size` | `string` | No | Desired instance size. |
| `high_availability` | `boolean` | No | [Experimental] Whether to enable high availability for the project. |
| `id` | `string` | Yes | Deprecated: Use `ref` instead. |
| `kps_enabled` | `boolean` | No | This field is deprecated and is ignored in this request |
| `name` | `string` | Yes | Name of your project |
| `organization_id` | `string` | Yes | Deprecated: Use `organization_slug` instead. |
| `organization_slug` | `string` | Yes | Organization slug |
| `plan` | `string` | No | Subscription Plan is now set on organization level and is ignored in this request |
| `postgres_engine` | `null` | No |  |
| `ref` | `string` | Yes | Project ref |
| `region` | `string` | Yes | Region of your project |
| `region_selection` | `any` | No | Region selection. |
| `release_channel` | `null` | No |  |
| `status` | `string` | Yes |  |
| `template_url` | `string` | No | Template URL used to create the project from the CLI. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `database` | - | - | - | - | - |
| `db_pass` | - | - | - | - | - |
| `desired_instance_size` | - | - | - | - | - |
| `high_availability` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `kps_enabled` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `organization_id` | - | - | Yes | - | - |
| `organization_slug` | - | - | - | - | - |
| `plan` | - | - | - | - | - |
| `postgres_engine` | - | - | - | - | - |
| `ref` | - | - | - | - | - |
| `region` | - | - | Yes | - | - |
| `region_selection` | - | - | - | - | - |
| `release_channel` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `template_url` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `claim_token` | `/v1/projects/{ref}/claim-token` | `client.V1ProjectWithDatabaseResponseOutput().create({ $action: 'claim_token', ... })` |
| `pause` | `/v1/projects/{ref}/pause` | `client.V1ProjectWithDatabaseResponseOutput().create({ $action: 'pause', ... })` |
| `restart` | `/v1/projects/{ref}/restart` | `client.V1ProjectWithDatabaseResponseOutput().create({ $action: 'restart', ... })` |
| `claim_token` | `/v1/projects/{ref}/claim-token` | `client.V1ProjectWithDatabaseResponseOutput().remove({ $action: 'claim_token', ... })` |
| `jit_access` | `/v1/projects/{ref}/jit-access` | `client.V1ProjectWithDatabaseResponseOutput().update({ $action: 'jit_access', ... })` |
| `postgrest` | `/v1/projects/{ref}/postgrest` | `client.V1ProjectWithDatabaseResponseOutput().update({ $action: 'postgrest', ... })` |

An action returns that action's OWN response, which is not necessarily a
V1ProjectWithDatabaseResponseOutput record — check the API definition for its shape.

```ts
const result = await client.V1ProjectWithDatabaseResponseOutput().create({
  $action: 'claim_token',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.V1ProjectWithDatabaseResponseOutput().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1ProjectWithDatabaseResponseOutput().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1ProjectWithDatabaseResponseOutput().load({ ref: 'ref' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.V1ProjectWithDatabaseResponseOutput().remove({ ref: 'ref' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.V1ProjectWithDatabaseResponseOutput().update({
  ref: 'ref',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1ProjectWithDatabaseResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1RestorePointEntity

```ts
const v1_restore_point = client.V1RestorePoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_on` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.V1RestorePoint().create({
  project_id: 'example_project_id',
  completed_on: 'example_completed_on',
  name: 'example_name',
  status: 'example_status',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.V1RestorePoint().load({ project_id: 'project_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1RestorePointEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1ServiceHealthResponseOutputEntity

```ts
const v1_service_health_response_output = client.V1ServiceHealthResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `error` | `string` | No |  |
| `healthy` | `boolean` | Yes | Deprecated. |
| `info` | `any` | No |  |
| `name` | `string` | Yes |  |
| `status` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1ServiceHealthResponseOutput().list({ ref: "example", service: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1ServiceHealthResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1StorageBucketResponseOutputEntity

```ts
const v1_storage_bucket_response_output = client.V1StorageBucketResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `owner` | `string` | Yes |  |
| `public` | `boolean` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.V1StorageBucketResponseOutput().list({ project_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1StorageBucketResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## V1UpdatePasswordResponseOutputEntity

```ts
const v1_update_password_response_output = client.V1UpdatePasswordResponseOutput()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes |  |
| `password` | `string` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.V1UpdatePasswordResponseOutput().update({
  project_id: 'project_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `V1UpdatePasswordResponseOutputEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VanitySubdomainEntity

```ts
const vanity_subdomain = client.VanitySubdomain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_domain` | `string` | No |  |
| `status` | `string` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.VanitySubdomain().load({ ref: 'ref' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VanitySubdomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `SupabaseMgmtSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new SupabaseMgmtSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

