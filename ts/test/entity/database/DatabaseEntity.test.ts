

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SupabaseMgmtSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('DatabaseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Database()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"database_identifier":{"a":true,"h":"Database Identifier","n":"database_identifier","r":true,"t":"`$STRING`","key$":"database_identifier","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$INTEGER`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":2},"parameters":{"a":true,"h":"Parameters","n":"parameters","r":false,"t":"`$ARRAY`","key$":"parameters","index$":3},"query":{"a":true,"h":"Query","n":"query","r":true,"t":"`$STRING`","key$":"query","index$":4},"read_replica_region":{"a":true,"h":"Read Replica Region","n":"read_replica_region","r":true,"sh":"Region you want your read replica to reside in","t":"`$STRING`","key$":"read_replica_region","index$":5},"recovery_time_target_unix":{"a":true,"fo":"int64","h":"Recovery Time Target Unix","n":"recovery_time_target_unix","r":true,"t":"`$INTEGER`","key$":"recovery_time_target_unix","index$":6},"rollback":{"a":true,"h":"Rollback","n":"rollback","r":false,"t":"`$STRING`","key$":"rollback","index$":7}},"id":{"field":"id","name":"id"},"name":"database","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/migrations","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/migrations","q":{"$action":"migration","exist":["idempotency_key","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"migrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/backups/restore","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/backups/restore","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"backups"},{"lit":"restore"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/backups/restore-pitr","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/backups/restore-pitr","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"backups"},{"lit":"restore-pitr"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/backups/undo","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/backups/undo","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"backups"},{"lit":"undo"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/query","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/query","q":{"$action":"query","exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"query"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/query/read-only","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/query/read-only","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"query"},{"lit":"read-only"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/webhooks/enable","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/webhooks/enable","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"webhooks"},{"lit":"enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"POST /v1/projects/{ref}/read-replicas/remove","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/read-replicas/remove","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"read-replicas"},{"lit":"remove"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"POST /v1/projects/{ref}/read-replicas/setup","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/read-replicas/setup","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"read-replicas"},{"lit":"setup"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"POST /v1/projects/{ref}/readonly/temporary-disable","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/readonly/temporary-disable","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"readonly"},{"lit":"temporary-disable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/database/context","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/database/context","q":{"$action":"context","exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"context"}],"t":{"req":"`reqdata`","res":"`body.databases`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/database/openapi","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"public","k":"query","n":"schema","or":"schema","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/database/openapi","q":{"$action":"openapi","exist":["project_id","schema"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"openapi"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/projects/{ref}/jit-access","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/jit-access","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"jit-access"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/database/migrations","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"20250312000000","k":"query","n":"gte","or":"gte","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/database/migrations","q":{"$action":"migration","exist":["gte","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"migrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/database/jit/invite/{invite_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"55555555-5555-4555-8555-555555555555","k":"param","n":"invite_id","or":"invite_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/database/jit/invite/{invite_id}","q":{"exist":["invite_id","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"jit"},{"lit":"invite"},{"var":"invite_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/database/jit/{user_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"55555555-5555-4555-8555-555555555555","k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/database/jit/{user_id}","q":{"exist":["project_id","user_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"jit"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/database/migrations","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/database/migrations","q":{"$action":"migration","exist":["idempotency_key","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"migrations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/database/migrations/{version}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"20250312000000","k":"param","n":"version","or":"version","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/database/migrations/{version}","q":{"exist":["project_id","version"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"migrations"},{"var":"version"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.invite"],["$.main.kit.entity.project","$.main.kit.entity.jit"],["$.main.kit.entity.project"]]},"key$":"database","name__orig":"database","Name":"Database","name_":"database","name-":"database","NAME":"DATABASE","index$":11}, {"active":true,"entity":"database","key$":"BasicDatabaseFlow","kind":"basic","name":"BasicDatabaseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"database_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"database_ref01"}}]},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"database_ref01","srcdatavar":"database_ref01_data","suffix":"_up0","textfield":"database_identifier"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"database_ref01","srcdatavar":"database_ref01_data","suffix":"_dt0"},"m":{"id":"database01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_ref01"}}]},{"a":true,"d":{},"i":{"ref":"database_ref01","suffix":"_rm0"},"m":{"id":"database01","project_id":"project01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"database_ref01"}}]}]}, 'Database', {"POST /v1/projects/{ref}/database/migrations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"query":{"type":"string","minLength":1},"name":{"type":"string"},"rollback":{"type":"string"}},"required":["query"],"example":{"query":"create table public.widgets(id bigint primary key);","name":"create_widgets_table","rollback":"drop table if exists public.widgets;"},"x-ref":"#/components/schemas/V1CreateMigrationBody"}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"Idempotency-Key","required":false,"in":"header","description":"A unique key to ensure the same migration is tracked only once.","schema":{"type":"string"},"index$":1}]},"POST /v1/projects/{ref}/database/backups/restore":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"id":{"type":"integer","minimum":-9007199254740991,"maximum":9007199254740991,"key$":"id"}},"required":["id"],"example":{"id":12345},"x-ref":"#/components/schemas/V1RestoreBackupBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/database/backups/restore-pitr":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"recovery_time_target_unix":{"type":"integer","minimum":0,"maximum":9007199254740991,"format":"int64","key$":"recovery_time_target_unix"}},"required":["recovery_time_target_unix"],"example":{"recovery_time_target_unix":1740787200},"x-ref":"#/components/schemas/V1RestorePitrBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/database/backups/undo":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":20,"key$":"name"}},"required":["name"],"example":{"name":"before-upgrade"},"x-ref":"#/components/schemas/V1UndoBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/database/query":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"query":{"type":"string","minLength":1},"parameters":{"type":"array","items":{}},"read_only":{"type":"boolean"}},"required":["query"],"example":{"query":"select * from pg_stat_activity limit 1;","read_only":true},"x-ref":"#/components/schemas/V1RunQueryBody"}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/database/query/read-only":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"query":{"type":"string","minLength":1,"key$":"query"},"parameters":{"type":"array","items":{},"key$":"parameters"}},"required":["query"],"example":{"query":"select * from pg_stat_activity limit 1;"},"x-ref":"#/components/schemas/V1ReadOnlyQueryBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/database/webhooks/enable":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/read-replicas/remove":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"database_identifier":{"type":"string","key$":"database_identifier"}},"required":["database_identifier"],"example":{"database_identifier":"abcdefghijklmnopqrst-rr-us-west-1-abcde"},"x-ref":"#/components/schemas/RemoveReadReplicaBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/read-replicas/setup":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"read_replica_region":{"type":"string","enum":["us-east-1","us-east-2","us-west-1","us-west-2","ap-east-1","ap-southeast-1","ap-northeast-1","ap-northeast-2","ap-southeast-2","eu-west-1","eu-west-2","eu-west-3","eu-north-1","eu-central-1","eu-central-2","ca-central-1","ap-south-1","sa-east-1"],"description":"Region you want your read replica to reside in","key$":"read_replica_region"}},"required":["read_replica_region"],"example":{"read_replica_region":"us-west-1"},"x-ref":"#/components/schemas/SetUpReadReplicaBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/readonly/temporary-disable":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/database/context":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/database/openapi":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"schema","required":false,"in":"query","description":"The database schema to generate the OpenAPI spec for","schema":{"default":"public","type":"string"},"index$":1}]},"GET /v1/projects/{ref}/jit-access":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"DELETE /v1/projects/{ref}/database/migrations":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"gte","required":true,"in":"query","description":"Rollback migrations greater or equal to this version","schema":{"pattern":"^\\d+$","example":"20250312000000","type":"string"},"index$":1}]},"DELETE /v1/projects/{ref}/database/jit/invite/{invite_id}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"invite_id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"55555555-5555-4555-8555-555555555555","type":"string"},"index$":1}]},"DELETE /v1/projects/{ref}/database/jit/{user_id}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"user_id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"55555555-5555-4555-8555-555555555555","type":"string"},"index$":1}]},"PUT /v1/projects/{ref}/database/migrations":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"query":{"type":"string","minLength":1},"name":{"type":"string"},"rollback":{"type":"string"}},"required":["query"],"example":{"query":"create table public.widgets(id bigint primary key);","name":"create_widgets_table","rollback":"drop table if exists public.widgets;"},"x-ref":"#/components/schemas/V1UpsertMigrationBody"}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"Idempotency-Key","required":false,"in":"header","description":"A unique key to ensure the same migration is tracked only once.","schema":{"type":"string"},"index$":1}]},"PATCH /v1/projects/{ref}/database/migrations/{version}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","key$":"name"},"rollback":{"type":"string","key$":"rollback"}},"example":{"name":"create_widgets_table","rollback":"drop table if exists public.widgets;"},"x-ref":"#/components/schemas/V1PatchMigrationBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"version","required":true,"in":"path","schema":{"pattern":"^\\d+$","example":"20250312000000","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const database_ref01_ent = client.Database()
    let database_ref01_data = setup.data.new.database['database_ref01']
    database_ref01_data['project_id'] = setup.idmap['project01']

    database_ref01_data = (await database_ref01_ent.create(database_ref01_data)).data()
    assert(null != database_ref01_data.id)


    // LIST
    const database_ref01_match: any = {}
    database_ref01_match['project_id'] = setup.idmap['project01']

    const database_ref01_list = (await database_ref01_ent.list(database_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(database_ref01_list, { id: database_ref01_data.id })))


    // UPDATE
    const database_ref01_data_up0: any = {}
    database_ref01_data_up0.id = database_ref01_data.id
    database_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const database_ref01_markdef_up0 = { name: 'database_identifier', value: 'Mark01-database_ref01_' + setup.now }
    ;(database_ref01_data_up0 as any)[database_ref01_markdef_up0.name] = database_ref01_markdef_up0.value

    const database_ref01_resdata_up0 = (await database_ref01_ent.update(database_ref01_data_up0)).data()
    assert(database_ref01_resdata_up0.id === database_ref01_data_up0.id)

    assert((database_ref01_resdata_up0 as any)[database_ref01_markdef_up0.name] === database_ref01_markdef_up0.value)


    // LOAD
    const database_ref01_match_dt0: any = {}
    database_ref01_match_dt0.id = database_ref01_data.id
    const database_ref01_data_dt0 = (await database_ref01_ent.load(database_ref01_match_dt0)).data()
    assert(database_ref01_data_dt0.id === database_ref01_data.id)


    // REMOVE
    const database_ref01_match_rm0: any = { id: database_ref01_data.id }
    await database_ref01_ent.remove(database_ref01_match_rm0)
  

    // LIST
    const database_ref01_match_rt0: any = {}
    database_ref01_match_rt0['project_id'] = setup.idmap['project01']

    const database_ref01_list_rt0 = (await database_ref01_ent.list(database_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(database_ref01_list_rt0, { id: database_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/database/DatabaseTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SupabaseMgmtSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['database01','database02','database03','project01','project02','project03','invite01','invite02','invite03','jit01','jit02','jit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_DATABASE_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_DATABASE_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_DATABASE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SupabaseMgmtSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
