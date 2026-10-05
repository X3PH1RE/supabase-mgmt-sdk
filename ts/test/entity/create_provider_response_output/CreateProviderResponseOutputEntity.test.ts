

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


describe('CreateProviderResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.CreateProviderResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_provider_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attribute_mapping":{"a":true,"h":"Attribute Mapping","n":"attribute_mapping","r":true,"t":"`$OBJECT`","union":{"branches":4,"count":1,"depth":5},"key$":"attribute_mapping","index$":0},"domains":{"a":true,"h":"Domains","n":"domains","r":false,"t":"`$ARRAY`","key$":"domains","index$":1},"metadata_url":{"a":true,"h":"Metadata Url","n":"metadata_url","r":false,"t":"`$STRING`","key$":"metadata_url","index$":2},"metadata_xml":{"a":true,"h":"Metadata Xml","n":"metadata_xml","r":false,"t":"`$STRING`","key$":"metadata_xml","index$":3},"name_id_format":{"a":true,"h":"Name Id Format","n":"name_id_format","r":false,"t":"`$STRING`","key$":"name_id_format","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"What type of provider will be created","t":"`$STRING`","key$":"type","index$":5}},"name":"create_provider_response_output","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/config/auth/sso/providers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/config/auth/sso/providers","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"sso"},{"lit":"providers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"create_provider_response_output","name__orig":"create_provider_response_output","Name":"CreateProviderResponseOutput","name_":"create_provider_response_output","name-":"create-provider-response-output","NAME":"CREATE_PROVIDER_RESPONSE_OUTPUT","index$":9}, {"active":true,"entity":"create_provider_response_output","key$":"BasicCreateProviderResponseOutputFlow","kind":"basic","name":"BasicCreateProviderResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_provider_response_output_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[]}]}, 'CreateProviderResponseOutput', {"POST /v1/projects/{ref}/config/auth/sso/providers":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"type":{"type":"string","enum":["saml"],"description":"What type of provider will be created","key$":"type"},"metadata_xml":{"type":"string","key$":"metadata_xml"},"metadata_url":{"type":"string","key$":"metadata_url"},"domains":{"type":"array","items":{"type":"string"},"key$":"domains"},"attribute_mapping":{"type":"object","properties":{"keys":{"type":"object","additionalProperties":{"type":"object","properties":{}}}},"required":["keys"],"key$":"attribute_mapping"},"name_id_format":{"type":"string","enum":["urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified","urn:oasis:names:tc:SAML:2.0:nameid-format:transient","urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress","urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"],"key$":"name_id_format"}},"required":["type"],"example":{"type":"saml","metadata_url":"https://sso.acme.com/metadata.xml","domains":["acme.com"],"attribute_mapping":{"keys":{"email":{"name":"email"},"first_name":{"name":"first_name"},"last_name":{"name":"last_name"}}}},"x-ref":"#/components/schemas/CreateProviderBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_provider_response_output_ref01_ent = client.CreateProviderResponseOutput()
    let create_provider_response_output_ref01_data = setup.data.new.create_provider_response_output['create_provider_response_output_ref01']
    create_provider_response_output_ref01_data['project_id'] = setup.idmap['project01']

    create_provider_response_output_ref01_data = (await create_provider_response_output_ref01_ent.create(create_provider_response_output_ref01_data)).data()
    assert(null != create_provider_response_output_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_provider_response_output/CreateProviderResponseOutputTestData.json')

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
    ['create_provider_response_output01','create_provider_response_output02','create_provider_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_CREATE_PROVIDER_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_CREATE_PROVIDER_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_CREATE_PROVIDER_RESPONSE_OUTPUT_ENTID']
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
  
