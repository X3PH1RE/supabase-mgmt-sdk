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
(0, node_test_1.describe)('EnvironmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Environment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'environment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "environment", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/branches/{branch_id_or_ref}/diff", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "branch_id_or_ref", "or": "branch_id_or_ref", "r": true, "t": "`$ANY`", "index$": 0 }], "query": [{ "a": true, "ex": "public,auth", "k": "query", "n": "included_schema", "or": "included_schemas", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "true", "k": "query", "n": "pgdelta", "or": "pgdelta", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/branches/{branch_id_or_ref}/diff", "q": { "exist": ["branch_id_or_ref", "included_schema", "pgdelta"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "branches" }, { "var": "branch_id_or_ref" }, { "lit": "diff" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/projects/{ref}/actions/{run_id}/logs", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "run_01hq3q9m7y5q7e4a7x2c8m1p4n", "k": "param", "n": "action_id", "or": "run_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/actions/{run_id}/logs", "q": { "exist": ["action_id", "project_id"] }, "r": { "param": { "ref": "project_id", "run_id": "action_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "actions" }, { "var": "action_id" }, { "lit": "logs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/projects/{ref}/branches", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "ref", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/projects/{ref}/branches", "q": { "exist": ["ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "ref" }, { "lit": "branches" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.branch"], ["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.action"]] }, "key$": "environment", "name__orig": "environment", "Name": "Environment", "name_": "environment", "name-": "environment", "NAME": "ENVIRONMENT", "index$": 19 }, { "active": true, "entity": "environment", "key$": "BasicEnvironmentFlow", "kind": "basic", "name": "BasicEnvironmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "environment_ref01", "srcdatavar": "environment_ref01_data", "suffix": "_dt0" }, "m": { "id": "environment01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-environment_ref01" } }] }] }, 'Environment', { "GET /v1/branches/{branch_id_or_ref}/diff": { "protocol": "http", "parameters": [{ "name": "branch_id_or_ref", "required": true, "in": "path", "description": "Branch ref or deprecated branch ID", "schema": { "example": "abcdefghijklmnopqrst", "anyOf": [{ "type": "string", "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "description": "Project ref", "example": "abcdefghijklmnopqrst" }, { "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "deprecated": true }] }, "index$": 0 }, { "name": "included_schemas", "required": false, "in": "query", "schema": { "example": "public,auth", "type": "string" }, "index$": 1 }, { "name": "pgdelta", "required": false, "in": "query", "description": "Use pg-delta instead of Migra for diffing when true. \nBoolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`", "schema": { "example": "true", "type": "string" }, "index$": 2 }] }, "GET /v1/projects/{ref}/actions/{run_id}/logs": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "run_id", "required": true, "in": "path", "description": "Action Run ID", "schema": { "example": "run_01hq3q9m7y5q7e4a7x2c8m1p4n", "type": "string" }, "index$": 1 }] }, "DELETE /v1/projects/{ref}/branches": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let environment_ref01_data = Object.values(setup.data.existing.environment)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const environment_ref01_ent = client.Environment();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/environment/EnvironmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['environment01', 'environment02', 'environment03', 'branch01', 'branch02', 'branch03', 'project01', 'project02', 'project03', 'action01', 'action02', 'action03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_ENVIRONMENT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_ENVIRONMENT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_ENVIRONMENT_ENTID'];
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
//# sourceMappingURL=EnvironmentEntity.test.js.map