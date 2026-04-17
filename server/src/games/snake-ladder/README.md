# Game 2 — Snake & Ladder (Min Dice Throws)

**Team 2 — Members: TBD, TBD**

## Overview

Generate an NxN Snake & Ladder board with random snakes and ladders. Compute the minimum dice throws to reach the last cell from cell 1 using two graph algorithms, then ask the player to guess from three choices.

- **Board size**: N ∈ [6, 12] — player picks at game start
- **Cells**: numbered 1 to N²
- **Snakes/Ladders**: N–2 each, random non-overlapping positions; board guaranteed solvable

## Algorithms to Implement

| Algorithm | File | Notes |
|-----------|------|-------|
| BFS | `algorithms/bfs.ts` | Graph traversal, each cell connects to cells reachable by dice (1–6) plus snake/ladder redirects |
| Dijkstra | `algorithms/dijkstra.ts` | Min-heap priority queue, all edge weights = 1 |

Both receive the board graph and return `{ minThrows: number }`.

## Expected File Structure

```
server/src/games/snake-ladder/
├── algorithms/
│   ├── bfs.ts
│   └── dijkstra.ts
├── snakeLadder.controller.ts
├── snakeLadder.service.ts     ← board generation + validation here
├── snakeLadder.routes.ts      ← stub already here, replace routes
└── __tests__/
    ├── bfs.test.ts
    ├── dijkstra.test.ts
    └── snakeLadder.service.test.ts
```

## API Contract

Mounted at `/api/games/snake-ladder`.

```
POST /api/games/snake-ladder/rounds
  Body: { playerName: string, boardSize: number }   // boardSize 6–12
  Response: {
    roundId: number,
    boardSize: number,
    snakes: { [from: number]: number },   // head → tail
    ladders: { [from: number]: number },  // bottom → top
    choices: [number, number, number]
  }

POST /api/games/snake-ladder/rounds/:id/answer
  Body: { playerName: string, answer: number }
  Response: {
    correct: boolean,
    correctAnswer: number,
    timings: [
      { algorithmName: 'BFS', executionTimeMs: number },
      { algorithmName: 'Dijkstra', executionTimeMs: number }
    ]
  }
```

## Database Tables Used

- `players`, `game_rounds` (`game_type = 'snake_ladder'`), `game_results`, `algorithm_timings`
- Use shared model helpers (see `server/src/shared/models/`)

## Shared Utilities Available

```ts
import { randomInt, makeChoices } from '../../shared/utils/random.js';
import { timeExecution } from '../../shared/utils/timer.js';
```

## Correctness Check

- BFS and Dijkstra must return the same `minThrows` value (both are exact, not heuristic).
- Validate board: no snake head at cell 1 or N², no ladder bottom at N², no overlapping positions.
- Test with a known small board (e.g., 6x6 with manual positions).
