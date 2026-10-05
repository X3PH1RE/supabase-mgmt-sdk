

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


describe('V1BackupScheduleResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1BackupScheduleResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_backup_schedule_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"schedule_for":{"a":true,"h":"Schedule For","n":"schedule_for","r":true,"sh":"Time of day to schedule daily backups, in UTC.","t":"`$STRING`","key$":"schedule_for","index$":0},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"Timestamp of when the backup schedule was last updated.","t":"`$STRING`","key$":"updated_at","index$":1}},"name":"v1_backup_schedule_response_output","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/database/backups/schedule","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/database/backups/schedule","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"backups"},{"lit":"schedule"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/database/backups/schedule","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/database/backups/schedule","q":{"exist":["project_id"]},"r":{"param":{"ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"database"},{"lit":"backups"},{"lit":"schedule"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"v1_backup_schedule_response_output","name__orig":"v1_backup_schedule_response_output","Name":"V1BackupScheduleResponseOutput","name_":"v1_backup_schedule_response_output","name-":"v1-backup-schedule-response-output","NAME":"V1_BACKUP_SCHEDULE_RESPONSE_OUTPUT","index$":69}, {"active":true,"entity":"v1_backup_schedule_response_output","key$":"BasicV1BackupScheduleResponseOutputFlow","kind":"basic","name":"BasicV1BackupScheduleResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"v1_backup_schedule_response_output_ref01","srcdatavar":"v1_backup_schedule_response_output_ref01_data","suffix":"_up0","textfield":"schedule_for"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1_backup_schedule_response_output_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"v1_backup_schedule_response_output_ref01","srcdatavar":"v1_backup_schedule_response_output_ref01_data","suffix":"_dt0"},"m":{"id":"v1_backup_schedule_response_output01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1_backup_schedule_response_output_ref01"}}]}]}, 'V1BackupScheduleResponseOutput', {"GET /v1/projects/{ref}/database/backups/schedule":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PATCH /v1/projects/{ref}/database/backups/schedule":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"schedule_for":{"type":"string","pattern":"^(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?$","description":"Time of day to schedule daily backups, in UTC. Format: HH:MM:SS.","example":"04:00:00","key$":"schedule_for"}},"required":["schedule_for"],"example":{"schedule_for":"04:00:00"},"x-ref":"#/components/schemas/V1UpdateBackupScheduleBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let v1_backup_schedule_response_output_ref01_data = Object.values(setup.data.existing.v1_backup_schedule_response_output)[0] as any

    // UPDATE
    const v1_backup_schedule_response_output_ref01_ent = client.V1BackupScheduleResponseOutput()
    const v1_backup_schedule_response_output_ref01_data_up0: any = {}

    const v1_backup_schedule_response_output_ref01_markdef_up0 = { name: 'schedule_for', value: 'Mark01-v1_backup_schedule_response_output_ref01_' + setup.now }
    ;(v1_backup_schedule_response_output_ref01_data_up0 as any)[v1_backup_schedule_response_output_ref01_markdef_up0.name] = v1_backup_schedule_response_output_ref01_markdef_up0.value

    const v1_backup_schedule_response_output_ref01_resdata_up0 = (await v1_backup_schedule_response_output_ref01_ent.update(v1_backup_schedule_response_output_ref01_data_up0)).data()
    assert(null != v1_backup_schedule_response_output_ref01_resdata_up0)

    assert((v1_backup_schedule_response_output_ref01_resdata_up0 as any)[v1_backup_schedule_response_output_ref01_markdef_up0.name] === v1_backup_schedule_response_output_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_backup_schedule_response_output/V1BackupScheduleResponseOutputTestData.json')

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
    ['v1_backup_schedule_response_output01','v1_backup_schedule_response_output02','v1_backup_schedule_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_BACKUP_SCHEDULE_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_BACKUP_SCHEDULE_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_BACKUP_SCHEDULE_RESPONSE_OUTPUT_ENTID']
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
  
