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
(0, node_test_1.describe)('DatabaseUpgradeStatusResponseOutputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.DatabaseUpgradeStatusResponseOutput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'database_upgrade_status_response_output.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "error": { "a": true, "h": "Error", "n": "error", "r": false, "t": "`$STRING`", "key$": "error", "index$": 0 }, "initiated_at": { "a": true, "h": "Initiated At", "n": "initiated_at", "r": true, "t": "`$STRING`", "key$": "initiated_at", "index$": 1 }, "latest_status_at": { "a": true, "h": "Latest Status At", "n": "latest_status_at", "r": true, "t": "`$STRING`", "key$": "latest_status_at", "index$": 2 }, "progress": { "a": true, "h": "Progress", "n": "progress", "r": false, "t": "`$STRING`", "key$": "progress", "index$": 3 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$NUMBER`", "key$": "status", "index$": 4 }, "target_version": { "a": true, "h": "Target Version", "n": "target_version", "r": true, "t": "`$STRING`", "key$": "target_version", "index$": 5 } }, "name": "database_upgrade_status_response_output", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/upgrade/status", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c", "k": "query", "n": "tracking_id", "or": "tracking_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/upgrade/status", "q": { "exist": ["project_id", "tracking_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "upgrade" }, { "lit": "status" }], "t": { "req": "`reqdata`", "res": "`body.databaseUpgradeStatus`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "database_upgrade_status_response_output", "name__orig": "database_upgrade_status_response_output", "Name": "DatabaseUpgradeStatusResponseOutput", "name_": "database_upgrade_status_response_output", "name-": "database-upgrade-status-response-output", "NAME": "DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT", "index$": 12 }, { "active": true, "entity": "database_upgrade_status_response_output", "key$": "BasicDatabaseUpgradeStatusResponseOutputFlow", "kind": "basic", "name": "BasicDatabaseUpgradeStatusResponseOutputFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "database_upgrade_status_response_output_ref01", "srcdatavar": "database_upgrade_status_response_output_ref01_data", "suffix": "_dt0" }, "m": { "id": "database_upgrade_status_response_output01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-database_upgrade_status_response_output_ref01" } }] }] }, 'DatabaseUpgradeStatusResponseOutput', { "GET /v1/projects/{ref}/upgrade/status": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "tracking_id", "required": false, "in": "query", "schema": { "example": "9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c", "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let database_upgrade_status_response_output_ref01_data = Object.values(setup.data.existing.database_upgrade_status_response_output)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const database_upgrade_status_response_output_ref01_ent = client.DatabaseUpgradeStatusResponseOutput();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/database_upgrade_status_response_output/DatabaseUpgradeStatusResponseOutputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['database_upgrade_status_response_output01', 'database_upgrade_status_response_output02', 'database_upgrade_status_response_output03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT_ENTID'];
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
//# sourceMappingURL=DatabaseUpgradeStatusResponseOutputEntity.test.js.map