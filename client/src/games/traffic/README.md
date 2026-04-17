# Game 3 — Traffic Simulation (Frontend)

**Team 3 — Members: TBD, TBD**

Full spec is in `server/src/games/traffic/README.md`.

## Expected File Structure

```
client/src/games/traffic/
├── TrafficSimPage.tsx         ← replace placeholder
├── TrafficGraph.tsx           ← SVG directed graph with labeled capacity arrows
├── AnswerChoices.tsx          ← 3-choice radio selection
├── AlgorithmTimingPanel.tsx   ← timing comparison
├── GameResult.tsx             ← win / lose display
├── PlayerNameInput.tsx        ← name entry modal
├── traffic.api.ts             ← axios calls to /api/games/traffic
├── traffic.types.ts           ← TypeScript types for this game
└── __tests__/
    └── TrafficSimPage.test.tsx
```

## API Calls

```ts
// POST /api/games/traffic/rounds
// POST /api/games/traffic/rounds/:id/answer
```

## Shared Frontend Utilities

```ts
import { formatMs } from '../../utils/formatTime';
// Accent color for this game: #38bdf8
```

## UI Notes

- `TrafficGraph.tsx` should render an SVG with node circles, directed arrows, and capacity labels on each edge.
- Layered layout suggestion: A (source) on the left, T (sink) on the right, intermediate nodes in columns.
