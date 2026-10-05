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
(0, node_test_1.describe)('FunctionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Function();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'function.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "body": { "a": true, "h": "Body", "n": "body", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "body", "index$": 0 }, "created_at": { "a": true, "fo": "int64", "h": "Created At", "n": "created_at", "r": true, "t": "`$INTEGER`", "key$": "created_at", "index$": 1 }, "entrypoint_path": { "a": true, "h": "Entrypoint Path", "n": "entrypoint_path", "r": false, "t": "`$STRING`", "key$": "entrypoint_path", "index$": 2 }, "ezbr_sha256": { "a": true, "h": "Ezbr Sha256", "n": "ezbr_sha256", "r": false, "t": "`$STRING`", "key$": "ezbr_sha256", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$STRING`", "key$": "id", "index$": 4 }, "import_map": { "a": true, "h": "Import Map", "n": "import_map", "r": false, "t": "`$BOOLEAN`", "key$": "import_map", "index$": 5 }, "import_map_path": { "a": true, "h": "Import Map Path", "n": "import_map_path", "r": false, "t": "`$STRING`", "key$": "import_map_path", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "t": "`$STRING`", "key$": "name", "index$": 7 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": true, "t": "`$STRING`", "key$": "slug", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 9 }, "updated_at": { "a": true, "fo": "int64", "h": "Updated At", "n": "updated_at", "r": true, "t": "`$INTEGER`", "key$": "updated_at", "index$": 10 }, "verify_jwt": { "a": true, "h": "Verify Jwt", "n": "verify_jwt", "r": false, "t": "`$BOOLEAN`", "key$": "verify_jwt", "index$": 11 }, "version": { "a": true, "h": "Version", "n": "version", "r": true, "t": "`$INTEGER`", "key$": "version", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "function", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/projects/{ref}/functions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "ref", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "index.ts", "k": "query", "n": "entrypoint_path", "or": "entrypoint_path", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7", "k": "query", "n": "ezbr_sha256", "or": "ezbr_sha256", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "import_map", "or": "import_map", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "import_map.json", "k": "query", "n": "import_map_path", "or": "import_map_path", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "Hello World", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "hello-world", "k": "query", "n": "slug", "or": "slug", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": true, "k": "query", "n": "verify_jwt", "or": "verify_jwt", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "POST", "o": "/v1/projects/{ref}/functions", "q": { "exist": ["entrypoint_path", "ezbr_sha256", "import_map", "import_map_path", "name", "ref", "slug", "verify_jwt"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "ref" }, { "lit": "functions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/functions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "ref", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/functions", "q": { "exist": ["ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "ref" }, { "lit": "functions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/functions/{function_slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "hello-world", "k": "param", "n": "id", "or": "function_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/functions/{function_slug}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "function_slug": "id", "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "functions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/projects/{ref}/functions/{function_slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "hello-world", "k": "param", "n": "id", "or": "function_slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "index.ts", "k": "query", "n": "entrypoint_path", "or": "entrypoint_path", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7", "k": "query", "n": "ezbr_sha256", "or": "ezbr_sha256", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "import_map", "or": "import_map", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "import_map.json", "k": "query", "n": "import_map_path", "or": "import_map_path", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "Hello World", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "hello-world", "k": "query", "n": "slug", "or": "slug", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": true, "k": "query", "n": "verify_jwt", "or": "verify_jwt", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "PATCH", "o": "/v1/projects/{ref}/functions/{function_slug}", "q": { "exist": ["entrypoint_path", "ezbr_sha256", "id", "import_map", "import_map_path", "name", "project_id", "slug", "verify_jwt"] }, "r": { "param": { "function_slug": "id", "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "functions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "function", "name__orig": "function", "Name": "Function", "name_": "function", "name-": "function", "NAME": "FUNCTION", "index$": 20 }, { "active": true, "entity": "function", "key$": "BasicFunctionFlow", "kind": "basic", "name": "BasicFunctionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "function_ref01" }, "m": { "project_id": "project01", "ref": "function_ref01" }, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": {}, "m": { "ref": "ref01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "function_ref01" } }] }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "function_ref01", "srcdatavar": "function_ref01_data", "suffix": "_up0", "textfield": "body" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-function_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "function_ref01", "srcdatavar": "function_ref01_data", "suffix": "_dt0" }, "m": { "id": "function01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-function_ref01" } }] }] }, 'Function', { "POST /v1/projects/{ref}/functions": { "protocol": "http", "requestBody": { "required": true, "content": { "application/vnd.denoland.eszip": { "schema": { "type": "string", "format": "binary" } }, "application/json": { "schema": { "type": "object", "properties": { "slug": { "type": "string", "pattern": "^[A-Za-z][A-Za-z0-9_-]*$", "key$": "slug" }, "name": { "type": "string", "key$": "name" }, "body": { "type": "string", "key$": "body" }, "verify_jwt": { "type": "boolean", "key$": "verify_jwt" } }, "required": ["slug", "name", "body"], "example": { "slug": "hello-world", "name": "Hello World", "body": "Deno.serve(() => new Response('Hello, world!'))", "verify_jwt": true }, "x-ref": "#/components/schemas/V1CreateFunctionBody", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "slug", "required": false, "in": "query", "schema": { "pattern": "^[A-Za-z0-9_-]+$", "example": "hello-world", "type": "string" }, "index$": 1 }, { "name": "name", "required": false, "in": "query", "schema": { "example": "Hello World", "type": "string" }, "index$": 2 }, { "name": "verify_jwt", "required": false, "in": "query", "schema": { "example": true, "type": "string" }, "index$": 3 }, { "name": "import_map", "required": false, "in": "query", "schema": { "example": false, "type": "string" }, "index$": 4 }, { "name": "entrypoint_path", "required": false, "in": "query", "schema": { "example": "index.ts", "type": "string" }, "index$": 5 }, { "name": "import_map_path", "required": false, "in": "query", "schema": { "example": "import_map.json", "type": "string" }, "index$": 6 }, { "name": "ezbr_sha256", "required": false, "in": "query", "schema": { "example": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7", "type": "string" }, "index$": 7 }] }, "GET /v1/projects/{ref}/functions": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] }, "GET /v1/projects/{ref}/functions/{function_slug}": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "function_slug", "required": true, "in": "path", "description": "Function slug", "schema": { "pattern": "^[A-Za-z0-9_-]+$", "example": "hello-world", "type": "string" }, "index$": 1 }] }, "PATCH /v1/projects/{ref}/functions/{function_slug}": { "protocol": "http", "requestBody": { "required": true, "content": { "application/vnd.denoland.eszip": { "schema": { "type": "string", "format": "binary" } }, "application/json": { "schema": { "type": "object", "properties": { "name": { "type": "string", "key$": "name" }, "body": { "type": "string", "key$": "body" }, "verify_jwt": { "type": "boolean", "key$": "verify_jwt" } }, "example": { "name": "Hello World", "body": "Deno.serve(() => new Response('Hello again!'))", "verify_jwt": true }, "x-ref": "#/components/schemas/V1UpdateFunctionBody", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "function_slug", "required": true, "in": "path", "description": "Function slug", "schema": { "pattern": "^[A-Za-z0-9_-]+$", "example": "hello-world", "type": "string" }, "index$": 1 }, { "name": "slug", "required": false, "in": "query", "schema": { "pattern": "^[A-Za-z0-9_-]+$", "example": "hello-world", "type": "string" }, "index$": 2 }, { "name": "name", "required": false, "in": "query", "schema": { "example": "Hello World", "type": "string" }, "index$": 3 }, { "name": "verify_jwt", "required": false, "in": "query", "schema": { "example": true, "type": "string" }, "index$": 4 }, { "name": "import_map", "required": false, "in": "query", "schema": { "example": false, "type": "string" }, "index$": 5 }, { "name": "entrypoint_path", "required": false, "in": "query", "schema": { "example": "index.ts", "type": "string" }, "index$": 6 }, { "name": "import_map_path", "required": false, "in": "query", "schema": { "example": "import_map.json", "type": "string" }, "index$": 7 }, { "name": "ezbr_sha256", "required": false, "in": "query", "schema": { "example": "44c691990518d25498f0fd80cf6631ecf2b58eb9c5eb2a087dd1688f2904dac7", "type": "string" }, "index$": 8 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const function_ref01_ent = client.Function();
        let function_ref01_data = setup.data.new.function['function_ref01'];
        function_ref01_data['project_id'] = setup.idmap['project01'];
        function_ref01_data['ref'] = setup.idmap['function_ref01'];
        function_ref01_data = (await function_ref01_ent.create(function_ref01_data)).data();
        (0, node_assert_1.default)(null != function_ref01_data.id);
        // LIST
        const function_ref01_match = {};
        function_ref01_match['ref'] = setup.idmap['ref01'];
        const function_ref01_list = (await function_ref01_ent.list(function_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(function_ref01_list, { id: function_ref01_data.id })));
        // UPDATE
        const function_ref01_data_up0 = {};
        function_ref01_data_up0.id = function_ref01_data.id;
        function_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const function_ref01_markdef_up0 = { name: 'body', value: 'Mark01-function_ref01_' + setup.now };
        function_ref01_data_up0[function_ref01_markdef_up0.name] = function_ref01_markdef_up0.value;
        const function_ref01_resdata_up0 = (await function_ref01_ent.update(function_ref01_data_up0)).data();
        (0, node_assert_1.default)(function_ref01_resdata_up0.id === function_ref01_data_up0.id);
        (0, node_assert_1.default)(function_ref01_resdata_up0[function_ref01_markdef_up0.name] === function_ref01_markdef_up0.value);
        // LOAD
        const function_ref01_match_dt0 = {};
        function_ref01_match_dt0.id = function_ref01_data.id;
        const function_ref01_data_dt0 = (await function_ref01_ent.load(function_ref01_match_dt0)).data();
        (0, node_assert_1.default)(function_ref01_data_dt0.id === function_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/function/FunctionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['function01', 'function02', 'function03', 'project01', 'project02', 'project03', 'function_ref01', 'ref01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_FUNCTION_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_FUNCTION_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_FUNCTION_ENTID'];
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
//# sourceMappingURL=FunctionEntity.test.js.map