# AGENTS.md

## Project
PopCourt is a mobile-first interactive courtroom drama game for pop culture disputes.
The product tone is: fast, funny, dramatic, social, legible, and lightly campy.

## Core product thesis
The MVP should prove that a user can enter a case, take on a role, review swipeable evidence, make a decision, and receive a satisfying verdict in under 2 minutes.

## Product rules
- Prioritize delight, clarity, and replayability over completeness.
- Optimize for mobile screens first.
- Keep copy short, witty, and immediately understandable.
- Every screen must have one obvious primary action.
- The UI should feel like pop culture gossip meets legal spectacle.
- Avoid corporate SaaS dashboard aesthetics.
- Avoid clutter, long explanations, and tiny tap targets.

## MVP scope
Build only this:
1. Home screen
2. Case selection screen with 3 seeded cases
3. Role selection screen
4. Case play screen with swipeable evidence/argument cards
5. Interaction state by role
6. Verdict screen
7. Lightweight replay loop

## Roles
Support these roles in MVP:
- Juror
- Judge
- Prosecutor
- Defense
- Spectator

Role behavior can be simplified:
- Juror: vote between 2 outcomes
- Judge: choose final ruling from 2–3 options
- Prosecutor: submit a short argument or choose from drafted arguments
- Defense: submit a short argument or choose from drafted arguments
- Spectator: react and predict winner

## Sample cases
Seed at least 3 playable sample cases using mocked data.
Cases should be funny, recognizable, and not dependent on live APIs.
Keep the cases generic enough to avoid legal or moderation complexity.

## Technical stack
Use:
- Next.js
- React
- TypeScript
- Tailwind CSS
- local mocked data
- simple local state only unless a small library is clearly necessary

## Out of scope
Do not build:
- auth
- real-time multiplayer
- payments
- notifications
- creator tools
- profile systems
- moderation systems
- admin dashboards
- backend infra beyond what is minimally necessary
- video upload or recording

## Architecture expectations
- Keep components modular and reusable.
- Separate sample data from presentation components.
- Use a clean, readable file structure.
- Prefer composition over clever abstractions.
- Add TODO comments for future phases.

## UX expectations
- Strong hierarchy on every screen
- Distinct visual treatment for each role
- Satisfying verdict reveal
- Clear “next case” path
- Thumb-friendly controls
- Smooth transitions where easy to add

## Quality bar
Done means:
- the app runs locally without confusion
- a user can click through the full loop end to end
- there are at least 3 seeded cases
- roles have visibly different interactions
- the verdict screen feels dramatic and shareable
- the codebase is clean enough for a second iteration


## Workflow
Before coding:
1. inspect the repo
2. propose a concise implementation plan
3. then scaffold and implement

After coding:
1. verify the app runs
2. check for TypeScript errors
3. check for obvious mobile UX issues
4. update README with run instructions and next-step roadmap

## Verification rules
Before finishing, always run the app locally when possible and verify:
- npm run build
- npm run typecheck
- npm run lint (if configured)
If a verification step fails, explain why and either fix it or state exactly what remains.
