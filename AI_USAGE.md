# AI_USAGE

Who did what. Ashwin chose the API, runs the generator commands and judges the output. Claude (Claude Code) documents and explains, and drafts files only when asked.

Each entry: what was asked, what was produced, how it was checked. The "Checked" line is only filled in by Ashwin for checks he actually did.

## Entries

### 1. Session setup
- Asked: (handoff brief given to Claude Code to set up the notes files and act as documenter)
- Produced: empty NOTES.md and AI_USAGE.md templates by Claude
- Checked: (Ashwin to fill in)

### 2. Phase 1 log
- Asked: Claude to document Ashwin's phase 1 terminal output, including the `spawn npm ENOENT` error.
- Produced: NOTES.md entry by Claude, plus an explanation of the error. The Windows `npm.cmd` cause is Claude's guess and has not been confirmed.
- Ashwin did: ran all three commands and the manual `npm install` workaround himself.
- Checked: (Ashwin to fill in)

### 3. Reconstructing the log from history and git
- Asked: Claude to go through terminal history and git and summarise what Ashwin did and fixed.
- Produced: "Phase 2" section in NOTES.md. Claude only read `ConsoleHost_history.txt` and git (log, stat, diff). It did not run the generator or any build. History has commands but no output, so the causes of the errors are Claude's inferences and are marked "inferred".
- (Later steps, see entry 4 for the live call.)
- Ashwin did: all the commands, the `./` include edits in `.sdk/model/sdk.aontu`, target-index and feature-index, the `add-target` and `add-feature` runs, and the commits.
- Checked: (Ashwin to fill in)

### 4. Live read-only call and test failures
- Asked: Claude to read the generated README and work out a safe first live call, and to log the 3 failing mock tests.
- Produced: the one-line `node -e` command (GET /v1/projects via `V1ProjectWithDatabaseResponseOutput().list()`) and the NOTES.md entries. The cause of the 3 failing tests is Claude's reading of the generated test file and is unverified.
- Ashwin did: set the token in his own shell, ran the command, and got `1 projects [ 'portfolio' ]`. Claude never saw the token.
- Checked: (Ashwin to fill in)
