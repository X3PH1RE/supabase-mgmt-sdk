# AI_USAGE

Who did what. Ashwin chose the API, runs the generator commands and judges the output. Claude (Claude Code) documents and explains, and drafts files only when asked.

Each entry: what was asked, what was produced, how it was checked. The "Checked" line is only filled in by Ashwin for checks he actually did.

## Entries

### 1. Session setup
- Asked: (handoff brief given to Claude Code to set up the notes files and act as documenter)
- Produced: empty NOTES.md and AI_USAGE.md templates by Claude
- Checked: n/a, only empty templates were created.

### 2. Phase 1 log
- Asked: Claude to document Ashwin's phase 1 terminal output, including the `spawn npm ENOENT` error.
- Produced: NOTES.md entry by Claude, plus an explanation of the error. The Windows `npm.cmd` cause is Claude's guess and has not been confirmed.
- Ashwin did: ran all three commands and the manual `npm install` workaround himself.
- Checked: Ashwin ran the commands himself in his own terminal and pasted the real output, which NOTES.md quotes. The Windows `npm.cmd` explanation for `spawn npm ENOENT` was NOT checked by anyone, it is still a guess.

### 3. Reconstructing the log from history and git
- Asked: Claude to go through terminal history and git and summarise what Ashwin did and fixed.
- Produced: "Phase 2" section in NOTES.md. Claude only read `ConsoleHost_history.txt` and git (log, stat, diff). It did not run the generator or any build. History has commands but no output, so the causes of the errors are Claude's inferences and are marked "inferred".
- (Later steps, see entry 4 for the live call.)
- Ashwin did: all the commands, the `./` include edits in `.sdk/model/sdk.aontu`, target-index and feature-index, the `add-target` and `add-feature` runs, and the commits.
- Checked: Ashwin compared the summary with his own terminal output and corrected it: he pasted the exact create-sdkgen, `aontu/multisource_not_found` and `voxgig-model` errors, and said the only create run he remembers was his own. Causes in the summary stay marked "inferred".

### 4. Live read-only call and test failures
- Asked: Claude to read the generated README and work out a safe first live call, and to log the 3 failing mock tests.
- Produced: the one-line `node -e` command (GET /v1/projects via `V1ProjectWithDatabaseResponseOutput().list()`) and the NOTES.md entries. The cause of the 3 failing tests is Claude's reading of the generated test file and is unverified.
- Ashwin did: set the token in his own shell, ran the command, and got `1 projects [ 'portfolio' ]`. Claude never saw the token.
- Checked: Ashwin ran the live command himself and saw the real result (`1 projects [ 'portfolio' ]`). The 3 test failures were seen in his own test run; Claude's explanation of why they fail was NOT checked or fixed.

### 5. Repo tidy and REPORT.md draft
- Asked: Claude to do the repo tidy steps (copy notes, ignore .env, token and .env greps, commit) and to write REPORT.md.
- Produced: commit `dba6012` and a full REPORT.md draft written by Claude from NOTES.md. Claude did not push anything. The Time section was later filled from the git log at Ashwin's instruction.
- Ashwin did: asked for the work, and will review the report for correctness before sending.
- Checked: Ashwin read the whole of REPORT.md and says it is correct. He confirmed the git commit times in the Time section. He did not re-verify Claude's guessed causes (npm error, `./` fix, the 3 test failures), which the report marks as unverified.
