# Game 4 — Knight's Tour (Frontend)

**Team 4 — Members: TBD, TBD**

Full spec is in `server/src/games/knights-tour/README.md`.

## Expected File Structure

```
client/src/games/knights-tour/
├── KnightsTourPage.tsx        ← replace placeholder
├── ChessBoard.tsx             ← interactive clickable board (8x8 or 16x16)
├── KnightPath.tsx             ← move number overlay on visited squares
├── MoveControls.tsx           ← Undo / Clear / Submit buttons
├── BoardSizeSelector.tsx      ← 8x8 or 16x16 choice
├── AlgorithmTimingPanel.tsx   ← timing comparison
├── GameResult.tsx             ← win / lose display + solution reveal
├── PlayerNameInput.tsx        ← name entry modal
├── knightsTour.api.ts         ← axios calls to /api/games/knights-tour
├── knightsTour.types.ts       ← TypeScript types for this game
└── __tests__/
    └── KnightsTourPage.test.tsx
```

## API Calls

```ts
// POST /api/games/knights-tour/rounds      body: { playerName, boardSize: 8 | 16 }
// GET  /api/games/knights-tour/rounds/:id/solution
// POST /api/games/knights-tour/rounds/:id/answer   body: { playerName, moves: {row,col}[] }
```

## Shared Frontend Utilities

```ts
import { formatMs } from '../../utils/formatTime';
// Accent color for this game: #a855f7
```

## UI Notes

- Player clicks cells in sequence to build their tour. Each visited cell shows its move number.
- Highlight the starting cell (given by server) in a distinct color.
- Undo removes the last move; Clear resets all moves.
- On submit, fetch the solution and display the computer's tour alongside the player's attempt.
