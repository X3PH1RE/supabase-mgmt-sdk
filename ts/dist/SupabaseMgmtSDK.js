"use strict";
// SupabaseMgmt Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.SupabaseMgmtSDK = exports.SupabaseMgmtEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const ActionEntity_1 = require("./entity/ActionEntity");
const ActivateEntity_1 = require("./entity/ActivateEntity");
const AnalyticsEntity_1 = require("./entity/AnalyticsEntity");
const ApiKeyEntity_1 = require("./entity/ApiKeyEntity");
const AuthEntity_1 = require("./entity/AuthEntity");
const BillingEntity_1 = require("./entity/BillingEntity");
const BranchEntity_1 = require("./entity/BranchEntity");
const BranchUpdateResponseOutputEntity_1 = require("./entity/BranchUpdateResponseOutputEntity");
const BulkUpdateFunctionResponseOutputEntity_1 = require("./entity/BulkUpdateFunctionResponseOutputEntity");
const CreateProviderResponseOutputEntity_1 = require("./entity/CreateProviderResponseOutputEntity");
const CreateRoleResponseOutputEntity_1 = require("./entity/CreateRoleResponseOutputEntity");
const DatabaseEntity_1 = require("./entity/DatabaseEntity");
const DatabaseUpgradeStatusResponseOutputEntity_1 = require("./entity/DatabaseUpgradeStatusResponseOutputEntity");
const DeployEntity_1 = require("./entity/DeployEntity");
const DiskEntity_1 = require("./entity/DiskEntity");
const DiskAutoscaleConfigOutputEntity_1 = require("./entity/DiskAutoscaleConfigOutputEntity");
const DiskUtilMetricsResponseOutputEntity_1 = require("./entity/DiskUtilMetricsResponseOutputEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const EdgeFunctionEntity_1 = require("./entity/EdgeFunctionEntity");
const EnvironmentEntity_1 = require("./entity/EnvironmentEntity");
const FunctionEntity_1 = require("./entity/FunctionEntity");
const FunctionscombinedStatEntity_1 = require("./entity/FunctionscombinedStatEntity");
const InviteEntity_1 = require("./entity/InviteEntity");
const JitEntity_1 = require("./entity/JitEntity");
const JitAccessResponseOutputEntity_1 = require("./entity/JitAccessResponseOutputEntity");
const JitListAccessResponseOutputEntity_1 = require("./entity/JitListAccessResponseOutputEntity");
const LegacyEntity_1 = require("./entity/LegacyEntity");
const ListActionRunResponseOutputEntity_1 = require("./entity/ListActionRunResponseOutputEntity");
const ListProjectAddonsResponseOutputEntity_1 = require("./entity/ListProjectAddonsResponseOutputEntity");
const ListProvidersResponseOutputEntity_1 = require("./entity/ListProvidersResponseOutputEntity");
const LogEntity_1 = require("./entity/LogEntity");
const NetworkBanResponseEnrichedOutputEntity_1 = require("./entity/NetworkBanResponseEnrichedOutputEntity");
const NetworkBanResponseOutputEntity_1 = require("./entity/NetworkBanResponseOutputEntity");
const NetworkRestrictionEntity_1 = require("./entity/NetworkRestrictionEntity");
const NetworkRestrictionsResponseOutputEntity_1 = require("./entity/NetworkRestrictionsResponseOutputEntity");
const OAuthEntity_1 = require("./entity/OAuthEntity");
const OAuthTokenResponseOutputEntity_1 = require("./entity/OAuthTokenResponseOutputEntity");
const OrganizationEntity_1 = require("./entity/OrganizationEntity");
const OrganizationProjectClaimResponseOutputEntity_1 = require("./entity/OrganizationProjectClaimResponseOutputEntity");
const OrganizationProjectsResponseOutputEntity_1 = require("./entity/OrganizationProjectsResponseOutputEntity");
const PerformanceEntity_1 = require("./entity/PerformanceEntity");
const PgsodiumEntity_1 = require("./entity/PgsodiumEntity");
const PostgreEntity_1 = require("./entity/PostgreEntity");
const PostgrestEntity_1 = require("./entity/PostgrestEntity");
const ProjectEntity_1 = require("./entity/ProjectEntity");
const ProjectAvailableRestoreVersionsResponseOutputEntity_1 = require("./entity/ProjectAvailableRestoreVersionsResponseOutputEntity");
const ProjectClaimTokenResponseOutputEntity_1 = require("./entity/ProjectClaimTokenResponseOutputEntity");
const ProjectUpgradeEligibilityResponseOutputEntity_1 = require("./entity/ProjectUpgradeEligibilityResponseOutputEntity");
const ProjectUpgradeInitiateResponseOutputEntity_1 = require("./entity/ProjectUpgradeInitiateResponseOutputEntity");
const ProviderEntity_1 = require("./entity/ProviderEntity");
const ReadOnlyStatusResponseOutputEntity_1 = require("./entity/ReadOnlyStatusResponseOutputEntity");
const RealtimeEntity_1 = require("./entity/RealtimeEntity");
const RegionsInfoOutputEntity_1 = require("./entity/RegionsInfoOutputEntity");
const RolesResponseOutputEntity_1 = require("./entity/RolesResponseOutputEntity");
const SecretEntity_1 = require("./entity/SecretEntity");
const SecurityEntity_1 = require("./entity/SecurityEntity");
const SigningKeyEntity_1 = require("./entity/SigningKeyEntity");
const SigningKeyResponseOutputEntity_1 = require("./entity/SigningKeyResponseOutputEntity");
const SnippetEntity_1 = require("./entity/SnippetEntity");
const SslEnforcementEntity_1 = require("./entity/SslEnforcementEntity");
const StorageEntity_1 = require("./entity/StorageEntity");
const StreamableFileEntity_1 = require("./entity/StreamableFileEntity");
const SubdomainAvailabilityResponseOutputEntity_1 = require("./entity/SubdomainAvailabilityResponseOutputEntity");
const SupavisorConfigResponseOutputEntity_1 = require("./entity/SupavisorConfigResponseOutputEntity");
const ThirdPartyAuthEntity_1 = require("./entity/ThirdPartyAuthEntity");
const TypescriptEntity_1 = require("./entity/TypescriptEntity");
const UpdateCustomHostnameResponseOutputEntity_1 = require("./entity/UpdateCustomHostnameResponseOutputEntity");
const UpdateProviderResponseOutputEntity_1 = require("./entity/UpdateProviderResponseOutputEntity");
const UpdateSupavisorConfigResponseOutputEntity_1 = require("./entity/UpdateSupavisorConfigResponseOutputEntity");
const V1BackupScheduleResponseOutputEntity_1 = require("./entity/V1BackupScheduleResponseOutputEntity");
const V1BackupsResponseOutputEntity_1 = require("./entity/V1BackupsResponseOutputEntity");
const V1GetMigrationResponseOutputEntity_1 = require("./entity/V1GetMigrationResponseOutputEntity");
const V1GetUsageApiCountResponseOutputEntity_1 = require("./entity/V1GetUsageApiCountResponseOutputEntity");
const V1GetUsageApiRequestsCountResponseOutputEntity_1 = require("./entity/V1GetUsageApiRequestsCountResponseOutputEntity");
const V1ListEntitlementsResponseOutputEntity_1 = require("./entity/V1ListEntitlementsResponseOutputEntity");
const V1ListMigrationsResponseOutputEntity_1 = require("./entity/V1ListMigrationsResponseOutputEntity");
const V1OrganizationMemberResponseOutputEntity_1 = require("./entity/V1OrganizationMemberResponseOutputEntity");
const V1OrganizationSlugResponseOutputEntity_1 = require("./entity/V1OrganizationSlugResponseOutputEntity");
const V1PgbouncerConfigResponseOutputEntity_1 = require("./entity/V1PgbouncerConfigResponseOutputEntity");
const V1ProfileResponseOutputEntity_1 = require("./entity/V1ProfileResponseOutputEntity");
const V1ProjectRefResponseOutputEntity_1 = require("./entity/V1ProjectRefResponseOutputEntity");
const V1ProjectWithDatabaseResponseOutputEntity_1 = require("./entity/V1ProjectWithDatabaseResponseOutputEntity");
const V1RestorePointEntity_1 = require("./entity/V1RestorePointEntity");
const V1ServiceHealthResponseOutputEntity_1 = require("./entity/V1ServiceHealthResponseOutputEntity");
const V1StorageBucketResponseOutputEntity_1 = require("./entity/V1StorageBucketResponseOutputEntity");
const V1UpdatePasswordResponseOutputEntity_1 = require("./entity/V1UpdatePasswordResponseOutputEntity");
const VanitySubdomainEntity_1 = require("./entity/VanitySubdomainEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const SupabaseMgmtEntityBase_1 = require("./SupabaseMgmtEntityBase");
Object.defineProperty(exports, "SupabaseMgmtEntityBase", { enumerable: true, get: function () { return SupabaseMgmtEntityBase_1.SupabaseMgmtEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class SupabaseMgmtSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('SupabaseMgmtSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, fetched) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, err) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('SupabaseMgmtSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('SupabaseMgmtSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Action(entopts) {
        const self = this;
        return new ActionEntity_1.ActionEntity(self, entopts);
    }
    // Entity access: `client.Activate().list()` / `client.Activate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Activate(entopts) {
        const self = this;
        return new ActivateEntity_1.ActivateEntity(self, entopts);
    }
    // Entity access: `client.Analytics().list()` / `client.Analytics().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Analytics(entopts) {
        const self = this;
        return new AnalyticsEntity_1.AnalyticsEntity(self, entopts);
    }
    // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiKey(entopts) {
        const self = this;
        return new ApiKeyEntity_1.ApiKeyEntity(self, entopts);
    }
    // Entity access: `client.Auth().list()` / `client.Auth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Auth(entopts) {
        const self = this;
        return new AuthEntity_1.AuthEntity(self, entopts);
    }
    // Entity access: `client.Billing().list()` / `client.Billing().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Billing(entopts) {
        const self = this;
        return new BillingEntity_1.BillingEntity(self, entopts);
    }
    // Entity access: `client.Branch().list()` / `client.Branch().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Branch(entopts) {
        const self = this;
        return new BranchEntity_1.BranchEntity(self, entopts);
    }
    // Entity access: `client.BranchUpdateResponseOutput().list()` / `client.BranchUpdateResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BranchUpdateResponseOutput(entopts) {
        const self = this;
        return new BranchUpdateResponseOutputEntity_1.BranchUpdateResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.BulkUpdateFunctionResponseOutput().list()` / `client.BulkUpdateFunctionResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BulkUpdateFunctionResponseOutput(entopts) {
        const self = this;
        return new BulkUpdateFunctionResponseOutputEntity_1.BulkUpdateFunctionResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.CreateProviderResponseOutput().list()` / `client.CreateProviderResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateProviderResponseOutput(entopts) {
        const self = this;
        return new CreateProviderResponseOutputEntity_1.CreateProviderResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.CreateRoleResponseOutput().list()` / `client.CreateRoleResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateRoleResponseOutput(entopts) {
        const self = this;
        return new CreateRoleResponseOutputEntity_1.CreateRoleResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Database().list()` / `client.Database().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Database(entopts) {
        const self = this;
        return new DatabaseEntity_1.DatabaseEntity(self, entopts);
    }
    // Entity access: `client.DatabaseUpgradeStatusResponseOutput().list()` / `client.DatabaseUpgradeStatusResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DatabaseUpgradeStatusResponseOutput(entopts) {
        const self = this;
        return new DatabaseUpgradeStatusResponseOutputEntity_1.DatabaseUpgradeStatusResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Deploy().list()` / `client.Deploy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deploy(entopts) {
        const self = this;
        return new DeployEntity_1.DeployEntity(self, entopts);
    }
    // Entity access: `client.Disk().list()` / `client.Disk().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Disk(entopts) {
        const self = this;
        return new DiskEntity_1.DiskEntity(self, entopts);
    }
    // Entity access: `client.DiskAutoscaleConfigOutput().list()` / `client.DiskAutoscaleConfigOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DiskAutoscaleConfigOutput(entopts) {
        const self = this;
        return new DiskAutoscaleConfigOutputEntity_1.DiskAutoscaleConfigOutputEntity(self, entopts);
    }
    // Entity access: `client.DiskUtilMetricsResponseOutput().list()` / `client.DiskUtilMetricsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DiskUtilMetricsResponseOutput(entopts) {
        const self = this;
        return new DiskUtilMetricsResponseOutputEntity_1.DiskUtilMetricsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.EdgeFunction().list()` / `client.EdgeFunction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EdgeFunction(entopts) {
        const self = this;
        return new EdgeFunctionEntity_1.EdgeFunctionEntity(self, entopts);
    }
    // Entity access: `client.Environment().list()` / `client.Environment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Environment(entopts) {
        const self = this;
        return new EnvironmentEntity_1.EnvironmentEntity(self, entopts);
    }
    // Entity access: `client.Function().list()` / `client.Function().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Function(entopts) {
        const self = this;
        return new FunctionEntity_1.FunctionEntity(self, entopts);
    }
    // Entity access: `client.FunctionscombinedStat().list()` / `client.FunctionscombinedStat().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FunctionscombinedStat(entopts) {
        const self = this;
        return new FunctionscombinedStatEntity_1.FunctionscombinedStatEntity(self, entopts);
    }
    // Entity access: `client.Invite().list()` / `client.Invite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Invite(entopts) {
        const self = this;
        return new InviteEntity_1.InviteEntity(self, entopts);
    }
    // Entity access: `client.Jit().list()` / `client.Jit().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Jit(entopts) {
        const self = this;
        return new JitEntity_1.JitEntity(self, entopts);
    }
    // Entity access: `client.JitAccessResponseOutput().list()` / `client.JitAccessResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    JitAccessResponseOutput(entopts) {
        const self = this;
        return new JitAccessResponseOutputEntity_1.JitAccessResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.JitListAccessResponseOutput().list()` / `client.JitListAccessResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    JitListAccessResponseOutput(entopts) {
        const self = this;
        return new JitListAccessResponseOutputEntity_1.JitListAccessResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Legacy().list()` / `client.Legacy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Legacy(entopts) {
        const self = this;
        return new LegacyEntity_1.LegacyEntity(self, entopts);
    }
    // Entity access: `client.ListActionRunResponseOutput().list()` / `client.ListActionRunResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListActionRunResponseOutput(entopts) {
        const self = this;
        return new ListActionRunResponseOutputEntity_1.ListActionRunResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.ListProjectAddonsResponseOutput().list()` / `client.ListProjectAddonsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListProjectAddonsResponseOutput(entopts) {
        const self = this;
        return new ListProjectAddonsResponseOutputEntity_1.ListProjectAddonsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.ListProvidersResponseOutput().list()` / `client.ListProvidersResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListProvidersResponseOutput(entopts) {
        const self = this;
        return new ListProvidersResponseOutputEntity_1.ListProvidersResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Log().list()` / `client.Log().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Log(entopts) {
        const self = this;
        return new LogEntity_1.LogEntity(self, entopts);
    }
    // Entity access: `client.NetworkBanResponseEnrichedOutput().list()` / `client.NetworkBanResponseEnrichedOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkBanResponseEnrichedOutput(entopts) {
        const self = this;
        return new NetworkBanResponseEnrichedOutputEntity_1.NetworkBanResponseEnrichedOutputEntity(self, entopts);
    }
    // Entity access: `client.NetworkBanResponseOutput().list()` / `client.NetworkBanResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkBanResponseOutput(entopts) {
        const self = this;
        return new NetworkBanResponseOutputEntity_1.NetworkBanResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.NetworkRestriction().list()` / `client.NetworkRestriction().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkRestriction(entopts) {
        const self = this;
        return new NetworkRestrictionEntity_1.NetworkRestrictionEntity(self, entopts);
    }
    // Entity access: `client.NetworkRestrictionsResponseOutput().list()` / `client.NetworkRestrictionsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NetworkRestrictionsResponseOutput(entopts) {
        const self = this;
        return new NetworkRestrictionsResponseOutputEntity_1.NetworkRestrictionsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.OAuth().list()` / `client.OAuth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OAuth(entopts) {
        const self = this;
        return new OAuthEntity_1.OAuthEntity(self, entopts);
    }
    // Entity access: `client.OAuthTokenResponseOutput().list()` / `client.OAuthTokenResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OAuthTokenResponseOutput(entopts) {
        const self = this;
        return new OAuthTokenResponseOutputEntity_1.OAuthTokenResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Organization(entopts) {
        const self = this;
        return new OrganizationEntity_1.OrganizationEntity(self, entopts);
    }
    // Entity access: `client.OrganizationProjectClaimResponseOutput().list()` / `client.OrganizationProjectClaimResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationProjectClaimResponseOutput(entopts) {
        const self = this;
        return new OrganizationProjectClaimResponseOutputEntity_1.OrganizationProjectClaimResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.OrganizationProjectsResponseOutput().list()` / `client.OrganizationProjectsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationProjectsResponseOutput(entopts) {
        const self = this;
        return new OrganizationProjectsResponseOutputEntity_1.OrganizationProjectsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Performance().list()` / `client.Performance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Performance(entopts) {
        const self = this;
        return new PerformanceEntity_1.PerformanceEntity(self, entopts);
    }
    // Entity access: `client.Pgsodium().list()` / `client.Pgsodium().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Pgsodium(entopts) {
        const self = this;
        return new PgsodiumEntity_1.PgsodiumEntity(self, entopts);
    }
    // Entity access: `client.Postgre().list()` / `client.Postgre().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Postgre(entopts) {
        const self = this;
        return new PostgreEntity_1.PostgreEntity(self, entopts);
    }
    // Entity access: `client.Postgrest().list()` / `client.Postgrest().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Postgrest(entopts) {
        const self = this;
        return new PostgrestEntity_1.PostgrestEntity(self, entopts);
    }
    // Entity access: `client.Project().list()` / `client.Project().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Project(entopts) {
        const self = this;
        return new ProjectEntity_1.ProjectEntity(self, entopts);
    }
    // Entity access: `client.ProjectAvailableRestoreVersionsResponseOutput().list()` / `client.ProjectAvailableRestoreVersionsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectAvailableRestoreVersionsResponseOutput(entopts) {
        const self = this;
        return new ProjectAvailableRestoreVersionsResponseOutputEntity_1.ProjectAvailableRestoreVersionsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.ProjectClaimTokenResponseOutput().list()` / `client.ProjectClaimTokenResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectClaimTokenResponseOutput(entopts) {
        const self = this;
        return new ProjectClaimTokenResponseOutputEntity_1.ProjectClaimTokenResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.ProjectUpgradeEligibilityResponseOutput().list()` / `client.ProjectUpgradeEligibilityResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectUpgradeEligibilityResponseOutput(entopts) {
        const self = this;
        return new ProjectUpgradeEligibilityResponseOutputEntity_1.ProjectUpgradeEligibilityResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.ProjectUpgradeInitiateResponseOutput().list()` / `client.ProjectUpgradeInitiateResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProjectUpgradeInitiateResponseOutput(entopts) {
        const self = this;
        return new ProjectUpgradeInitiateResponseOutputEntity_1.ProjectUpgradeInitiateResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Provider(entopts) {
        const self = this;
        return new ProviderEntity_1.ProviderEntity(self, entopts);
    }
    // Entity access: `client.ReadOnlyStatusResponseOutput().list()` / `client.ReadOnlyStatusResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReadOnlyStatusResponseOutput(entopts) {
        const self = this;
        return new ReadOnlyStatusResponseOutputEntity_1.ReadOnlyStatusResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Realtime().list()` / `client.Realtime().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Realtime(entopts) {
        const self = this;
        return new RealtimeEntity_1.RealtimeEntity(self, entopts);
    }
    // Entity access: `client.RegionsInfoOutput().list()` / `client.RegionsInfoOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RegionsInfoOutput(entopts) {
        const self = this;
        return new RegionsInfoOutputEntity_1.RegionsInfoOutputEntity(self, entopts);
    }
    // Entity access: `client.RolesResponseOutput().list()` / `client.RolesResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RolesResponseOutput(entopts) {
        const self = this;
        return new RolesResponseOutputEntity_1.RolesResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Secret(entopts) {
        const self = this;
        return new SecretEntity_1.SecretEntity(self, entopts);
    }
    // Entity access: `client.Security().list()` / `client.Security().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Security(entopts) {
        const self = this;
        return new SecurityEntity_1.SecurityEntity(self, entopts);
    }
    // Entity access: `client.SigningKey().list()` / `client.SigningKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SigningKey(entopts) {
        const self = this;
        return new SigningKeyEntity_1.SigningKeyEntity(self, entopts);
    }
    // Entity access: `client.SigningKeyResponseOutput().list()` / `client.SigningKeyResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SigningKeyResponseOutput(entopts) {
        const self = this;
        return new SigningKeyResponseOutputEntity_1.SigningKeyResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.Snippet().list()` / `client.Snippet().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Snippet(entopts) {
        const self = this;
        return new SnippetEntity_1.SnippetEntity(self, entopts);
    }
    // Entity access: `client.SslEnforcement().list()` / `client.SslEnforcement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SslEnforcement(entopts) {
        const self = this;
        return new SslEnforcementEntity_1.SslEnforcementEntity(self, entopts);
    }
    // Entity access: `client.Storage().list()` / `client.Storage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Storage(entopts) {
        const self = this;
        return new StorageEntity_1.StorageEntity(self, entopts);
    }
    // Entity access: `client.StreamableFile().list()` / `client.StreamableFile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StreamableFile(entopts) {
        const self = this;
        return new StreamableFileEntity_1.StreamableFileEntity(self, entopts);
    }
    // Entity access: `client.SubdomainAvailabilityResponseOutput().list()` / `client.SubdomainAvailabilityResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SubdomainAvailabilityResponseOutput(entopts) {
        const self = this;
        return new SubdomainAvailabilityResponseOutputEntity_1.SubdomainAvailabilityResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.SupavisorConfigResponseOutput().list()` / `client.SupavisorConfigResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    SupavisorConfigResponseOutput(entopts) {
        const self = this;
        return new SupavisorConfigResponseOutputEntity_1.SupavisorConfigResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.ThirdPartyAuth().list()` / `client.ThirdPartyAuth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ThirdPartyAuth(entopts) {
        const self = this;
        return new ThirdPartyAuthEntity_1.ThirdPartyAuthEntity(self, entopts);
    }
    // Entity access: `client.Typescript().list()` / `client.Typescript().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Typescript(entopts) {
        const self = this;
        return new TypescriptEntity_1.TypescriptEntity(self, entopts);
    }
    // Entity access: `client.UpdateCustomHostnameResponseOutput().list()` / `client.UpdateCustomHostnameResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateCustomHostnameResponseOutput(entopts) {
        const self = this;
        return new UpdateCustomHostnameResponseOutputEntity_1.UpdateCustomHostnameResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.UpdateProviderResponseOutput().list()` / `client.UpdateProviderResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateProviderResponseOutput(entopts) {
        const self = this;
        return new UpdateProviderResponseOutputEntity_1.UpdateProviderResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.UpdateSupavisorConfigResponseOutput().list()` / `client.UpdateSupavisorConfigResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateSupavisorConfigResponseOutput(entopts) {
        const self = this;
        return new UpdateSupavisorConfigResponseOutputEntity_1.UpdateSupavisorConfigResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1BackupScheduleResponseOutput().list()` / `client.V1BackupScheduleResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1BackupScheduleResponseOutput(entopts) {
        const self = this;
        return new V1BackupScheduleResponseOutputEntity_1.V1BackupScheduleResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1BackupsResponseOutput().list()` / `client.V1BackupsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1BackupsResponseOutput(entopts) {
        const self = this;
        return new V1BackupsResponseOutputEntity_1.V1BackupsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1GetMigrationResponseOutput().list()` / `client.V1GetMigrationResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1GetMigrationResponseOutput(entopts) {
        const self = this;
        return new V1GetMigrationResponseOutputEntity_1.V1GetMigrationResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1GetUsageApiCountResponseOutput().list()` / `client.V1GetUsageApiCountResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1GetUsageApiCountResponseOutput(entopts) {
        const self = this;
        return new V1GetUsageApiCountResponseOutputEntity_1.V1GetUsageApiCountResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1GetUsageApiRequestsCountResponseOutput().list()` / `client.V1GetUsageApiRequestsCountResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1GetUsageApiRequestsCountResponseOutput(entopts) {
        const self = this;
        return new V1GetUsageApiRequestsCountResponseOutputEntity_1.V1GetUsageApiRequestsCountResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1ListEntitlementsResponseOutput().list()` / `client.V1ListEntitlementsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1ListEntitlementsResponseOutput(entopts) {
        const self = this;
        return new V1ListEntitlementsResponseOutputEntity_1.V1ListEntitlementsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1ListMigrationsResponseOutput().list()` / `client.V1ListMigrationsResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1ListMigrationsResponseOutput(entopts) {
        const self = this;
        return new V1ListMigrationsResponseOutputEntity_1.V1ListMigrationsResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1OrganizationMemberResponseOutput().list()` / `client.V1OrganizationMemberResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1OrganizationMemberResponseOutput(entopts) {
        const self = this;
        return new V1OrganizationMemberResponseOutputEntity_1.V1OrganizationMemberResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1OrganizationSlugResponseOutput().list()` / `client.V1OrganizationSlugResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1OrganizationSlugResponseOutput(entopts) {
        const self = this;
        return new V1OrganizationSlugResponseOutputEntity_1.V1OrganizationSlugResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1PgbouncerConfigResponseOutput().list()` / `client.V1PgbouncerConfigResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1PgbouncerConfigResponseOutput(entopts) {
        const self = this;
        return new V1PgbouncerConfigResponseOutputEntity_1.V1PgbouncerConfigResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1ProfileResponseOutput().list()` / `client.V1ProfileResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1ProfileResponseOutput(entopts) {
        const self = this;
        return new V1ProfileResponseOutputEntity_1.V1ProfileResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1ProjectRefResponseOutput().list()` / `client.V1ProjectRefResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1ProjectRefResponseOutput(entopts) {
        const self = this;
        return new V1ProjectRefResponseOutputEntity_1.V1ProjectRefResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1ProjectWithDatabaseResponseOutput().list()` / `client.V1ProjectWithDatabaseResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1ProjectWithDatabaseResponseOutput(entopts) {
        const self = this;
        return new V1ProjectWithDatabaseResponseOutputEntity_1.V1ProjectWithDatabaseResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1RestorePoint().list()` / `client.V1RestorePoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1RestorePoint(entopts) {
        const self = this;
        return new V1RestorePointEntity_1.V1RestorePointEntity(self, entopts);
    }
    // Entity access: `client.V1ServiceHealthResponseOutput().list()` / `client.V1ServiceHealthResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1ServiceHealthResponseOutput(entopts) {
        const self = this;
        return new V1ServiceHealthResponseOutputEntity_1.V1ServiceHealthResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1StorageBucketResponseOutput().list()` / `client.V1StorageBucketResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1StorageBucketResponseOutput(entopts) {
        const self = this;
        return new V1StorageBucketResponseOutputEntity_1.V1StorageBucketResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.V1UpdatePasswordResponseOutput().list()` / `client.V1UpdatePasswordResponseOutput().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    V1UpdatePasswordResponseOutput(entopts) {
        const self = this;
        return new V1UpdatePasswordResponseOutputEntity_1.V1UpdatePasswordResponseOutputEntity(self, entopts);
    }
    // Entity access: `client.VanitySubdomain().list()` / `client.VanitySubdomain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    VanitySubdomain(entopts) {
        const self = this;
        return new VanitySubdomainEntity_1.VanitySubdomainEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new SupabaseMgmtSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return SupabaseMgmtSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'SupabaseMgmt' };
    }
    toString() {
        return 'SupabaseMgmt ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.SupabaseMgmtSDK = SupabaseMgmtSDK;
const SDK = SupabaseMgmtSDK;
exports.SDK = SDK;
//# sourceMappingURL=SupabaseMgmtSDK.js.map