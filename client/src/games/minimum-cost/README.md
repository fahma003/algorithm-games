# Game 1 — Minimum Cost (Frontend)

**Team 1 — Members: TBD, TBD**

Full spec is in `server/src/games/minimum-cost/README.md`.

## Expected File Structure

```
client/src/games/minimum-cost/
├── MinimumCostPage.tsx        ← replace placeholder
├── CostMatrix.tsx             ← NxN cost matrix table display
├── AnswerChoices.tsx          ← 3-choice radio selection
├── AlgorithmTimingPanel.tsx   ← timing comparison bar chart / table
├── GameResult.tsx             ← win / lose display
├── PlayerNameInput.tsx        ← name entry modal
├── minimumCost.api.ts         ← axios calls to /api/games/minimum-cost
├── minimumCost.types.ts       ← TypeScript types for this game
└── __tests__/
    └── MinimumCostPage.test.tsx
```

## API Calls

```ts
// POST /api/games/minimum-cost/rounds
// POST /api/games/minimum-cost/rounds/:id/answer
```

See `minimumCost.api.ts` — create this file with `axios` calls.

## Shared Frontend Utilities

```ts
import { formatMs } from '../../utils/formatTime';
// CSS custom properties: var(--surface), var(--border), var(--heading), var(--muted)
// Accent color for this game: #f59e0b
```
