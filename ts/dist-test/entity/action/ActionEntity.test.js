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
(0, node_test_1.describe)('ActionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Action();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'action.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "branch_id": { "a": true, "h": "Branch Id", "n": "branch_id", "r": true, "t": "`$STRING`", "key$": "branch_id", "index$": 0 }, "check_run_id": { "a": true, "h": "Check Run Id", "n": "check_run_id", "r": true, "t": "`$NUMBER`", "key$": "check_run_id", "index$": 1 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "git_config": { "a": true, "h": "Git Config", "n": "git_config", "r": false, "t": "`$ANY`", "key$": "git_config", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "run_steps": { "a": true, "h": "Run Steps", "n": "run_steps", "r": true, "t": "`$ARRAY`", "key$": "run_steps", "index$": 5 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "t": "`$STRING`", "key$": "updated_at", "index$": 6 }, "workdir": { "a": true, "h": "Workdir", "n": "workdir", "r": true, "t": "`$STRING`", "key$": "workdir", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "action", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/actions/{run_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "run_01hq3q9m7y5q7e4a7x2c8m1p4n", "k": "param", "n": "id", "or": "run_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/actions/{run_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "ref": "project_id", "run_id": "id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "actions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/projects/{ref}/actions/{run_id}/status", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "run_01hq3q9m7y5q7e4a7x2c8m1p4n", "k": "param", "n": "id", "or": "run_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PATCH", "o": "/v1/projects/{ref}/actions/{run_id}/status", "q": { "$action": "status", "exist": ["id", "project_id"] }, "r": { "param": { "ref": "project_id", "run_id": "id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "actions" }, { "var": "id" }, { "lit": "status" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "action", "name__orig": "action", "Name": "Action", "name_": "action", "name-": "action", "NAME": "ACTION", "index$": 0 }, { "active": true, "entity": "action", "key$": "BasicActionFlow", "kind": "basic", "name": "BasicActionFlow", "param": {}, "step": [{ "a": true, "d": { "project_id": "project01" }, "i": { "ref": "action_ref01", "srcdatavar": "action_ref01_data", "suffix": "_up0", "textfield": "branch_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-action_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "action_ref01", "srcdatavar": "action_ref01_data", "suffix": "_dt0" }, "m": { "id": "action01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-action_ref01" } }] }] }, 'Action', { "GET /v1/projects/{ref}/actions/{run_id}": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "run_id", "required": true, "in": "path", "description": "Action Run ID", "schema": { "example": "run_01hq3q9m7y5q7e4a7x2c8m1p4n", "type": "string" }, "index$": 1 }] }, "PATCH /v1/projects/{ref}/actions/{run_id}/status": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "clone": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] }, "pull": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] }, "health": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] }, "configure": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] }, "migrate": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] }, "seed": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] }, "deploy": { "type": "string", "enum": ["CREATED", "DEAD", "EXITED", "PAUSED", "REMOVING", "RESTARTING", "RUNNING"] } }, "example": { "clone": "RUNNING", "configure": "RUNNING", "migrate": "RUNNING", "deploy": "CREATED" }, "x-ref": "#/components/schemas/UpdateRunStatusBody" } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "run_id", "required": true, "in": "path", "description": "Action Run ID", "schema": { "example": "run_01hq3q9m7y5q7e4a7x2c8m1p4n", "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let action_ref01_data = Object.values(setup.data.existing.action)[0];
        // UPDATE
        const action_ref01_ent = client.Action();
        const action_ref01_data_up0 = {};
        action_ref01_data_up0.id = action_ref01_data.id;
        action_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const action_ref01_markdef_up0 = { name: 'branch_id', value: 'Mark01-action_ref01_' + setup.now };
        action_ref01_data_up0[action_ref01_markdef_up0.name] = action_ref01_markdef_up0.value;
        const action_ref01_resdata_up0 = (await action_ref01_ent.update(action_ref01_data_up0)).data();
        (0, node_assert_1.default)(action_ref01_resdata_up0.id === action_ref01_data_up0.id);
        (0, node_assert_1.default)(action_ref01_resdata_up0[action_ref01_markdef_up0.name] === action_ref01_markdef_up0.value);
        // LOAD
        const action_ref01_match_dt0 = {};
        action_ref01_match_dt0.id = action_ref01_data.id;
        const action_ref01_data_dt0 = (await action_ref01_ent.load(action_ref01_match_dt0)).data();
        (0, node_assert_1.default)(action_ref01_data_dt0.id === action_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/action/ActionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['action01', 'action02', 'action03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_ACTION_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_ACTION_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_ACTION_ENTID'];
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
//# sourceMappingURL=ActionEntity.test.js.map