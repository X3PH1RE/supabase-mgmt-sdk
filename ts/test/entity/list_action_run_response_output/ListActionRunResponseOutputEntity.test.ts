

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


describe('ListActionRunResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.ListActionRunResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_action_run_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"branch_id":{"a":true,"h":"Branch Id","n":"branch_id","r":true,"t":"`$STRING`","key$":"branch_id","index$":0},"check_run_id":{"a":true,"h":"Check Run Id","n":"check_run_id","r":true,"t":"`$NUMBER`","key$":"check_run_id","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"git_config":{"a":true,"h":"Git Config","n":"git_config","r":false,"t":"`$ANY`","key$":"git_config","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":4},"run_steps":{"a":true,"h":"Run Steps","n":"run_steps","r":true,"t":"`$ARRAY`","key$":"run_steps","index$":5},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":6},"workdir":{"a":true,"h":"Workdir","n":"workdir","r":true,"t":"`$STRING`","key$":"workdir","index$":7}},"id":{"field":"id","name":"id"},"name":"list_action_run_response_output","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/actions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":20,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":0},{"a":true,"ex":0,"k":"query","n":"offset","or":"offset","r":false,"t":"`$NUMBER`","index$":1}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/actions","q":{"exist":["limit","offset","ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"list_action_run_response_output","name__orig":"list_action_run_response_output","Name":"ListActionRunResponseOutput","name_":"list_action_run_response_output","name-":"list-action-run-response-output","NAME":"LIST_ACTION_RUN_RESPONSE_OUTPUT","index$":27}, {"active":true,"entity":"list_action_run_response_output","key$":"BasicListActionRunResponseOutputFlow","kind":"basic","name":"BasicListActionRunResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"ref":"ref01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_action_run_response_output_ref01"}}]}]}, 'ListActionRunResponseOutput', {"GET /v1/projects/{ref}/actions":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"offset","required":false,"in":"query","schema":{"minimum":0,"example":0,"type":"number"},"index$":1},{"name":"limit","required":false,"in":"query","schema":{"minimum":10,"example":20,"type":"number"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_action_run_response_output_ref01_data = Object.values(setup.data.existing.list_action_run_response_output)[0] as any

    // LIST
    const list_action_run_response_output_ref01_ent = client.ListActionRunResponseOutput()
    const list_action_run_response_output_ref01_match: any = {}
    list_action_run_response_output_ref01_match['ref'] = setup.idmap['ref01']

    const list_action_run_response_output_ref01_list = (await list_action_run_response_output_ref01_ent.list(list_action_run_response_output_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_action_run_response_output/ListActionRunResponseOutputTestData.json')

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
    ['list_action_run_response_output01','list_action_run_response_output02','list_action_run_response_output03','project01','project02','project03','ref01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_LIST_ACTION_RUN_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_LIST_ACTION_RUN_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_LIST_ACTION_RUN_RESPONSE_OUTPUT_ENTID']
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
  
