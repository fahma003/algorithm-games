# Game 3 — Traffic Simulation (Maximum Flow)

**Team 3 — Members: TBD, TBD**

## Overview

Model a 9-node directed traffic network (source A → sink T) with random edge capacities. Compute the maximum vehicle flow using two algorithms, then ask the player to guess from three choices.

- **Topology**: Fixed — 9 nodes (A, B, C, D, E, F, G, H, T) with 13 directed edges
- **Capacities**: Random 5–15 per edge per round

## Fixed Graph Topology

```
A → B, A → C, A → D
B → E, B → F
C → E, C → G
D → F, D → G
E → H, F → H
G → T, H → T
```
(Adjust edges as needed to make an interesting max-flow problem — this is a suggested layout.)

## Algorithms to Implement

| Algorithm | File | Complexity |
|-----------|------|-----------|
| Edmonds-Karp | `algorithms/edmondsKarp.ts` | O(VE²) — Ford-Fulkerson with BFS augmenting paths |
| Dinic's | `algorithms/dinic.ts` | O(V²E) — level graph (BFS) + blocking flow (DFS) |

Both receive the graph with capacities and return `{ maxFlow: number }`.

## Expected File Structure

```
server/src/games/traffic/
├── algorithms/
│   ├── edmondsKarp.ts
│   └── dinic.ts
├── traffic.controller.ts
├── traffic.service.ts
├── traffic.routes.ts       ← stub already here, replace routes
└── __tests__/
    ├── edmondsKarp.test.ts
    ├── dinic.test.ts
    └── traffic.service.test.ts
```

## API Contract

Mounted at `/api/games/traffic`.

```
POST /api/games/traffic/rounds
  Body: { playerName: string }
  Response: {
    roundId: number,
    nodes: string[],          // ['A','B','C','D','E','F','G','H','T']
    edges: { from: string, to: string, capacity: number }[],
    choices: [number, number, number]
  }

POST /api/games/traffic/rounds/:id/answer
  Body: { playerName: string, answer: number }
  Response: {
    correct: boolean,
    correctAnswer: number,
    timings: [
      { algorithmName: 'Edmonds-Karp', executionTimeMs: number },
      { algorithmName: "Dinic's", executionTimeMs: number }
    ]
  }
```

## Database Tables Used

- `players`, `game_rounds` (`game_type = 'traffic'`), `game_results`, `algorithm_timings`
- Use shared model helpers (see `server/src/shared/models/`)

## Shared Utilities Available

```ts
import { randomInt, makeChoices } from '../../shared/utils/random.js';
import { timeExecution } from '../../shared/utils/timer.js';
```

## Correctness Check

- Edmonds-Karp and Dinic's must return the same `maxFlow` (both are exact).
- Test with a small hand-solvable graph where you can verify max-flow manually.
- For timing comparison, Dinic's should be noticeably faster on dense graphs.
