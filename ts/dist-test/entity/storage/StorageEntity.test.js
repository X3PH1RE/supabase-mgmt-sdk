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
(0, node_test_1.describe)('StorageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Storage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'storage.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "capabilities": { "a": true, "h": "Capabilities", "n": "capabilities", "r": true, "t": "`$OBJECT`", "key$": "capabilities", "index$": 0 }, "external": { "a": true, "h": "External", "n": "external", "r": true, "t": "`$OBJECT`", "key$": "external", "index$": 1 }, "features": { "a": true, "h": "Features", "n": "features", "op": { "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "t": "`$OBJECT`", "key$": "features", "index$": 2 }, "fileSizeLimit": { "a": true, "fo": "int64", "h": "File Size Limit", "n": "fileSizeLimit", "op": { "update": { "req": false, "type": "`$INTEGER`" } }, "r": true, "t": "`$INTEGER`", "key$": "fileSizeLimit", "index$": 3 }, "migrationVersion": { "a": true, "h": "Migration Version", "n": "migrationVersion", "r": true, "t": "`$STRING`", "key$": "migrationVersion", "index$": 4 } }, "name": "storage", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/config/storage", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/config/storage", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "storage" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/projects/{ref}/config/storage", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v1/projects/{ref}/config/storage", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "storage" }], "t": { "req": { "external": "`reqdata.external`", "features": "`reqdata.feature`", "fileSizeLimit": "`reqdata.file_size_limit`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "storage", "name__orig": "storage", "Name": "Storage", "name_": "storage", "name-": "storage", "NAME": "STORAGE", "index$": 60 }, { "active": true, "entity": "storage", "key$": "BasicStorageFlow", "kind": "basic", "name": "BasicStorageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "storage_ref01", "srcdatavar": "storage_ref01_data", "suffix": "_up0", "textfield": "migrationVersion" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-storage_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "storage_ref01", "srcdatavar": "storage_ref01_data", "suffix": "_dt0" }, "m": { "id": "storage01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-storage_ref01" } }] }] }, 'Storage', { "GET /v1/projects/{ref}/config/storage": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] }, "PATCH /v1/projects/{ref}/config/storage": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "fileSizeLimit": { "type": "integer", "format": "int64", "minimum": 0, "maximum": 536870912000, "key$": "fileSizeLimit" }, "features": { "type": "object", "properties": { "imageTransformation": { "type": "object", "properties": { "enabled": {} }, "required": ["enabled"] }, "s3Protocol": { "type": "object", "properties": { "enabled": {} }, "required": ["enabled"] }, "purgeCache": { "type": "object", "properties": { "enabled": {} }, "required": ["enabled"] }, "icebergCatalog": { "type": "object", "properties": { "enabled": {}, "maxNamespaces": {}, "maxTables": {}, "maxCatalogs": {} }, "required": ["enabled", "maxNamespaces", "maxTables", "maxCatalogs"] }, "vectorBuckets": { "type": "object", "properties": { "enabled": {}, "maxBuckets": {}, "maxIndexes": {} }, "required": ["enabled", "maxBuckets", "maxIndexes"] } }, "key$": "features" }, "external": { "type": "object", "properties": { "upstreamTarget": { "type": "string", "enum": ["main", "canary"] } }, "required": ["upstreamTarget"], "key$": "external" } }, "example": { "fileSizeLimit": 10485760, "features": { "imageTransformation": { "enabled": true } } }, "additionalProperties": false, "x-ref": "#/components/schemas/UpdateStorageConfigBody", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let storage_ref01_data = Object.values(setup.data.existing.storage)[0];
        // UPDATE
        const storage_ref01_ent = client.Storage();
        const storage_ref01_data_up0 = {};
        const storage_ref01_markdef_up0 = { name: 'migrationVersion', value: 'Mark01-storage_ref01_' + setup.now };
        storage_ref01_data_up0[storage_ref01_markdef_up0.name] = storage_ref01_markdef_up0.value;
        const storage_ref01_resdata_up0 = (await storage_ref01_ent.update(storage_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != storage_ref01_resdata_up0);
        (0, node_assert_1.default)(storage_ref01_resdata_up0[storage_ref01_markdef_up0.name] === storage_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/storage/StorageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['storage01', 'storage02', 'storage03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_STORAGE_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_STORAGE_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_STORAGE_ENTID'];
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
//# sourceMappingURL=StorageEntity.test.js.map