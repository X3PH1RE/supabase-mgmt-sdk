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
(0, node_test_1.describe)('CreateProviderResponseOutputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.CreateProviderResponseOutput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_provider_response_output.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attribute_mapping": { "a": true, "h": "Attribute Mapping", "n": "attribute_mapping", "r": true, "t": "`$OBJECT`", "union": { "branches": 4, "count": 1, "depth": 5 }, "key$": "attribute_mapping", "index$": 0 }, "domains": { "a": true, "h": "Domains", "n": "domains", "r": false, "t": "`$ARRAY`", "key$": "domains", "index$": 1 }, "metadata_url": { "a": true, "h": "Metadata Url", "n": "metadata_url", "r": false, "t": "`$STRING`", "key$": "metadata_url", "index$": 2 }, "metadata_xml": { "a": true, "h": "Metadata Xml", "n": "metadata_xml", "r": false, "t": "`$STRING`", "key$": "metadata_xml", "index$": 3 }, "name_id_format": { "a": true, "h": "Name Id Format", "n": "name_id_format", "r": false, "t": "`$STRING`", "key$": "name_id_format", "index$": 4 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "What type of provider will be created", "t": "`$STRING`", "key$": "type", "index$": 5 } }, "name": "create_provider_response_output", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/projects/{ref}/config/auth/sso/providers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/projects/{ref}/config/auth/sso/providers", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "auth" }, { "lit": "sso" }, { "lit": "providers" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "create_provider_response_output", "name__orig": "create_provider_response_output", "Name": "CreateProviderResponseOutput", "name_": "create_provider_response_output", "name-": "create-provider-response-output", "NAME": "CREATE_PROVIDER_RESPONSE_OUTPUT", "index$": 9 }, { "active": true, "entity": "create_provider_response_output", "key$": "BasicCreateProviderResponseOutputFlow", "kind": "basic", "name": "BasicCreateProviderResponseOutputFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "create_provider_response_output_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [] }] }, 'CreateProviderResponseOutput', { "POST /v1/projects/{ref}/config/auth/sso/providers": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "type": { "type": "string", "enum": ["saml"], "description": "What type of provider will be created", "key$": "type" }, "metadata_xml": { "type": "string", "key$": "metadata_xml" }, "metadata_url": { "type": "string", "key$": "metadata_url" }, "domains": { "type": "array", "items": { "type": "string" }, "key$": "domains" }, "attribute_mapping": { "type": "object", "properties": { "keys": { "type": "object", "additionalProperties": { "type": "object", "properties": {} } } }, "required": ["keys"], "key$": "attribute_mapping" }, "name_id_format": { "type": "string", "enum": ["urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified", "urn:oasis:names:tc:SAML:2.0:nameid-format:transient", "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress", "urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"], "key$": "name_id_format" } }, "required": ["type"], "example": { "type": "saml", "metadata_url": "https://sso.acme.com/metadata.xml", "domains": ["acme.com"], "attribute_mapping": { "keys": { "email": { "name": "email" }, "first_name": { "name": "first_name" }, "last_name": { "name": "last_name" } } } }, "x-ref": "#/components/schemas/CreateProviderBody", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_provider_response_output_ref01_ent = client.CreateProviderResponseOutput();
        let create_provider_response_output_ref01_data = setup.data.new.create_provider_response_output['create_provider_response_output_ref01'];
        create_provider_response_output_ref01_data['project_id'] = setup.idmap['project01'];
        create_provider_response_output_ref01_data = (await create_provider_response_output_ref01_ent.create(create_provider_response_output_ref01_data)).data();
        (0, node_assert_1.default)(null != create_provider_response_output_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_provider_response_output/CreateProviderResponseOutputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_provider_response_output01', 'create_provider_response_output02', 'create_provider_response_output03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_CREATE_PROVIDER_RESPONSE_OUTPUT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_CREATE_PROVIDER_RESPONSE_OUTPUT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_CREATE_PROVIDER_RESPONSE_OUTPUT_ENTID'];
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
//# sourceMappingURL=CreateProviderResponseOutputEntity.test.js.map