
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SupabaseMgmtSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SupabaseMgmtSDK.test()
    equal(testsdk instanceof SupabaseMgmtSDK, true,
      'SupabaseMgmtSDK.test() must return a client synchronously')
  })

})
