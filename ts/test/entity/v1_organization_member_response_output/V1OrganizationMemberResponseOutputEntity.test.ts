

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


describe('V1OrganizationMemberResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1OrganizationMemberResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_organization_member_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":true,"t":"`$STRING`","key$":"avatar_url","index$":0},"email":{"a":true,"h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":1},"mfa_enabled":{"a":true,"h":"Mfa Enabled","n":"mfa_enabled","r":true,"t":"`$BOOLEAN`","key$":"mfa_enabled","index$":2},"role_name":{"a":true,"h":"Role Name","n":"role_name","r":false,"t":"`$STRING`","key$":"role_name","index$":3},"user_id":{"a":true,"h":"User Id","n":"user_id","r":true,"t":"`$STRING`","key$":"user_id","index$":4},"user_name":{"a":true,"h":"User Name","n":"user_name","r":true,"t":"`$STRING`","key$":"user_name","index$":5}},"name":"v1_organization_member_response_output","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/organizations/{slug}/members","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"tsrqponmlkjihgfedcba","k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/organizations/{slug}/members","q":{"exist":["slug"]},"r":{},"s":[{"lit":"v1"},{"lit":"organizations"},{"var":"slug"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.organization"]]},"key$":"v1_organization_member_response_output","name__orig":"v1_organization_member_response_output","Name":"V1OrganizationMemberResponseOutput","name_":"v1_organization_member_response_output","name-":"v1-organization-member-response-output","NAME":"V1_ORGANIZATION_MEMBER_RESPONSE_OUTPUT","index$":76}, {"active":true,"entity":"v1_organization_member_response_output","key$":"BasicV1OrganizationMemberResponseOutputFlow","kind":"basic","name":"BasicV1OrganizationMemberResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"slug":"slug01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"v1_organization_member_response_output_ref01"}}]}]}, 'V1OrganizationMemberResponseOutput', {"GET /v1/organizations/{slug}/members":{"protocol":"http","parameters":[{"name":"slug","required":true,"in":"path","description":"Organization slug","schema":{"pattern":"^[\\w-]+$","example":"tsrqponmlkjihgfedcba","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_organization_member_response_output_ref01_data = Object.values(setup.data.existing.v1_organization_member_response_output)[0] as any

    // LIST
    const v1_organization_member_response_output_ref01_ent = client.V1OrganizationMemberResponseOutput()
    const v1_organization_member_response_output_ref01_match: any = {}
    v1_organization_member_response_output_ref01_match['slug'] = setup.idmap['slug01']

    const v1_organization_member_response_output_ref01_list = (await v1_organization_member_response_output_ref01_ent.list(v1_organization_member_response_output_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_organization_member_response_output/V1OrganizationMemberResponseOutputTestData.json')

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
    ['v1_organization_member_response_output01','v1_organization_member_response_output02','v1_organization_member_response_output03','organization01','organization02','organization03','slug01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_ORGANIZATION_MEMBER_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_ORGANIZATION_MEMBER_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_ORGANIZATION_MEMBER_RESPONSE_OUTPUT_ENTID']
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
  
