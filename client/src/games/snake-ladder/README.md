# Game 2 — Snake & Ladder (Frontend)

**Team 2 — Members: TBD, TBD**

Full spec is in `server/src/games/snake-ladder/README.md`.

## Expected File Structure

```
client/src/games/snake-ladder/
├── SnakeLadderPage.tsx        ← replace placeholder
├── SnakeLadderBoard.tsx       ← NxN visual board with snake/ladder overlays
├── BoardSizeInput.tsx         ← size selector (6–12)
├── AnswerChoices.tsx          ← 3-choice radio selection
├── AlgorithmTimingPanel.tsx   ← timing comparison
├── GameResult.tsx             ← win / lose / draw display
├── PlayerNameInput.tsx        ← name entry modal
├── snakeLadder.api.ts         ← axios calls to /api/games/snake-ladder
├── snakeLadder.types.ts       ← TypeScript types for this game
└── __tests__/
    └── SnakeLadderPage.test.tsx
```

## API Calls

```ts
// POST /api/games/snake-ladder/rounds    body: { playerName, boardSize }
// POST /api/games/snake-ladder/rounds/:id/answer
```

## Shared Frontend Utilities

```ts
import { formatMs } from '../../utils/formatTime';
// Accent color for this game: #10b981
```
