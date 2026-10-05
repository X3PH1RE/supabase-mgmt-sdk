// SupabaseMgmt Ts SDK

import { ActionEntity } from './entity/ActionEntity'
import { ActivateEntity } from './entity/ActivateEntity'
import { AnalyticsEntity } from './entity/AnalyticsEntity'
import { ApiKeyEntity } from './entity/ApiKeyEntity'
import { AuthEntity } from './entity/AuthEntity'
import { BillingEntity } from './entity/BillingEntity'
import { BranchEntity } from './entity/BranchEntity'
import { BranchUpdateResponseOutputEntity } from './entity/BranchUpdateResponseOutputEntity'
import { BulkUpdateFunctionResponseOutputEntity } from './entity/BulkUpdateFunctionResponseOutputEntity'
import { CreateProviderResponseOutputEntity } from './entity/CreateProviderResponseOutputEntity'
import { CreateRoleResponseOutputEntity } from './entity/CreateRoleResponseOutputEntity'
import { DatabaseEntity } from './entity/DatabaseEntity'
import { DatabaseUpgradeStatusResponseOutputEntity } from './entity/DatabaseUpgradeStatusResponseOutputEntity'
import { DeployEntity } from './entity/DeployEntity'
import { DiskEntity } from './entity/DiskEntity'
import { DiskAutoscaleConfigOutputEntity } from './entity/DiskAutoscaleConfigOutputEntity'
import { DiskUtilMetricsResponseOutputEntity } from './entity/DiskUtilMetricsResponseOutputEntity'
import { DomainEntity } from './entity/DomainEntity'
import { EdgeFunctionEntity } from './entity/EdgeFunctionEntity'
import { EnvironmentEntity } from './entity/EnvironmentEntity'
import { FunctionEntity } from './entity/FunctionEntity'
import { FunctionscombinedStatEntity } from './entity/FunctionscombinedStatEntity'
import { InviteEntity } from './entity/InviteEntity'
import { JitEntity } from './entity/JitEntity'
import { JitAccessResponseOutputEntity } from './entity/JitAccessResponseOutputEntity'
import { JitListAccessResponseOutputEntity } from './entity/JitListAccessResponseOutputEntity'
import { LegacyEntity } from './entity/LegacyEntity'
import { ListActionRunResponseOutputEntity } from './entity/ListActionRunResponseOutputEntity'
import { ListProjectAddonsResponseOutputEntity } from './entity/ListProjectAddonsResponseOutputEntity'
import { ListProvidersResponseOutputEntity } from './entity/ListProvidersResponseOutputEntity'
import { LogEntity } from './entity/LogEntity'
import { NetworkBanResponseEnrichedOutputEntity } from './entity/NetworkBanResponseEnrichedOutputEntity'
import { NetworkBanResponseOutputEntity } from './entity/NetworkBanResponseOutputEntity'
import { NetworkRestrictionEntity } from './entity/NetworkRestrictionEntity'
import { NetworkRestrictionsResponseOutputEntity } from './entity/NetworkRestrictionsResponseOutputEntity'
import { OAuthEntity } from './entity/OAuthEntity'
import { OAuthTokenResponseOutputEntity } from './entity/OAuthTokenResponseOutputEntity'
import { OrganizationEntity } from './entity/OrganizationEntity'
import { OrganizationProjectClaimResponseOutputEntity } from './entity/OrganizationProjectClaimResponseOutputEntity'
import { OrganizationProjectsResponseOutputEntity } from './entity/OrganizationProjectsResponseOutputEntity'
import { PerformanceEntity } from './entity/PerformanceEntity'
import { PgsodiumEntity } from './entity/PgsodiumEntity'
import { PostgreEntity } from './entity/PostgreEntity'
import { PostgrestEntity } from './entity/PostgrestEntity'
import { ProjectEntity } from './entity/ProjectEntity'
import { ProjectAvailableRestoreVersionsResponseOutputEntity } from './entity/ProjectAvailableRestoreVersionsResponseOutputEntity'
import { ProjectClaimTokenResponseOutputEntity } from './entity/ProjectClaimTokenResponseOutputEntity'
import { ProjectUpgradeEligibilityResponseOutputEntity } from './entity/ProjectUpgradeEligibilityResponseOutputEntity'
import { ProjectUpgradeInitiateResponseOutputEntity } from './entity/ProjectUpgradeInitiateResponseOutputEntity'
import { ProviderEntity } from './entity/ProviderEntity'
import { ReadOnlyStatusResponseOutputEntity } from './entity/ReadOnlyStatusResponseOutputEntity'
import { RealtimeEntity } from './entity/RealtimeEntity'
import { RegionsInfoOutputEntity } from './entity/RegionsInfoOutputEntity'
import { RolesResponseOutputEntity } from './entity/RolesResponseOutputEntity'
import { SecretEntity } from './entity/SecretEntity'
import { SecurityEntity } from './entity/SecurityEntity'
import { SigningKeyEntity } from './entity/SigningKeyEntity'
import { SigningKeyResponseOutputEntity } from './entity/SigningKeyResponseOutputEntity'
import { SnippetEntity } from './entity/SnippetEntity'
import { SslEnforcementEntity } from './entity/SslEnforcementEntity'
import { StorageEntity } from './entity/StorageEntity'
import { StreamableFileEntity } from './entity/StreamableFileEntity'
import { SubdomainAvailabilityResponseOutputEntity } from './entity/SubdomainAvailabilityResponseOutputEntity'
import { SupavisorConfigResponseOutputEntity } from './entity/SupavisorConfigResponseOutputEntity'
import { ThirdPartyAuthEntity } from './entity/ThirdPartyAuthEntity'
import { TypescriptEntity } from './entity/TypescriptEntity'
import { UpdateCustomHostnameResponseOutputEntity } from './entity/UpdateCustomHostnameResponseOutputEntity'
import { UpdateProviderResponseOutputEntity } from './entity/UpdateProviderResponseOutputEntity'
import { UpdateSupavisorConfigResponseOutputEntity } from './entity/UpdateSupavisorConfigResponseOutputEntity'
import { V1BackupScheduleResponseOutputEntity } from './entity/V1BackupScheduleResponseOutputEntity'
import { V1BackupsResponseOutputEntity } from './entity/V1BackupsResponseOutputEntity'
import { V1GetMigrationResponseOutputEntity } from './entity/V1GetMigrationResponseOutputEntity'
import { V1GetUsageApiCountResponseOutputEntity } from './entity/V1GetUsageApiCountResponseOutputEntity'
import { V1GetUsageApiRequestsCountResponseOutputEntity } from './entity/V1GetUsageApiRequestsCountResponseOutputEntity'
import { V1ListEntitlementsResponseOutputEntity } from './entity/V1ListEntitlementsResponseOutputEntity'
import { V1ListMigrationsResponseOutputEntity } from './entity/V1ListMigrationsResponseOutputEntity'
import { V1OrganizationMemberResponseOutputEntity } from './entity/V1OrganizationMemberResponseOutputEntity'
import { V1OrganizationSlugResponseOutputEntity } from './entity/V1OrganizationSlugResponseOutputEntity'
import { V1PgbouncerConfigResponseOutputEntity } from './entity/V1PgbouncerConfigResponseOutputEntity'
import { V1ProfileResponseOutputEntity } from './entity/V1ProfileResponseOutputEntity'
import { V1ProjectRefResponseOutputEntity } from './entity/V1ProjectRefResponseOutputEntity'
import { V1ProjectWithDatabaseResponseOutputEntity } from './entity/V1ProjectWithDatabaseResponseOutputEntity'
import { V1RestorePointEntity } from './entity/V1RestorePointEntity'
import { V1ServiceHealthResponseOutputEntity } from './entity/V1ServiceHealthResponseOutputEntity'
import { V1StorageBucketResponseOutputEntity } from './entity/V1StorageBucketResponseOutputEntity'
import { V1UpdatePasswordResponseOutputEntity } from './entity/V1UpdatePasswordResponseOutputEntity'
import { VanitySubdomainEntity } from './entity/VanitySubdomainEntity'

export type * from './SupabaseMgmtTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { SupabaseMgmtEntityBase } from './SupabaseMgmtEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class SupabaseMgmtSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('SupabaseMgmtSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, fetched) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, err) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('SupabaseMgmtSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('SupabaseMgmtSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts?: Record<string, any>) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.Activate().list()` / `client.Activate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Activate(entopts?: Record<string, any>) {
    const self = this
    return new ActivateEntity(self, entopts)
  }


  // Entity access: `client.Analytics().list()` / `client.Analytics().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Analytics(entopts?: Record<string, any>) {
    const self = this
    return new AnalyticsEntity(self, entopts)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiKeyEntity(self, entopts)
  }


  // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Auth(entopts?: Record<string, any>) {
    const self = this
    return new AuthEntity(self, entopts)
  }


  // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Billing(entopts?: Record<string, any>) {
    const self = this
    return new BillingEntity(self, entopts)
  }


  // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Branch(entopts?: Record<string, any>) {
    const self = this
    return new BranchEntity(self, entopts)
  }


  // Entity access: `client.BranchUpdateResponseOutput().list()` / `client.BranchUpdateResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BranchUpdateResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new BranchUpdateResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.BulkUpdateFunctionResponseOutput().list()` / `client.BulkUpdateFunctionResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BulkUpdateFunctionResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new BulkUpdateFunctionResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.CreateProviderResponseOutput().list()` / `client.CreateProviderResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateProviderResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new CreateProviderResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.CreateRoleResponseOutput().list()` / `client.CreateRoleResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateRoleResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new CreateRoleResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Database().list()` / `client.Database().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Database(entopts?: Record<string, any>) {
    const self = this
    return new DatabaseEntity(self, entopts)
  }


  // Entity access: `client.DatabaseUpgradeStatusResponseOutput().list()` / `client.DatabaseUpgradeStatusResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DatabaseUpgradeStatusResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new DatabaseUpgradeStatusResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Deploy().list()` / `client.Deploy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deploy(entopts?: Record<string, any>) {
    const self = this
    return new DeployEntity(self, entopts)
  }


  // Entity access: `client.Disk().list()` / `client.Disk().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Disk(entopts?: Record<string, any>) {
    const self = this
    return new DiskEntity(self, entopts)
  }


  // Entity access: `client.DiskAutoscaleConfigOutput().list()` / `client.DiskAutoscaleConfigOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DiskAutoscaleConfigOutput(entopts?: Record<string, any>) {
    const self = this
    return new DiskAutoscaleConfigOutputEntity(self, entopts)
  }


  // Entity access: `client.DiskUtilMetricsResponseOutput().list()` / `client.DiskUtilMetricsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DiskUtilMetricsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new DiskUtilMetricsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Domain(entopts?: Record<string, any>) {
    const self = this
    return new DomainEntity(self, entopts)
  }


  // Entity access: `client.EdgeFunction().list()` / `client.EdgeFunction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EdgeFunction(entopts?: Record<string, any>) {
    const self = this
    return new EdgeFunctionEntity(self, entopts)
  }


  // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Environment(entopts?: Record<string, any>) {
    const self = this
    return new EnvironmentEntity(self, entopts)
  }


  // Entity access: `client.Function().list()` / `client.Function().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Function(entopts?: Record<string, any>) {
    const self = this
    return new FunctionEntity(self, entopts)
  }


  // Entity access: `client.FunctionscombinedStat().list()` / `client.FunctionscombinedStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FunctionscombinedStat(entopts?: Record<string, any>) {
    const self = this
    return new FunctionscombinedStatEntity(self, entopts)
  }


  // Entity access: `client.Invite().list()` / `client.Invite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invite(entopts?: Record<string, any>) {
    const self = this
    return new InviteEntity(self, entopts)
  }


  // Entity access: `client.Jit().list()` / `client.Jit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Jit(entopts?: Record<string, any>) {
    const self = this
    return new JitEntity(self, entopts)
  }


  // Entity access: `client.JitAccessResponseOutput().list()` / `client.JitAccessResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  JitAccessResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new JitAccessResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.JitListAccessResponseOutput().list()` / `client.JitListAccessResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  JitListAccessResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new JitListAccessResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Legacy().list()` / `client.Legacy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Legacy(entopts?: Record<string, any>) {
    const self = this
    return new LegacyEntity(self, entopts)
  }


  // Entity access: `client.ListActionRunResponseOutput().list()` / `client.ListActionRunResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListActionRunResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ListActionRunResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.ListProjectAddonsResponseOutput().list()` / `client.ListProjectAddonsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListProjectAddonsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ListProjectAddonsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.ListProvidersResponseOutput().list()` / `client.ListProvidersResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListProvidersResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ListProvidersResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Log().list()` / `client.Log().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Log(entopts?: Record<string, any>) {
    const self = this
    return new LogEntity(self, entopts)
  }


  // Entity access: `client.NetworkBanResponseEnrichedOutput().list()` / `client.NetworkBanResponseEnrichedOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkBanResponseEnrichedOutput(entopts?: Record<string, any>) {
    const self = this
    return new NetworkBanResponseEnrichedOutputEntity(self, entopts)
  }


  // Entity access: `client.NetworkBanResponseOutput().list()` / `client.NetworkBanResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkBanResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new NetworkBanResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.NetworkRestriction().list()` / `client.NetworkRestriction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkRestriction(entopts?: Record<string, any>) {
    const self = this
    return new NetworkRestrictionEntity(self, entopts)
  }


  // Entity access: `client.NetworkRestrictionsResponseOutput().list()` / `client.NetworkRestrictionsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NetworkRestrictionsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new NetworkRestrictionsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.OAuth().list()` / `client.OAuth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OAuth(entopts?: Record<string, any>) {
    const self = this
    return new OAuthEntity(self, entopts)
  }


  // Entity access: `client.OAuthTokenResponseOutput().list()` / `client.OAuthTokenResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OAuthTokenResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new OAuthTokenResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.OrganizationProjectClaimResponseOutput().list()` / `client.OrganizationProjectClaimResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationProjectClaimResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationProjectClaimResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.OrganizationProjectsResponseOutput().list()` / `client.OrganizationProjectsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationProjectsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationProjectsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Performance().list()` / `client.Performance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Performance(entopts?: Record<string, any>) {
    const self = this
    return new PerformanceEntity(self, entopts)
  }


  // Entity access: `client.Pgsodium().list()` / `client.Pgsodium().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pgsodium(entopts?: Record<string, any>) {
    const self = this
    return new PgsodiumEntity(self, entopts)
  }


  // Entity access: `client.Postgre().list()` / `client.Postgre().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Postgre(entopts?: Record<string, any>) {
    const self = this
    return new PostgreEntity(self, entopts)
  }


  // Entity access: `client.Postgrest().list()` / `client.Postgrest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Postgrest(entopts?: Record<string, any>) {
    const self = this
    return new PostgrestEntity(self, entopts)
  }


  // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Project(entopts?: Record<string, any>) {
    const self = this
    return new ProjectEntity(self, entopts)
  }


  // Entity access: `client.ProjectAvailableRestoreVersionsResponseOutput().list()` / `client.ProjectAvailableRestoreVersionsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectAvailableRestoreVersionsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ProjectAvailableRestoreVersionsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.ProjectClaimTokenResponseOutput().list()` / `client.ProjectClaimTokenResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectClaimTokenResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ProjectClaimTokenResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.ProjectUpgradeEligibilityResponseOutput().list()` / `client.ProjectUpgradeEligibilityResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectUpgradeEligibilityResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ProjectUpgradeEligibilityResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.ProjectUpgradeInitiateResponseOutput().list()` / `client.ProjectUpgradeInitiateResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProjectUpgradeInitiateResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ProjectUpgradeInitiateResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Provider(entopts?: Record<string, any>) {
    const self = this
    return new ProviderEntity(self, entopts)
  }


  // Entity access: `client.ReadOnlyStatusResponseOutput().list()` / `client.ReadOnlyStatusResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReadOnlyStatusResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new ReadOnlyStatusResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Realtime().list()` / `client.Realtime().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Realtime(entopts?: Record<string, any>) {
    const self = this
    return new RealtimeEntity(self, entopts)
  }


  // Entity access: `client.RegionsInfoOutput().list()` / `client.RegionsInfoOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RegionsInfoOutput(entopts?: Record<string, any>) {
    const self = this
    return new RegionsInfoOutputEntity(self, entopts)
  }


  // Entity access: `client.RolesResponseOutput().list()` / `client.RolesResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RolesResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new RolesResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts?: Record<string, any>) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.Security().list()` / `client.Security().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Security(entopts?: Record<string, any>) {
    const self = this
    return new SecurityEntity(self, entopts)
  }


  // Entity access: `client.SigningKey().list()` / `client.SigningKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SigningKey(entopts?: Record<string, any>) {
    const self = this
    return new SigningKeyEntity(self, entopts)
  }


  // Entity access: `client.SigningKeyResponseOutput().list()` / `client.SigningKeyResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SigningKeyResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new SigningKeyResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Snippet(entopts?: Record<string, any>) {
    const self = this
    return new SnippetEntity(self, entopts)
  }


  // Entity access: `client.SslEnforcement().list()` / `client.SslEnforcement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SslEnforcement(entopts?: Record<string, any>) {
    const self = this
    return new SslEnforcementEntity(self, entopts)
  }


  // Entity access: `client.Storage().list()` / `client.Storage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Storage(entopts?: Record<string, any>) {
    const self = this
    return new StorageEntity(self, entopts)
  }


  // Entity access: `client.StreamableFile().list()` / `client.StreamableFile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StreamableFile(entopts?: Record<string, any>) {
    const self = this
    return new StreamableFileEntity(self, entopts)
  }


  // Entity access: `client.SubdomainAvailabilityResponseOutput().list()` / `client.SubdomainAvailabilityResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SubdomainAvailabilityResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new SubdomainAvailabilityResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.SupavisorConfigResponseOutput().list()` / `client.SupavisorConfigResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SupavisorConfigResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new SupavisorConfigResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.ThirdPartyAuth().list()` / `client.ThirdPartyAuth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ThirdPartyAuth(entopts?: Record<string, any>) {
    const self = this
    return new ThirdPartyAuthEntity(self, entopts)
  }


  // Entity access: `client.Typescript().list()` / `client.Typescript().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Typescript(entopts?: Record<string, any>) {
    const self = this
    return new TypescriptEntity(self, entopts)
  }


  // Entity access: `client.UpdateCustomHostnameResponseOutput().list()` / `client.UpdateCustomHostnameResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateCustomHostnameResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new UpdateCustomHostnameResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.UpdateProviderResponseOutput().list()` / `client.UpdateProviderResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateProviderResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new UpdateProviderResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.UpdateSupavisorConfigResponseOutput().list()` / `client.UpdateSupavisorConfigResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateSupavisorConfigResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new UpdateSupavisorConfigResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1BackupScheduleResponseOutput().list()` / `client.V1BackupScheduleResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1BackupScheduleResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1BackupScheduleResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1BackupsResponseOutput().list()` / `client.V1BackupsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1BackupsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1BackupsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1GetMigrationResponseOutput().list()` / `client.V1GetMigrationResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1GetMigrationResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1GetMigrationResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1GetUsageApiCountResponseOutput().list()` / `client.V1GetUsageApiCountResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1GetUsageApiCountResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1GetUsageApiCountResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1GetUsageApiRequestsCountResponseOutput().list()` / `client.V1GetUsageApiRequestsCountResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1GetUsageApiRequestsCountResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1GetUsageApiRequestsCountResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1ListEntitlementsResponseOutput().list()` / `client.V1ListEntitlementsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1ListEntitlementsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1ListEntitlementsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1ListMigrationsResponseOutput().list()` / `client.V1ListMigrationsResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1ListMigrationsResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1ListMigrationsResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1OrganizationMemberResponseOutput().list()` / `client.V1OrganizationMemberResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1OrganizationMemberResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1OrganizationMemberResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1OrganizationSlugResponseOutput().list()` / `client.V1OrganizationSlugResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1OrganizationSlugResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1OrganizationSlugResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1PgbouncerConfigResponseOutput().list()` / `client.V1PgbouncerConfigResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1PgbouncerConfigResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1PgbouncerConfigResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1ProfileResponseOutput().list()` / `client.V1ProfileResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1ProfileResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1ProfileResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1ProjectRefResponseOutput().list()` / `client.V1ProjectRefResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1ProjectRefResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1ProjectRefResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1ProjectWithDatabaseResponseOutput().list()` / `client.V1ProjectWithDatabaseResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1ProjectWithDatabaseResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1ProjectWithDatabaseResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1RestorePoint().list()` / `client.V1RestorePoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1RestorePoint(entopts?: Record<string, any>) {
    const self = this
    return new V1RestorePointEntity(self, entopts)
  }


  // Entity access: `client.V1ServiceHealthResponseOutput().list()` / `client.V1ServiceHealthResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1ServiceHealthResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1ServiceHealthResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1StorageBucketResponseOutput().list()` / `client.V1StorageBucketResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1StorageBucketResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1StorageBucketResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.V1UpdatePasswordResponseOutput().list()` / `client.V1UpdatePasswordResponseOutput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  V1UpdatePasswordResponseOutput(entopts?: Record<string, any>) {
    const self = this
    return new V1UpdatePasswordResponseOutputEntity(self, entopts)
  }


  // Entity access: `client.VanitySubdomain().list()` / `client.VanitySubdomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VanitySubdomain(entopts?: Record<string, any>) {
    const self = this
    return new VanitySubdomainEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new SupabaseMgmtSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return SupabaseMgmtSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'SupabaseMgmt' }
  }

  toString() {
    return 'SupabaseMgmt ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = SupabaseMgmtSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  SupabaseMgmtEntityBase,

  SupabaseMgmtSDK,
  SDK,
}


