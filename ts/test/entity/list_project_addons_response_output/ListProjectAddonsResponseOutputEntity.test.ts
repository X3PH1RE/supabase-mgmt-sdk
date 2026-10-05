

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


describe('ListProjectAddonsResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.ListProjectAddonsResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_project_addons_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"available_addons":{"a":true,"h":"Available Addons","n":"available_addons","r":true,"t":"`$ARRAY`","union":{"branches":8,"count":3,"depth":8},"key$":"available_addons","index$":0},"selected_addons":{"a":true,"h":"Selected Addons","n":"selected_addons","r":true,"t":"`$ARRAY`","union":{"branches":8,"count":3,"depth":7},"key$":"selected_addons","index$":1}},"name":"list_project_addons_response_output","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/billing/addons","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/billing/addons","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"billing"},{"lit":"addons"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"list_project_addons_response_output","name__orig":"list_project_addons_response_output","Name":"ListProjectAddonsResponseOutput","name_":"list_project_addons_response_output","name-":"list-project-addons-response-output","NAME":"LIST_PROJECT_ADDONS_RESPONSE_OUTPUT","index$":28}, {"active":true,"entity":"list_project_addons_response_output","key$":"BasicListProjectAddonsResponseOutputFlow","kind":"basic","name":"BasicListProjectAddonsResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_project_addons_response_output_ref01"}}]}]}, 'ListProjectAddonsResponseOutput', {"GET /v1/projects/{ref}/billing/addons":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_project_addons_response_output_ref01_data = Object.values(setup.data.existing.list_project_addons_response_output)[0] as any

    // LIST
    const list_project_addons_response_output_ref01_ent = client.ListProjectAddonsResponseOutput()
    const list_project_addons_response_output_ref01_match: any = {}
    list_project_addons_response_output_ref01_match['project_id'] = setup.idmap['project01']

    const list_project_addons_response_output_ref01_list = (await list_project_addons_response_output_ref01_ent.list(list_project_addons_response_output_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_project_addons_response_output/ListProjectAddonsResponseOutputTestData.json')

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
    ['list_project_addons_response_output01','list_project_addons_response_output02','list_project_addons_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_LIST_PROJECT_ADDONS_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_LIST_PROJECT_ADDONS_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_LIST_PROJECT_ADDONS_RESPONSE_OUTPUT_ENTID']
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
  
