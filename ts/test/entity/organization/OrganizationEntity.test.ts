

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


describe('OrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Organization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"organization","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/organizations/{slug}/project-claim/{token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"tsrqponmlkjihgfedcba","k":"param","n":"organization_id","or":"slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"0123456789abcdef0123456789abcdef01234567","k":"param","n":"token","or":"token","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/v1/organizations/{slug}/project-claim/{token}","q":{"exist":["organization_id","token"]},"r":{"param":{"slug":"organization_id"}},"s":[{"lit":"v1"},{"lit":"organizations"},{"var":"organization_id"},{"lit":"project-claim"},{"var":"token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"organization","name__orig":"organization","Name":"Organization","name_":"organization","name-":"organization","NAME":"ORGANIZATION","index$":37}, {"active":true,"entity":"organization","key$":"BasicOrganizationFlow","kind":"basic","name":"BasicOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_ref01"},"m":{"organization_id":"organization01","token":"token01"},"o":"create","s":[],"v":[]}]}, 'Organization', {"POST /v1/organizations/{slug}/project-claim/{token}":{"protocol":"http","parameters":[{"name":"slug","required":true,"in":"path","description":"Organization slug","schema":{"pattern":"^[\\w-]+$","example":"tsrqponmlkjihgfedcba","type":"string"},"index$":0},{"name":"token","required":true,"in":"path","schema":{"example":"0123456789abcdef0123456789abcdef01234567","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_ref01_ent = client.Organization()
    let organization_ref01_data = setup.data.new.organization['organization_ref01']
    organization_ref01_data['organization_id'] = setup.idmap['organization01']
    organization_ref01_data['token'] = setup.idmap['token01']

    organization_ref01_data = (await organization_ref01_ent.create(organization_ref01_data)).data()
    assert(null != organization_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization/OrganizationTestData.json')

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
    ['organization01','organization02','organization03','token01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_ORGANIZATION_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_ORGANIZATION_ENTID']
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
  
