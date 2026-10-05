"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('BillingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Billing();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'billing.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "billing", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/projects/{ref}/billing/addons/{addon_variant}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "pitr_7", "k": "param", "n": "addon_variant", "or": "addon_variant", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v1/projects/{ref}/billing/addons/{addon_variant}", "q": { "exist": ["addon_variant", "project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "billing" }, { "lit": "addons" }, { "var": "addon_variant" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/projects/{ref}/billing/addons", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v1/projects/{ref}/billing/addons", "q": { "$action": "addon", "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "billing" }, { "lit": "addons" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project"]] }, "key$": "billing", "name__orig": "billing", "Name": "Billing", "name_": "billing", "name-": "billing", "NAME": "BILLING", "index$": 5 }, { "active": true, "entity": "billing", "key$": "BasicBillingFlow", "kind": "basic", "name": "BasicBillingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "billing_ref01", "srcdatavar": "billing_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-billing_ref01" } }], "v": [] }] }, 'Billing', { "DELETE /v1/projects/{ref}/billing/addons/{addon_variant}": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "addon_variant", "required": true, "in": "path", "schema": { "example": "pitr_7", "anyOf": [{ "type": "string", "enum": ["ci_micro", "ci_small", "ci_medium", "ci_large", "ci_xlarge", "ci_2xlarge", "ci_4xlarge", "ci_8xlarge", "ci_12xlarge", "ci_16xlarge", "ci_24xlarge", "ci_24xlarge_optimized_cpu", "ci_24xlarge_optimized_memory", "ci_24xlarge_high_memory", "ci_48xlarge", "ci_48xlarge_optimized_cpu", "ci_48xlarge_optimized_memory", "ci_48xlarge_high_memory"] }, { "type": "string", "enum": ["cd_default"] }, { "type": "string", "enum": ["pitr_7", "pitr_14", "pitr_28"] }, { "type": "string", "enum": ["ipv4_default"] }] }, "index$": 1 }] }, "PATCH /v1/projects/{ref}/billing/addons": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "addon_variant": { "anyOf": [{ "type": "string", "enum": ["ci_micro", "ci_small", "ci_medium", "ci_large", "ci_xlarge", "ci_2xlarge", "ci_4xlarge", "ci_8xlarge", "ci_12xlarge", "ci_16xlarge", "ci_24xlarge", "ci_24xlarge_optimized_cpu", "ci_24xlarge_optimized_memory", "ci_24xlarge_high_memory", "ci_48xlarge", "ci_48xlarge_optimized_cpu", "ci_48xlarge_optimized_memory", "ci_48xlarge_high_memory"] }, { "type": "string", "enum": ["cd_default"] }, { "type": "string", "enum": ["pitr_7", "pitr_14", "pitr_28"] }, { "type": "string", "enum": ["ipv4_default"] }] }, "addon_type": { "type": "string", "enum": ["custom_domain", "compute_instance", "pitr", "ipv4", "auth_mfa_phone", "auth_mfa_web_authn", "log_drain", "etl_pipeline"] } }, "required": ["addon_variant", "addon_type"], "example": { "addon_variant": "pitr_7", "addon_type": "pitr" }, "x-ref": "#/components/schemas/ApplyProjectAddonBody" } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let billing_ref01_data = Object.values(setup.data.existing.billing)[0];
        // UPDATE
        const billing_ref01_ent = client.Billing();
        const billing_ref01_data_up0 = {};
        const billing_ref01_resdata_up0 = (await billing_ref01_ent.update(billing_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != billing_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/billing/BillingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['billing01', 'billing02', 'billing03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_BILLING_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_BILLING_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_BILLING_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.SupabaseMgmtSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.SUPABASE_MGMT_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.SUPABASE_MGMT_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=BillingEntity.test.js.map