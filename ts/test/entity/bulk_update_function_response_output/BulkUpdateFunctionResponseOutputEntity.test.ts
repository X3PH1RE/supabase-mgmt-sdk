

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


describe('BulkUpdateFunctionResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.BulkUpdateFunctionResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'bulk_update_function_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"functions":{"a":true,"h":"Functions","n":"functions","r":true,"t":"`$ARRAY`","key$":"functions","index$":0}},"name":"bulk_update_function_response_output","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/functions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/functions","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"functions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"bulk_update_function_response_output","name__orig":"bulk_update_function_response_output","Name":"BulkUpdateFunctionResponseOutput","name_":"bulk_update_function_response_output","name-":"bulk-update-function-response-output","NAME":"BULK_UPDATE_FUNCTION_RESPONSE_OUTPUT","index$":8}, {"active":true,"entity":"bulk_update_function_response_output","key$":"BasicBulkUpdateFunctionResponseOutputFlow","kind":"basic","name":"BasicBulkUpdateFunctionResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"bulk_update_function_response_output_ref01","srcdatavar":"bulk_update_function_response_output_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-bulk_update_function_response_output_ref01"}}],"v":[]}]}, 'BulkUpdateFunctionResponseOutput', {"PUT /v1/projects/{ref}/functions":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string"},"slug":{"type":"string","pattern":"^[A-Za-z][A-Za-z0-9_-]*$"},"name":{"type":"string"},"status":{"type":"string","enum":["ACTIVE","REMOVED","THROTTLED"]},"version":{"type":"integer","minimum":-9007199254740991,"maximum":9007199254740991},"created_at":{"type":"integer","format":"int64","minimum":-9007199254740991,"maximum":9007199254740991},"verify_jwt":{"type":"boolean"},"import_map":{"type":"boolean"},"entrypoint_path":{"type":"string"},"import_map_path":{"type":"string"},"ezbr_sha256":{"type":"string"}},"required":["id","slug","name","status","version"]},"example":[{"id":"3c078cce-ad70-4148-9f37-4da362789053","slug":"hello-world","name":"Hello World","status":"ACTIVE","version":2,"verify_jwt":true,"entrypoint_path":"index.ts"}],"x-ref":"#/components/schemas/BulkUpdateFunctionBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let bulk_update_function_response_output_ref01_data = Object.values(setup.data.existing.bulk_update_function_response_output)[0] as any

    // UPDATE
    const bulk_update_function_response_output_ref01_ent = client.BulkUpdateFunctionResponseOutput()
    const bulk_update_function_response_output_ref01_data_up0: any = {}

    const bulk_update_function_response_output_ref01_resdata_up0 = (await bulk_update_function_response_output_ref01_ent.update(bulk_update_function_response_output_ref01_data_up0)).data()
    assert(null != bulk_update_function_response_output_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/bulk_update_function_response_output/BulkUpdateFunctionResponseOutputTestData.json')

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
    ['bulk_update_function_response_output01','bulk_update_function_response_output02','bulk_update_function_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_BULK_UPDATE_FUNCTION_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_BULK_UPDATE_FUNCTION_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_BULK_UPDATE_FUNCTION_RESPONSE_OUTPUT_ENTID']
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
  
