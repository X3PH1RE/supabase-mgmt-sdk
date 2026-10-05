

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


describe('V1GetUsageApiCountResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1GetUsageApiCountResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_get_usage_api_count_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","r":true,"t":"`$STRING`","key$":"timestamp","index$":0},"total_auth_requests":{"a":true,"h":"Total Auth Requests","n":"total_auth_requests","r":true,"t":"`$NUMBER`","key$":"total_auth_requests","index$":1},"total_realtime_requests":{"a":true,"h":"Total Realtime Requests","n":"total_realtime_requests","r":true,"t":"`$NUMBER`","key$":"total_realtime_requests","index$":2},"total_rest_requests":{"a":true,"h":"Total Rest Requests","n":"total_rest_requests","r":true,"t":"`$NUMBER`","key$":"total_rest_requests","index$":3},"total_storage_requests":{"a":true,"h":"Total Storage Requests","n":"total_storage_requests","r":true,"t":"`$NUMBER`","key$":"total_storage_requests","index$":4}},"name":"v1_get_usage_api_count_response_output","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/analytics/endpoints/usage.api-counts","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"1day","k":"query","n":"interval","or":"interval","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/analytics/endpoints/usage.api-counts","q":{"exist":["interval","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"analytics"},{"lit":"endpoints"},{"lit":"usage.api-counts"}],"t":{"req":"`reqdata`","res":"`body.result`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"v1_get_usage_api_count_response_output","name__orig":"v1_get_usage_api_count_response_output","Name":"V1GetUsageApiCountResponseOutput","name_":"v1_get_usage_api_count_response_output","name-":"v1-get-usage-api-count-response-output","NAME":"V1_GET_USAGE_API_COUNT_RESPONSE_OUTPUT","index$":72}, {"active":true,"entity":"v1_get_usage_api_count_response_output","key$":"BasicV1GetUsageApiCountResponseOutputFlow","kind":"basic","name":"BasicV1GetUsageApiCountResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"v1_get_usage_api_count_response_output_ref01"}}]}]}, 'V1GetUsageApiCountResponseOutput', {"GET /v1/projects/{ref}/analytics/endpoints/usage.api-counts":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"interval","required":false,"in":"query","schema":{"example":"1day","type":"string","enum":["15min","30min","1hr","3hr","1day","3day","7day"]},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_get_usage_api_count_response_output_ref01_data = Object.values(setup.data.existing.v1_get_usage_api_count_response_output)[0] as any

    // LIST
    const v1_get_usage_api_count_response_output_ref01_ent = client.V1GetUsageApiCountResponseOutput()
    const v1_get_usage_api_count_response_output_ref01_match: any = {}
    v1_get_usage_api_count_response_output_ref01_match['project_id'] = setup.idmap['project01']

    const v1_get_usage_api_count_response_output_ref01_list = (await v1_get_usage_api_count_response_output_ref01_ent.list(v1_get_usage_api_count_response_output_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_get_usage_api_count_response_output/V1GetUsageApiCountResponseOutputTestData.json')

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
    ['v1_get_usage_api_count_response_output01','v1_get_usage_api_count_response_output02','v1_get_usage_api_count_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_GET_USAGE_API_COUNT_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_GET_USAGE_API_COUNT_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_GET_USAGE_API_COUNT_RESPONSE_OUTPUT_ENTID']
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
  
