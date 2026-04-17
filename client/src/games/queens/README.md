# Game 5 — Sixteen Queens (Frontend)

**Team 5 — Members: TBD, TBD**

Full spec is in `server/src/games/queens/README.md`.

## Expected File Structure

```
client/src/games/queens/
├── QueensPuzzlePage.tsx       ← replace placeholder
├── QueensBoard.tsx            ← 16x16 clickable board; click to toggle queen
├── ConflictHighlight.tsx      ← real-time conflict indicators on invalid cells
├── SolverStatus.tsx           ← shows Sequential vs Threaded timing progress
├── AlgorithmTimingPanel.tsx   ← timing comparison after solvers finish
├── GameResult.tsx             ← result + recognition message
├── PlayerNameInput.tsx        ← name entry modal
├── queens.api.ts              ← axios calls to /api/games/queens
├── queens.types.ts            ← TypeScript types for this game
└── __tests__/
    └── QueensPuzzlePage.test.tsx
```

## API Calls

```ts
// POST /api/games/queens/solve              body: { playerName }
// GET  /api/games/queens/solve/status?sessionId=<id>
// POST /api/games/queens/submit-solution    body: { playerName, queens: number[] }
// GET  /api/games/queens/stats
```

## Shared Frontend Utilities

```ts
import { formatMs } from '../../utils/formatTime';
// Accent color for this game: #fb7185
```

## UI Notes

- Board is always 16×16; exactly one queen allowed per row (enforce in UI).
- `ConflictHighlight.tsx` highlights cells in real time where two queens conflict.
- `SolverStatus.tsx` polls `/solve/status` until `done: true`, then shows the timing comparison.
- After player submits, show whether the solution is valid and whether it was already "recognised" by another player.
