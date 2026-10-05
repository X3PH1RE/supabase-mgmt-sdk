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
(0, node_test_1.describe)('OAuthEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.OAuth();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'o_auth.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "client_id": { "a": true, "fo": "uuid", "h": "Client Id", "n": "client_id", "r": true, "t": "`$STRING`", "key$": "client_id", "index$": 0 }, "client_secret": { "a": true, "h": "Client Secret", "n": "client_secret", "r": true, "t": "`$STRING`", "key$": "client_secret", "index$": 1 }, "refresh_token": { "a": true, "h": "Refresh Token", "n": "refresh_token", "r": true, "t": "`$STRING`", "key$": "refresh_token", "index$": 2 } }, "name": "o_auth", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/oauth/revoke", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/oauth/revoke", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "oauth" }, { "lit": "revoke" }], "t": { "req": { "client_id": "`reqdata.client_id`", "client_secret": "`reqdata.client_secret`", "refresh_token": "`reqdata.refresh_token`" }, "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/oauth/authorize", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "66666666-6666-4666-8666-666666666666", "k": "query", "n": "client_id", "or": "client_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ", "k": "query", "n": "code_challenge", "or": "code_challenge", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "S256", "k": "query", "n": "code_challenge_method", "or": "code_challenge_method", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "tsrqponmlkjihgfedcba", "k": "query", "n": "organization_slug", "or": "organization_slug", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "https://app.acme.com/auth/callback", "k": "query", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "https://mcp.supabase.com/projects", "k": "query", "n": "resource", "or": "resource", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "query", "k": "query", "n": "response_mode", "or": "response_mode", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "code", "k": "query", "n": "response_type", "or": "response_type", "r": true, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "projects:read projects:write", "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "ex": "st_9f4d3a206b2e4a7e8c91", "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "target_flow", "or": "target_flow", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/v1/oauth/authorize", "q": { "exist": ["client_id", "code_challenge", "code_challenge_method", "organization_slug", "redirect_uri", "resource", "response_mode", "response_type", "scope", "state", "target_flow"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "oauth" }, { "lit": "authorize" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v1/oauth/authorize/project-claim", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "66666666-6666-4666-8666-666666666666", "k": "query", "n": "client_id", "or": "client_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ", "k": "query", "n": "code_challenge", "or": "code_challenge", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "S256", "k": "query", "n": "code_challenge_method", "or": "code_challenge_method", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "abcdefghijklmnopqrst", "k": "query", "n": "project_ref", "or": "project_ref", "r": true, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "https://app.acme.com/auth/callback", "k": "query", "n": "redirect_uri", "or": "redirect_uri", "r": true, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": "query", "k": "query", "n": "response_mode", "or": "response_mode", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "code", "k": "query", "n": "response_type", "or": "response_type", "r": true, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "st_9f4d3a206b2e4a7e8c91", "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/v1/oauth/authorize/project-claim", "q": { "exist": ["client_id", "code_challenge", "code_challenge_method", "project_ref", "redirect_uri", "response_mode", "response_type", "state"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "oauth" }, { "lit": "authorize" }, { "lit": "project-claim" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "o_auth", "name__orig": "o_auth", "Name": "OAuth", "name_": "o_auth", "name-": "o-auth", "NAME": "O_AUTH", "index$": 35 }, { "active": true, "entity": "o_auth", "key$": "BasicOAuthFlow", "kind": "basic", "name": "BasicOAuthFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "o_auth_ref01" }, "m": {}, "o": "create", "s": [], "v": [] }, { "a": true, "d": {}, "i": { "ref": "o_auth_ref01", "srcdatavar": "o_auth_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-o_auth_ref01" } }] }] }, 'OAuth', { "POST /v1/oauth/revoke": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "client_id": { "type": "string", "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "key$": "client_id" }, "client_secret": { "type": "string", "key$": "client_secret" }, "refresh_token": { "type": "string", "key$": "refresh_token" } }, "required": ["client_id", "client_secret", "refresh_token"], "example": { "client_id": "66666666-6666-4666-8666-666666666666", "client_secret": "sb_secret_live_example_9f4d3a206b2e4a7e8c91", "refresh_token": "oauth_refresh_9f4d3a206b2e4a7e8c91" }, "additionalProperties": false, "x-ref": "#/components/schemas/OAuthRevokeTokenBody", "index$": 1 } } } }, "parameters": [] }, "GET /v1/oauth/authorize": { "protocol": "http", "parameters": [{ "name": "client_id", "required": true, "in": "query", "schema": { "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "example": "66666666-6666-4666-8666-666666666666", "type": "string" }, "index$": 0 }, { "name": "response_type", "required": true, "in": "query", "schema": { "example": "code", "type": "string", "enum": ["code", "token", "id_token token"] }, "index$": 1 }, { "name": "redirect_uri", "required": true, "in": "query", "schema": { "example": "https://app.acme.com/auth/callback", "type": "string" }, "index$": 2 }, { "name": "scope", "required": false, "in": "query", "schema": { "example": "projects:read projects:write", "type": "string" }, "index$": 3 }, { "name": "state", "required": false, "in": "query", "schema": { "example": "st_9f4d3a206b2e4a7e8c91", "type": "string" }, "index$": 4 }, { "name": "response_mode", "required": false, "in": "query", "schema": { "example": "query", "type": "string" }, "index$": 5 }, { "name": "code_challenge", "required": false, "in": "query", "schema": { "example": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ", "type": "string" }, "index$": 6 }, { "name": "code_challenge_method", "required": false, "in": "query", "schema": { "example": "S256", "type": "string", "enum": ["plain", "sha256", "S256"] }, "index$": 7 }, { "name": "organization_slug", "required": false, "in": "query", "description": "Organization slug", "schema": { "pattern": "^[\\w-]+$", "example": "tsrqponmlkjihgfedcba", "type": "string" }, "index$": 8 }, { "name": "target_flow", "required": false, "in": "query", "schema": { "type": "string" }, "index$": 9 }, { "name": "resource", "required": false, "in": "query", "description": "Resource indicator for MCP (Model Context Protocol) clients", "schema": { "format": "uri", "example": "https://mcp.supabase.com/projects", "type": "string" }, "index$": 10 }] }, "GET /v1/oauth/authorize/project-claim": { "protocol": "http", "parameters": [{ "name": "project_ref", "required": true, "in": "query", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }, { "name": "client_id", "required": true, "in": "query", "schema": { "format": "uuid", "pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$", "example": "66666666-6666-4666-8666-666666666666", "type": "string" }, "index$": 1 }, { "name": "response_type", "required": true, "in": "query", "schema": { "example": "code", "type": "string", "enum": ["code", "token", "id_token token"] }, "index$": 2 }, { "name": "redirect_uri", "required": true, "in": "query", "schema": { "example": "https://app.acme.com/auth/callback", "type": "string" }, "index$": 3 }, { "name": "state", "required": false, "in": "query", "schema": { "example": "st_9f4d3a206b2e4a7e8c91", "type": "string" }, "index$": 4 }, { "name": "response_mode", "required": false, "in": "query", "schema": { "example": "query", "type": "string" }, "index$": 5 }, { "name": "code_challenge", "required": false, "in": "query", "schema": { "example": "Z_P4EKbGwIkA01e3Y5fp4tMCvn_Ae5nUw7qY7XwkTrQ", "type": "string" }, "index$": 6 }, { "name": "code_challenge_method", "required": false, "in": "query", "schema": { "example": "S256", "type": "string", "enum": ["plain", "sha256", "S256"] }, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const o_auth_ref01_ent = client.OAuth();
        let o_auth_ref01_data = setup.data.new.o_auth['o_auth_ref01'];
        o_auth_ref01_data = (await o_auth_ref01_ent.create(o_auth_ref01_data)).data();
        (0, node_assert_1.default)(null != o_auth_ref01_data);
        // LOAD
        const o_auth_ref01_match_dt0 = {};
        const o_auth_ref01_data_dt0 = (await o_auth_ref01_ent.load(o_auth_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != o_auth_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/o_auth/OAuthTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['o_auth01', 'o_auth02', 'o_auth03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_O_AUTH_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_O_AUTH_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_O_AUTH_ENTID'];
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
//# sourceMappingURL=OAuthEntity.test.js.map