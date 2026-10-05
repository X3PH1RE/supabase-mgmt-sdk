

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


describe('V1ProjectRefResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1ProjectRefResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_project_ref_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$INTEGER`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":1},"ref":{"a":true,"h":"Ref","n":"ref","r":true,"t":"`$STRING`","key$":"ref","index$":2}},"id":{"field":"id","name":"id"},"name":"v1_project_ref_response_output","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"v1_project_ref_response_output","name__orig":"v1_project_ref_response_output","Name":"V1ProjectRefResponseOutput","name_":"v1_project_ref_response_output","name-":"v1-project-ref-response-output","NAME":"V1_PROJECT_REF_RESPONSE_OUTPUT","index$":80}, {"active":true,"entity":"v1_project_ref_response_output","key$":"BasicV1ProjectRefResponseOutputFlow","kind":"basic","name":"BasicV1ProjectRefResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"v1_project_ref_response_output_ref01","srcdatavar":"v1_project_ref_response_output_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1_project_ref_response_output_ref01"}}],"v":[]}]}, 'V1ProjectRefResponseOutput', {"DELETE /v1/projects/{ref}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PATCH /v1/projects/{ref}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","minLength":1,"maxLength":256,"key$":"name"}},"required":["name"],"example":{"name":"Acme Platform"},"x-ref":"#/components/schemas/V1UpdateProjectBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_project_ref_response_output_ref01_data = Object.values(setup.data.existing.v1_project_ref_response_output)[0] as any

    // UPDATE
    const v1_project_ref_response_output_ref01_ent = client.V1ProjectRefResponseOutput()
    const v1_project_ref_response_output_ref01_data_up0: any = {}
    v1_project_ref_response_output_ref01_data_up0.id = v1_project_ref_response_output_ref01_data.id

    const v1_project_ref_response_output_ref01_markdef_up0 = { name: 'name', value: 'Mark01-v1_project_ref_response_output_ref01_' + setup.now }
    ;(v1_project_ref_response_output_ref01_data_up0 as any)[v1_project_ref_response_output_ref01_markdef_up0.name] = v1_project_ref_response_output_ref01_markdef_up0.value

    const v1_project_ref_response_output_ref01_resdata_up0 = (await v1_project_ref_response_output_ref01_ent.update(v1_project_ref_response_output_ref01_data_up0)).data()
    assert(v1_project_ref_response_output_ref01_resdata_up0.id === v1_project_ref_response_output_ref01_data_up0.id)

    assert((v1_project_ref_response_output_ref01_resdata_up0 as any)[v1_project_ref_response_output_ref01_markdef_up0.name] === v1_project_ref_response_output_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_project_ref_response_output/V1ProjectRefResponseOutputTestData.json')

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
    ['v1_project_ref_response_output01','v1_project_ref_response_output02','v1_project_ref_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_PROJECT_REF_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_PROJECT_REF_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_PROJECT_REF_RESPONSE_OUTPUT_ENTID']
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
  
