# Team Assignments — PDSA Games (BSc Hons Computing 25.2)

10 members, 5 teams of 2. Each team owns one game end-to-end (server algorithms + API + client UI).

| # | Game | Algorithm 1 | Algorithm 2 | Team | Member 1 | Member 2 |
|---|------|-------------|-------------|------|----------|----------|
| 1 | Minimum Cost | Hungarian O(n³) | Greedy Assignment | Team 1 | Thenula | Imandi |
| 2 | Snake & Ladder | BFS | Dijkstra | Team 2 | Janindu | Hansi |
| 3 | Traffic Simulation | Edmonds-Karp | Dinic's | Team 3 | Udara | Nadun |
| 4 | Knight's Tour | Warnsdorff's | Backtracking | Team 4 | Fahma | Dilki |
| 5 | Sixteen Queens | Sequential | Threaded (Workers) | Team 5 | Dhananga | Amandi |

## Your folders

Each team works exclusively in their game's two folders:

```
server/src/games/<your-game>/   ← server logic, algorithms, API routes
client/src/games/<your-game>/   ← React UI components, API calls, types
```

The rest of the codebase is **shared** — do not modify files outside your game folders without coordinating with the group.

## Shared infrastructure (read-only for game teams)

| Path | Purpose |
|------|---------|
| `server/src/shared/models/` | DB helpers for players, rounds, results, timings |
| `server/src/shared/utils/timer.ts` | `timeExecution()` wrapper |
| `server/src/shared/utils/random.ts` | `randomInt()`, `makeChoices()` |
| `server/src/shared/middleware/` | Error handler, request validation |
| `server/src/db/` | SQLite singleton + schema (auto-migrates on startup) |
| `client/src/utils/formatTime.ts` | `formatMs()`, `formatNumber()` |
| `client/src/pages/HomePage.tsx` | Shared home page |
| `client/src/App.tsx` | Router + Navbar |

## Getting started

1. Fill in your names in the table above and in your game's `README.md` files.
2. Read your server `README.md` for the full algorithm spec and API contract.
3. Read your client `README.md` for the expected file structure and UI notes.
4. Replace the placeholder page (`<GameName>Page.tsx`) with your real implementation.
5. Replace the stub routes file (`<game>.routes.ts`) with real controller + service wiring.
6. Run `npm run dev` from the repo root to start both servers.
