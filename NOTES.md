# NOTES: Voxgig mini task 1 (Supabase Management API SDK)

Running log. Commands are run by Ashwin in his own terminal. Claude documents and explains. Times are IST.

## Setup
- API: Supabase Management API, spec https://api.supabase.com/api/v1-json (OpenAPI 3.0.0, 115 paths)
- Auth: bearer token from env var SUPABASE_ACCESS_TOKEN (never committed)
- Checked before starting: no Supabase SDK in the voxgig-sdk org (803 repos checked via `gh api --paginate`)
- Env: Windows 11, PowerShell, Node 24, npm 11, gh CLI as X3PH1RE
- 30-minute clock start: **TBD (Ashwin has not given it)**. Git times: scaffold commit 11:00:39, last SDK commit 11:42:27 (IST, 5 Oct 2026). First generator command logged at 10:52.

## Final state (summary, as of the last commit; details in the log below)

- Spec: Supabase Management API, 115 paths. Model built with 87 entities, 170 methods.
- Generated a TypeScript SDK (`ts/`). `npm install` and `npm run build` ran with 0 errors (as reported by Ashwin).
- Tests: 658 total, 654 pass, 3 fail, 1 skipped. The 3 failures are generated mock tests (api_key, branch, function, line 79). Not fixed. Cause is an unverified inference.
- Live check: one read-only `GET /v1/projects` through the SDK returned 1 project. No write calls were made.
- Errors hit: `spawn npm ENOENT` in create-sdkgen on Windows, `aontu/multisource_not_found` for include paths without `./`, `struct/test.aontu` not found, `-t ts -f test` not registering the target and feature.
- Not done: other languages, fixing the 3 tests, renaming entities, LICENSE copyright decision, push to GitHub.
- Time (git log, IST): scaffold 11:00, tested SDK 11:42, about 42 minutes (about 50 from the first failed create at 10:52). Clock start time not given by Ashwin.
- Who did what: Ashwin ran every generator and git command for the SDK and set the token himself. Claude read history and git, documented, wrote the live-call command, did the repo tidy commits, and drafted REPORT.md. See AI_USAGE.md.
- Early log sections (Phase 1 and 2) include snapshots that were later resolved. Phases 3 to 6 have the outcomes.

## Log

### Phase 1: spec download and scaffold (run by Ashwin; log times are as printed by the tool, 10:52 IST)

1. `curl.exe -o openapi.json https://api.supabase.com/api/v1-json`
   - OK. 340.9k downloaded.
2. `node -e "const s=require('./openapi.json');console.log(s.openapi,s.info.title,Object.keys(s.paths).length+' paths')"`
   - Output: `3.0.0 Supabase API (v1) 115 paths`. Spec is valid JSON and matches what we expected.
3. `npx @voxgig/create-sdkgen supabase-mgmt -d ./openapi.json -o ./supabase-mgmt-sdk -t ts -f test`
   - Output:
     ```
     [10:52:18.593] INFO: create                 generate-start       standard
     [10:52:19.715] INFO: create/jostraca        generate-install     running npm install in .\supabase-mgmt-sdk\.sdk
     Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT
     ```
   - **FAILED at the install step.** The scaffold folder was created (the next step worked inside `supabase-mgmt-sdk\.sdk`), but the tool's own `npm install` did not start.
   - Meaning of `spawn npm ENOENT`: Node could not find an executable called `npm` when the tool tried to launch it. Likely cause (not verified): on Windows npm is a `npm.cmd` shim, and Node's `child_process.spawn('npm')` without `shell: true` does not resolve `.cmd` files. npm itself works fine in this shell (step 4 below), so this looks like a bug in how create-sdkgen spawns npm on Windows, not a problem with Ashwin's setup.
   - Report-worthy: first command a Windows user runs fails. The error does not say what to do next. The fix is manual and the user has to guess it.
4. Workaround: `cd supabase-mgmt-sdk\.sdk` then `npm install`
   - OK after about 1m. Output: `build-supabase-mgmt-sdk@0.0.1 postinstall` ran `node build/docgen.js`, `added 104 packages, and audited 105 packages in 1m`, `found 0 vulnerabilities`.

Open questions for the report:
- Did the create step stop before finishing anything else after the ENOENT, or only skip the install? (Worth checking what files exist in `supabase-mgmt-sdk` before the next command.)
- Did the 1m npm install on OneDrive Desktop path slow things down? (Repo lives under OneDrive, may matter for later steps.)

### Phase 2: reconstructed from PowerShell history and git (Claude read both; it did not run the generator)

Source: `ConsoleHost_history.txt` and `git log` in `supabase-mgmt-sdk`. Both show WHAT was run and changed, not the OUTPUT. Where an error is implied, the exact text is missing and Ashwin needs to fill it in from memory or scrollback. Nothing below is guessed as fact unless marked "inferred".

Note: the history shows `git init` is not in the typed commands I could see (probably before the tail, or run via another route). The git log starts at commit 1 below.

Timeline (git author time, IST, 05-10-2026):
- 10:52 create-sdkgen ran, failed at npm install (see Phase 1).
- History shows `npx @voxgig/create-sdkgen ...` three times in a row, then `npm install`. So the create command was retried at least twice after the first failure. Result of the retries: not recorded. (Ashwin to fill in: same ENOENT each time? Any different error?)
- 11:00:39 commit `ec6e063` "Scaffold from create-sdkgen". Contents: .github/workflows/ci.yml, .sdk/ (model skeleton, build scripts, src components, package.json), LICENSE, README, etc. LICENSE is MIT but says `Copyright (c) 2026 Voxgig`. Worth checking whether to add Ashwin's name for his own repo.
- Then `npm run generate` in `.sdk` (run once). Output not recorded.
- Then the history shows manual runs of the model tool: `npx voxgig-model sdk.aontu` from `.sdk\model`, `npx voxgig-model test/test.aontu` from `.sdk`, and `npx voxgig-model test.aontu` from `.sdk\test`. Inferred: `npm run generate` did not give a usable result and Ashwin went looking for how to run the model step by hand. Exact errors: not recorded. Note `.sdk/test` and `test/test.aontu` are guesses at paths that look like they did not exist or were wrong, since the later runs moved to different folders.
- Then Ashwin inspected `model\target\target-index.aontu` and `model\feature\feature-index.aontu` with `type`, and `ls model\target, model\feature`. Inferred: target and feature index files were empty (the scaffold had no ts target and no test feature registered, even though `-t ts -f test` was passed to create).
- 11:12:36 commit `ffea78b` "Generated model; add ./ to includes". Contents: generated entity models for every resource (about 80 .aontu files in `.sdk/model/entity/`), api-info.aontu filled in from the spec (title, server https://api.supabase.com, bearer auth), plus docgen workflow and doc QA files.
  - Hand edit in `.sdk/model/sdk.aontu`: every include changed from `@"api/api-info.aontu"` style to `@"./api/api-info.aontu"` style (6 lines: api, entity, feature, target, flow, edition). The generated `entity-index.aontu` already uses `./`. Inferred: without `./` the model loader could not resolve the includes. Exact error: not recorded.
  - This edit is inside `.sdk/model/`, which the rules allow, but it fixes a scaffold file, so it is a generator bug to report: the scaffold's own sdk.aontu uses include paths that its own loader (or a newer aontu version) does not accept.
- Then `npm run add-target ts` and `npm run add-feature test` in `.sdk`, then `ls model\target, model\feature`. Inferred: `-t ts -f test` on create did not register them (or create aborted before it), so they were added by hand with these scripts. Result: `model/target/ts.aontu`, `model/feature/test.aontu` created and indexed.
  - Compare handoff note: the plan said `npx voxgig-sdkgen target add py go` for extra languages. Ashwin used `npm run add-target ts` instead. Worth noting which one worked and whether the docs mention both.
- 11:19:57 commit `ed56f2a` "Register ts target and test feature; add ./ to includes". Contents: ts.aontu, test.aontu, both index files updated, `.sdk/src/cmp/ts/*` components, `sdkgen-copies.json`. `./` also added to target-index and feature-index includes (`@"./ts.aontu"`, `@"./test.aontu"`).
- `npm run generate` again, `git diff --stat`, commit, `npm run generate` once more, `ls ..`.
- 11:23:58 commit `d360019` "Generated TypeScript SDK". 339 files, 98,988 lines added. The `ts/` folder now exists with src, test, package.json, README.md, REFERENCE.md.

Current state at the time of this reading (snapshot from about 11:25 IST. ALL FOUR ITEMS BELOW WERE RESOLVED LATER: build and tests ran in Phase 3, the live call in Phase 4, the repo files and safety greps in Phase 5):
- `ts/node_modules` and `ts/dist` do not exist, so `cd ts; npm install; npm run build; npm test` has NOT been run yet.
- No live call to the API has been made yet.
- No GitHub repo yet. No NOTES.md / AI_USAGE.md / REPORT.md in the repo (they are still in the parent folder `voxgig-test1`).
- Safety check (token prefix grep and .env file check): see Phase 5.

Things for the report (friction found so far):
1. `spawn npm ENOENT` on Windows in create-sdkgen (Phase 1).
2. `-t ts -f test` flags did not result in a registered ts target and test feature (inferred; needed `npm run add-target ts` and `npm run add-feature test`).
3. Scaffolded `sdk.aontu` include paths needed a `./` prefix (inferred from the edits).
4. First `npm run generate` did not just work; Ashwin ran `voxgig-model` by hand in three places (inferred from history).
5. Commit order is good: committed before each regenerate, as the rules ask.

### Phase 2 corrections and exact errors (from Ashwin, pasted from his terminal)

- Create run, a second one in a different folder ("voxgig"), IST: same failure, so the ENOENT happened every time, not once.
  ```
  [11:04:13.505] INFO: create                 generate-start       standard
  [11:04:14.603] INFO: create/jostraca        generate-install     running npm install in .\supabase-mgmt-sdk\.sdk
  Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT
  ```
  This corrects my earlier guess that the three history lines were retries in one folder. Ashwin says the only create run he remembers was his own; the history shows three in total (history is shared across folders, so I cannot tell which folder each was in).
- First `npm run generate` (or the model build), exact error:
  ```
  [aontu/multisource_not_found]: source not found: api/api-info.aontu
  --> ...\.sdk\model\sdk.aontu:13:1
  13 | @"api/api-info.aontu"
  ```
  This confirms the `./` edits: the scaffold's `sdk.aontu` uses include paths without `./` and the loader cannot find them. Generator bug, worth reporting. Fix made in `.sdk/model/sdk.aontu` (allowed by the rules).
- `npx voxgig-model sdk.aontu` from `.sdk\model` (11:05): `finished build-end watch:model with no error. entities=87 paths=115 methods=170.` So after adding `./`, the model built: 87 entities, 115 paths, 170 methods.
- `npx voxgig-model test/test.aontu` from `.sdk` (11:06):
  ```
  [aontu/multisource_not_found]: source not found: struct/test.aontu
  --> ...\.sdk\test\test.aontu:2:1
  ```
  Same class of error, in `.sdk/test/test.aontu` line 2 (include of `struct/test.aontu` without a resolvable path). Ashwin then tried running it from `.sdk\test` as well. Not yet recorded whether that fixed it or whether it mattered for the final generate (the final generate did succeed, commit `d360019`).

Time discrepancy to sort out before the report: the pasted Phase 1 output has the create run at 10:52 in `voxgig-test1`, and the scaffold commit is at 11:00:39, but this create run is at 11:04 in a different folder, after that commit. Ashwin, which folder is the real repo and when did the 30-minute clock start?

### Phase 3: history re-read (Claude read history and git status only)

New since Phase 2, in `supabase-mgmt-sdk\ts`: `npm install`, `npm run build`, `npm test`. Evidence they ran: `ts/node_modules`, `ts/dist` and `ts/dist-test` now exist, and history shows the test runner line `node --enable-source-maps --test-concurrency=1 --test "dist-test/**/*.test.js"`. Output of install, build and test: NOT recorded. Whether the build and tests passed is unknown until Ashwin pastes it.

Git state: still 4 commits, last is `d360019` at 11:23:58. Untracked: `ts/dist/`, `ts/dist-test/`, `ts/package-lock.json`. So build output is not git-ignored in `ts/`. Decide before pushing whether to ignore dist and dist-test (likely yes) and whether to commit the lockfile.

Also in the history: Ashwin's own chat message (the create-sdkgen output text) was pasted into the terminal as a line. Harmless, but note that history can hold pasted text, so check history before sharing it.

### Phase 3 result: `npm test` in `ts\` (pasted by Ashwin)

Summary line (the build output and `npm install` output were not pasted, so build status is unconfirmed, though `npm test` ran from `dist-test`, which implies the build step produced output):
```
ℹ tests 658
ℹ suites 174
ℹ pass 654
ℹ fail 3
ℹ cancelled 0
ℹ skipped 1
ℹ duration_ms 142614.0526
```
So 654 of 658 pass, 3 fail, 1 skipped. Duration about 2m23s. The `struct` utility tests all pass.

The 3 failures are the same assertion in three generated entity tests: `test\entity\api_key\ApiKeyEntity.test.ts:79`, `test\entity\branch\BranchEntity.test.ts:79`, `test\entity\function\FunctionEntity.test.ts:79`:
```
AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:
    (!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })))
  actual: false, expected: true
```
(same text with `branch_ref01_...` and `function_ref01_...`).

What the code does (Claude read `ApiKeyEntity.test.ts`, no edits): the "basic" test runs with live mode off (`SUPABASE_MGMT_TEST_LIVE` is not `TRUE`), so it uses the SDK's mock. It creates an item, then calls `list` with `match.ref = setup.idmap['ref01']` and expects the created item's id in the result. The create step passes both `project_id` and `ref`, but list only passes `ref`. Inferred cause (not verified): for these three entities the path param is `{ref}` but the model also maps it as `project_id`, so the create and list calls in the generated test use different param names and the mock does not return the created item. Other entities with a `project_id` / `ref` mapping may pass because their list ops differ. This is a generator test or param-mapping bug, not an API or auth problem, and no network is involved.

Rules reminder: do not hand-edit `ts/test/**`. If fixed, it has to be via `.sdk/model/` (for example the entity param definitions for api_key, branch, function) or a generator template, then regenerate (commit first).

Report-worthy: the generator's own default test run is not fully green on a real spec (3 of 658). Good detail: exact files and line numbers, and the failing assertion text is clear.

Update from Ashwin: `npm install` and `npm run build` in `ts\` both ran with 0 errors (reported by Ashwin, exact output not pasted). So the build is clean and only the 3 mock tests above fail.

### Phase 4 prep: reading the generated `ts/README.md` for the live call (Claude read only)

- The README's quick start uses `new SupabaseMgmtSDK({ apikey: process.env.SUPABASE_MGMT_APIKEY })`. The generator invented the env var name `SUPABASE_MGMT_APIKEY`. Our plan and rules use `SUPABASE_ACCESS_TOKEN`, which is what Supabase's own docs call it. Not a bug, but a DX point: the env var name is derived from the SDK name, not the API.
- `Config.ts` sets auth as `prefix: 'Bearer'`, matching the spec's bearer scheme.
- The README quick start skips a step: headings go "### 1. Create a client" then "### 3. Load an action" (no step 2).
- The example for the first entity is `Action().load({ project_id: 'example_project_id', id: 'example_id' })`, which needs real ids. Not a good first call.
- The `Project` entity only has `create` and `remove`. There is no `list`, so `client.Project().list()` does not exist. `GET /v1/projects` (list all projects) is modelled under the oddly named entity `V1ProjectWithDatabaseResponseOutput` (`.sdk/model/entity/v1_project_with_database_response_output.aontu:344`). Report-worthy: entity naming for response-shaped schemas (`...ResponseOutput`, `V1...`) is not what a user would look for. Candidate fix is in `.sdk/model/` (rename entity), then regenerate. Same for `GET /v1/organizations` which lands in `V1OrganizationSlugResponseOutput`.
- Safe read-only first calls available: `client.V1ProjectWithDatabaseResponseOutput().list()` (GET /v1/projects) or `client.Snippet().list()` (GET /v1/snippets, no params).
- `package.json`: name `@voxgig-sdk/supabase-mgmt-sdk`, main `dist/SupabaseMgmtSDK.js`, commonjs. Note the package name uses the voxgig-sdk scope although the repo will live under X3PH1RE.

### Phase 4: live read-only call (run by Ashwin; time not recorded)

Setup in his own shell (token never pasted or written to a file): `$env:SUPABASE_MGMT_APIKEY = $env:SUPABASE_ACCESS_TOKEN`, then from `ts\`:
```
node -e "const {SupabaseMgmtSDK}=require('./dist/SupabaseMgmtSDK.js'); const c=new SupabaseMgmtSDK({apikey:process.env.SUPABASE_MGMT_APIKEY}); c.V1ProjectWithDatabaseResponseOutput().list().then(r=>console.log(r.length+' projects', r.map(x=>x.data().name))).catch(e=>console.log('ERR', e.message))"
```
Output:
```
1 projects [ 'portfolio' ]
```
Worked first try. `GET /v1/projects` against the real Supabase Management API returned Ashwin's one project through the generated TypeScript client. Only a GET was made. My guesses (export name `SupabaseMgmtSDK`, `.list()`, `.data()`) were all right.

Report-worthy: the call works, but only after the user finds the entity `V1ProjectWithDatabaseResponseOutput` (no `Project().list()`), and has to map their own env var to `SUPABASE_MGMT_APIKEY`.

(Resolved: the exact errors from Ashwin are in "Phase 2 corrections and exact errors" above. Still unknown: the output of `npm install` and `npm run build` beyond "0 errors", and the time of the live call.)

### Phase 5: repo tidy (Claude ran these file and git commands at Ashwin's request; nothing pushed)

- Ashwin had already committed `d86988b` at 11:42:27 "Generated TypeScript SDK; offline tests 654/658 pass" (includes `ts/dist/`, `ts/dist-test/`, `ts/package-lock.json`).
- Correction to my earlier advice: I suggested ignoring `dist/` and `dist-test/`. `ts/.gitignore` says the generator commits them on purpose (so a consumer can run the compiled SDK from a clone). I left that as is. Another DX point: that choice is explained in a comment, but a user seeing 100k lines of build output in git may not expect it.
- Copied NOTES.md and AI_USAGE.md from the parent folder into the repo root. The repo copies are now the ones to edit; the parent folder copies are stale.
- Added `.env` and `.env.*` to the root `.gitignore` (it only covered `*.local*` before).
- Safety greps on the staged tree: `git grep` for the Supabase token prefix returned no real matches, and no `.env` file is tracked. (The first grep initially matched only a line in this file that quoted the pattern itself, which was reworded.) Token was never written to any file.
- LICENSE left unchanged for now: MIT, `Copyright (c) 2026 Voxgig`. Ashwin to decide.

### Phase 6: report (Claude drafted at Ashwin's request; Ashwin has not reviewed it yet)

- Claude wrote REPORT.md from this log (commit `47ead7e`, 11:46:53) and filled in its Time section from the git log on Ashwin's instruction (commit `c2c0673`). The report says it was drafted by Claude.
- Time section says: about 42 minutes from scaffold commit to tested SDK (11:00 to 11:42), about 50 from the first failed create run (10:52), over the 30 minute box.
- Commit list (IST): `ec6e063` 11:00:39 scaffold, `ffea78b` 11:12:36 model, `ed56f2a` 11:19:57 target and feature, `d360019` 11:23:58 generated TS SDK, `d86988b` 11:42:27 SDK and tests, `dba6012` 11:45:50 notes and ignore, `47ead7e` 11:46:53 report draft, `c2c0673` report time section.

Open items:
- Ashwin to review REPORT.md for correctness and fill its [TBD] markers (live call time, repo link, what he checked himself).
- Ashwin to fill the "Checked:" lines in AI_USAGE.md for checks he actually did.
- Clock start time not given.
- LICENSE copyright line still says Voxgig. Ashwin to decide.
- Not pushed. Repo creation and push need Ashwin's confirmation.

- Decision by Ashwin: the work went past the 30 minute mark, so the 3 failing tests are deferred for now and noted as such in REPORT.md. He intends to keep working on them after submitting and update the repo when they are fixed (fix in `.sdk/model/` or a template, commit before each regenerate).

### Phase 7: published (Claude ran the push at Ashwin's explicit "yes, publish")

- Before pushing: no token prefix in the tracked tree or git history, no `.env` file tracked, no remote existed, repo name was free, `gh` logged in as X3PH1RE.
- Ran: `gh repo create X3PH1RE/supabase-mgmt-sdk --public --source . --remote origin --push`. Result: https://github.com/X3PH1RE/supabase-mgmt-sdk (public, branch `main`, tracking `origin/main`).
- Repo link then added to REPORT.md.
