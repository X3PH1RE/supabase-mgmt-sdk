

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


describe('DatabaseUpgradeStatusResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.DatabaseUpgradeStatusResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'database_upgrade_status_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$STRING`","key$":"error","index$":0},"initiated_at":{"a":true,"h":"Initiated At","n":"initiated_at","r":true,"t":"`$STRING`","key$":"initiated_at","index$":1},"latest_status_at":{"a":true,"h":"Latest Status At","n":"latest_status_at","r":true,"t":"`$STRING`","key$":"latest_status_at","index$":2},"progress":{"a":true,"h":"Progress","n":"progress","r":false,"t":"`$STRING`","key$":"progress","index$":3},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$NUMBER`","key$":"status","index$":4},"target_version":{"a":true,"h":"Target Version","n":"target_version","r":true,"t":"`$STRING`","key$":"target_version","index$":5}},"name":"database_upgrade_status_response_output","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/upgrade/status","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c","k":"query","n":"tracking_id","or":"tracking_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/upgrade/status","q":{"exist":["project_id","tracking_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"upgrade"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body.databaseUpgradeStatus`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"database_upgrade_status_response_output","name__orig":"database_upgrade_status_response_output","Name":"DatabaseUpgradeStatusResponseOutput","name_":"database_upgrade_status_response_output","name-":"database-upgrade-status-response-output","NAME":"DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT","index$":12}, {"active":true,"entity":"database_upgrade_status_response_output","key$":"BasicDatabaseUpgradeStatusResponseOutputFlow","kind":"basic","name":"BasicDatabaseUpgradeStatusResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"database_upgrade_status_response_output_ref01","srcdatavar":"database_upgrade_status_response_output_ref01_data","suffix":"_dt0"},"m":{"id":"database_upgrade_status_response_output01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-database_upgrade_status_response_output_ref01"}}]}]}, 'DatabaseUpgradeStatusResponseOutput', {"GET /v1/projects/{ref}/upgrade/status":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"tracking_id","required":false,"in":"query","schema":{"example":"9f4d3a20-6b2e-4a7e-8c91-1d5f3e7a2b4c","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let database_upgrade_status_response_output_ref01_data = Object.values(setup.data.existing.database_upgrade_status_response_output)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const database_upgrade_status_response_output_ref01_ent = client.DatabaseUpgradeStatusResponseOutput()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/database_upgrade_status_response_output/DatabaseUpgradeStatusResponseOutputTestData.json')

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
    ['database_upgrade_status_response_output01','database_upgrade_status_response_output02','database_upgrade_status_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_DATABASE_UPGRADE_STATUS_RESPONSE_OUTPUT_ENTID']
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
  
