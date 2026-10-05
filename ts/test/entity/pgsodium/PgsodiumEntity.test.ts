

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


describe('PgsodiumEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Pgsodium()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pgsodium.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"root_key":{"a":true,"h":"Root Key","n":"root_key","r":true,"sh":"The pgsodium root key: 32 bytes, hex-encoded (64 characters).","t":"`$STRING`","key$":"root_key","index$":0}},"name":"pgsodium","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/pgsodium","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/pgsodium","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"pgsodium"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/pgsodium","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/pgsodium","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"pgsodium"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"pgsodium","name__orig":"pgsodium","Name":"Pgsodium","name_":"pgsodium","name-":"pgsodium","NAME":"PGSODIUM","index$":41}, {"active":true,"entity":"pgsodium","key$":"BasicPgsodiumFlow","kind":"basic","name":"BasicPgsodiumFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pgsodium_ref01","srcdatavar":"pgsodium_ref01_data","suffix":"_up0","textfield":"root_key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pgsodium_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"pgsodium_ref01","srcdatavar":"pgsodium_ref01_data","suffix":"_dt0"},"m":{"id":"pgsodium01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pgsodium_ref01"}}]}]}, 'Pgsodium', {"GET /v1/projects/{ref}/pgsodium":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PUT /v1/projects/{ref}/pgsodium":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"root_key":{"type":"string","description":"The pgsodium root key: 32 bytes, hex-encoded (64 characters).","key$":"root_key"}},"required":["root_key"],"example":{"root_key":"0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"},"x-ref":"#/components/schemas/UpdatePgsodiumConfigBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pgsodium_ref01_data = Object.values(setup.data.existing.pgsodium)[0] as any

    // UPDATE
    const pgsodium_ref01_ent = client.Pgsodium()
    const pgsodium_ref01_data_up0: any = {}

    const pgsodium_ref01_markdef_up0 = { name: 'root_key', value: 'Mark01-pgsodium_ref01_' + setup.now }
    ;(pgsodium_ref01_data_up0 as any)[pgsodium_ref01_markdef_up0.name] = pgsodium_ref01_markdef_up0.value

    const pgsodium_ref01_resdata_up0 = (await pgsodium_ref01_ent.update(pgsodium_ref01_data_up0)).data()
    assert(null != pgsodium_ref01_resdata_up0)

    assert((pgsodium_ref01_resdata_up0 as any)[pgsodium_ref01_markdef_up0.name] === pgsodium_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/pgsodium/PgsodiumTestData.json')

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
    ['pgsodium01','pgsodium02','pgsodium03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_PGSODIUM_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_PGSODIUM_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_PGSODIUM_ENTID']
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
  
