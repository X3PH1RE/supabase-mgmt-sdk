

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


describe('BranchUpdateResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.BranchUpdateResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'branch_update_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"migration_version":{"a":true,"h":"Migration Version","n":"migration_version","r":false,"t":"`$STRING`","key$":"migration_version","index$":0}},"name":"branch_update_response_output","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/branches/{branch_id_or_ref}/merge","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"branch_id_or_ref","or":"branch_id_or_ref","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/v1/branches/{branch_id_or_ref}/merge","q":{"exist":["branch_id_or_ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"branch_id_or_ref"},{"lit":"merge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/branches/{branch_id_or_ref}/push","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"branch_id_or_ref","or":"branch_id_or_ref","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/v1/branches/{branch_id_or_ref}/push","q":{"exist":["branch_id_or_ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"branch_id_or_ref"},{"lit":"push"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/branches/{branch_id_or_ref}/reset","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"branch_id_or_ref","or":"branch_id_or_ref","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/v1/branches/{branch_id_or_ref}/reset","q":{"exist":["branch_id_or_ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"branch_id_or_ref"},{"lit":"reset"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.branch"]]},"key$":"branch_update_response_output","name__orig":"branch_update_response_output","Name":"BranchUpdateResponseOutput","name_":"branch_update_response_output","name-":"branch-update-response-output","NAME":"BRANCH_UPDATE_RESPONSE_OUTPUT","index$":7}, {"active":true,"entity":"branch_update_response_output","key$":"BasicBranchUpdateResponseOutputFlow","kind":"basic","name":"BasicBranchUpdateResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branch_update_response_output_ref01"},"m":{"branch_id_or_ref":"branch_or_ref01"},"o":"create","s":[],"v":[]}]}, 'BranchUpdateResponseOutput', {"POST /v1/branches/{branch_id_or_ref}/merge":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"migration_version":{"type":"string","key$":"migration_version"}},"example":{"migration_version":"20250312000000"},"x-ref":"#/components/schemas/BranchActionBody","index$":1}}}},"parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0}]},"POST /v1/branches/{branch_id_or_ref}/push":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"migration_version":{"type":"string","key$":"migration_version"}},"example":{"migration_version":"20250312000000"},"x-ref":"#/components/schemas/BranchActionBody","index$":1}}}},"parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0}]},"POST /v1/branches/{branch_id_or_ref}/reset":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"migration_version":{"type":"string","key$":"migration_version"}},"example":{"migration_version":"20250312000000"},"x-ref":"#/components/schemas/BranchActionBody","index$":1}}}},"parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const branch_update_response_output_ref01_ent = client.BranchUpdateResponseOutput()
    let branch_update_response_output_ref01_data = setup.data.new.branch_update_response_output['branch_update_response_output_ref01']
    branch_update_response_output_ref01_data['branch_id_or_ref'] = setup.idmap['branch_or_ref01']

    branch_update_response_output_ref01_data = (await branch_update_response_output_ref01_ent.create(branch_update_response_output_ref01_data)).data()
    assert(null != branch_update_response_output_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/branch_update_response_output/BranchUpdateResponseOutputTestData.json')

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
    ['branch_update_response_output01','branch_update_response_output02','branch_update_response_output03','branch01','branch02','branch03','branch_or_ref01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_BRANCH_UPDATE_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_BRANCH_UPDATE_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_BRANCH_UPDATE_RESPONSE_OUTPUT_ENTID']
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
  
