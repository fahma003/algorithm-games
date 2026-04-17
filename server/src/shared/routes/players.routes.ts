import { Router } from 'express';
import { findOrCreatePlayer } from '../models/player.model.js';
import { createError } from '../middleware/errorHandler.js';

const router = Router();

router.post('/', (req, res, next) => {
  try {
    const { name } = req.body as { name: string };
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      throw createError('Player name is required', 400);
    }
    const player = findOrCreatePlayer(name.trim());
    res.json(player);
  } catch (err) {
    next(err);
  }
});

export default router;
