

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


describe('UpdateProviderResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.UpdateProviderResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_provider_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attribute_mapping":{"a":true,"h":"Attribute Mapping","n":"attribute_mapping","r":true,"t":"`$OBJECT`","union":{"branches":4,"count":1,"depth":5},"key$":"attribute_mapping","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"domains":{"a":true,"h":"Domains","n":"domains","r":false,"t":"`$ARRAY`","key$":"domains","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"metadata_url":{"a":true,"h":"Metadata Url","n":"metadata_url","r":false,"t":"`$STRING`","key$":"metadata_url","index$":4},"metadata_xml":{"a":true,"h":"Metadata Xml","n":"metadata_xml","r":false,"t":"`$STRING`","key$":"metadata_xml","index$":5},"name_id_format":{"a":true,"h":"Name Id Format","n":"name_id_format","r":false,"t":"`$STRING`","key$":"name_id_format","index$":6},"saml":{"a":true,"h":"Saml","n":"saml","r":true,"t":"`$OBJECT`","union":{"branches":4,"count":1,"depth":7},"key$":"saml","index$":7},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"t":"`$STRING`","key$":"updated_at","index$":8}},"id":{"field":"id","name":"id"},"name":"update_provider_response_output","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/config/auth/sso/providers/{provider_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"77777777-7777-4777-8777-777777777777","k":"param","n":"provider_id","or":"provider_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/config/auth/sso/providers/{provider_id}","q":{"exist":["project_id","provider_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"auth"},{"lit":"sso"},{"lit":"providers"},{"var":"provider_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.provider"]]},"key$":"update_provider_response_output","name__orig":"update_provider_response_output","Name":"UpdateProviderResponseOutput","name_":"update_provider_response_output","name-":"update-provider-response-output","NAME":"UPDATE_PROVIDER_RESPONSE_OUTPUT","index$":67}, {"active":true,"entity":"update_provider_response_output","key$":"BasicUpdateProviderResponseOutputFlow","kind":"basic","name":"BasicUpdateProviderResponseOutputFlow","param":{},"step":[{"a":true,"d":{"project_id":"project01"},"i":{"ref":"update_provider_response_output_ref01","srcdatavar":"update_provider_response_output_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_provider_response_output_ref01"}}],"v":[]}]}, 'UpdateProviderResponseOutput', {"PUT /v1/projects/{ref}/config/auth/sso/providers/{provider_id}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"metadata_xml":{"type":"string","key$":"metadata_xml"},"metadata_url":{"type":"string","key$":"metadata_url"},"domains":{"type":"array","items":{"type":"string"},"key$":"domains"},"attribute_mapping":{"type":"object","properties":{"keys":{"type":"object","additionalProperties":{"type":"object","properties":{}}}},"required":["keys"],"key$":"attribute_mapping"},"name_id_format":{"type":"string","enum":["urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified","urn:oasis:names:tc:SAML:2.0:nameid-format:transient","urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress","urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"],"key$":"name_id_format"}},"example":{"metadata_url":"https://sso.acme.com/metadata.xml","domains":["acme.com","contractors.acme.com"]},"x-ref":"#/components/schemas/UpdateProviderBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"provider_id","required":true,"in":"path","schema":{"format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","example":"77777777-7777-4777-8777-777777777777","type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_provider_response_output_ref01_data = Object.values(setup.data.existing.update_provider_response_output)[0] as any

    // UPDATE
    const update_provider_response_output_ref01_ent = client.UpdateProviderResponseOutput()
    const update_provider_response_output_ref01_data_up0: any = {}
    update_provider_response_output_ref01_data_up0.id = update_provider_response_output_ref01_data.id
    update_provider_response_output_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const update_provider_response_output_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-update_provider_response_output_ref01_' + setup.now }
    ;(update_provider_response_output_ref01_data_up0 as any)[update_provider_response_output_ref01_markdef_up0.name] = update_provider_response_output_ref01_markdef_up0.value

    const update_provider_response_output_ref01_resdata_up0 = (await update_provider_response_output_ref01_ent.update(update_provider_response_output_ref01_data_up0)).data()
    assert(update_provider_response_output_ref01_resdata_up0.id === update_provider_response_output_ref01_data_up0.id)

    assert((update_provider_response_output_ref01_resdata_up0 as any)[update_provider_response_output_ref01_markdef_up0.name] === update_provider_response_output_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_provider_response_output/UpdateProviderResponseOutputTestData.json')

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
    ['update_provider_response_output01','update_provider_response_output02','update_provider_response_output03','project01','project02','project03','provider01','provider02','provider03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_UPDATE_PROVIDER_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_UPDATE_PROVIDER_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_UPDATE_PROVIDER_RESPONSE_OUTPUT_ENTID']
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
  
