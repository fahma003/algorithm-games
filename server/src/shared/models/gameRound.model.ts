import { getDb } from '../../db/database.js';

export type GameType = 'minimum_cost' | 'snake_ladder' | 'traffic' | 'knights_tour' | 'queens';

export interface GameRound {
  id: number;
  game_type: GameType;
  round_data_json: string;
  correct_answer: string;
  created_at: string;
}

export function createGameRound(
  gameType: GameType,
  roundData: object,
  correctAnswer: string
): GameRound {
  const db = getDb();
  const result = db
    .prepare(
      'INSERT INTO game_rounds (game_type, round_data_json, correct_answer) VALUES (?, ?, ?)'
    )
    .run(gameType, JSON.stringify(roundData), correctAnswer);
  return db
    .prepare('SELECT * FROM game_rounds WHERE id = ?')
    .get(result.lastInsertRowid) as GameRound;
}

export function getGameRoundById(id: number): GameRound | undefined {
  return getDb()
    .prepare('SELECT * FROM game_rounds WHERE id = ?')
    .get(id) as GameRound | undefined;
}
