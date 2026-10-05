

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


describe('V1PgbouncerConfigResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1PgbouncerConfigResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_pgbouncer_config_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"connection_string":{"a":true,"h":"Connection String","n":"connection_string","r":false,"t":"`$STRING`","key$":"connection_string","index$":0},"default_pool_size":{"a":true,"h":"Default Pool Size","n":"default_pool_size","r":false,"t":"`$INTEGER`","key$":"default_pool_size","index$":1},"ignore_startup_parameters":{"a":true,"h":"Ignore Startup Parameters","n":"ignore_startup_parameters","r":false,"t":"`$STRING`","key$":"ignore_startup_parameters","index$":2},"max_client_conn":{"a":true,"h":"Max Client Conn","n":"max_client_conn","r":false,"t":"`$INTEGER`","key$":"max_client_conn","index$":3},"pool_mode":{"a":true,"h":"Pool Mode","n":"pool_mode","r":false,"t":"`$STRING`","key$":"pool_mode","index$":4},"query_wait_timeout":{"a":true,"h":"Query Wait Timeout","n":"query_wait_timeout","r":false,"t":"`$INTEGER`","key$":"query_wait_timeout","index$":5},"reserve_pool_size":{"a":true,"h":"Reserve Pool Size","n":"reserve_pool_size","r":false,"t":"`$INTEGER`","key$":"reserve_pool_size","index$":6},"server_idle_timeout":{"a":true,"h":"Server Idle Timeout","n":"server_idle_timeout","r":false,"t":"`$INTEGER`","key$":"server_idle_timeout","index$":7},"server_lifetime":{"a":true,"h":"Server Lifetime","n":"server_lifetime","r":false,"t":"`$INTEGER`","key$":"server_lifetime","index$":8}},"name":"v1_pgbouncer_config_response_output","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/config/database/pgbouncer","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/config/database/pgbouncer","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"database"},{"lit":"pgbouncer"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"v1_pgbouncer_config_response_output","name__orig":"v1_pgbouncer_config_response_output","Name":"V1PgbouncerConfigResponseOutput","name_":"v1_pgbouncer_config_response_output","name-":"v1-pgbouncer-config-response-output","NAME":"V1_PGBOUNCER_CONFIG_RESPONSE_OUTPUT","index$":78}, {"active":true,"entity":"v1_pgbouncer_config_response_output","key$":"BasicV1PgbouncerConfigResponseOutputFlow","kind":"basic","name":"BasicV1PgbouncerConfigResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"v1_pgbouncer_config_response_output_ref01","srcdatavar":"v1_pgbouncer_config_response_output_ref01_data","suffix":"_dt0"},"m":{"id":"v1_pgbouncer_config_response_output01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1_pgbouncer_config_response_output_ref01"}}]}]}, 'V1PgbouncerConfigResponseOutput', {"GET /v1/projects/{ref}/config/database/pgbouncer":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_pgbouncer_config_response_output_ref01_data = Object.values(setup.data.existing.v1_pgbouncer_config_response_output)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const v1_pgbouncer_config_response_output_ref01_ent = client.V1PgbouncerConfigResponseOutput()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_pgbouncer_config_response_output/V1PgbouncerConfigResponseOutputTestData.json')

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
    ['v1_pgbouncer_config_response_output01','v1_pgbouncer_config_response_output02','v1_pgbouncer_config_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_PGBOUNCER_CONFIG_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_PGBOUNCER_CONFIG_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_PGBOUNCER_CONFIG_RESPONSE_OUTPUT_ENTID']
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
  
