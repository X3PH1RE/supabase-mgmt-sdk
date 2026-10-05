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
(0, node_test_1.describe)('RealtimeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Realtime();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'realtime.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "admin_suspended_at": { "a": true, "fo": "date-time", "h": "Admin Suspended At", "n": "admin_suspended_at", "r": true, "sh": "If set, the Realtime service has been suspended by an admin.", "t": "`$STRING`", "key$": "admin_suspended_at", "index$": 0 }, "connection_pool": { "a": true, "h": "Connection Pool", "n": "connection_pool", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets connection pool size for Realtime Authorization", "t": "`$INTEGER`", "key$": "connection_pool", "index$": 1 }, "max_bytes_per_second": { "a": true, "h": "Max Bytes Per Second", "n": "max_bytes_per_second", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of bytes per second rate per channel limit", "t": "`$INTEGER`", "key$": "max_bytes_per_second", "index$": 2 }, "max_channels_per_client": { "a": true, "h": "Max Channels Per Client", "n": "max_channels_per_client", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of channels per client rate limit", "t": "`$INTEGER`", "key$": "max_channels_per_client", "index$": 3 }, "max_concurrent_users": { "a": true, "h": "Max Concurrent Users", "n": "max_concurrent_users", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of concurrent users rate limit", "t": "`$INTEGER`", "key$": "max_concurrent_users", "index$": 4 }, "max_events_per_second": { "a": true, "h": "Max Events Per Second", "n": "max_events_per_second", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of events per second rate per channel limit", "t": "`$INTEGER`", "key$": "max_events_per_second", "index$": 5 }, "max_joins_per_second": { "a": true, "h": "Max Joins Per Second", "n": "max_joins_per_second", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of joins per second rate limit", "t": "`$INTEGER`", "key$": "max_joins_per_second", "index$": 6 }, "max_payload_size_in_kb": { "a": true, "h": "Max Payload Size In Kb", "n": "max_payload_size_in_kb", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of payload size in KB rate limit", "t": "`$INTEGER`", "key$": "max_payload_size_in_kb", "index$": 7 }, "max_presence_events_per_second": { "a": true, "h": "Max Presence Events Per Second", "n": "max_presence_events_per_second", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets maximum number of presence events per second rate limit", "t": "`$INTEGER`", "key$": "max_presence_events_per_second", "index$": 8 }, "postgres_changes_pool": { "a": true, "h": "Postgres Changes Pool", "n": "postgres_changes_pool", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "sh": "Sets connection pool size used to create Postgres Changes subscriptions", "t": "`$INTEGER`", "key$": "postgres_changes_pool", "index$": 9 }, "presence_enabled": { "a": true, "h": "Presence Enabled", "n": "presence_enabled", "op": { "update": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Whether to enable presence", "t": "`$BOOLEAN`", "key$": "presence_enabled", "index$": 10 }, "private_only": { "a": true, "h": "Private Only", "n": "private_only", "op": { "update": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Whether to only allow private channels", "t": "`$BOOLEAN`", "key$": "private_only", "index$": 11 }, "suspend": { "a": true, "h": "Suspend", "n": "suspend", "op": { "update": { "req": false, "type": "`$BOOLEAN`" } }, "r": true, "sh": "Disables the Realtime service for this project when true.", "t": "`$BOOLEAN`", "key$": "suspend", "index$": 12 } }, "name": "realtime", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/projects/{ref}/config/realtime/shutdown", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/projects/{ref}/config/realtime/shutdown", "q": { "$action": "shutdown", "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "realtime" }, { "lit": "shutdown" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/config/realtime", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/config/realtime", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "realtime" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/projects/{ref}/config/realtime", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v1/projects/{ref}/config/realtime", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "realtime" }], "t": { "req": { "connection_pool": "`reqdata.connection_pool`", "max_bytes_per_second": "`reqdata.max_bytes_per_second`", "max_channels_per_client": "`reqdata.max_channels_per_client`", "max_concurrent_users": "`reqdata.max_concurrent_user`", "max_events_per_second": "`reqdata.max_events_per_second`", "max_joins_per_second": "`reqdata.max_joins_per_second`", "max_payload_size_in_kb": "`reqdata.max_payload_size_in_kb`", "max_presence_events_per_second": "`reqdata.max_presence_events_per_second`", "postgres_changes_pool": "`reqdata.postgres_changes_pool`", "presence_enabled": "`reqdata.presence_enabled`", "private_only": "`reqdata.private_only`", "suspend": "`reqdata.suspend`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "realtime", "name__orig": "realtime", "Name": "Realtime", "name_": "realtime", "name-": "realtime", "NAME": "REALTIME", "index$": 51 }, { "active": true, "entity": "realtime", "key$": "BasicRealtimeFlow", "kind": "basic", "name": "BasicRealtimeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "realtime_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "realtime_ref01", "srcdatavar": "realtime_ref01_data", "suffix": "_up0", "textfield": "admin_suspended_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-realtime_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "realtime_ref01", "srcdatavar": "realtime_ref01_data", "suffix": "_dt0" }, "m": { "id": "realtime01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-realtime_ref01" } }] }] }, 'Realtime', { "POST /v1/projects/{ref}/config/realtime/shutdown": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] }, "GET /v1/projects/{ref}/config/realtime": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] }, "PATCH /v1/projects/{ref}/config/realtime": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "private_only": { "type": "boolean", "description": "Whether to only allow private channels", "key$": "private_only" }, "connection_pool": { "type": "integer", "minimum": 1, "maximum": 100, "description": "Sets connection pool size for Realtime Authorization", "key$": "connection_pool" }, "postgres_changes_pool": { "type": "integer", "minimum": 1, "maximum": 100, "description": "Sets connection pool size used to create Postgres Changes subscriptions", "key$": "postgres_changes_pool" }, "max_concurrent_users": { "type": "integer", "minimum": 1, "maximum": 300000, "description": "Sets maximum number of concurrent users rate limit", "key$": "max_concurrent_users" }, "max_events_per_second": { "type": "integer", "minimum": 1, "maximum": 50000, "description": "Sets maximum number of events per second rate per channel limit", "key$": "max_events_per_second" }, "max_bytes_per_second": { "type": "integer", "minimum": 1, "maximum": 10000000, "description": "Sets maximum number of bytes per second rate per channel limit", "key$": "max_bytes_per_second" }, "max_channels_per_client": { "type": "integer", "minimum": 1, "maximum": 10000, "description": "Sets maximum number of channels per client rate limit", "key$": "max_channels_per_client" }, "max_joins_per_second": { "type": "integer", "minimum": 1, "maximum": 5000, "description": "Sets maximum number of joins per second rate limit", "key$": "max_joins_per_second" }, "max_presence_events_per_second": { "type": "integer", "minimum": 1, "maximum": 5000, "description": "Sets maximum number of presence events per second rate limit", "key$": "max_presence_events_per_second" }, "max_payload_size_in_kb": { "type": "integer", "minimum": 1, "maximum": 10000, "description": "Sets maximum number of payload size in KB rate limit", "key$": "max_payload_size_in_kb" }, "suspend": { "type": "boolean", "description": "Disables the Realtime service for this project when true. Set to false to re-enable it.", "key$": "suspend" }, "presence_enabled": { "type": "boolean", "description": "Whether to enable presence", "key$": "presence_enabled" } }, "example": { "private_only": false, "max_concurrent_users": 1000, "max_channels_per_client": 100 }, "additionalProperties": false, "x-ref": "#/components/schemas/UpdateRealtimeConfigBody", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const realtime_ref01_ent = client.Realtime();
        let realtime_ref01_data = setup.data.new.realtime['realtime_ref01'];
        realtime_ref01_data['project_id'] = setup.idmap['project01'];
        realtime_ref01_data = (await realtime_ref01_ent.create(realtime_ref01_data)).data();
        (0, node_assert_1.default)(null != realtime_ref01_data);
        // UPDATE
        const realtime_ref01_data_up0 = {};
        const realtime_ref01_markdef_up0 = { name: 'admin_suspended_at', value: 'Mark01-realtime_ref01_' + setup.now };
        realtime_ref01_data_up0[realtime_ref01_markdef_up0.name] = realtime_ref01_markdef_up0.value;
        const realtime_ref01_resdata_up0 = (await realtime_ref01_ent.update(realtime_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != realtime_ref01_resdata_up0);
        (0, node_assert_1.default)(realtime_ref01_resdata_up0[realtime_ref01_markdef_up0.name] === realtime_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/realtime/RealtimeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['realtime01', 'realtime02', 'realtime03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_REALTIME_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_REALTIME_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_REALTIME_ENTID'];
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
//# sourceMappingURL=RealtimeEntity.test.js.map