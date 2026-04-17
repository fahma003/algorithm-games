import { getDb } from '../../db/database.js';

export interface Player {
  id: number;
  name: string;
  created_at: string;
}

export function findOrCreatePlayer(name: string): Player {
  const db = getDb();
  const existing = db
    .prepare('SELECT * FROM players WHERE name = ?')
    .get(name) as Player | undefined;
  if (existing) return existing;
  const result = db.prepare('INSERT INTO players (name) VALUES (?)').run(name);
  return db
    .prepare('SELECT * FROM players WHERE id = ?')
    .get(result.lastInsertRowid) as Player;
}

export function getPlayerById(id: number): Player | undefined {
  return getDb()
    .prepare('SELECT * FROM players WHERE id = ?')
    .get(id) as Player | undefined;
}
