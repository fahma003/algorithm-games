# Game 5 — Sixteen Queens (N-Queens Puzzle)

**Team 5 — Members: TBD, TBD**

## Overview

Place 16 queens on a 16×16 board so no two queens threaten each other. The server runs two solvers (sequential and multi-threaded) and times them. The player places queens on the board and submits their solution, which is checked and stored.

- **Board**: 16×16 (fixed)
- **Total solutions**: 14,772,512 for 16-Queens
- **Solution recognition**: Each submitted solution is hashed. If a player submits a solution already found by another player, they are told it's "recognised". When all solutions have been found, the pool resets.

## Algorithms to Implement

| Algorithm | File | Notes |
|-----------|------|-------|
| Sequential | `algorithms/sequential.ts` | Single-threaded backtracking. One queen per row; track columns + diagonals with sets. |
| Threaded | `algorithms/threaded.ts` | Distribute first-row placements across `worker_threads` (Node.js). Each worker runs the same backtracking for its assigned first-row column. |

Sequential receives `{ n: 16 }` and returns `{ solutionCount: number, executionTimeMs: number }`.  
Threaded returns the same shape using parallelism.

Worker file: `workers/queensSolverWorker.ts`

## Expected File Structure

```
server/src/games/queens/
├── algorithms/
│   ├── sequential.ts
│   └── threaded.ts
├── workers/
│   └── queensSolverWorker.ts
├── queens.controller.ts
├── queens.service.ts          ← recognition logic here
├── queens.model.ts            ← queens_solutions table access
├── queens.routes.ts           ← stub already here, replace routes
└── __tests__/
    ├── sequential.test.ts
    ├── threaded.test.ts
    └── queens.service.test.ts
```

## API Contract

Mounted at `/api/games/queens`.

```
POST /api/games/queens/solve
  Body: { playerName: string }
  Response: {
    sessionId: string   // use to poll status
  }

GET /api/games/queens/solve/status?sessionId=<id>
  Response: {
    done: boolean,
    timings?: [
      { algorithmName: 'Sequential', executionTimeMs: number, solutionCount: number },
      { algorithmName: 'Threaded', executionTimeMs: number, solutionCount: number }
    ]
  }

POST /api/games/queens/submit-solution
  Body: { playerName: string, queens: number[] }  // queens[row] = col (0-indexed, 16 entries)
  Response: {
    valid: boolean,
    recognised: boolean,    // true if another player already found this exact solution
    message: string
  }

GET /api/games/queens/stats
  Response: {
    totalSolutions: 14772512,
    foundSolutions: number,
    remainingPercent: number
  }
```

## Database Tables Used

- `players`, `game_rounds` (`game_type = 'queens'`), `game_results`, `algorithm_timings`
- **`queens_solutions`** (per-game table — already in the shared schema):
  - `solution_hash TEXT UNIQUE` — SHA or join of column indices
  - `solution_json TEXT` — JSON array of queen positions
  - `found_by_player_id INTEGER`
  - `is_recognized INTEGER`
- Use `queens.model.ts` to encapsulate all access to `queens_solutions`

## Shared Utilities Available

```ts
import { timeExecutionAsync } from '../../shared/utils/timer.js';
import { createError } from '../../shared/middleware/errorHandler.js';
```

## Correctness Check

- Validate sequential against the known result: 8-Queens = 92 solutions, 16-Queens = 14,772,512.
- Threaded must produce the same count as sequential.
- A valid 16-queens placement: no two queens share a row, column, or diagonal.
- Solution hash: `queens.join(',')` (the array of 16 column indices, 0-based) is a simple unique key.
