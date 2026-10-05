

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


describe('V1ProjectWithDatabaseResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.V1ProjectWithDatabaseResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'v1_project_with_database_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":true,"sh":"Creation timestamp","t":"`$STRING`","key$":"created_at","index$":0},"database":{"a":true,"h":"Database","n":"database","r":true,"t":"`$OBJECT`","key$":"database","index$":1},"db_pass":{"a":true,"h":"Db Pass","n":"db_pass","r":true,"sh":"Database password","t":"`$STRING`","key$":"db_pass","index$":2},"desired_instance_size":{"a":true,"h":"Desired Instance Size","n":"desired_instance_size","r":false,"sh":"Desired instance size.","t":"`$STRING`","key$":"desired_instance_size","index$":3},"high_availability":{"a":true,"h":"High Availability","n":"high_availability","r":false,"sh":"[Experimental] Whether to enable high availability for the project.","t":"`$BOOLEAN`","key$":"high_availability","index$":4},"id":{"a":true,"de":true,"h":"Id","n":"id","r":true,"sh":"Deprecated: Use `ref` instead.","t":"`$STRING`","key$":"id","index$":5},"kps_enabled":{"a":true,"de":true,"h":"Kps Enabled","n":"kps_enabled","r":false,"sh":"This field is deprecated and is ignored in this request","t":"`$BOOLEAN`","key$":"kps_enabled","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of your project","t":"`$STRING`","key$":"name","index$":7},"organization_id":{"a":true,"de":true,"h":"Organization Id","n":"organization_id","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Deprecated: Use `organization_slug` instead.","t":"`$STRING`","key$":"organization_id","index$":8},"organization_slug":{"a":true,"h":"Organization Slug","n":"organization_slug","r":true,"sh":"Organization slug","t":"`$STRING`","key$":"organization_slug","index$":9},"plan":{"a":true,"de":true,"h":"Plan","n":"plan","r":false,"sh":"Subscription Plan is now set on organization level and is ignored in this request","t":"`$STRING`","key$":"plan","index$":10},"postgres_engine":{"a":true,"de":true,"h":"Postgres Engine","n":"postgres_engine","r":false,"t":"`$NULL`","key$":"postgres_engine","index$":11},"ref":{"a":true,"h":"Ref","n":"ref","r":true,"sh":"Project ref","t":"`$STRING`","key$":"ref","index$":12},"region":{"a":true,"de":true,"h":"Region","n":"region","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Region of your project","t":"`$STRING`","key$":"region","index$":13},"region_selection":{"a":true,"h":"Region Selection","n":"region_selection","r":false,"sh":"Region selection.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"region_selection","index$":14},"release_channel":{"a":true,"de":true,"h":"Release Channel","n":"release_channel","r":false,"t":"`$NULL`","key$":"release_channel","index$":15},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":16},"template_url":{"a":true,"fo":"uri","h":"Template Url","n":"template_url","r":false,"sh":"Template URL used to create the project from the CLI.","t":"`$STRING`","key$":"template_url","index$":17}},"id":{"field":"id","name":"id"},"name":"v1_project_with_database_response_output","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/projects/{ref}/claim-token","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/claim-token","q":{"$action":"claim_token","exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"claim-token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /v1/projects/{ref}/pause","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/pause","q":{"$action":"pause","exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"pause"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /v1/projects/{ref}/restart","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v1/projects/{ref}/restart","q":{"$action":"restart","exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"restart"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /v1/projects","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/projects","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"projects"}],"t":{"req":{"db_pass":"`reqdata.db_pass`","desired_instance_size":"`reqdata.desired_instance_size`","high_availability":"`reqdata.high_availability`","kps_enabled":"`reqdata.kps_enabled`","name":"`reqdata.name`","organization_id":"`reqdata.organization_id`","organization_slug":"`reqdata.organization_slug`","plan":"`reqdata.plan`","postgres_engine":"`reqdata.postgres_engine`","region":"`reqdata.region`","region_selection":"`reqdata.region_selection`","release_channel":"`reqdata.release_channel`","template_url":"`reqdata.template_url`"},"res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/projects","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/projects","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"projects"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/projects/{ref}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/projects/{ref}","q":{"exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/projects/{ref}/claim-token","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/projects/{ref}/claim-token","q":{"$action":"claim_token","exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"claim-token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /v1/projects/{ref}/jit-access","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/projects/{ref}/jit-access","q":{"$action":"jit_access","exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"jit-access"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PATCH /v1/projects/{ref}/postgrest","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abcdefghijklmnopqrst","k":"param","n":"ref","or":"ref","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v1/projects/{ref}/postgrest","q":{"$action":"postgrest","exist":["ref"]},"r":{},"s":[{"lit":"v1"},{"lit":"projects"},{"var":"ref"},{"lit":"postgrest"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"v1_project_with_database_response_output","name__orig":"v1_project_with_database_response_output","Name":"V1ProjectWithDatabaseResponseOutput","name_":"v1_project_with_database_response_output","name-":"v1-project-with-database-response-output","NAME":"V1_PROJECT_WITH_DATABASE_RESPONSE_OUTPUT","index$":81}, {"active":true,"entity":"v1_project_with_database_response_output","key$":"BasicV1ProjectWithDatabaseResponseOutputFlow","kind":"basic","name":"BasicV1ProjectWithDatabaseResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"v1_project_with_database_response_output_ref01"},"m":{},"o":"create","s":[],"v":[]},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"v1_project_with_database_response_output_ref01"}}]},{"a":true,"d":{},"i":{"ref":"v1_project_with_database_response_output_ref01","srcdatavar":"v1_project_with_database_response_output_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1_project_with_database_response_output_ref01"}}],"v":[]},{"a":true,"d":{},"i":{"ref":"v1_project_with_database_response_output_ref01","srcdatavar":"v1_project_with_database_response_output_ref01_data","suffix":"_dt0"},"m":{"id":"v1_project_with_database_response_output01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-v1_project_with_database_response_output_ref01"}}]},{"a":true,"d":{},"i":{"ref":"v1_project_with_database_response_output_ref01","suffix":"_rm0"},"m":{"id":"v1_project_with_database_response_output01"},"o":"remove","s":[],"v":[]},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"v1_project_with_database_response_output_ref01"}}]}]}, 'V1ProjectWithDatabaseResponseOutput', {"POST /v1/projects/{ref}/claim-token":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/pause":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects/{ref}/restart":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"POST /v1/projects":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"db_pass":{"type":"string","description":"Database password","key$":"db_pass"},"name":{"type":"string","maxLength":256,"description":"Name of your project","key$":"name"},"organization_id":{"deprecated":true,"description":"Deprecated: Use `organization_slug` instead.","type":"string","key$":"organization_id"},"organization_slug":{"type":"string","pattern":"^[\\w-]+$","description":"Organization slug","example":"tsrqponmlkjihgfedcba","key$":"organization_slug"},"plan":{"deprecated":true,"description":"Subscription Plan is now set on organization level and is ignored in this request","type":"string","enum":["free","pro"],"key$":"plan"},"region":{"description":"Region you want your server to reside in. Use region_selection instead.","deprecated":true,"enum":["us-east-1","us-east-2","us-west-1","us-west-2","ap-east-1","ap-southeast-1","ap-northeast-1","ap-northeast-2","ap-southeast-2","eu-west-1","eu-west-2","eu-west-3","eu-north-1","eu-central-1","eu-central-2","ca-central-1","ap-south-1","sa-east-1"],"type":"string","key$":"region"},"region_selection":{"description":"Region selection. Only one of region or region_selection can be specified.","oneOf":[{"type":"object","properties":{"type":{},"code":{}},"required":["type","code"]},{"type":"object","properties":{"type":{},"code":{}},"required":["type","code"]}],"key$":"region_selection"},"kps_enabled":{"deprecated":true,"description":"This field is deprecated and is ignored in this request","type":"boolean","key$":"kps_enabled"},"desired_instance_size":{"description":"Desired instance size. Omit this field to always default to the smallest possible size.","type":"string","enum":["nano","micro","small","medium","large","xlarge","2xlarge","4xlarge","8xlarge","12xlarge","16xlarge","24xlarge","24xlarge_optimized_memory","24xlarge_optimized_cpu","24xlarge_high_memory","48xlarge","48xlarge_optimized_memory","48xlarge_optimized_cpu","48xlarge_high_memory"],"key$":"desired_instance_size"},"template_url":{"description":"Template URL used to create the project from the CLI.","type":"string","format":"uri","key$":"template_url"},"release_channel":{"deprecated":true,"type":"null","key$":"release_channel"},"postgres_engine":{"deprecated":true,"type":"null","key$":"postgres_engine"},"high_availability":{"description":"[Experimental] Whether to enable high availability for the project.","type":"boolean","key$":"high_availability"}},"required":["db_pass","name","organization_slug"],"example":{"db_pass":"correct-horse-battery-staple","name":"acme-prod","organization_slug":"tsrqponmlkjihgfedcba","region":"us-east-1"},"additionalProperties":false,"x-ref":"#/components/schemas/V1CreateProjectBody","index$":1}}}},"parameters":[]},"GET /v1/projects":{"protocol":"http","parameters":[]},"GET /v1/projects/{ref}":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"DELETE /v1/projects/{ref}/claim-token":{"protocol":"http","parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PUT /v1/projects/{ref}/jit-access":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"state":{"type":"string","enum":["enabled","disabled"]}},"required":["state"],"example":{"state":"enabled"},"x-ref":"#/components/schemas/JitAccessRequestRequest"}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]},"PATCH /v1/projects/{ref}/postgrest":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"db_extra_search_path":{"type":"string"},"db_schema":{"type":"string"},"max_rows":{"type":"integer","minimum":0,"maximum":1000000},"db_pool":{"type":"integer","minimum":0,"maximum":1000},"db_pool_acquisition_timeout":{"type":"integer","minimum":0,"maximum":60}},"example":{"db_schema":"public,storage","db_pool":20,"max_rows":1000},"x-ref":"#/components/schemas/V1UpdatePostgrestConfigBody"}}}},"parameters":[{"name":"ref","required":true,"in":"path","description":"Project ref","schema":{"minLength":20,"maxLength":20,"pattern":"^[a-z]+$","example":"abcdefghijklmnopqrst","type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const v1_project_with_database_response_output_ref01_ent = client.V1ProjectWithDatabaseResponseOutput()
    let v1_project_with_database_response_output_ref01_data = setup.data.new.v1_project_with_database_response_output['v1_project_with_database_response_output_ref01']

    v1_project_with_database_response_output_ref01_data = (await v1_project_with_database_response_output_ref01_ent.create(v1_project_with_database_response_output_ref01_data)).data()
    assert(null != v1_project_with_database_response_output_ref01_data.id)


    // LIST
    const v1_project_with_database_response_output_ref01_match: any = {}

    const v1_project_with_database_response_output_ref01_list = (await v1_project_with_database_response_output_ref01_ent.list(v1_project_with_database_response_output_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(v1_project_with_database_response_output_ref01_list, { id: v1_project_with_database_response_output_ref01_data.id })))


    // UPDATE
    const v1_project_with_database_response_output_ref01_data_up0: any = {}
    v1_project_with_database_response_output_ref01_data_up0.id = v1_project_with_database_response_output_ref01_data.id

    const v1_project_with_database_response_output_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-v1_project_with_database_response_output_ref01_' + setup.now }
    ;(v1_project_with_database_response_output_ref01_data_up0 as any)[v1_project_with_database_response_output_ref01_markdef_up0.name] = v1_project_with_database_response_output_ref01_markdef_up0.value

    const v1_project_with_database_response_output_ref01_resdata_up0 = (await v1_project_with_database_response_output_ref01_ent.update(v1_project_with_database_response_output_ref01_data_up0)).data()
    assert(v1_project_with_database_response_output_ref01_resdata_up0.id === v1_project_with_database_response_output_ref01_data_up0.id)

    assert((v1_project_with_database_response_output_ref01_resdata_up0 as any)[v1_project_with_database_response_output_ref01_markdef_up0.name] === v1_project_with_database_response_output_ref01_markdef_up0.value)


    // LOAD
    const v1_project_with_database_response_output_ref01_match_dt0: any = {}
    v1_project_with_database_response_output_ref01_match_dt0.id = v1_project_with_database_response_output_ref01_data.id
    const v1_project_with_database_response_output_ref01_data_dt0 = (await v1_project_with_database_response_output_ref01_ent.load(v1_project_with_database_response_output_ref01_match_dt0)).data()
    assert(v1_project_with_database_response_output_ref01_data_dt0.id === v1_project_with_database_response_output_ref01_data.id)


    // REMOVE
    const v1_project_with_database_response_output_ref01_match_rm0: any = { id: v1_project_with_database_response_output_ref01_data.id }
    await v1_project_with_database_response_output_ref01_ent.remove(v1_project_with_database_response_output_ref01_match_rm0)
  

    // LIST
    const v1_project_with_database_response_output_ref01_match_rt0: any = {}

    const v1_project_with_database_response_output_ref01_list_rt0 = (await v1_project_with_database_response_output_ref01_ent.list(v1_project_with_database_response_output_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(v1_project_with_database_response_output_ref01_list_rt0, { id: v1_project_with_database_response_output_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/v1_project_with_database_response_output/V1ProjectWithDatabaseResponseOutputTestData.json')

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
    ['v1_project_with_database_response_output01','v1_project_with_database_response_output02','v1_project_with_database_response_output03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_V1_PROJECT_WITH_DATABASE_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_V1_PROJECT_WITH_DATABASE_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_V1_PROJECT_WITH_DATABASE_RESPONSE_OUTPUT_ENTID']
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
  
