

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


describe('BillingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Billing()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'billing.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"billing","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/billing/addons/{addon_variant}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"pitr_7","k":"param","n":"addon_variant","or":"addon_variant","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/billing/addons/{addon_variant}","q":{"exist":["addon_variant","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"billing"},{"lit":"addons"},{"var":"addon_variant"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/billing/addons","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/billing/addons","q":{"$action":"addon","exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"billing"},{"lit":"addons"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"billing","name__orig":"billing","Name":"Billing","name_":"billing","name-":"billing","NAME":"BILLING","index$":5}, {"active":true,"entity":"billing","key$":"BasicBillingFlow","kind":"basic","name":"BasicBillingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"billing_ref01","srcdatavar":"billing_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-billing_ref01"}}],"v":[]}]}, 'Billing', {"DELETE /v1/projects/{ref}/billing/addons/{addon_variant}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"addon_variant","required":true,"in":"path","schema":{"example":"pitr_7","anyOf":[{"type":"string","enum":["ci_micro","ci_small","ci_medium","ci_large","ci_xlarge","ci_2xlarge","ci_4xlarge","ci_8xlarge","ci_12xlarge","ci_16xlarge","ci_24xlarge","ci_24xlarge_optimized_cpu","ci_24xlarge_optimized_memory","ci_24xlarge_high_memory","ci_48xlarge","ci_48xlarge_optimized_cpu","ci_48xlarge_optimized_memory","ci_48xlarge_high_memory"]},{"type":"string","enum":["cd_default"]},{"type":"string","enum":["pitr_7","pitr_14","pitr_28"]},{"type":"string","enum":["ipv4_default"]}]},"index$":1}]},"PATCH /v1/projects/{ref}/billing/addons":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"addon_variant":{"anyOf":[{"type":"string","enum":["ci_micro","ci_small","ci_medium","ci_large","ci_xlarge","ci_2xlarge","ci_4xlarge","ci_8xlarge","ci_12xlarge","ci_16xlarge","ci_24xlarge","ci_24xlarge_optimized_cpu","ci_24xlarge_optimized_memory","ci_24xlarge_high_memory","ci_48xlarge","ci_48xlarge_optimized_cpu","ci_48xlarge_optimized_memory","ci_48xlarge_high_memory"]},{"type":"string","enum":["cd_default"]},{"type":"string","enum":["pitr_7","pitr_14","pitr_28"]},{"type":"string","enum":["ipv4_default"]}]},"addon_type":{"type":"string","enum":["custom_domain","compute_instance","pitr","ipv4","auth_mfa_phone","auth_mfa_web_authn","log_drain","etl_pipeline"]}},"required":["addon_variant","addon_type"],"example":{"addon_variant":"pitr_7","addon_type":"pitr"},"x-ref":"#/components/schemas/ApplyProjectAddonBody"}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let billing_ref01_data = Object.values(setup.data.existing.billing)[0] as any

    // UPDATE
    const billing_ref01_ent = client.Billing()
    const billing_ref01_data_up0: any = {}

    const billing_ref01_resdata_up0 = (await billing_ref01_ent.update(billing_ref01_data_up0)).data()
    assert(null != billing_ref01_resdata_up0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/billing/BillingTestData.json')

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
    ['billing01','billing02','billing03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_BILLING_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_BILLING_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_BILLING_ENTID']
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
  
