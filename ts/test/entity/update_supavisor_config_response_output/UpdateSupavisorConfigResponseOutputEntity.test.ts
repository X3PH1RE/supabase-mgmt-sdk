

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


describe('UpdateSupavisorConfigResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.UpdateSupavisorConfigResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_supavisor_config_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"default_pool_size":{"a":true,"h":"Default Pool Size","n":"default_pool_size","op":{"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"t":"`$INTEGER`","key$":"default_pool_size","index$":0},"pool_mode":{"a":true,"h":"Pool Mode","n":"pool_mode","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Dedicated pooler mode for the project","t":"`$STRING`","key$":"pool_mode","index$":1}},"name":"update_supavisor_config_response_output","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/config/database/pooler","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/config/database/pooler","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"database"},{"lit":"pooler"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"update_supavisor_config_response_output","name__orig":"update_supavisor_config_response_output","Name":"UpdateSupavisorConfigResponseOutput","name_":"update_supavisor_config_response_output","name-":"update-supavisor-config-response-output","NAME":"UPDATE_SUPAVISOR_CONFIG_RESPONSE_OUTPUT","index$":68}, {"active":true,"entity":"update_supavisor_config_response_output","key$":"BasicUpdateSupavisorConfigResponseOutputFlow","kind":"basic","name":"BasicUpdateSupavisorConfigResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_supavisor_config_response_output_ref01","srcdatavar":"update_supavisor_config_response_output_ref01_data","suffix":"_up0","textfield":"pool_mode"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_supavisor_config_response_output_ref01"}}],"v":[]}]}, 'UpdateSupavisorConfigResponseOutput', {"PATCH /v1/projects/{ref}/config/database/pooler":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"default_pool_size":{"type":"integer","minimum":0,"maximum":3000,"nullable":true,"key$":"default_pool_size"},"pool_mode":{"description":"Dedicated pooler mode for the project","type":"string","enum":["transaction","session"],"key$":"pool_mode"}},"example":{"default_pool_size":25,"pool_mode":"transaction"},"x-ref":"#/components/schemas/UpdateSupavisorConfigBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_supavisor_config_response_output_ref01_data = Object.values(setup.data.existing.update_supavisor_config_response_output)[0] as any

    // UPDATE
    const update_supavisor_config_response_output_ref01_ent = client.UpdateSupavisorConfigResponseOutput()
    const update_supavisor_config_response_output_ref01_data_up0: any = {}

    const update_supavisor_config_response_output_ref01_markdef_up0 = { name: 'pool_mode', value: 'Mark01-update_supavisor_config_response_output_ref01_' + setup.now }
    ;(update_supavisor_config_response_output_ref01_data_up0 as any)[update_supavisor_config_response_output_ref01_markdef_up0.name] = update_supavisor_config_response_output_ref01_markdef_up0.value

    const update_supavisor_config_response_output_ref01_resdata_up0 = (await update_supavisor_config_response_output_ref01_ent.update(update_supavisor_config_response_output_ref01_data_up0)).data()
    assert(null != update_supavisor_config_response_output_ref01_resdata_up0)

    assert((update_supavisor_config_response_output_ref01_resdata_up0 as any)[update_supavisor_config_response_output_ref01_markdef_up0.name] === update_supavisor_config_response_output_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_supavisor_config_response_output/UpdateSupavisorConfigResponseOutputTestData.json')

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
    ['update_supavisor_config_response_output01','update_supavisor_config_response_output02','update_supavisor_config_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_UPDATE_SUPAVISOR_CONFIG_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_UPDATE_SUPAVISOR_CONFIG_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_UPDATE_SUPAVISOR_CONFIG_RESPONSE_OUTPUT_ENTID']
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
  
