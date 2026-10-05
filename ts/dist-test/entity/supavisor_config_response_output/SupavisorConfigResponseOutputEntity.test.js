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
(0, node_test_1.describe)('SupavisorConfigResponseOutputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.SupavisorConfigResponseOutput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'supavisor_config_response_output.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "connectionString": { "a": true, "h": "Connection String", "n": "connectionString", "r": true, "sh": "Use connection_string instead", "t": "`$STRING`", "key$": "connectionString", "index$": 0 }, "connection_string": { "a": true, "h": "Connection String", "n": "connection_string", "r": true, "t": "`$STRING`", "key$": "connection_string", "index$": 1 }, "database_type": { "a": true, "h": "Database Type", "n": "database_type", "r": true, "t": "`$STRING`", "key$": "database_type", "index$": 2 }, "db_host": { "a": true, "h": "Db Host", "n": "db_host", "r": true, "t": "`$STRING`", "key$": "db_host", "index$": 3 }, "db_name": { "a": true, "h": "Db Name", "n": "db_name", "r": true, "t": "`$STRING`", "key$": "db_name", "index$": 4 }, "db_port": { "a": true, "h": "Db Port", "n": "db_port", "r": true, "t": "`$INTEGER`", "key$": "db_port", "index$": 5 }, "db_user": { "a": true, "h": "Db User", "n": "db_user", "r": true, "t": "`$STRING`", "key$": "db_user", "index$": 6 }, "default_pool_size": { "a": true, "h": "Default Pool Size", "n": "default_pool_size", "r": true, "t": "`$INTEGER`", "key$": "default_pool_size", "index$": 7 }, "identifier": { "a": true, "h": "Identifier", "n": "identifier", "r": true, "t": "`$STRING`", "key$": "identifier", "index$": 8 }, "is_using_scram_auth": { "a": true, "h": "Is Using Scram Auth", "n": "is_using_scram_auth", "r": true, "t": "`$BOOLEAN`", "key$": "is_using_scram_auth", "index$": 9 }, "max_client_conn": { "a": true, "h": "Max Client Conn", "n": "max_client_conn", "r": true, "t": "`$INTEGER`", "key$": "max_client_conn", "index$": 10 }, "pool_mode": { "a": true, "h": "Pool Mode", "n": "pool_mode", "r": true, "t": "`$STRING`", "key$": "pool_mode", "index$": 11 } }, "name": "supavisor_config_response_output", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/config/database/pooler", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/config/database/pooler", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "database" }, { "lit": "pooler" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "supavisor_config_response_output", "name__orig": "supavisor_config_response_output", "Name": "SupavisorConfigResponseOutput", "name_": "supavisor_config_response_output", "name-": "supavisor-config-response-output", "NAME": "SUPAVISOR_CONFIG_RESPONSE_OUTPUT", "index$": 63 }, { "active": true, "entity": "supavisor_config_response_output", "key$": "BasicSupavisorConfigResponseOutputFlow", "kind": "basic", "name": "BasicSupavisorConfigResponseOutputFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "supavisor_config_response_output_ref01" } }] }] }, 'SupavisorConfigResponseOutput', { "GET /v1/projects/{ref}/config/database/pooler": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let supavisor_config_response_output_ref01_data = Object.values(setup.data.existing.supavisor_config_response_output)[0];
        // LIST
        const supavisor_config_response_output_ref01_ent = client.SupavisorConfigResponseOutput();
        const supavisor_config_response_output_ref01_match = {};
        supavisor_config_response_output_ref01_match['project_id'] = setup.idmap['project01'];
        const supavisor_config_response_output_ref01_list = (await supavisor_config_response_output_ref01_ent.list(supavisor_config_response_output_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/supavisor_config_response_output/SupavisorConfigResponseOutputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['supavisor_config_response_output01', 'supavisor_config_response_output02', 'supavisor_config_response_output03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_SUPAVISOR_CONFIG_RESPONSE_OUTPUT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_SUPAVISOR_CONFIG_RESPONSE_OUTPUT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_SUPAVISOR_CONFIG_RESPONSE_OUTPUT_ENTID'];
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
//# sourceMappingURL=SupavisorConfigResponseOutputEntity.test.js.map