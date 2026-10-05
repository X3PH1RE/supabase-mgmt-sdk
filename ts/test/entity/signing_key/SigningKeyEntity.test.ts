

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


describe('SigningKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.SigningKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'signing_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"algorithm":{"a":true,"h":"Algorithm","n":"algorithm","r":true,"t":"`$STRING`","key$":"algorithm","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":2},"private_jwk":{"a":true,"h":"Private Jwk","n":"private_jwk","r":false,"t":"`$ANY`","union":{"branches":4,"count":1,"depth":0},"key$":"private_jwk","index$":3},"public_jwk":{"a":true,"h":"Public Jwk","n":"public_jwk","r":true,"t":"`$ANY`","key$":"public_jwk","index$":4},"status":{"a":true,"h":"Status","n":"status","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"status","index$":5},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":6}},"id":{"field":"id","name":"id"},"name":"signing_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/config/auth/signing-keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/config/auth/signing-keys","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"signing-keys"}],"t":{"req":{"algorithm":"`reqdata.algorithm`","private_jwk":"`reqdata.private_jwk`","status":"`reqdata.status`"},"res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/config/auth/signing-keys","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/config/auth/signing-keys","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"signing-keys"}],"t":{"req":"`reqdata`","res":"`body.keys`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/config/auth/signing-keys/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"33333333-3333-4333-8333-333333333333","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/config/auth/signing-keys/{id}","q":{"exist":["id","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"signing-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/config/auth/signing-keys/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"33333333-3333-4333-8333-333333333333","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/config/auth/signing-keys/{id}","q":{"exist":["id","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"signing-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/config/auth/signing-keys/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"33333333-3333-4333-8333-333333333333","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/config/auth/signing-keys/{id}","q":{"exist":["id","project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"signing-keys"},{"var":"id"}],"t":{"req":{"status":"`reqdata.status`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"signing_key","name__orig":"signing_key","Name":"SigningKey","name_":"signing_key","name-":"signing-key","NAME":"SIGNING_KEY","index$":56}, {"active":true,"entity":"signing_key","key$":"BasicSigningKeyFlow","kind":"basic","name":"BasicSigningKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"signing_key_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"signing_key_ref01"}}]},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"signing_key_ref01","srcdatavar":"signing_key_ref01_data","suffix":"_up0","textfield":"algorithm"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-signing_key_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"signing_key_ref01","srcdatavar":"signing_key_ref01_data","suffix":"_dt0"},"m":{"id":"signing_key01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-signing_key_ref01"}}]},{"a":true,"d":{},"i":{"ref":"signing_key_ref01","suffix":"_rm0"},"m":{"id":"signing_key01","project_id":"project01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"signing_key_ref01"}}]}]}, 'SigningKey', {"POST /v1/projects/{ref}/config/auth/signing-keys":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"algorithm":{"type":"string","enum":["EdDSA","ES256","RS256","HS256"],"key$":"algorithm"},"status":{"type":"string","enum":["in_use","standby"],"key$":"status"},"private_jwk":{"oneOf":[{"type":"object","properties":{"kid":{},"use":{},"key_ops":{},"ext":{},"kty":{},"alg":{},"n":{},"e":{},"d":{},"p":{},"q":{},"dp":{},"dq":{},"qi":{}},"required":["kty","n","e","d","p","q","dp","dq","qi"],"additionalProperties":false},{"type":"object","properties":{"kid":{},"use":{},"key_ops":{},"ext":{},"kty":{},"alg":{},"crv":{},"x":{},"y":{},"d":{}},"required":["kty","crv","x","y","d"],"additionalProperties":false},{"type":"object","properties":{"kid":{},"use":{},"key_ops":{},"ext":{},"kty":{},"alg":{},"crv":{},"x":{},"d":{}},"required":["kty","crv","x","d"],"additionalProperties":false},{"type":"object","properties":{"kid":{},"use":{},"key_ops":{},"ext":{},"kty":{},"alg":{},"k":{}},"required":["kty","k"],"additionalProperties":false}],"key$":"private_jwk"}},"required":["algorithm"],"example":{"algorithm":"RS256","status":"standby"},"additionalProperties":false,"x-ref":"#/components/schemas/CreateSigningKeyBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/config/auth/signing-keys":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/config/auth/signing-keys/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"33333333-3333-4333-8333-333333333333","type":"string"},"index$":0},{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":1}]},"DELETE /v1/projects/{ref}/config/auth/signing-keys/{id}":{"protocol":"http","parameters":[{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"33333333-3333-4333-8333-333333333333","type":"string"},"index$":0},{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":1}]},"PATCH /v1/projects/{ref}/config/auth/signing-keys/{id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"status":{"type":"string","enum":["in_use","previously_used","revoked","standby"],"key$":"status"}},"required":["status"],"example":{"status":"standby"},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateSigningKeyBody","index$":1}}}},"parameters":[{"name":"id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"33333333-3333-4333-8333-333333333333","type":"string"},"index$":0},{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const signing_key_ref01_ent = client.SigningKey()
    let signing_key_ref01_data = setup.data.new.signing_key['signing_key_ref01']
    signing_key_ref01_data['project_id'] = setup.idmap['project01']

    signing_key_ref01_data = (await signing_key_ref01_ent.create(signing_key_ref01_data)).data()
    assert(null != signing_key_ref01_data.id)


    // LIST
    const signing_key_ref01_match: any = {}
    signing_key_ref01_match['project_id'] = setup.idmap['project01']

    const signing_key_ref01_list = (await signing_key_ref01_ent.list(signing_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(signing_key_ref01_list, { id: signing_key_ref01_data.id })))


    // UPDATE
    const signing_key_ref01_data_up0: any = {}
    signing_key_ref01_data_up0.id = signing_key_ref01_data.id
    signing_key_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const signing_key_ref01_markdef_up0 = { name: 'algorithm', value: 'Mark01-signing_key_ref01_' + setup.now }
    ;(signing_key_ref01_data_up0 as any)[signing_key_ref01_markdef_up0.name] = signing_key_ref01_markdef_up0.value

    const signing_key_ref01_resdata_up0 = (await signing_key_ref01_ent.update(signing_key_ref01_data_up0)).data()
    assert(signing_key_ref01_resdata_up0.id === signing_key_ref01_data_up0.id)

    assert((signing_key_ref01_resdata_up0 as any)[signing_key_ref01_markdef_up0.name] === signing_key_ref01_markdef_up0.value)


    // LOAD
    const signing_key_ref01_match_dt0: any = {}
    signing_key_ref01_match_dt0.id = signing_key_ref01_data.id
    const signing_key_ref01_data_dt0 = (await signing_key_ref01_ent.load(signing_key_ref01_match_dt0)).data()
    assert(signing_key_ref01_data_dt0.id === signing_key_ref01_data.id)


    // REMOVE
    const signing_key_ref01_match_rm0: any = { id: signing_key_ref01_data.id }
    await signing_key_ref01_ent.remove(signing_key_ref01_match_rm0)
  

    // LIST
    const signing_key_ref01_match_rt0: any = {}
    signing_key_ref01_match_rt0['project_id'] = setup.idmap['project01']

    const signing_key_ref01_list_rt0 = (await signing_key_ref01_ent.list(signing_key_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(signing_key_ref01_list_rt0, { id: signing_key_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/signing_key/SigningKeyTestData.json')

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
    ['signing_key01','signing_key02','signing_key03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_SIGNING_KEY_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_SIGNING_KEY_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_SIGNING_KEY_ENTID']
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
  
