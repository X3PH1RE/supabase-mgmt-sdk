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
(0, node_test_1.describe)('V1GetMigrationResponseOutputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.V1GetMigrationResponseOutput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'v1_get_migration_response_output.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": false, "t": "`$STRING`", "key$": "created_by", "index$": 0 }, "idempotency_key": { "a": true, "h": "Idempotency Key", "n": "idempotency_key", "r": false, "t": "`$STRING`", "key$": "idempotency_key", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 2 }, "rollback": { "a": true, "h": "Rollback", "n": "rollback", "r": false, "t": "`$ARRAY`", "key$": "rollback", "index$": 3 }, "statements": { "a": true, "h": "Statements", "n": "statements", "r": false, "t": "`$ARRAY`", "key$": "statements", "index$": 4 }, "version": { "a": true, "h": "Version", "n": "version", "r": true, "t": "`$STRING`", "key$": "version", "index$": 5 } }, "name": "v1_get_migration_response_output", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/database/migrations/{version}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "20250312000000", "k": "param", "n": "version", "or": "version", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/database/migrations/{version}", "q": { "exist": ["project_id", "version"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "database" }, { "lit": "migrations" }, { "var": "version" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "v1_get_migration_response_output", "name__orig": "v1_get_migration_response_output", "Name": "V1GetMigrationResponseOutput", "name_": "v1_get_migration_response_output", "name-": "v1-get-migration-response-output", "NAME": "V1_GET_MIGRATION_RESPONSE_OUTPUT", "index$": 71 }, { "active": true, "entity": "v1_get_migration_response_output", "key$": "BasicV1GetMigrationResponseOutputFlow", "kind": "basic", "name": "BasicV1GetMigrationResponseOutputFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "v1_get_migration_response_output_ref01", "srcdatavar": "v1_get_migration_response_output_ref01_data", "suffix": "_dt0" }, "m": { "id": "v1_get_migration_response_output01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-v1_get_migration_response_output_ref01" } }] }] }, 'V1GetMigrationResponseOutput', { "GET /v1/projects/{ref}/database/migrations/{version}": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "version", "required": true, "in": "path", "schema": { "pattern": "^\\d+$", "example": "20250312000000", "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let v1_get_migration_response_output_ref01_data = Object.values(setup.data.existing.v1_get_migration_response_output)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const v1_get_migration_response_output_ref01_ent = client.V1GetMigrationResponseOutput();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/v1_get_migration_response_output/V1GetMigrationResponseOutputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['v1_get_migration_response_output01', 'v1_get_migration_response_output02', 'v1_get_migration_response_output03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_V1_GET_MIGRATION_RESPONSE_OUTPUT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_V1_GET_MIGRATION_RESPONSE_OUTPUT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_V1_GET_MIGRATION_RESPONSE_OUTPUT_ENTID'];
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
//# sourceMappingURL=V1GetMigrationResponseOutputEntity.test.js.map