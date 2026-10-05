

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


describe('ThirdPartyAuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.ThirdPartyAuth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'third_party_auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"custom_jwks":{"a":true,"h":"Custom Jwks","n":"custom_jwks","r":false,"t":"`$ANY`","key$":"custom_jwks","index$":0},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":1},"inserted_at":{"a":true,"h":"Inserted At","n":"inserted_at","r":true,"t":"`$STRING`","key$":"inserted_at","index$":2},"jwks_url":{"a":true,"h":"Jwks Url","n":"jwks_url","r":false,"t":"`$STRING`","key$":"jwks_url","index$":3},"oidc_issuer_url":{"a":true,"h":"Oidc Issuer Url","n":"oidc_issuer_url","r":false,"t":"`$STRING`","key$":"oidc_issuer_url","index$":4},"resolved_at":{"a":true,"h":"Resolved At","n":"resolved_at","r":false,"t":"`$STRING`","key$":"resolved_at","index$":5},"resolved_jwks":{"a":true,"h":"Resolved Jwks","n":"resolved_jwks","r":false,"t":"`$ANY`","key$":"resolved_jwks","index$":6},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$STRING`","key$":"type","index$":7},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":8}},"id":{"field":"id","name":"id"},"name":"third_party_auth","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/config/auth/third-party-auth","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/config/auth/third-party-auth","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"third-party-auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/config/auth/third-party-auth","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/config/auth/third-party-auth","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"third-party-auth"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"88888888-8888-4888-8888-888888888888","k":"param","n":"id","or":"tpa_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}","q":{"exist":["id","project_id"]},"r":{"param":{"ref":"project_id","tpa_id":"id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"third-party-auth"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"88888888-8888-4888-8888-888888888888","k":"param","n":"id","or":"tpa_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}","q":{"exist":["id","project_id"]},"r":{"param":{"ref":"project_id","tpa_id":"id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"third-party-auth"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"third_party_auth","name__orig":"third_party_auth","Name":"ThirdPartyAuth","name_":"third_party_auth","name-":"third-party-auth","NAME":"THIRD_PARTY_AUTH","index$":64}, {"active":true,"entity":"third_party_auth","key$":"BasicThirdPartyAuthFlow","kind":"basic","name":"BasicThirdPartyAuthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"third_party_auth_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"third_party_auth_ref01"}}]},{"a":true,"d":{},"i":{"ref":"third_party_auth_ref01","srcdatavar":"third_party_auth_ref01_data","suffix":"_dt0"},"m":{"id":"third_party_auth01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-third_party_auth_ref01"}}]},{"a":true,"d":{},"i":{"ref":"third_party_auth_ref01","suffix":"_rm0"},"m":{"id":"third_party_auth01","project_id":"project01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"third_party_auth_ref01"}}]}]}, 'ThirdPartyAuth', {"POST /v1/projects/{ref}/config/auth/third-party-auth":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"oidc_issuer_url":{"type":"string","key$":"oidc_issuer_url"},"jwks_url":{"type":"string","key$":"jwks_url"},"custom_jwks":{"key$":"custom_jwks"}},"example":{"oidc_issuer_url":"https://login.acme.com","jwks_url":"https://login.acme.com/.well-known/jwks.json"},"x-ref":"#/components/schemas/CreateThirdPartyAuthBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/config/auth/third-party-auth":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"tpa_id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"88888888-8888-4888-8888-888888888888","type":"string"},"index$":1}]},"DELETE /v1/projects/{ref}/config/auth/third-party-auth/{tpa_id}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"tpa_id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"88888888-8888-4888-8888-888888888888","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const third_party_auth_ref01_ent = client.ThirdPartyAuth()
    let third_party_auth_ref01_data = setup.data.new.third_party_auth['third_party_auth_ref01']
    third_party_auth_ref01_data['project_id'] = setup.idmap['project01']

    third_party_auth_ref01_data = (await third_party_auth_ref01_ent.create(third_party_auth_ref01_data)).data()
    assert(null != third_party_auth_ref01_data.id)


    // LIST
    const third_party_auth_ref01_match: any = {}
    third_party_auth_ref01_match['project_id'] = setup.idmap['project01']

    const third_party_auth_ref01_list = (await third_party_auth_ref01_ent.list(third_party_auth_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(third_party_auth_ref01_list, { id: third_party_auth_ref01_data.id })))


    // LOAD
    const third_party_auth_ref01_match_dt0: any = {}
    third_party_auth_ref01_match_dt0.id = third_party_auth_ref01_data.id
    const third_party_auth_ref01_data_dt0 = (await third_party_auth_ref01_ent.load(third_party_auth_ref01_match_dt0)).data()
    assert(third_party_auth_ref01_data_dt0.id === third_party_auth_ref01_data.id)


    // REMOVE
    const third_party_auth_ref01_match_rm0: any = { id: third_party_auth_ref01_data.id }
    await third_party_auth_ref01_ent.remove(third_party_auth_ref01_match_rm0)
  

    // LIST
    const third_party_auth_ref01_match_rt0: any = {}
    third_party_auth_ref01_match_rt0['project_id'] = setup.idmap['project01']

    const third_party_auth_ref01_list_rt0 = (await third_party_auth_ref01_ent.list(third_party_auth_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(third_party_auth_ref01_list_rt0, { id: third_party_auth_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/third_party_auth/ThirdPartyAuthTestData.json')

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
    ['third_party_auth01','third_party_auth02','third_party_auth03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_THIRD_PARTY_AUTH_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_THIRD_PARTY_AUTH_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_THIRD_PARTY_AUTH_ENTID']
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
  
