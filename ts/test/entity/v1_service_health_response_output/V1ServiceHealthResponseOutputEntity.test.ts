

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


describe('V1ServiceHealthResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1ServiceHealthResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_service_health_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"error":{"a":true,"h":"Error","n":"error","r":false,"t":"`$STRING`","key$":"error","index$":0},"healthy":{"a":true,"de":true,"h":"Healthy","n":"healthy","r":true,"sh":"Deprecated.","t":"`$BOOLEAN`","key$":"healthy","index$":1},"info":{"a":true,"h":"Info","n":"info","r":false,"t":"`$ANY`","union":{"branches":3,"count":1,"depth":0},"key$":"info","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":4}},"name":"v1_service_health_response_output","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/health","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":["auth,db","auth"],"k":"query","n":"service","or":"services","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":2000,"k":"query","n":"timeout_m","or":"timeout_ms","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/health","q":{"exist":["ref","service","timeout_m"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"health"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"v1_service_health_response_output","name__orig":"v1_service_health_response_output","Name":"V1ServiceHealthResponseOutput","name_":"v1_service_health_response_output","name-":"v1-service-health-response-output","NAME":"V1_SERVICE_HEALTH_RESPONSE_OUTPUT","index$":83}, {"active":true,"entity":"v1_service_health_response_output","key$":"BasicV1ServiceHealthResponseOutputFlow","kind":"basic","name":"BasicV1ServiceHealthResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"ref":"ref01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"v1_service_health_response_output_ref01"}}]}]}, 'V1ServiceHealthResponseOutput', {"GET /v1/projects/{ref}/health":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"services","required":true,"in":"query","description":"Comma-separated list of enums or array of enums.","schema":{"example":["auth,db","auth"],"anyOf":[{"type":"string","description":"Comma-separated list of enums:\n\n- `auth`\n- `db`\n- `db_postgres_user`\n- `pooler`\n- `realtime`\n- `rest`\n- `storage`\n- `pg_bouncer`","example":["auth,db","auth"]},{"type":"array","items":{"type":"string","enum":["auth","db","db_postgres_user","pooler","realtime","rest","storage","pg_bouncer"]},"description":"Array of enums.","example":["{field}=auth&{field}=db","{field}=auth"]}]},"index$":1},{"name":"timeout_ms","required":false,"in":"query","schema":{"minimum":0,"maximum":10000,"example":2000,"type":"integer"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_service_health_response_output_ref01_data = Object.values(setup.data.existing.v1_service_health_response_output)[0] as any

    // LIST
    const v1_service_health_response_output_ref01_ent = client.V1ServiceHealthResponseOutput()
    const v1_service_health_response_output_ref01_match: any = {}
    v1_service_health_response_output_ref01_match['ref'] = setup.idmap['ref01']

    const v1_service_health_response_output_ref01_list = (await v1_service_health_response_output_ref01_ent.list(v1_service_health_response_output_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_service_health_response_output/V1ServiceHealthResponseOutputTestData.json')

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
    ['v1_service_health_response_output01','v1_service_health_response_output02','v1_service_health_response_output03','project01','project02','project03','ref01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_SERVICE_HEALTH_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_SERVICE_HEALTH_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_SERVICE_HEALTH_RESPONSE_OUTPUT_ENTID']
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
  
