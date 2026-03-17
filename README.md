# PopCourt MVP

Mobile-first interactive courtroom drama game for pop culture disputes.

## What this MVP includes

- Home screen with a strong “start court session” CTA
- Case selection screen with 3 seeded playable mock cases
- Role selection for Juror, Judge, Prosecutor, Defense, and Spectator
- Case play flow with swipe-style evidence progression and role-specific interactions
- Verdict reveal with dramatic presentation and confidence meter
- Replay loop to jump into another case or replay as another role

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Local mocked data and simple local state

## Quick start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open:

   ```txt
   http://localhost:3000
   ```

## Scripts

- `npm run dev` — start local dev server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — lint checks
- `npm run typecheck` — TypeScript checks

## Product notes

- All case content is mocked (no live APIs)
- Verdict logic is intentionally lightweight and theatrical for replayability
- The app is optimized for quick mobile play sessions

## Roadmap (next phase)

- TODO: Add live rooms for real-time multi-user case sessions
- TODO: Add creator tools so users can submit their own cases
- TODO: Add player profiles and saved verdict history
- TODO: Add ranking/leaderboards for top advocates and judges
- TODO: Add case-of-the-day rotation and streak mechanics

