

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


describe('BranchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.Branch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'branch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"branch_name":{"a":true,"h":"Branch Name","n":"branch_name","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"t":"`$STRING`","key$":"branch_name","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":1},"db_host":{"a":true,"h":"Db Host","n":"db_host","r":true,"t":"`$STRING`","key$":"db_host","index$":2},"db_pass":{"a":true,"h":"Db Pass","n":"db_pass","r":false,"t":"`$STRING`","key$":"db_pass","index$":3},"db_port":{"a":true,"h":"Db Port","n":"db_port","r":true,"t":"`$INTEGER`","key$":"db_port","index$":4},"db_user":{"a":true,"h":"Db User","n":"db_user","r":false,"t":"`$STRING`","key$":"db_user","index$":5},"deletion_scheduled_at":{"a":true,"fo":"date-time","h":"Deletion Scheduled At","n":"deletion_scheduled_at","r":false,"t":"`$STRING`","key$":"deletion_scheduled_at","index$":6},"desired_instance_size":{"a":true,"h":"Desired Instance Size","n":"desired_instance_size","r":false,"t":"`$STRING`","key$":"desired_instance_size","index$":7},"git_branch":{"a":true,"h":"Git Branch","n":"git_branch","r":false,"t":"`$STRING`","key$":"git_branch","index$":8},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":9},"is_default":{"a":true,"h":"Is Default","n":"is_default","op":{"create":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"t":"`$BOOLEAN`","key$":"is_default","index$":10},"jwt_secret":{"a":true,"h":"Jwt Secret","n":"jwt_secret","r":false,"t":"`$STRING`","key$":"jwt_secret","index$":11},"latest_check_run_id":{"a":true,"de":true,"h":"Latest Check Run Id","n":"latest_check_run_id","r":false,"sh":"This field is deprecated and will not be populated.","t":"`$NUMBER`","key$":"latest_check_run_id","index$":12},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":13},"notify_url":{"a":true,"fo":"uri","h":"Notify Url","n":"notify_url","r":false,"sh":"HTTP endpoint to receive branch status updates.","t":"`$STRING`","key$":"notify_url","index$":14},"parent_project_ref":{"a":true,"h":"Parent Project Ref","n":"parent_project_ref","r":true,"t":"`$STRING`","key$":"parent_project_ref","index$":15},"persistent":{"a":true,"h":"Persistent","n":"persistent","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"t":"`$BOOLEAN`","key$":"persistent","index$":16},"postgres_engine":{"a":true,"h":"Postgres Engine","n":"postgres_engine","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Postgres engine version.","t":"`$STRING`","key$":"postgres_engine","index$":17},"postgres_version":{"a":true,"h":"Postgres Version","n":"postgres_version","r":true,"t":"`$STRING`","key$":"postgres_version","index$":18},"pr_number":{"a":true,"fo":"int32","h":"Pr Number","n":"pr_number","r":false,"t":"`$INTEGER`","key$":"pr_number","index$":19},"preview_project_status":{"a":true,"h":"Preview Project Status","n":"preview_project_status","r":false,"t":"`$STRING`","key$":"preview_project_status","index$":20},"project_ref":{"a":true,"h":"Project Ref","n":"project_ref","r":true,"t":"`$STRING`","key$":"project_ref","index$":21},"ref":{"a":true,"h":"Ref","n":"ref","r":true,"t":"`$STRING`","key$":"ref","index$":22},"region":{"a":true,"h":"Region","n":"region","r":false,"t":"`$STRING`","key$":"region","index$":23},"release_channel":{"a":true,"h":"Release Channel","n":"release_channel","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Release channel.","t":"`$STRING`","key$":"release_channel","index$":24},"request_review":{"a":true,"h":"Request Review","n":"request_review","r":false,"t":"`$BOOLEAN`","key$":"request_review","index$":25},"reset_on_push":{"a":true,"de":true,"h":"Reset On Push","n":"reset_on_push","r":false,"sh":"This field is deprecated and will be ignored.","t":"`$BOOLEAN`","key$":"reset_on_push","index$":26},"review_requested_at":{"a":true,"fo":"date-time","h":"Review Requested At","n":"review_requested_at","r":false,"t":"`$STRING`","key$":"review_requested_at","index$":27},"secrets":{"a":true,"h":"Secrets","n":"secrets","r":false,"t":"`$OBJECT`","key$":"secrets","index$":28},"status":{"a":true,"de":true,"h":"Status","n":"status","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"This field is deprecated.","t":"`$STRING`","key$":"status","index$":29},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":30},"with_data":{"a":true,"h":"With Data","n":"with_data","op":{"create":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"t":"`$BOOLEAN`","key$":"with_data","index$":31}},"id":{"field":"id","name":"id"},"name":"branch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/branches/{branch_id_or_ref}/restore","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"branch_id_or_ref","or":"branch_id_or_ref","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"POST","o":"/v1/branches/{branch_id_or_ref}/restore","q":{"$action":"restore","exist":["branch_id_or_ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"branch_id_or_ref"},{"lit":"restore"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/projects/{ref}/branches","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/branches","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/branches","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/branches","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}/branches/{name}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"preview-login-page","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"project_id","or":"ref","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/projects/{ref}/branches/{name}","q":{"exist":["id","project_id"]},"r":{"param":{"name":"id","ref":"project_id"}},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"project_id"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /v1/branches/{branch_id_or_ref}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"id","or":"branch_id_or_ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/branches/{branch_id_or_ref}","q":{"exist":["id"]},"r":{"param":{"branch_id_or_ref":"id"}},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/branches/{branch_id_or_ref}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"id","or":"branch_id_or_ref","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"force","or":"force","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/branches/{branch_id_or_ref}","q":{"exist":["force","id"]},"r":{"param":{"branch_id_or_ref":"id"}},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /v1/branches/{branch_id_or_ref}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"id","or":"branch_id_or_ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/branches/{branch_id_or_ref}","q":{"exist":["id"]},"r":{"param":{"branch_id_or_ref":"id"}},"s":[{"lit":"v1"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"branch","name__orig":"branch","Name":"Branch","name_":"branch","name-":"branch","NAME":"BRANCH","index$":6}, {"active":true,"entity":"branch","key$":"BasicBranchFlow","kind":"basic","name":"BasicBranchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"branch_ref01"},"m":{"project_id":"project01","ref":"branch_ref01"},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{"ref":"ref01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"branch_ref01"}}]},{"a":true,"d":{},"i":{"ref":"branch_ref01","srcdatavar":"branch_ref01_data","suffix":"_up0","textfield":"branch_name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branch_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"branch_ref01","srcdatavar":"branch_ref01_data","suffix":"_dt0"},"m":{"id":"branch01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-branch_ref01"}}]},{"a":true,"d":{},"i":{"ref":"branch_ref01","suffix":"_rm0"},"m":{"id":"branch01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"ref":"ref01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"branch_ref01"}}]}]}, 'Branch', {"POST /v1/branches/{branch_id_or_ref}/restore":{"protocol":"http","parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0}]},"POST /v1/projects/{ref}/branches":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"branch_name":{"type":"string","minLength":1,"key$":"branch_name"},"git_branch":{"type":"string","key$":"git_branch"},"is_default":{"type":"boolean","key$":"is_default"},"persistent":{"type":"boolean","key$":"persistent"},"region":{"type":"string","key$":"region"},"desired_instance_size":{"type":"string","enum":["pico","nano","micro","small","medium","large","xlarge","2xlarge","4xlarge","8xlarge","12xlarge","16xlarge","24xlarge","24xlarge_optimized_memory","24xlarge_optimized_cpu","24xlarge_high_memory","48xlarge","48xlarge_optimized_memory","48xlarge_optimized_cpu","48xlarge_high_memory"],"key$":"desired_instance_size"},"release_channel":{"type":"string","enum":["internal","alpha","beta","ga","withdrawn","preview"],"description":"Release channel. If not provided, GA will be used.","key$":"release_channel"},"postgres_engine":{"type":"string","enum":["15","17","17-oriole"],"description":"Postgres engine version. If not provided, the latest version will be used.","key$":"postgres_engine"},"secrets":{"type":"object","additionalProperties":{"type":"string"},"key$":"secrets"},"with_data":{"type":"boolean","key$":"with_data"},"notify_url":{"type":"string","format":"uri","description":"HTTP endpoint to receive branch status updates.","key$":"notify_url"}},"required":["branch_name"],"example":{"branch_name":"preview-login-page","git_branch":"feature/login-page","persistent":true,"with_data":false,"notify_url":"https://example.com/webhooks/branches"},"x-ref":"#/components/schemas/CreateBranchBody","index$":1}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/branches":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"GET /v1/projects/{ref}/branches/{name}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0},{"name":"name","required":true,"in":"path","schema":{"example":"preview-login-page","type":"string"},"index$":1}]},"GET /v1/branches/{branch_id_or_ref}":{"protocol":"http","parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0}]},"DELETE /v1/branches/{branch_id_or_ref}":{"protocol":"http","parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0},{"name":"force","required":false,"in":"query","description":"If set to false, schedule deletion with 1-hour grace period (only when soft deletion is enabled).","schema":{"example":false,"type":"string"},"index$":1}]},"PATCH /v1/branches/{branch_id_or_ref}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"branch_name":{"type":"string","key$":"branch_name"},"git_branch":{"type":"string","key$":"git_branch"},"reset_on_push":{"description":"This field is deprecated and will be ignored. Use v1-reset-a-branch endpoint directly instead.","deprecated":true,"type":"boolean","key$":"reset_on_push"},"persistent":{"type":"boolean","key$":"persistent"},"status":{"type":"string","enum":["CREATING_PROJECT","RUNNING_MIGRATIONS","MIGRATIONS_PASSED","MIGRATIONS_FAILED","FUNCTIONS_DEPLOYED","FUNCTIONS_FAILED"],"key$":"status"},"request_review":{"type":"boolean","key$":"request_review"},"notify_url":{"type":"string","format":"uri","description":"HTTP endpoint to receive branch status updates.","key$":"notify_url"}},"example":{"branch_name":"preview-login-page","git_branch":"feature/login-page","persistent":true,"request_review":true,"notify_url":"https://example.com/webhooks/branches"},"x-ref":"#/components/schemas/UpdateBranchBody","index$":1}}}},"parameters":[{"name":"branch_id_or_ref","required":true,"in":"path","description":"Branch ref or deprecated branch ID","schema":{"example":"abcdefghijklmnopqrst","anyOf":[{"type":"string","minLength":20,"maxLength":20,"pattern":"^[a-z]+$","description":"Project ref","example":"abcdefghijklmnopqrst"},{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$","deprecated":true}]},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const branch_ref01_ent = client.Branch()
    let branch_ref01_data = setup.data.new.branch['branch_ref01']
    branch_ref01_data['project_id'] = setup.idmap['project01']
    branch_ref01_data['ref'] = setup.idmap['branch_ref01']

    branch_ref01_data = (await branch_ref01_ent.create(branch_ref01_data)).data()
    assert(null != branch_ref01_data.id)


    // LIST
    const branch_ref01_match: any = {}
    branch_ref01_match['ref'] = setup.idmap['ref01']

    const branch_ref01_list = (await branch_ref01_ent.list(branch_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(branch_ref01_list, { id: branch_ref01_data.id })))


    // UPDATE
    const branch_ref01_data_up0: any = {}
    branch_ref01_data_up0.id = branch_ref01_data.id

    const branch_ref01_markdef_up0 = { name: 'branch_name', value: 'Mark01-branch_ref01_' + setup.now }
    ;(branch_ref01_data_up0 as any)[branch_ref01_markdef_up0.name] = branch_ref01_markdef_up0.value

    const branch_ref01_resdata_up0 = (await branch_ref01_ent.update(branch_ref01_data_up0)).data()
    assert(branch_ref01_resdata_up0.id === branch_ref01_data_up0.id)

    assert((branch_ref01_resdata_up0 as any)[branch_ref01_markdef_up0.name] === branch_ref01_markdef_up0.value)


    // LOAD
    const branch_ref01_match_dt0: any = {}
    branch_ref01_match_dt0.id = branch_ref01_data.id
    const branch_ref01_data_dt0 = (await branch_ref01_ent.load(branch_ref01_match_dt0)).data()
    assert(branch_ref01_data_dt0.id === branch_ref01_data.id)


    // REMOVE
    const branch_ref01_match_rm0: any = { id: branch_ref01_data.id }
    await branch_ref01_ent.remove(branch_ref01_match_rm0)
  

    // LIST
    const branch_ref01_match_rt0: any = {}
    branch_ref01_match_rt0['ref'] = setup.idmap['ref01']

    const branch_ref01_list_rt0 = (await branch_ref01_ent.list(branch_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(branch_ref01_list_rt0, { id: branch_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/branch/BranchTestData.json')

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
    ['branch01','branch02','branch03','project01','project02','project03','branch_ref01','ref01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_BRANCH_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_BRANCH_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_BRANCH_ENTID']
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
  
