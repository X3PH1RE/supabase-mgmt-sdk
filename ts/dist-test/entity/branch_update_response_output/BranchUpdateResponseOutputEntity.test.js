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
(0, node_test_1.describe)('BranchUpdateResponseOutputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.BranchUpdateResponseOutput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'branch_update_response_output.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "migration_version": { "a": true, "h": "Migration Version", "n": "migration_version", "r": false, "t": "`$STRING`", "key$": "migration_version", "index$": 0 } }, "name": "branch_update_response_output", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/branches/{branch_id_or_ref}/merge", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "branch_id_or_ref", "or": "branch_id_or_ref", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/branches/{branch_id_or_ref}/merge", "q": { "exist": ["branch_id_or_ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "branches" }, { "var": "branch_id_or_ref" }, { "lit": "merge" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /v1/branches/{branch_id_or_ref}/push", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "branch_id_or_ref", "or": "branch_id_or_ref", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/branches/{branch_id_or_ref}/push", "q": { "exist": ["branch_id_or_ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "branches" }, { "var": "branch_id_or_ref" }, { "lit": "push" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /v1/branches/{branch_id_or_ref}/reset", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "branch_id_or_ref", "or": "branch_id_or_ref", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/branches/{branch_id_or_ref}/reset", "q": { "exist": ["branch_id_or_ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "branches" }, { "var": "branch_id_or_ref" }, { "lit": "reset" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.branch"]] }, "key$": "branch_update_response_output", "name__orig": "branch_update_response_output", "Name": "BranchUpdateResponseOutput", "name_": "branch_update_response_output", "name-": "branch-update-response-output", "NAME": "BRANCH_UPDATE_RESPONSE_OUTPUT", "index$": 7 }, { "active": true, "entity": "branch_update_response_output", "key$": "BasicBranchUpdateResponseOutputFlow", "kind": "basic", "name": "BasicBranchUpdateResponseOutputFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "branch_update_response_output_ref01" }, "m": { "branch_id_or_ref": "branch_or_ref01" }, "o": "create", "s": [], "v": [] }] }, 'BranchUpdateResponseOutput', { "POST /v1/branches/{branch_id_or_ref}/merge": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "migration_version": { "type": "string", "key$": "migration_version" } }, "example": { "migration_version": "20250312000000" }, "x-ref": "#/components/schemas/BranchActionBody", "index$": 1 } } } }, "parameters": [{ "name": "branch_id_or_ref", "required": true, "in": "path", "description": "Branch ref or deprecated branch ID", "schema": { "example": "abcdefghijklmnopqrst", "anyOf": [{ "type": "string", "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "description": "Project ref", "example": "abcdefghijklmnopqrst" }, { "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "deprecated": true }] }, "index$": 0 }] }, "POST /v1/branches/{branch_id_or_ref}/push": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "migration_version": { "type": "string", "key$": "migration_version" } }, "example": { "migration_version": "20250312000000" }, "x-ref": "#/components/schemas/BranchActionBody", "index$": 1 } } } }, "parameters": [{ "name": "branch_id_or_ref", "required": true, "in": "path", "description": "Branch ref or deprecated branch ID", "schema": { "example": "abcdefghijklmnopqrst", "anyOf": [{ "type": "string", "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "description": "Project ref", "example": "abcdefghijklmnopqrst" }, { "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "deprecated": true }] }, "index$": 0 }] }, "POST /v1/branches/{branch_id_or_ref}/reset": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "migration_version": { "type": "string", "key$": "migration_version" } }, "example": { "migration_version": "20250312000000" }, "x-ref": "#/components/schemas/BranchActionBody", "index$": 1 } } } }, "parameters": [{ "name": "branch_id_or_ref", "required": true, "in": "path", "description": "Branch ref or deprecated branch ID", "schema": { "example": "abcdefghijklmnopqrst", "anyOf": [{ "type": "string", "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "description": "Project ref", "example": "abcdefghijklmnopqrst" }, { "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "deprecated": true }] }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const branch_update_response_output_ref01_ent = client.BranchUpdateResponseOutput();
        let branch_update_response_output_ref01_data = setup.data.new.branch_update_response_output['branch_update_response_output_ref01'];
        branch_update_response_output_ref01_data['branch_id_or_ref'] = setup.idmap['branch_or_ref01'];
        branch_update_response_output_ref01_data = (await branch_update_response_output_ref01_ent.create(branch_update_response_output_ref01_data)).data();
        (0, node_assert_1.default)(null != branch_update_response_output_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/branch_update_response_output/BranchUpdateResponseOutputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['branch_update_response_output01', 'branch_update_response_output02', 'branch_update_response_output03', 'branch01', 'branch02', 'branch03', 'branch_or_ref01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_BRANCH_UPDATE_RESPONSE_OUTPUT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_BRANCH_UPDATE_RESPONSE_OUTPUT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_BRANCH_UPDATE_RESPONSE_OUTPUT_ENTID'];
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
//# sourceMappingURL=BranchUpdateResponseOutputEntity.test.js.map