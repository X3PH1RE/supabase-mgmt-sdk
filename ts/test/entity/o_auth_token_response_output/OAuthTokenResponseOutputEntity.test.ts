

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


describe('OAuthTokenResponseOutputEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SUPABASE_MGMT_TEST_LIVE=TRUE.
  afterEach(liveDelay('SUPABASE_MGMT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SupabaseMgmtSDK.test()
    const ent = testsdk.OAuthTokenResponseOutput()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SUPABASE_MGMT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'o_auth_token_response_output.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_token":{"a":true,"h":"Access Token","n":"access_token","r":true,"t":"`$STRING`","key$":"access_token","index$":0},"expires_in":{"a":true,"h":"Expires In","n":"expires_in","r":true,"t":"`$INTEGER`","key$":"expires_in","index$":1},"refresh_token":{"a":true,"h":"Refresh Token","n":"refresh_token","r":false,"sh":"The `urn:ietf:params:oauth:grant-type:jwt-bearer` grant type issues access tokens only, no refresh token is returned and the token cannot be revoked via `/v1/oauth/revoke`.","t":"`$STRING`","key$":"refresh_token","index$":2},"token_type":{"a":true,"h":"Token Type","n":"token_type","r":true,"t":"`$STRING`","key$":"token_type","index$":3}},"name":"o_auth_token_response_output","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v1/oauth/token","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/oauth/token","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"oauth"},{"lit":"token"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"o_auth_token_response_output","name__orig":"o_auth_token_response_output","Name":"OAuthTokenResponseOutput","name_":"o_auth_token_response_output","name-":"o-auth-token-response-output","NAME":"O_AUTH_TOKEN_RESPONSE_OUTPUT","index$":36}, {"active":true,"entity":"o_auth_token_response_output","key$":"BasicOAuthTokenResponseOutputFlow","kind":"basic","name":"BasicOAuthTokenResponseOutputFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"o_auth_token_response_output_ref01"},"m":{},"o":"create","s":[],"v":[]}]}, 'OAuthTokenResponseOutput', {"POST /v1/oauth/token":{"protocol":"http","requestBody":{"required":true,"content":{"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"grant_type":{"type":"string","enum":["authorization_code","refresh_token","urn:ietf:params:oauth:grant-type:jwt-bearer"]},"client_id":{"type":"string","format":"uuid","pattern":"^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"},"client_secret":{"type":"string"},"code":{"type":"string"},"code_verifier":{"type":"string"},"redirect_uri":{"type":"string"},"refresh_token":{"type":"string"},"assertion":{"description":"IDJAG assertion JWT for grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer. Beta - available on Team and Enterprise plans only.","type":"string"},"resource":{"description":"Resource indicator for MCP (Model Context Protocol) clients","type":"string","format":"uri"},"scope":{"type":"string"}},"example":{"grant_type":"authorization_code","client_id":"66666666-6666-4666-8666-666666666666","client_secret":"sb_secret_live_example_9f4d3a206b2e4a7e8c91","code":"oauth_code_9f4d3a206b2e4a7e8c91","code_verifier":"qW0Z6d9pQnW0mL1dK1q9wFq6Yz2nV5rA8jT3mP7sH4c","redirect_uri":"https://app.acme.com/auth/callback","scope":"projects:read projects:write"},"additionalProperties":false,"x-ref":"#/components/schemas/OAuthTokenBody"}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const o_auth_token_response_output_ref01_ent = client.OAuthTokenResponseOutput()
    let o_auth_token_response_output_ref01_data = setup.data.new.o_auth_token_response_output['o_auth_token_response_output_ref01']

    o_auth_token_response_output_ref01_data = (await o_auth_token_response_output_ref01_ent.create(o_auth_token_response_output_ref01_data)).data()
    assert(null != o_auth_token_response_output_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/o_auth_token_response_output/OAuthTokenResponseOutputTestData.json')

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
    ['o_auth_token_response_output01','o_auth_token_response_output02','o_auth_token_response_output03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SUPABASE_MGMT_TEST_O_AUTH_TOKEN_RESPONSE_OUTPUT_ENTID': idmap,
    'SUPABASE_MGMT_TEST_LIVE': 'FALSE',
    'SUPABASE_MGMT_TEST_EXPLAIN': 'FALSE',
    'SUPABASE_MGMT_APIKEY': '',
  })

  idmap = env['SUPABASE_MGMT_TEST_O_AUTH_TOKEN_RESPONSE_OUTPUT_ENTID']

  const live = 'TRUE' === env.SUPABASE_MGMT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SUPABASE_MGMT_TEST_O_AUTH_TOKEN_RESPONSE_OUTPUT_ENTID']
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
  
