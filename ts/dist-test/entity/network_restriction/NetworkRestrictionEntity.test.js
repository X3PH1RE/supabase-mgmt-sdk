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
(0, node_test_1.describe)('NetworkRestrictionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.NetworkRestriction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'network_restriction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "add": { "a": true, "h": "Add", "n": "add", "r": false, "t": "`$OBJECT`", "key$": "add", "index$": 0 }, "applied_at": { "a": true, "fo": "date-time", "h": "Applied At", "n": "applied_at", "r": false, "t": "`$STRING`", "key$": "applied_at", "index$": 1 }, "config": { "a": true, "h": "Config", "n": "config", "r": true, "sh": "At any given point in time, this is the config that the user has requested be applied to their project.", "t": "`$OBJECT`", "key$": "config", "index$": 2 }, "entitlement": { "a": true, "h": "Entitlement", "n": "entitlement", "r": true, "t": "`$STRING`", "key$": "entitlement", "index$": 3 }, "old_config": { "a": true, "h": "Old Config", "n": "old_config", "r": false, "sh": "Populated when a new config has been received, but not registered as successfully applied to a project.", "t": "`$OBJECT`", "key$": "old_config", "index$": 4 }, "remove": { "a": true, "h": "Remove", "n": "remove", "r": false, "t": "`$OBJECT`", "key$": "remove", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 6 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 7 } }, "name": "network_restriction", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/network-restrictions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "ref", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/network-restrictions", "q": { "exist": ["ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "ref" }, { "lit": "network-restrictions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /v1/projects/{ref}/network-restrictions", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "ref", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/v1/projects/{ref}/network-restrictions", "q": { "exist": ["ref"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "ref" }, { "lit": "network-restrictions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "network_restriction", "name__orig": "network_restriction", "Name": "NetworkRestriction", "name_": "network_restriction", "name-": "network-restriction", "NAME": "NETWORK_RESTRICTION", "index$": 33 }, { "active": true, "entity": "network_restriction", "key$": "BasicNetworkRestrictionFlow", "kind": "basic", "name": "BasicNetworkRestrictionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "network_restriction_ref01", "srcdatavar": "network_restriction_ref01_data", "suffix": "_up0", "textfield": "applied_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-network_restriction_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "network_restriction_ref01", "srcdatavar": "network_restriction_ref01_data", "suffix": "_dt0" }, "m": { "id": "network_restriction01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-network_restriction_ref01" } }] }] }, 'NetworkRestriction', { "GET /v1/projects/{ref}/network-restrictions": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] }, "PATCH /v1/projects/{ref}/network-restrictions": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "add": { "type": "object", "properties": { "dbAllowedCidrs": { "type": "array", "items": { "type": "string" } }, "dbAllowedCidrsV6": { "type": "array", "items": { "type": "string" } } }, "key$": "add" }, "remove": { "type": "object", "properties": { "dbAllowedCidrs": { "type": "array", "items": { "type": "string" } }, "dbAllowedCidrsV6": { "type": "array", "items": { "type": "string" } } }, "key$": "remove" } }, "example": { "add": { "dbAllowedCidrs": ["203.0.113.0/24"] }, "remove": { "dbAllowedCidrs": ["198.51.100.0/24"] } }, "x-ref": "#/components/schemas/NetworkRestrictionsPatchRequest", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let network_restriction_ref01_data = Object.values(setup.data.existing.network_restriction)[0];
        // UPDATE
        const network_restriction_ref01_ent = client.NetworkRestriction();
        const network_restriction_ref01_data_up0 = {};
        const network_restriction_ref01_markdef_up0 = { name: 'applied_at', value: 'Mark01-network_restriction_ref01_' + setup.now };
        network_restriction_ref01_data_up0[network_restriction_ref01_markdef_up0.name] = network_restriction_ref01_markdef_up0.value;
        const network_restriction_ref01_resdata_up0 = (await network_restriction_ref01_ent.update(network_restriction_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != network_restriction_ref01_resdata_up0);
        (0, node_assert_1.default)(network_restriction_ref01_resdata_up0[network_restriction_ref01_markdef_up0.name] === network_restriction_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/network_restriction/NetworkRestrictionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['network_restriction01', 'network_restriction02', 'network_restriction03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_NETWORK_RESTRICTION_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_NETWORK_RESTRICTION_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_NETWORK_RESTRICTION_ENTID'];
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
//# sourceMappingURL=NetworkRestrictionEntity.test.js.map