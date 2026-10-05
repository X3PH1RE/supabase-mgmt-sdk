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
(0, node_test_1.describe)('OrganizationProjectsResponseOutputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.OrganizationProjectsResponseOutput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_projects_response_output.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cloud_provider": { "a": true, "h": "Cloud Provider", "n": "cloud_provider", "r": true, "t": "`$STRING`", "key$": "cloud_provider", "index$": 0 }, "databases": { "a": true, "h": "Databases", "n": "databases", "r": true, "t": "`$ARRAY`", "key$": "databases", "index$": 1 }, "inserted_at": { "a": true, "h": "Inserted At", "n": "inserted_at", "r": true, "t": "`$STRING`", "key$": "inserted_at", "index$": 2 }, "is_branch": { "a": true, "h": "Is Branch", "n": "is_branch", "r": true, "t": "`$BOOLEAN`", "key$": "is_branch", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 4 }, "ref": { "a": true, "h": "Ref", "n": "ref", "r": true, "t": "`$STRING`", "key$": "ref", "index$": 5 }, "region": { "a": true, "h": "Region", "n": "region", "r": true, "t": "`$STRING`", "key$": "region", "index$": 6 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 7 } }, "name": "organization_projects_response_output", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/organizations/{slug}/projects", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "tsrqponmlkjihgfedcba", "k": "param", "n": "slug", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 20, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "offset", "or": "offset", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": "acme", "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "created_desc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "ACTIVE_HEALTHY,INACTIVE", "k": "query", "n": "status", "or": "statuses", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/v1/organizations/{slug}/projects", "q": { "exist": ["limit", "offset", "search", "slug", "sort", "status"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "organizations" }, { "var": "slug" }, { "lit": "projects" }], "t": { "req": "`reqdata`", "res": "`body.projects`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.organization"]] }, "key$": "organization_projects_response_output", "name__orig": "organization_projects_response_output", "Name": "OrganizationProjectsResponseOutput", "name_": "organization_projects_response_output", "name-": "organization-projects-response-output", "NAME": "ORGANIZATION_PROJECTS_RESPONSE_OUTPUT", "index$": 39 }, { "active": true, "entity": "organization_projects_response_output", "key$": "BasicOrganizationProjectsResponseOutputFlow", "kind": "basic", "name": "BasicOrganizationProjectsResponseOutputFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "slug": "slug01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "organization_projects_response_output_ref01" } }] }] }, 'OrganizationProjectsResponseOutput', { "GET /v1/organizations/{slug}/projects": { "protocol": "http", "parameters": [{ "name": "slug", "required": true, "in": "path", "description": "Organization slug", "schema": { "pattern": "^[\\w-]+$", "example": "tsrqponmlkjihgfedcba", "type": "string" }, "index$": 0 }, { "name": "offset", "required": false, "in": "query", "description": "Number of projects to skip", "schema": { "minimum": 0, "maximum": 9007199254740991, "default": 0, "example": 0, "type": "integer" }, "index$": 1 }, { "name": "limit", "required": false, "in": "query", "description": "Number of projects to return per page", "schema": { "minimum": 1, "maximum": 100, "default": 100, "example": 20, "type": "integer" }, "index$": 2 }, { "name": "search", "required": false, "in": "query", "description": "Search projects by name", "schema": { "example": "acme", "type": "string" }, "index$": 3 }, { "name": "sort", "required": false, "in": "query", "description": "Sort order for projects", "schema": { "default": "name_asc", "example": "created_desc", "type": "string", "enum": ["name_asc", "name_desc", "created_asc", "created_desc"] }, "index$": 4 }, { "name": "statuses", "required": false, "in": "query", "description": "A comma-separated list of project statuses to filter by.\n\nThe following values are supported: `ACTIVE_HEALTHY`, `INACTIVE`.", "schema": { "example": "ACTIVE_HEALTHY,INACTIVE", "type": "string" }, "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let organization_projects_response_output_ref01_data = Object.values(setup.data.existing.organization_projects_response_output)[0];
        // LIST
        const organization_projects_response_output_ref01_ent = client.OrganizationProjectsResponseOutput();
        const organization_projects_response_output_ref01_match = {};
        organization_projects_response_output_ref01_match['slug'] = setup.idmap['slug01'];
        const organization_projects_response_output_ref01_list = (await organization_projects_response_output_ref01_ent.list(organization_projects_response_output_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_projects_response_output/OrganizationProjectsResponseOutputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_projects_response_output01', 'organization_projects_response_output02', 'organization_projects_response_output03', 'organization01', 'organization02', 'organization03', 'slug01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_ORGANIZATION_PROJECTS_RESPONSE_OUTPUT_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_ORGANIZATION_PROJECTS_RESPONSE_OUTPUT_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_ORGANIZATION_PROJECTS_RESPONSE_OUTPUT_ENTID'];
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
//# sourceMappingURL=OrganizationProjectsResponseOutputEntity.test.js.map