

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


describe('PostgrestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Postgrest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'postgrest.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"db_extra_search_path":{"a":true,"h":"Db Extra Search Path","n":"db_extra_search_path","r":true,"t":"`$STRING`","key$":"db_extra_search_path","index$":0},"db_pool":{"a":true,"h":"Db Pool","n":"db_pool","r":true,"sh":"If `null`, the value is automatically configured based on compute size.","t":"`$INTEGER`","key$":"db_pool","index$":1},"db_pool_acquisition_timeout":{"a":true,"h":"Db Pool Acquisition Timeout","n":"db_pool_acquisition_timeout","r":true,"sh":"If `null`, the value is automatically configured to 10.","t":"`$INTEGER`","key$":"db_pool_acquisition_timeout","index$":2},"db_schema":{"a":true,"h":"Db Schema","n":"db_schema","r":true,"t":"`$STRING`","key$":"db_schema","index$":3},"jwt_secret":{"a":true,"h":"Jwt Secret","n":"jwt_secret","r":false,"t":"`$STRING`","key$":"jwt_secret","index$":4},"max_rows":{"a":true,"h":"Max Rows","n":"max_rows","r":true,"t":"`$INTEGER`","key$":"max_rows","index$":5}},"name":"postgrest","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/postgrest","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/postgrest","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"postgrest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"postgrest","name__orig":"postgrest","Name":"Postgrest","name_":"postgrest","name-":"postgrest","NAME":"POSTGREST","index$":43}, {"active":true,"entity":"postgrest","key$":"BasicPostgrestFlow","kind":"basic","name":"BasicPostgrestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"postgrest_ref01","srcdatavar":"postgrest_ref01_data","suffix":"_dt0"},"m":{"id":"postgrest01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-postgrest_ref01"}}]}]}, 'Postgrest', {"GET /v1/projects/{ref}/postgrest":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let postgrest_ref01_data = Object.values(setup.data.existing.postgrest)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const postgrest_ref01_ent = client.Postgrest()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/postgrest/PostgrestTestData.json')

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
    ['postgrest01','postgrest02','postgrest03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_POSTGREST_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_POSTGREST_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_POSTGREST_ENTID']
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
  
