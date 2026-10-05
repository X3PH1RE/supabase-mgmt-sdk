

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


describe('ApiKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.ApiKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"api_key":{"a":true,"h":"Api Key","n":"api_key","r":false,"t":"`$STRING`","key$":"api_key","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"hash":{"a":true,"h":"Hash","n":"hash","r":false,"t":"`$STRING`","key$":"hash","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"inserted_at":{"a":true,"fo":"date-time","h":"Inserted At","n":"inserted_at","r":false,"t":"`$STRING`","key$":"inserted_at","index$":4},"name":{"a":true,"h":"Name","n":"name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"name","index$":5},"prefix":{"a":true,"h":"Prefix","n":"prefix","r":false,"t":"`$STRING`","key$":"prefix","index$":6},"secret_jwt_template":{"a":true,"h":"Secret Jwt Template","n":"secret_jwt_template","r":false,"t":"`$OBJECT`","key$":"secret_jwt_template","index$":7},"type":{"a":true,"h":"Type","n":"type","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"type","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":9}},"id":{"field":"id","name":"id"},"name":"api_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/api-keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"true","k":"query","n":"reveal","or":"reveal","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/api-keys","q":{"exist":["ref","reveal"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"api-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/api-keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"true","k":"query","n":"reveal","or":"reveal","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/api-keys","q":{"exist":["ref","reveal"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"api-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/api-keys/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"22222222-2222-4222-8222-222222222222","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"true","k":"query","n":"reveal","or":"reveal","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/api-keys/{id}","q":{"exist":["id","project_id","reveal"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"api-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/api-keys/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"22222222-2222-4222-8222-222222222222","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"rotating_key","k":"query","n":"reason","or":"reason","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":true,"k":"query","n":"reveal","or":"reveal","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":false,"k":"query","n":"was_compromised","or":"was_compromised","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/api-keys/{id}","q":{"exist":["id","project_id","reason","reveal","was_compromised"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"api-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/api-keys/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"22222222-2222-4222-8222-222222222222","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"true","k":"query","n":"reveal","or":"reveal","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/api-keys/{id}","q":{"exist":["id","project_id","reveal"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"api-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_key","name__orig":"api_key","Name":"ApiKey","name_":"api_key","name-":"api-key","NAME":"API_KEY","index$":3}, {"active":true,"entity":"api_key","key$":"BasicApiKeyFlow","kind":"basic","name":"BasicApiKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_key_ref01"},"m":{"project_id":"project01","ref":"api_key_ref01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"ref":"ref01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_key_ref01"}}]},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_key_ref01","srcdatavar":"api_key_ref01_data","suffix":"_up0","textfield":"api_key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_key_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"api_key_ref01","srcdatavar":"api_key_ref01_data","suffix":"_dt0"},"m":{"id":"api_key01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_key_ref01"}}]},{"a":true,"d":{},"i":{"ref":"api_key_ref01","suffix":"_rm0"},"m":{"id":"api_key01","project_id":"project01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"ref":"ref01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"api_key_ref01"}}]}]}, 'ApiKey', {"POST /v1/projects/{ref}/api-keys":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"type":{"type":"string","enum":["publishable","secret"],"key$":"type"},"name":{"type":"string","minLength":4,"maxLength":64,"pattern":"^[a-z_][a-z0-9_]+$","key$":"name"},"description":{"type":"string","nullable":true,"key$":"description"},"secret_jwt_template":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"nullable":true,"key$":"secret_jwt_template"}},"required":["type","name"],"example":{"type":"secret","name":"ci_secret_key","description":"CI deploy key"},"x-ref":"#/components/schemas/CreateApiKeyBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"reveal","required":false,"in":"query","description":"Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`","schema":{"example":"true","type":"string"},"index$":1}]},"GET /v1/projects/{ref}/api-keys":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"reveal","required":false,"in":"query","description":"Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`","schema":{"example":"true","type":"string"},"index$":1}]},"GET /v1/projects/{ref}/api-keys/{id}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"22222222-2222-4222-8222-222222222222","type":"string"},"index$":1},{"name":"reveal","required":false,"in":"query","description":"Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`","schema":{"example":"true","type":"string"},"index$":2}]},"DELETE /v1/projects/{ref}/api-keys/{id}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"22222222-2222-4222-8222-222222222222","type":"string"},"index$":1},{"name":"reveal","required":false,"in":"query","description":"Boolean string, true or false","schema":{"example":true,"type":"string"},"index$":2},{"name":"was_compromised","required":false,"in":"query","description":"Boolean string, true or false","schema":{"example":false,"type":"string"},"index$":3},{"name":"reason","required":false,"in":"query","schema":{"example":"rotating_key","type":"string"},"index$":4}]},"PATCH /v1/projects/{ref}/api-keys/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","minLength":4,"maxLength":64,"pattern":"^[a-z_][a-z0-9_]+$","key$":"name"},"description":{"type":"string","nullable":true,"key$":"description"},"secret_jwt_template":{"type":"object","propertyNames":{"type":"string"},"additionalProperties":{},"nullable":true,"key$":"secret_jwt_template"}},"example":{"name":"ci_secret_key_rotated","description":"Rotated after March release"},"x-ref":"#/components/schemas/UpdateApiKeyBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"22222222-2222-4222-8222-222222222222","type":"string"},"index$":1},{"name":"reveal","required":false,"in":"query","description":"Boolean string.\n\nTruthy values: `true`, `1`, `yes`, `on`, `y`, `enabled`\n\nFalsy values: `false`, `0`, `no`, `off`, `n`, `disabled`","schema":{"example":"true","type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_key_ref01_ent = client.ApiKey()
    let api_key_ref01_data = setup.data.new.api_key['api_key_ref01']
    api_key_ref01_data['project_id'] = setup.idmap['project01']
    api_key_ref01_data['ref'] = setup.idmap['api_key_ref01']

    api_key_ref01_data = (await api_key_ref01_ent.create(api_key_ref01_data)).data()
    assert(null != api_key_ref01_data.id)


    // LIST
    const api_key_ref01_match: any = {}
    api_key_ref01_match['ref'] = setup.idmap['ref01']

    const api_key_ref01_list = (await api_key_ref01_ent.list(api_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })))


    // UPDATE
    const api_key_ref01_data_up0: any = {}
    api_key_ref01_data_up0.id = api_key_ref01_data.id
    api_key_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_key_ref01_markdef_up0 = { name: 'api_key', value: 'Mark01-api_key_ref01_' + setup.now }
    ;(api_key_ref01_data_up0 as any)[api_key_ref01_markdef_up0.name] = api_key_ref01_markdef_up0.value

    const api_key_ref01_resdata_up0 = (await api_key_ref01_ent.update(api_key_ref01_data_up0)).data()
    assert(api_key_ref01_resdata_up0.id === api_key_ref01_data_up0.id)

    assert((api_key_ref01_resdata_up0 as any)[api_key_ref01_markdef_up0.name] === api_key_ref01_markdef_up0.value)


    // LOAD
    const api_key_ref01_match_dt0: any = {}
    api_key_ref01_match_dt0.id = api_key_ref01_data.id
    const api_key_ref01_data_dt0 = (await api_key_ref01_ent.load(api_key_ref01_match_dt0)).data()
    assert(api_key_ref01_data_dt0.id === api_key_ref01_data.id)


    // REMOVE
    const api_key_ref01_match_rm0: any = { id: api_key_ref01_data.id }
    await api_key_ref01_ent.remove(api_key_ref01_match_rm0)
  

    // LIST
    const api_key_ref01_match_rt0: any = {}
    api_key_ref01_match_rt0['ref'] = setup.idmap['ref01']

    const api_key_ref01_list_rt0 = (await api_key_ref01_ent.list(api_key_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(api_key_ref01_list_rt0, { id: api_key_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_key/ApiKeyTestData.json')

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
    ['api_key01','api_key02','api_key03','project01','project02','project03','api_key_ref01','ref01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_API_KEY_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_API_KEY_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_API_KEY_ENTID']
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
  
