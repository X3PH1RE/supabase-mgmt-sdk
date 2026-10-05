

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


describe('StorageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Storage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'storage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"capabilities":{"a":true,"h":"Capabilities","n":"capabilities","r":true,"t":"`$OBJECT`","key$":"capabilities","index$":0},"external":{"a":true,"h":"External","n":"external","r":true,"t":"`$OBJECT`","key$":"external","index$":1},"features":{"a":true,"h":"Features","n":"features","op":{"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"t":"`$OBJECT`","key$":"features","index$":2},"fileSizeLimit":{"a":true,"fo":"int64","h":"File Size Limit","n":"fileSizeLimit","op":{"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"t":"`$INTEGER`","key$":"fileSizeLimit","index$":3},"migrationVersion":{"a":true,"h":"Migration Version","n":"migrationVersion","r":true,"t":"`$STRING`","key$":"migrationVersion","index$":4}},"name":"storage","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/config/storage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/config/storage","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"storage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/config/storage","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/config/storage","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"config"},{"lit":"storage"}],"t":{"req":{"external":"`reqdata.external`","features":"`reqdata.feature`","fileSizeLimit":"`reqdata.file_size_limit`"},"res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"storage","name__orig":"storage","Name":"Storage","name_":"storage","name-":"storage","NAME":"STORAGE","index$":60}, {"active":true,"entity":"storage","key$":"BasicStorageFlow","kind":"basic","name":"BasicStorageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"storage_ref01","srcdatavar":"storage_ref01_data","suffix":"_up0","textfield":"migrationVersion"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-storage_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"storage_ref01","srcdatavar":"storage_ref01_data","suffix":"_dt0"},"m":{"id":"storage01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-storage_ref01"}}]}]}, 'Storage', {"GET /v1/projects/{ref}/config/storage":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PATCH /v1/projects/{ref}/config/storage":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"fileSizeLimit":{"type":"integer","format":"int64","minimum":0,"maximum":536870912000,"key$":"fileSizeLimit"},"features":{"type":"object","properties":{"imageTransformation":{"type":"object","properties":{"enabled":{}},"required":["enabled"]},"s3Protocol":{"type":"object","properties":{"enabled":{}},"required":["enabled"]},"purgeCache":{"type":"object","properties":{"enabled":{}},"required":["enabled"]},"icebergCatalog":{"type":"object","properties":{"enabled":{},"maxNamespaces":{},"maxTables":{},"maxCatalogs":{}},"required":["enabled","maxNamespaces","maxTables","maxCatalogs"]},"vectorBuckets":{"type":"object","properties":{"enabled":{},"maxBuckets":{},"maxIndexes":{}},"required":["enabled","maxBuckets","maxIndexes"]}},"key$":"features"},"external":{"type":"object","properties":{"upstreamTarget":{"type":"string","enum":["main","canary"]}},"required":["upstreamTarget"],"key$":"external"}},"example":{"fileSizeLimit":10485760,"features":{"imageTransformation":{"enabled":true}}},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateStorageConfigBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let storage_ref01_data = Object.values(setup.data.existing.storage)[0] as any

    // UPDATE
    const storage_ref01_ent = client.Storage()
    const storage_ref01_data_up0: any = {}

    const storage_ref01_markdef_up0 = { name: 'migrationVersion', value: 'Mark01-storage_ref01_' + setup.now }
    ;(storage_ref01_data_up0 as any)[storage_ref01_markdef_up0.name] = storage_ref01_markdef_up0.value

    const storage_ref01_resdata_up0 = (await storage_ref01_ent.update(storage_ref01_data_up0)).data()
    assert(null != storage_ref01_resdata_up0)

    assert((storage_ref01_resdata_up0 as any)[storage_ref01_markdef_up0.name] === storage_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/storage/StorageTestData.json')

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
    ['storage01','storage02','storage03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_STORAGE_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_STORAGE_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_STORAGE_ENTID']
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
  
