-- PDSA Games Database DDL

CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS game_rounds (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_type TEXT NOT NULL CHECK (game_type IN (
        'minimum_cost', 'snake_ladder', 'traffic', 'knights_tour', 'queens'
    )),
    round_data_json TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS game_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_round_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    player_answer TEXT NOT NULL,
    correct_answer TEXT NOT NULL,
    is_correct INTEGER NOT NULL DEFAULT 0,
    game_type TEXT NOT NULL CHECK (game_type IN (
        'minimum_cost', 'snake_ladder', 'traffic', 'knights_tour', 'queens'
    )),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (game_round_id) REFERENCES game_rounds(id),
    FOREIGN KEY (player_id) REFERENCES players(id)
);

CREATE TABLE IF NOT EXISTS algorithm_timings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    game_round_id INTEGER NOT NULL,
    algorithm_name TEXT NOT NULL,
    execution_time_ms REAL NOT NULL,
    result TEXT NOT NULL,
    game_type TEXT NOT NULL CHECK (game_type IN (
        'minimum_cost', 'snake_ladder', 'traffic', 'knights_tour', 'queens'
    )),
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (game_round_id) REFERENCES game_rounds(id)
);

CREATE TABLE IF NOT EXISTS queens_solutions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    solution_hash TEXT NOT NULL UNIQUE,
    solution_json TEXT NOT NULL,
    found_by_player_id INTEGER,
    is_recognized INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (found_by_player_id) REFERENCES players(id)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_game_results_round ON game_results(game_round_id);
CREATE INDEX IF NOT EXISTS idx_game_results_player ON game_results(player_id);
CREATE INDEX IF NOT EXISTS idx_game_results_type ON game_results(game_type);
CREATE INDEX IF NOT EXISTS idx_algorithm_timings_round ON algorithm_timings(game_round_id);
CREATE INDEX IF NOT EXISTS idx_algorithm_timings_type ON algorithm_timings(game_type);
CREATE INDEX IF NOT EXISTS idx_queens_solutions_hash ON queens_solutions(solution_hash);
CREATE INDEX IF NOT EXISTS idx_queens_solutions_recognized ON queens_solutions(is_recognized);
