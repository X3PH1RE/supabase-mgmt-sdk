# Report: Supabase Management API SDK (Voxgig mini task 1)

Repo: https://github.com/X3PH1RE/supabase-mgmt-sdk (MIT) [link to confirm once pushed]

> Drafted by Claude (Claude Code) from my NOTES.md log at my request. Items marked [TBD] are for me to fill in. I am reviewing it for correctness before sending. See AI_USAGE.md for who did what.

## What I built and why Supabase

A TypeScript SDK for the Supabase Management API, generated with the Voxgig SDK generator from the official OpenAPI spec (https://api.supabase.com/api/v1-json, 115 paths). I picked it because it is a real, widely used API, the spec is public and big enough to be a proper test, and there was no Supabase SDK in the voxgig-sdk org (I checked all 803 repos with `gh api --paginate`). The model came out with 87 entities and 170 methods.

## What worked

- The spec downloaded and parsed fine, and the model build gave `entities=87 paths=115 methods=170` with no error.
- `npm install` and `npm run build` in `ts/` ran with 0 errors.
- Generated test suite: 658 tests, 654 pass, 3 fail, 1 skipped.
- One live read-only call worked first try. With my token in the environment, `client.V1ProjectWithDatabaseResponseOutput().list()` (GET /v1/projects) returned my one project. I only made GET calls. The token was never put in a file or committed.

## What broke

1. **`npx @voxgig/create-sdkgen ... -t ts -f test` failed on Windows** at the install step: `Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT`. It happened every time I ran it. I think it is because npm is `npm.cmd` on Windows and the tool spawns `npm` without a shell, but I have not confirmed that. Workaround: `cd supabase-mgmt-sdk\.sdk` then `npm install` by hand.
2. **`npm run generate` failed:** `[aontu/multisource_not_found]: source not found: api/api-info.aontu` at `.sdk\model\sdk.aontu:13:1`. The scaffold's own include paths needed a `./` prefix. I added it to all six includes in `sdk.aontu`, and later to the target and feature index files.
3. **`npx voxgig-model test/test.aontu` failed:** `source not found: struct/test.aontu` at `.sdk\test\test.aontu:2:1`. Same kind of error. The final generate still worked.
4. **`-t ts -f test` did not register the target and feature**, so I added them with `npm run add-target ts` and `npm run add-feature test`. This is my reading of the history, I did not see an error for it.
5. **3 generated tests fail:** `ApiKeyEntity.test.ts`, `BranchEntity.test.ts` and `FunctionEntity.test.ts`, all at line 79: `assert(!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })))`. They run against the mock, not the real API. My reading (not verified): create sends both `project_id` and `ref`, but list only sends `ref`, so the mock does not return the created item. I did not edit the generated tests.

## Time

[TBD: 30 minute clock start and stop times]. Git history shows the work from 11:00 (scaffold commit) to 11:42 (last SDK commit) on 5 Oct 2026, plus the live call and the notes after that. [TBD: where I stopped and what was left]. I did not try other languages and did not fix the 3 failing tests.

## Generator DX suggestions

1. **Fix `spawn npm ENOENT` on Windows** (use `shell: true` or resolve `npm.cmd`), and if the install step fails, print the exact command to run next.
2. **Ship scaffold include paths that load.** The generated `sdk.aontu` does not build until you add `./` to every include.
3. **Make `-t ts -f test` actually register the target and feature**, or say clearly that you need `add-target` and `add-feature` afterwards.
4. **Better entity names.** "List projects" is on `V1ProjectWithDatabaseResponseOutput`, and `Project` only has `create` and `remove`. Organizations are on `V1OrganizationSlugResponseOutput`. A user would look for `Project().list()`. A rename hook or a hint in the README would help.
5. **README and env var.** The README quick start skips from step 1 to step 3, and the env var is `SUPABASE_MGMT_APIKEY`, made up from the SDK name instead of the API's own `SUPABASE_ACCESS_TOKEN`. Let the model set the env var name, and make the first example something that works without real ids.

## How I used AI and how it was checked

I chose the API, ran every generator and git command myself in my own terminal, set the token in my own shell, and decided what to commit. Claude Code did not run the generator. It documented my pasted output in NOTES.md, explained errors, read the generated README to find a safe first live call, wrote the one-line live test command, did the final repo tidy (copied notes, added `.env` to `.gitignore`, ran the token and `.env` greps, made the commit), and drafted this report. Where Claude guessed at causes (the npm error, the `./` fix, the 3 test failures), NOTES.md marks them "inferred". What I checked myself is listed in AI_USAGE.md [TBD: I fill this in with only the checks I actually did].
