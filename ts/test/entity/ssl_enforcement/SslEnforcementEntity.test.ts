

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


describe('SslEnforcementEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.SslEnforcement()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ssl_enforcement.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"appliedSuccessfully":{"a":true,"h":"Applied Successfully","n":"appliedSuccessfully","r":true,"t":"`$BOOLEAN`","key$":"appliedSuccessfully","index$":0},"currentConfig":{"a":true,"h":"Current Config","n":"currentConfig","r":true,"t":"`$OBJECT`","key$":"currentConfig","index$":1},"requestedConfig":{"a":true,"h":"Requested Config","n":"requestedConfig","r":true,"t":"`$OBJECT`","key$":"requestedConfig","index$":2}},"name":"ssl_enforcement","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/ssl-enforcement","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/ssl-enforcement","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"ssl-enforcement"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/ssl-enforcement","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/ssl-enforcement","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"ssl-enforcement"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"ssl_enforcement","name__orig":"ssl_enforcement","Name":"SslEnforcement","name_":"ssl_enforcement","name-":"ssl-enforcement","NAME":"SSL_ENFORCEMENT","index$":59}, {"active":true,"entity":"ssl_enforcement","key$":"BasicSslEnforcementFlow","kind":"basic","name":"BasicSslEnforcementFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ssl_enforcement_ref01","srcdatavar":"ssl_enforcement_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ssl_enforcement_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"ssl_enforcement_ref01","srcdatavar":"ssl_enforcement_ref01_data","suffix":"_dt0"},"m":{"id":"ssl_enforcement01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ssl_enforcement_ref01"}}]}]}, 'SslEnforcement', {"GET /v1/projects/{ref}/ssl-enforcement":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PUT /v1/projects/{ref}/ssl-enforcement":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"requestedConfig":{"type":"object","properties":{"database":{"type":"boolean"}},"required":["database"],"key$":"requestedConfig"}},"required":["requestedConfig"],"example":{"requestedConfig":{"database":true}},"x-ref":"#/components/schemas/SslEnforcementRequest","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ssl_enforcement_ref01_data = Object.values(setup.data.existing.ssl_enforcement)[0] as any

    // UPDATE
    const ssl_enforcement_ref01_ent = client.SslEnforcement()
    const ssl_enforcement_ref01_data_up0: any = {}

    const ssl_enforcement_ref01_resdata_up0 = (await ssl_enforcement_ref01_ent.update(ssl_enforcement_ref01_data_up0)).data()
    assert(null != ssl_enforcement_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ssl_enforcement/SslEnforcementTestData.json')

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
    ['ssl_enforcement01','ssl_enforcement02','ssl_enforcement03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_SSL_ENFORCEMENT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_SSL_ENFORCEMENT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_SSL_ENFORCEMENT_ENTID']
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
  
