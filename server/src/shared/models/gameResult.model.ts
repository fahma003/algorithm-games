import { getDb } from '../../db/database.js';
import type { GameType } from './gameRound.model.js';

export interface GameResult {
  id: number;
  game_round_id: number;
  player_id: number;
  player_answer: string;
  correct_answer: string;
  is_correct: number;
  game_type: GameType;
  created_at: string;
}

export function saveGameResult(
  gameRoundId: number,
  playerId: number,
  playerAnswer: string,
  correctAnswer: string,
  isCorrect: boolean,
  gameType: GameType
): GameResult {
  const db = getDb();
  const result = db
    .prepare(
      `INSERT INTO game_results
       (game_round_id, player_id, player_answer, correct_answer, is_correct, game_type)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .run(gameRoundId, playerId, playerAnswer, correctAnswer, isCorrect ? 1 : 0, gameType);
  return db
    .prepare('SELECT * FROM game_results WHERE id = ?')
    .get(result.lastInsertRowid) as GameResult;
}
