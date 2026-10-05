

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


describe('V1ListEntitlementsResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1ListEntitlementsResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_list_entitlements_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"config":{"a":true,"h":"Config","n":"config","r":true,"t":"`$ANY`","union":{"branches":3,"count":1,"depth":0},"key$":"config","index$":0},"feature":{"a":true,"h":"Feature","n":"feature","r":true,"t":"`$OBJECT`","key$":"feature","index$":1},"hasAccess":{"a":true,"h":"Has Access","n":"hasAccess","r":true,"t":"`$BOOLEAN`","key$":"hasAccess","index$":2},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":3}},"name":"v1_list_entitlements_response_output","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/organizations/{slug}/entitlements","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"tsrqponmlkjihgfedcba","k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/organizations/{slug}/entitlements","q":{"exist":["slug"]},"r":{},"s":[{"lit":"v1"},{"lit":"organizations"},{"var":"slug"},{"lit":"entitlements"}],"t":{"req":"`reqdata`","res":"`body.entitlements`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"v1_list_entitlements_response_output","name__orig":"v1_list_entitlements_response_output","Name":"V1ListEntitlementsResponseOutput","name_":"v1_list_entitlements_response_output","name-":"v1-list-entitlements-response-output","NAME":"V1_LIST_ENTITLEMENTS_RESPONSE_OUTPUT","index$":74}, {"active":true,"entity":"v1_list_entitlements_response_output","key$":"BasicV1ListEntitlementsResponseOutputFlow","kind":"basic","name":"BasicV1ListEntitlementsResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"slug":"slug01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"v1_list_entitlements_response_output_ref01"}}]}]}, 'V1ListEntitlementsResponseOutput', {"GET /v1/organizations/{slug}/entitlements":{"protocol":"http","parameters":[{"name":"slug","required":true,"in":"path","description":"Organization slug","schema":{"pattern":"^[\\w-]+$","example":"tsrqponmlkjihgfedcba","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_list_entitlements_response_output_ref01_data = Object.values(setup.data.existing.v1_list_entitlements_response_output)[0] as any

    // LIST
    const v1_list_entitlements_response_output_ref01_ent = client.V1ListEntitlementsResponseOutput()
    const v1_list_entitlements_response_output_ref01_match: any = {}
    v1_list_entitlements_response_output_ref01_match['slug'] = setup.idmap['slug01']

    const v1_list_entitlements_response_output_ref01_list = (await v1_list_entitlements_response_output_ref01_ent.list(v1_list_entitlements_response_output_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_list_entitlements_response_output/V1ListEntitlementsResponseOutputTestData.json')

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
    ['v1_list_entitlements_response_output01','v1_list_entitlements_response_output02','v1_list_entitlements_response_output03','organization01','organization02','organization03','slug01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_LIST_ENTITLEMENTS_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_LIST_ENTITLEMENTS_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_LIST_ENTITLEMENTS_RESPONSE_OUTPUT_ENTID']
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
  
