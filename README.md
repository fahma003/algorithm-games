# PDSA Games

A full-stack web application featuring algorithm-based games built with React (client) and Express + SQLite (server).

**BSc Hons Computing 25.2 — Group Coursework (10 members, 5 teams)**  
See [TEAM.md](TEAM.md) for team assignments. Each team implements one game in their designated folders.

## Games

| # | Game | Team | Algorithms |
|---|------|------|-----------|
| 1 | Minimum Cost | Team 1 | Hungarian, Greedy |
| 2 | Snake & Ladder | Team 2 | BFS, Dijkstra |
| 3 | Traffic Simulation | Team 3 | Edmonds-Karp, Dinic's |
| 4 | Knight's Tour | Team 4 | Warnsdorff's, Backtracking |
| 5 | Sixteen Queens | Team 5 | Sequential, Threaded |

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v8 or higher

## Installation

Install all dependencies from the root of the project:

```bash
npm install
```

## Running the Application

### Development (recommended)

Run both the client and server together with a single command from the project root:

```bash
npm run dev
```

- **Client** (React + Vite): [http://localhost:5173](http://localhost:5173)
- **Server** (Express API): [http://localhost:3001](http://localhost:3001)

### Running Separately

**Server only:**

```bash
npm run dev --workspace=server
```

**Client only:**

```bash
npm run dev --workspace=client
```

## Building for Production

```bash
npm run build
```

Then start the server:

```bash
npm run start --workspace=server
```

## Running Tests

```bash
npm run test
```

## Project Structure

```
pdsa/
├── client/          # React frontend (Vite, Tailwind CSS)
│   └── src/
│       ├── games/   # Game UI components
│       └── pages/
├── server/          # Express backend
│   └── src/
│       ├── games/   # Game logic & API routes
│       └── shared/  # Middleware, shared utilities
├── data/            # SQLite database
└── package.json     # Root workspace config
```
