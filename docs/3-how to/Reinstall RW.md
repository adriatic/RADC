---
    hide_title: true
---

# how to reinstall RW?

### By `realStandal`

My initial contribution is the "delete everything and reinstall" workflow. I know I personally rely upon these steps to fix many "broken" features with the Redwood framework, and have seen many community and core-team members suggesting it or posting it as the resolution to their issue at-hand.

- Delete the following set of files/directories:
  - `./.redwood`
  - `./.yarn/install-state.gz` (RFC - I'm not 100% sure this file is required, it's only applicable to Yarn v3 regardless)
  - `./api/node_modules`
  - `./web/node_modules`
  - `./node_modules`
  - `./yarn.lock`
- Re-install dependencies (`yarn install`)
- Re-generate Redwood types (`yarn rw g types`)
- Re-generate the Prisma client (`yarn rw prisma generate`)