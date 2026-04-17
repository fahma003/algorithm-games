# Game 4 — Knight's Tour (Hamiltonian Path)

**Team 4 — Members: TBD, TBD**

## Overview

A knight starts at a random position and must visit every square on the board exactly once. The server computes a valid tour using two algorithms and reveals it after the player submits their attempt.

- **Board**: 8x8 or 16x16 — player selects at game start
- **Start position**: Random square each round
- **Player interaction**: Player clicks cells on an interactive board to enter their tour sequence, then submits

## Algorithms to Implement

| Algorithm | File | Notes |
|-----------|------|-------|
| Warnsdorff's | `algorithms/warnsdorff.ts` | **Iterative** (non-recursive). Move to the neighbour with fewest onward moves. O(n²) |
| Backtracking | `algorithms/backtracking.ts` | **Recursive**. Try all 8 moves, backtrack on dead-end. For 16x16, use Warnsdorff ordering within backtracking + 30s timeout |

Both receive `{ boardSize, startRow, startCol }` and return `{ tour: [row, col][] }` (array of 64 or 256 positions).

## Expected File Structure

```
server/src/games/knights-tour/
├── algorithms/
│   ├── warnsdorff.ts
│   └── backtracking.ts
├── knightsTour.controller.ts
├── knightsTour.service.ts
├── knightsTour.routes.ts      ← stub already here, replace routes
└── __tests__/
    ├── warnsdorff.test.ts
    ├── backtracking.test.ts
    └── knightsTour.service.test.ts
```

## API Contract

Mounted at `/api/games/knights-tour`.

```
POST /api/games/knights-tour/rounds
  Body: { playerName: string, boardSize: 8 | 16 }
  Response: {
    roundId: number,
    boardSize: number,
    startRow: number,
    startCol: number
  }

GET /api/games/knights-tour/rounds/:id/solution
  Response: {
    tour: { row: number, col: number }[],
    timings: [
      { algorithmName: "Warnsdorff's", executionTimeMs: number },
      { algorithmName: 'Backtracking', executionTimeMs: number }
    ]
  }

POST /api/games/knights-tour/rounds/:id/answer
  Body: { playerName: string, moves: { row: number, col: number }[] }
  Response: {
    correct: boolean,
    correctTour: { row: number, col: number }[]
  }
```

## Database Tables Used

- `players`, `game_rounds` (`game_type = 'knights_tour'`), `game_results`, `algorithm_timings`
- Use shared model helpers (see `server/src/shared/models/`)

## Shared Utilities Available

```ts
import { randomInt } from '../../shared/utils/random.js';
import { timeExecution } from '../../shared/utils/timer.js';
```

## Correctness Check

- A valid tour visits all 64 (or 256) squares exactly once with legal knight moves.
- Warnsdorff's is near-instant; backtracking on 8x8 is fast, on 16x16 may need the Warnsdorff ordering + timeout.
- Validate submitted player tours: check every cell visited, every move is a valid knight move.
