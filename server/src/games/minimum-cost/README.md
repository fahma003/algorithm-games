# Game 1 — Minimum Cost (Task Assignment)

**Team 1 — Members: TBD, TBD**

## Overview

Assign N tasks to N workers minimising total cost using two different algorithms, then ask the player to guess the minimum cost from three choices.

- **N**: random 50–100 per round
- **Cost matrix**: NxN, each cell random $20–$200
- **Player answer**: 3-choice selection (correct answer + 2 distractors at ±5–15%)

## Algorithms to Implement

| Algorithm | File | Complexity |
|-----------|------|-----------|
| Hungarian | `algorithms/hungarian.ts` | O(n³) — optimal |
| Greedy Assignment | `algorithms/greedyAssignment.ts` | O(n² log n) — heuristic |

Both algorithms receive the cost matrix and return `{ totalCost: number }`.

## Expected File Structure

```
server/src/games/minimum-cost/
├── algorithms/
│   ├── hungarian.ts
│   └── greedyAssignment.ts
├── minimumCost.controller.ts
├── minimumCost.service.ts
├── minimumCost.routes.ts       ← stub already here, replace routes
└── __tests__/
    ├── hungarian.test.ts
    ├── greedyAssignment.test.ts
    └── minimumCost.service.test.ts
```

## API Contract

The server mounts this router at `/api/games/minimum-cost`.

```
POST /api/games/minimum-cost/rounds
  Body: { playerName: string }
  Response: {
    roundId: number,
    costMatrix: number[][],    // NxN
    choices: [number, number, number]
  }

POST /api/games/minimum-cost/rounds/:id/answer
  Body: { playerName: string, answer: number }
  Response: {
    correct: boolean,
    correctAnswer: number,
    timings: [
      { algorithmName: 'Hungarian', executionTimeMs: number },
      { algorithmName: 'Greedy', executionTimeMs: number }
    ]
  }
```

## Database Tables Used

- `players` — find or create by name (use `findOrCreatePlayer` from `shared/models/player.model.ts`)
- `game_rounds` — store round data (use `createGameRound` from `shared/models/gameRound.model.ts`, `game_type = 'minimum_cost'`)
- `game_results` — record player answer (use `saveGameResult` from `shared/models/gameResult.model.ts`)
- `algorithm_timings` — record both algorithm timings (use `saveAlgorithmTiming` from `shared/models/algorithmTiming.model.ts`)

## Shared Utilities Available

```ts
import { randomInt, makeChoices } from '../../shared/utils/random.js';
import { timeExecution } from '../../shared/utils/timer.js';
import { createError } from '../../shared/middleware/errorHandler.js';
import { validateBody } from '../../shared/middleware/validation.js';
```

## Correctness Check

- Hungarian and Greedy should both produce a valid assignment cost.
- Hungarian is always optimal; Greedy is a heuristic (may differ).
- Use the Hungarian result as the `correct_answer`.
- Test with small matrices (N=3, N=4) where you can verify by hand.
