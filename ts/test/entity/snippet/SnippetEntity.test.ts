

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


describe('SnippetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Snippet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'snippet.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content":{"a":true,"h":"Content","n":"content","r":true,"t":"`$OBJECT`","key$":"content","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"t":"`$STRING`","key$":"description","index$":1},"favorite":{"a":true,"h":"Favorite","n":"favorite","r":true,"t":"`$BOOLEAN`","key$":"favorite","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"inserted_at":{"a":true,"h":"Inserted At","n":"inserted_at","r":true,"t":"`$STRING`","key$":"inserted_at","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":5},"owner":{"a":true,"h":"Owner","n":"owner","r":true,"t":"`$OBJECT`","key$":"owner","index$":6},"project":{"a":true,"h":"Project","n":"project","r":true,"t":"`$OBJECT`","key$":"project","index$":7},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":8},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":9},"updated_by":{"a":true,"h":"Updated By","n":"updated_by","r":true,"t":"`$OBJECT`","key$":"updated_by","index$":10},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":true,"t":"`$STRING`","key$":"visibility","index$":11}},"id":{"field":"id","name":"id"},"name":"snippet","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/snippets","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"abcdefghijklmnopqrst","k":"query","n":"project_ref","or":"project_ref","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"sort_by","or":"sort_by","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"sort_order","or":"sort_order","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v1/snippets","q":{"exist":["cursor","limit","project_ref","sort_by","sort_order"]},"r":{},"s":[{"lit":"v1"},{"lit":"snippets"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/snippets/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"44444444-4444-4444-8444-444444444444","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/snippets/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"snippets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"snippet","name__orig":"snippet","Name":"Snippet","name_":"snippet","name-":"snippet","NAME":"SNIPPET","index$":58}, {"active":true,"entity":"snippet","key$":"BasicSnippetFlow","kind":"basic","name":"BasicSnippetFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"snippet_ref01"}}]},{"a":true,"d":{},"i":{"ref":"snippet_ref01","srcdatavar":"snippet_ref01_data","suffix":"_dt0"},"m":{"id":"snippet01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-snippet_ref01"}}]}]}, 'Snippet', {"GET /v1/snippets":{"protocol":"http","parameters":[{"name":"project_ref","required":false,"in":"query","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"cursor","required":false,"in":"query","schema":{"type":"string"},"index$":1},{"name":"limit","required":false,"in":"query","schema":{"type":"string","minimum":1,"maximum":100},"index$":2},{"name":"sort_by","required":false,"in":"query","schema":{"enum":["name","inserted_at"],"type":"string"},"index$":3},{"name":"sort_order","required":false,"in":"query","schema":{"enum":["asc","desc"],"type":"string"},"index$":4}]},"GET /v1/snippets/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"44444444-4444-4444-8444-444444444444","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let snippet_ref01_data = Object.values(setup.data.existing.snippet)[0] as any

    // LIST
    const snippet_ref01_ent = client.Snippet()
    const snippet_ref01_match: any = {}

    const snippet_ref01_list = (await snippet_ref01_ent.list(snippet_ref01_match)).map((e: any) => e.data())


    // LOAD
    const snippet_ref01_match_dt0: any = {}
    snippet_ref01_match_dt0.id = snippet_ref01_data.id
    const snippet_ref01_data_dt0 = (await snippet_ref01_ent.load(snippet_ref01_match_dt0)).data()
    assert(snippet_ref01_data_dt0.id === snippet_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/snippet/SnippetTestData.json')

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
    ['snippet01','snippet02','snippet03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_SNIPPET_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_SNIPPET_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_SNIPPET_ENTID']
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
  
