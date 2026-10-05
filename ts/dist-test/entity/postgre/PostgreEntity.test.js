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
(0, node_test_1.describe)('PostgreEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SUPABASE_MGMT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SupabaseMgmtSDK.test();
        const ent = testsdk.Postgre();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'postgre.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "checkpoint_timeout": { "a": true, "h": "Checkpoint Timeout", "n": "checkpoint_timeout", "r": false, "sh": "Default unit: s", "t": "`$STRING`", "key$": "checkpoint_timeout", "index$": 0 }, "cron_log_statement": { "a": true, "h": "Cron Log Statement", "n": "cron_log_statement", "r": false, "t": "`$BOOLEAN`", "key$": "cron_log_statement", "index$": 1 }, "effective_cache_size": { "a": true, "h": "Effective Cache Size", "n": "effective_cache_size", "r": false, "t": "`$STRING`", "key$": "effective_cache_size", "index$": 2 }, "hot_standby_feedback": { "a": true, "h": "Hot Standby Feedback", "n": "hot_standby_feedback", "r": false, "t": "`$BOOLEAN`", "key$": "hot_standby_feedback", "index$": 3 }, "log_autovacuum_min_duration": { "a": true, "h": "Log Autovacuum Min Duration", "n": "log_autovacuum_min_duration", "r": false, "sh": "Default unit: ms", "t": "`$STRING`", "key$": "log_autovacuum_min_duration", "index$": 4 }, "log_checkpoints": { "a": true, "h": "Log Checkpoints", "n": "log_checkpoints", "r": false, "t": "`$BOOLEAN`", "key$": "log_checkpoints", "index$": 5 }, "log_connections": { "a": true, "h": "Log Connections", "n": "log_connections", "r": false, "t": "`$BOOLEAN`", "key$": "log_connections", "index$": 6 }, "log_disconnections": { "a": true, "h": "Log Disconnections", "n": "log_disconnections", "r": false, "t": "`$BOOLEAN`", "key$": "log_disconnections", "index$": 7 }, "log_duration": { "a": true, "h": "Log Duration", "n": "log_duration", "r": false, "t": "`$BOOLEAN`", "key$": "log_duration", "index$": 8 }, "log_lock_waits": { "a": true, "h": "Log Lock Waits", "n": "log_lock_waits", "r": false, "t": "`$BOOLEAN`", "key$": "log_lock_waits", "index$": 9 }, "log_recovery_conflict_waits": { "a": true, "h": "Log Recovery Conflict Waits", "n": "log_recovery_conflict_waits", "r": false, "t": "`$BOOLEAN`", "key$": "log_recovery_conflict_waits", "index$": 10 }, "log_replication_commands": { "a": true, "h": "Log Replication Commands", "n": "log_replication_commands", "r": false, "t": "`$BOOLEAN`", "key$": "log_replication_commands", "index$": 11 }, "log_startup_progress_interval": { "a": true, "h": "Log Startup Progress Interval", "n": "log_startup_progress_interval", "r": false, "sh": "Default unit: ms", "t": "`$STRING`", "key$": "log_startup_progress_interval", "index$": 12 }, "log_temp_files": { "a": true, "h": "Log Temp Files", "n": "log_temp_files", "r": false, "t": "`$STRING`", "key$": "log_temp_files", "index$": 13 }, "logical_decoding_work_mem": { "a": true, "h": "Logical Decoding Work Mem", "n": "logical_decoding_work_mem", "r": false, "t": "`$STRING`", "key$": "logical_decoding_work_mem", "index$": 14 }, "maintenance_work_mem": { "a": true, "h": "Maintenance Work Mem", "n": "maintenance_work_mem", "r": false, "t": "`$STRING`", "key$": "maintenance_work_mem", "index$": 15 }, "max_connections": { "a": true, "h": "Max Connections", "n": "max_connections", "r": false, "t": "`$INTEGER`", "key$": "max_connections", "index$": 16 }, "max_locks_per_transaction": { "a": true, "h": "Max Locks Per Transaction", "n": "max_locks_per_transaction", "r": false, "t": "`$INTEGER`", "key$": "max_locks_per_transaction", "index$": 17 }, "max_logical_replication_workers": { "a": true, "h": "Max Logical Replication Workers", "n": "max_logical_replication_workers", "r": false, "t": "`$INTEGER`", "key$": "max_logical_replication_workers", "index$": 18 }, "max_parallel_maintenance_workers": { "a": true, "h": "Max Parallel Maintenance Workers", "n": "max_parallel_maintenance_workers", "r": false, "t": "`$INTEGER`", "key$": "max_parallel_maintenance_workers", "index$": 19 }, "max_parallel_workers": { "a": true, "h": "Max Parallel Workers", "n": "max_parallel_workers", "r": false, "t": "`$INTEGER`", "key$": "max_parallel_workers", "index$": 20 }, "max_parallel_workers_per_gather": { "a": true, "h": "Max Parallel Workers Per Gather", "n": "max_parallel_workers_per_gather", "r": false, "t": "`$INTEGER`", "key$": "max_parallel_workers_per_gather", "index$": 21 }, "max_replication_slots": { "a": true, "h": "Max Replication Slots", "n": "max_replication_slots", "r": false, "t": "`$INTEGER`", "key$": "max_replication_slots", "index$": 22 }, "max_slot_wal_keep_size": { "a": true, "h": "Max Slot Wal Keep Size", "n": "max_slot_wal_keep_size", "r": false, "t": "`$STRING`", "key$": "max_slot_wal_keep_size", "index$": 23 }, "max_standby_archive_delay": { "a": true, "h": "Max Standby Archive Delay", "n": "max_standby_archive_delay", "r": false, "t": "`$STRING`", "key$": "max_standby_archive_delay", "index$": 24 }, "max_standby_streaming_delay": { "a": true, "h": "Max Standby Streaming Delay", "n": "max_standby_streaming_delay", "r": false, "t": "`$STRING`", "key$": "max_standby_streaming_delay", "index$": 25 }, "max_sync_workers_per_subscription": { "a": true, "h": "Max Sync Workers Per Subscription", "n": "max_sync_workers_per_subscription", "r": false, "t": "`$INTEGER`", "key$": "max_sync_workers_per_subscription", "index$": 26 }, "max_wal_senders": { "a": true, "h": "Max Wal Senders", "n": "max_wal_senders", "r": false, "t": "`$INTEGER`", "key$": "max_wal_senders", "index$": 27 }, "max_wal_size": { "a": true, "h": "Max Wal Size", "n": "max_wal_size", "r": false, "t": "`$STRING`", "key$": "max_wal_size", "index$": 28 }, "max_worker_processes": { "a": true, "h": "Max Worker Processes", "n": "max_worker_processes", "r": false, "t": "`$INTEGER`", "key$": "max_worker_processes", "index$": 29 }, "restart_database": { "a": true, "h": "Restart Database", "n": "restart_database", "r": false, "t": "`$BOOLEAN`", "key$": "restart_database", "index$": 30 }, "session_replication_role": { "a": true, "h": "Session Replication Role", "n": "session_replication_role", "r": false, "t": "`$STRING`", "key$": "session_replication_role", "index$": 31 }, "shared_buffers": { "a": true, "h": "Shared Buffers", "n": "shared_buffers", "r": false, "t": "`$STRING`", "key$": "shared_buffers", "index$": 32 }, "statement_timeout": { "a": true, "h": "Statement Timeout", "n": "statement_timeout", "r": false, "sh": "Default unit: ms", "t": "`$STRING`", "key$": "statement_timeout", "index$": 33 }, "track_activity_query_size": { "a": true, "h": "Track Activity Query Size", "n": "track_activity_query_size", "r": false, "t": "`$STRING`", "key$": "track_activity_query_size", "index$": 34 }, "track_commit_timestamp": { "a": true, "h": "Track Commit Timestamp", "n": "track_commit_timestamp", "r": false, "t": "`$BOOLEAN`", "key$": "track_commit_timestamp", "index$": 35 }, "wal_keep_size": { "a": true, "h": "Wal Keep Size", "n": "wal_keep_size", "r": false, "t": "`$STRING`", "key$": "wal_keep_size", "index$": 36 }, "wal_sender_timeout": { "a": true, "h": "Wal Sender Timeout", "n": "wal_sender_timeout", "r": false, "sh": "Default unit: ms", "t": "`$STRING`", "key$": "wal_sender_timeout", "index$": 37 }, "work_mem": { "a": true, "h": "Work Mem", "n": "work_mem", "r": false, "t": "`$STRING`", "key$": "work_mem", "index$": 38 } }, "name": "postgre", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/projects/{ref}/config/database/postgres", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/projects/{ref}/config/database/postgres", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "database" }, { "lit": "postgres" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /v1/projects/{ref}/config/database/postgres", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abcdefghijklmnopqrst", "k": "param", "n": "project_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v1/projects/{ref}/config/database/postgres", "q": { "exist": ["project_id"] }, "r": { "param": { "ref": "project_id" } }, "s": [{ "lit": "v1" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "config" }, { "lit": "database" }, { "lit": "postgres" }], "t": { "req": { "checkpoint_timeout": "`reqdata.checkpoint_timeout`", "cron.log_statement": "`reqdata.cron_log_statement`", "effective_cache_size": "`reqdata.effective_cache_size`", "hot_standby_feedback": "`reqdata.hot_standby_feedback`", "log_autovacuum_min_duration": "`reqdata.log_autovacuum_min_duration`", "log_checkpoints": "`reqdata.log_checkpoint`", "log_connections": "`reqdata.log_connection`", "log_disconnections": "`reqdata.log_disconnection`", "log_duration": "`reqdata.log_duration`", "log_lock_waits": "`reqdata.log_lock_wait`", "log_recovery_conflict_waits": "`reqdata.log_recovery_conflict_wait`", "log_replication_commands": "`reqdata.log_replication_command`", "log_startup_progress_interval": "`reqdata.log_startup_progress_interval`", "log_temp_files": "`reqdata.log_temp_file`", "logical_decoding_work_mem": "`reqdata.logical_decoding_work_mem`", "maintenance_work_mem": "`reqdata.maintenance_work_mem`", "max_connections": "`reqdata.max_connection`", "max_locks_per_transaction": "`reqdata.max_locks_per_transaction`", "max_logical_replication_workers": "`reqdata.max_logical_replication_worker`", "max_parallel_maintenance_workers": "`reqdata.max_parallel_maintenance_worker`", "max_parallel_workers": "`reqdata.max_parallel_worker`", "max_parallel_workers_per_gather": "`reqdata.max_parallel_workers_per_gather`", "max_replication_slots": "`reqdata.max_replication_slot`", "max_slot_wal_keep_size": "`reqdata.max_slot_wal_keep_size`", "max_standby_archive_delay": "`reqdata.max_standby_archive_delay`", "max_standby_streaming_delay": "`reqdata.max_standby_streaming_delay`", "max_sync_workers_per_subscription": "`reqdata.max_sync_workers_per_subscription`", "max_wal_senders": "`reqdata.max_wal_sender`", "max_wal_size": "`reqdata.max_wal_size`", "max_worker_processes": "`reqdata.max_worker_process`", "restart_database": "`reqdata.restart_database`", "session_replication_role": "`reqdata.session_replication_role`", "shared_buffers": "`reqdata.shared_buffer`", "statement_timeout": "`reqdata.statement_timeout`", "track_activity_query_size": "`reqdata.track_activity_query_size`", "track_commit_timestamp": "`reqdata.track_commit_timestamp`", "wal_keep_size": "`reqdata.wal_keep_size`", "wal_sender_timeout": "`reqdata.wal_sender_timeout`", "work_mem": "`reqdata.work_mem`" }, "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "postgre", "name__orig": "postgre", "Name": "Postgre", "name_": "postgre", "name-": "postgre", "NAME": "POSTGRE", "index$": 42 }, { "active": true, "entity": "postgre", "key$": "BasicPostgreFlow", "kind": "basic", "name": "BasicPostgreFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "postgre_ref01", "srcdatavar": "postgre_ref01_data", "suffix": "_up0", "textfield": "checkpoint_timeout" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-postgre_ref01" } }], "v": [] }, { "a": true, "d": {}, "i": { "ref": "postgre_ref01", "srcdatavar": "postgre_ref01_data", "suffix": "_dt0" }, "m": { "id": "postgre01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-postgre_ref01" } }] }] }, 'Postgre', { "GET /v1/projects/{ref}/config/database/postgres": { "protocol": "http", "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] }, "PUT /v1/projects/{ref}/config/database/postgres": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "effective_cache_size": { "type": "string", "key$": "effective_cache_size" }, "logical_decoding_work_mem": { "type": "string", "key$": "logical_decoding_work_mem" }, "cron.log_statement": { "type": "boolean", "key$": "cron.log_statement" }, "log_autovacuum_min_duration": { "type": "string", "description": "Default unit: ms", "pattern": "^(-?[0-9]+(?:\\.[0-9]+)?)(us|ms|s|min|h|d)?$", "key$": "log_autovacuum_min_duration" }, "log_checkpoints": { "type": "boolean", "key$": "log_checkpoints" }, "log_connections": { "type": "boolean", "key$": "log_connections" }, "log_disconnections": { "type": "boolean", "key$": "log_disconnections" }, "log_duration": { "type": "boolean", "key$": "log_duration" }, "log_lock_waits": { "type": "boolean", "key$": "log_lock_waits" }, "log_recovery_conflict_waits": { "type": "boolean", "key$": "log_recovery_conflict_waits" }, "log_replication_commands": { "type": "boolean", "key$": "log_replication_commands" }, "log_startup_progress_interval": { "type": "string", "description": "Default unit: ms", "pattern": "^(-?[0-9]+(?:\\.[0-9]+)?)(us|ms|s|min|h|d)?$", "key$": "log_startup_progress_interval" }, "log_temp_files": { "type": "string", "key$": "log_temp_files" }, "maintenance_work_mem": { "type": "string", "key$": "maintenance_work_mem" }, "track_activity_query_size": { "type": "string", "key$": "track_activity_query_size" }, "max_connections": { "type": "integer", "minimum": 1, "maximum": 262143, "key$": "max_connections" }, "max_locks_per_transaction": { "type": "integer", "minimum": 10, "maximum": 2147483640, "key$": "max_locks_per_transaction" }, "max_logical_replication_workers": { "type": "integer", "minimum": 0, "maximum": 262143, "key$": "max_logical_replication_workers" }, "max_parallel_maintenance_workers": { "type": "integer", "minimum": 0, "maximum": 1024, "key$": "max_parallel_maintenance_workers" }, "max_parallel_workers": { "type": "integer", "minimum": 0, "maximum": 1024, "key$": "max_parallel_workers" }, "max_parallel_workers_per_gather": { "type": "integer", "minimum": 0, "maximum": 1024, "key$": "max_parallel_workers_per_gather" }, "max_replication_slots": { "type": "integer", "minimum": -9007199254740991, "maximum": 9007199254740991, "key$": "max_replication_slots" }, "max_slot_wal_keep_size": { "type": "string", "key$": "max_slot_wal_keep_size" }, "max_standby_archive_delay": { "type": "string", "key$": "max_standby_archive_delay" }, "max_standby_streaming_delay": { "type": "string", "key$": "max_standby_streaming_delay" }, "max_sync_workers_per_subscription": { "type": "integer", "minimum": 0, "maximum": 262143, "key$": "max_sync_workers_per_subscription" }, "max_wal_size": { "type": "string", "key$": "max_wal_size" }, "max_wal_senders": { "type": "integer", "minimum": -9007199254740991, "maximum": 9007199254740991, "key$": "max_wal_senders" }, "max_worker_processes": { "type": "integer", "minimum": 0, "maximum": 262143, "key$": "max_worker_processes" }, "session_replication_role": { "type": "string", "enum": ["origin", "replica", "local"], "key$": "session_replication_role" }, "shared_buffers": { "type": "string", "key$": "shared_buffers" }, "statement_timeout": { "type": "string", "description": "Default unit: ms", "pattern": "^(-?[0-9]+(?:\\.[0-9]+)?)(us|ms|s|min|h|d)?$", "key$": "statement_timeout" }, "track_commit_timestamp": { "type": "boolean", "key$": "track_commit_timestamp" }, "wal_keep_size": { "type": "string", "key$": "wal_keep_size" }, "wal_sender_timeout": { "type": "string", "description": "Default unit: ms", "pattern": "^(-?[0-9]+(?:\\.[0-9]+)?)(us|ms|s|min|h|d)?$", "key$": "wal_sender_timeout" }, "work_mem": { "type": "string", "key$": "work_mem" }, "checkpoint_timeout": { "type": "string", "description": "Default unit: s", "pattern": "^(-?[0-9]+(?:\\.[0-9]+)?)(us|ms|s|min|h|d)?$", "key$": "checkpoint_timeout" }, "hot_standby_feedback": { "type": "boolean", "key$": "hot_standby_feedback" }, "restart_database": { "type": "boolean", "key$": "restart_database" } }, "example": { "max_connections": 120, "shared_buffers": "256MB", "work_mem": "4MB", "statement_timeout": "60000ms" }, "additionalProperties": false, "x-ref": "#/components/schemas/UpdatePostgresConfigBody", "index$": 1 } } } }, "parameters": [{ "name": "ref", "required": true, "in": "path", "description": "Project ref", "schema": { "minLength": 20, "maxLength": 20, "pattern": "^[a-z]+$", "example": "abcdefghijklmnopqrst", "type": "string" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let postgre_ref01_data = Object.values(setup.data.existing.postgre)[0];
        // UPDATE
        const postgre_ref01_ent = client.Postgre();
        const postgre_ref01_data_up0 = {};
        const postgre_ref01_markdef_up0 = { name: 'checkpoint_timeout', value: 'Mark01-postgre_ref01_' + setup.now };
        postgre_ref01_data_up0[postgre_ref01_markdef_up0.name] = postgre_ref01_markdef_up0.value;
        const postgre_ref01_resdata_up0 = (await postgre_ref01_ent.update(postgre_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != postgre_ref01_resdata_up0);
        (0, node_assert_1.default)(postgre_ref01_resdata_up0[postgre_ref01_markdef_up0.name] === postgre_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/postgre/PostgreTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SupabaseMgmtSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['postgre01', 'postgre02', 'postgre03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SUPABASE_MGMT_TEST_POSTGRE_ENTID': idmap,
        'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
        'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
        'SUPABASE_MGMT_APIKEY': '',
    });
    idmap = env['SUPABASE_MGMT_TEST_POSTGRE_ENTID'];
    const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SUPABASE_MGMT_TEST_POSTGRE_ENTID'];
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
//# sourceMappingURL=PostgreEntity.test.js.map