

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


describe('JitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Jit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'jit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"act":{"a":true,"h":"Act","n":"act","r":false,"t":"`$STRING`","key$":"act","index$":0},"allowed_networks":{"a":true,"h":"Allowed Networks","n":"allowed_networks","r":false,"t":"`$OBJECT`","key$":"allowed_networks","index$":1},"branches_only":{"a":true,"h":"Branches Only","n":"branches_only","r":false,"t":"`$BOOLEAN`","key$":"branches_only","index$":2},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"t":"`$NUMBER`","key$":"expires_at","index$":3},"rhost":{"a":true,"h":"Rhost","n":"rhost","r":true,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"rhost","index$":4},"role":{"a":true,"h":"Role","n":"role","r":true,"t":"`$STRING`","key$":"role","index$":5},"roles":{"a":true,"h":"Roles","n":"roles","r":true,"t":"`$ARRAY`","key$":"roles","index$":6},"user_id":{"a":true,"fo":"uuid","h":"User Id","n":"user_id","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"user_id","index$":7},"user_role":{"a":true,"h":"User Role","n":"user_role","r":true,"t":"`$OBJECT`","key$":"user_role","index$":8},"user_roles":{"a":true,"h":"User Roles","n":"user_roles","r":true,"t":"`$ARRAY`","key$":"user_roles","index$":9}},"name":"jit","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/database/jit","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/database/jit","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"jit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/database/jit","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/database/jit","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"jit"}],"t":{"req":"`reqdata`","res":"`body.user_roles`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/database/jit","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/database/jit","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"jit"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"jit","name__orig":"jit","Name":"Jit","name_":"jit","name-":"jit","NAME":"JIT","index$":23}, {"active":true,"entity":"jit","key$":"BasicJitFlow","kind":"basic","name":"BasicJitFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"jit_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"jit_ref01"}}]},{"a":true,"d":{},"i":{"ref":"jit_ref01","srcdatavar":"jit_ref01_data","suffix":"_up0","textfield":"act"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-jit_ref01"}}],"v":[]}]}, 'Jit', {"POST /v1/projects/{ref}/database/jit":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"role":{"type":"string","minLength":1,"key$":"role"},"rhost":{"anyOf":[{"type":"string","format":"ipv4","pattern":"^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$"},{"type":"string","format":"ipv6","pattern":"^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$"}],"key$":"rhost"}},"required":["role","rhost"],"example":{"role":"postgres","rhost":"203.0.113.10"},"x-ref":"#/components/schemas/AuthorizeJitAccessBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/database/jit":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PUT /v1/projects/{ref}/database/jit":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"user_id":{"type":"string","minLength":1,"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","key$":"user_id"},"roles":{"type":"array","items":{"type":"object","properties":{"role":{"type":"string","minLength":1},"expires_at":{"type":"number"},"allowed_networks":{"type":"object","properties":{}},"branches_only":{"type":"boolean"}},"required":["role"]},"key$":"roles"}},"required":["user_id","roles"],"example":{"user_id":"55555555-5555-4555-8555-555555555555","roles":[{"role":"postgres","expires_at":1740787200,"allowed_networks":{"allowed_cidrs":[{}]},"branches_only":false}]},"x-ref":"#/components/schemas/UpdateJitAccessBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const jit_ref01_ent = client.Jit()
    let jit_ref01_data = setup.data.new.jit['jit_ref01']
    jit_ref01_data['project_id'] = setup.idmap['project01']

    jit_ref01_data = (await jit_ref01_ent.create(jit_ref01_data)).data()
    assert(null != jit_ref01_data)


    // LIST
    const jit_ref01_match: any = {}
    jit_ref01_match['project_id'] = setup.idmap['project01']

    const jit_ref01_list = (await jit_ref01_ent.list(jit_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const jit_ref01_data_up0: any = {}

    const jit_ref01_markdef_up0 = { name: 'act', value: 'Mark01-jit_ref01_' + setup.now }
    ;(jit_ref01_data_up0 as any)[jit_ref01_markdef_up0.name] = jit_ref01_markdef_up0.value

    const jit_ref01_resdata_up0 = (await jit_ref01_ent.update(jit_ref01_data_up0)).data()
    assert(null != jit_ref01_resdata_up0)

    assert((jit_ref01_resdata_up0 as any)[jit_ref01_markdef_up0.name] === jit_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/jit/JitTestData.json')

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
    ['jit01','jit02','jit03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_JIT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_JIT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_JIT_ENTID']
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
  
