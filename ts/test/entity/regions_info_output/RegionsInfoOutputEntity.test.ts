

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


describe('RegionsInfoOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.RegionsInfoOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'regions_info_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"all":{"a":true,"h":"All","n":"all","r":true,"t":"`$OBJECT`","key$":"all","index$":0},"recommendations":{"a":true,"h":"Recommendations","n":"recommendations","r":true,"t":"`$OBJECT`","key$":"recommendations","index$":1}},"name":"regions_info_output","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/available-regions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"NA","k":"query","n":"continent","or":"continent","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"desired_instance_size","or":"desired_instance_size","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"tsrqponmlkjihgfedcba","k":"query","n":"organization_slug","or":"organization_slug","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/v1/projects/available-regions","q":{"exist":["continent","desired_instance_size","organization_slug"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"lit":"available-regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"regions_info_output","name__orig":"regions_info_output","Name":"RegionsInfoOutput","name_":"regions_info_output","name-":"regions-info-output","NAME":"REGIONS_INFO_OUTPUT","index$":52}, {"active":true,"entity":"regions_info_output","key$":"BasicRegionsInfoOutputFlow","kind":"basic","name":"BasicRegionsInfoOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"regions_info_output_ref01","srcdatavar":"regions_info_output_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-regions_info_output_ref01"}}]}]}, 'RegionsInfoOutput', {"GET /v1/projects/available-regions":{"protocol":"http","parameters":[{"name":"organization_slug","required":true,"in":"query","description":"Slug of your organization","schema":{"example":"tsrqponmlkjihgfedcba","type":"string"},"index$":0},{"name":"continent","required":false,"in":"query","description":"Continent code to determine regional recommendations: NA (North America), SA (South America), EU (Europe), AF (Africa), AS (Asia), OC (Oceania), AN (Antarctica)","schema":{"example":"NA","type":"string","enum":["NA","SA","EU","AF","AS","OC","AN"]},"index$":1},{"name":"desired_instance_size","required":false,"in":"query","description":"Desired instance size. Omit this field to always default to the smallest possible size.","schema":{"type":"string","enum":["nano","micro","small","medium","large","xlarge","2xlarge","4xlarge","8xlarge","12xlarge","16xlarge","24xlarge","24xlarge_optimized_memory","24xlarge_optimized_cpu","24xlarge_high_memory","48xlarge","48xlarge_optimized_memory","48xlarge_optimized_cpu","48xlarge_high_memory"]},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let regions_info_output_ref01_data = Object.values(setup.data.existing.regions_info_output)[0] as any

    // LOAD
    const regions_info_output_ref01_ent = client.RegionsInfoOutput()
    const regions_info_output_ref01_match_dt0: any = {}
    const regions_info_output_ref01_data_dt0 = (await regions_info_output_ref01_ent.load(regions_info_output_ref01_match_dt0)).data()
    assert(null != regions_info_output_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/regions_info_output/RegionsInfoOutputTestData.json')

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
    ['regions_info_output01','regions_info_output02','regions_info_output03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_REGIONS_INFO_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_REGIONS_INFO_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_REGIONS_INFO_OUTPUT_ENTID']
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
  
